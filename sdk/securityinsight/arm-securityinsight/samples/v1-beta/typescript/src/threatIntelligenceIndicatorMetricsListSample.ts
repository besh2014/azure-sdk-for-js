/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get threat intelligence indicators metrics (Indicators counts by Type, Threat Type, Source).
 *
 * @summary Get threat intelligence indicators metrics (Indicators counts by Type, Threat Type, Source).
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/threatintelligence/CollectThreatIntelligenceMetrics.json
 */
async function getThreatIntelligenceIndicatorsMetrics() {
  const subscriptionId = "bd794837-4d29-4647-9105-6339bfdb4e6a";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.threatIntelligenceIndicatorMetrics.list(
    resourceGroupName,
    workspaceName
  );
  console.log(result);
}

getThreatIntelligenceIndicatorsMetrics().catch(console.error);
