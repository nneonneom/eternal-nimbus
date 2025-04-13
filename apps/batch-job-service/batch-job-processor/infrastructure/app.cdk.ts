#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BatchJobProcessorStack } from './batch-job-processor.stack.cdk';
import { SharedInfraStack } from '../../infrastructure/src/shared';

const app = new cdk.App();
new SharedInfraStack(app, 'BatchJobService-SharedInfraStack');
new BatchJobProcessorStack(app, 'BatchJobService-BatchJobProcessorStack');
