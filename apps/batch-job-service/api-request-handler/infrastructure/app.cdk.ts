#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ApiRequestHandlerStack } from './api-request-handler.stack.cdk';
import { SharedInfraStack } from '../../infrastructure/src/shared';

const app = new cdk.App();
new SharedInfraStack(app, 'BatchJobService-SharedInfraStack');
new ApiRequestHandlerStack(app, 'BatchJobService-ApiRequestHandlerStack');
