#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LambdaStack } from './lambda-stack.cdk';

const app = new cdk.App();
new LambdaStack(app, 'MyCdkAppStack');