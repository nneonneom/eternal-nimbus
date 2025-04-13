#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BatchJobRequestHandlerStack } from './batch-job-request-handler.stack.cdk';
import { SharedInfraStack } from '../../infrastructure/src';

const app = new cdk.App();
new SharedInfraStack(app, 'BatchJobService-SharedInfraStack');
new BatchJobRequestHandlerStack(app, 'BatchJobService-BatchJobRequestHandlerStack');
