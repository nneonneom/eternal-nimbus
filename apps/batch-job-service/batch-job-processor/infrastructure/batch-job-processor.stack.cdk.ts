import { Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import * as esbuild from 'esbuild';
import { Construct } from 'constructs';

export class BatchJobProcessorStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Bundle Lambda code with esbuild
    const bundleLambdaCode = esbuild.buildSync({
      entryPoints: [path.join(__dirname, '../src/index.ts')],
      bundle: true,
      minify: true,
      treeShaking: true,
      platform: 'node',
      target: 'node20',
      outfile: path.join(__dirname, '../dist/index.js'),
      external: ['aws-sdk'], // Exclude aws-sdk as it's provided by Lambda environment
    });

    if (bundleLambdaCode.errors.length > 0) {
      throw new Error('Failed to bundle Lambda code with esbuild');
    }

    // Create the Lambda function
    new lambda.Function(this, 'MyLambda', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../dist')),
    });
  }
}
