#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BatchJobServiceStack } from './shared-infrastructure.cdk';

const app = new cdk.App();
new BatchJobServiceStack(app, 'BatchJobServiceSharedInfraStack', {
  stage: ""
});