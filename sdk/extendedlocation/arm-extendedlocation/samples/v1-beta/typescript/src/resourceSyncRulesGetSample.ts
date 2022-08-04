/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CustomLocationsManagementClient } from "@azure/arm-extendedlocation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the details of the resourceSyncRule with a specified resource group, subscription id Custom Location resource name and Resource Sync Rule name.
 *
 * @summary Gets the details of the resourceSyncRule with a specified resource group, subscription id Custom Location resource name and Resource Sync Rule name.
 * x-ms-original-file: specification/extendedlocation/resource-manager/Microsoft.ExtendedLocation/preview/2021-08-31-preview/examples/ResourceSyncRulesGet.json
 */
async function getCustomLocation() {
  const subscriptionId = "11111111-2222-3333-4444-555555555555";
  const resourceGroupName = "testresourcegroup";
  const resourceName = "customLocation01";
  const childResourceName = "resourceSyncRule01";
  const credential = new DefaultAzureCredential();
  const client = new CustomLocationsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.resourceSyncRules.get(
    resourceGroupName,
    resourceName,
    childResourceName
  );
  console.log(result);
}

getCustomLocation().catch(console.error);
