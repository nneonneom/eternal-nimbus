#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ApiRequestHandlerStack } from '../../api-request-handler/infrastructure';
import { BatchJobInvokerStack } from '../../batch-job-invoker/infrastructure';
import { BatchJobProcessorStack } from '../../batch-job-processor/infrastructure';
import { BatchJobSchedulerStack } from '../../batch-job-scheduler/infrastructure';

const app = new cdk.App();
new ApiRequestHandlerStack(app, 'BatchJobService-ApiRequestHandlerStack');
new BatchJobInvokerStack(app, 'BatchJobService-BatchJobInvokerStack');
new BatchJobProcessorStack(app, 'BatchJobService-BatchJobProcessorStack');
new BatchJobSchedulerStack(app, 'BatchJobService-BatchJobSchedulerStack');
