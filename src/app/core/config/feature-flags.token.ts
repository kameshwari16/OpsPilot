import { inject, InjectionToken } from "@angular/core";
import {API_CONFIG} from './api-config.token'
export interface FeatureFlags {
  approvalsEnabled: boolean;
  analyticsEnabled: boolean;
  auditEnabled: boolean;
}

function createFeatureFlags():FeatureFlags{
    const config=inject(API_CONFIG);
    if(config.environment==='development'){
        return {
            approvalsEnabled: true,
            analyticsEnabled: true,
            auditEnabled: true
        };
    }

    return {
        approvalsEnabled: true,
        analyticsEnabled: true,
        auditEnabled: false
    }
}

export const FEATURE_FLAGS=new InjectionToken<FeatureFlags>('FEATURE_FLAGS',{factory:createFeatureFlags});