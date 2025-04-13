#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BatchJobSchedulerStack } from './batch-job-scheduler.stack.cdk';
import { SharedInfraStack } from '../../infrastructure/src/shared';

const app = new cdk.App();
new SharedInfraStack(app, 'BatchJobService-SharedInfraStack');
new BatchJobSchedulerStack(app, 'BatchJobService-BatchJobSchedulerStack');
