#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BatchJobInvokerStack } from './batch-job-invoker.stack.cdk';
import { SharedInfraStack } from '../../infrastructure/src/shared';

const app = new cdk.App();
new SharedInfraStack(app, 'BatchJobService-SharedInfraStack');
new BatchJobInvokerStack(app, 'BatchJobService-BatchJobInvokerStack');
