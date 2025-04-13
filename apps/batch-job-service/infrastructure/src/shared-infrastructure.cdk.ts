// cdk/apps/batch-job-service/infrastructure/index.ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

interface BatchJobServiceStackProps extends cdk.StackProps {
  stage: string;
}

export class BatchJobServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: BatchJobServiceStackProps) {
    super(scope, id, props);

  }
}
