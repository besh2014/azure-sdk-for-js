/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates an existing quota counter value in the specified service instance.
 *
 * @summary Updates an existing quota counter value in the specified service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementUpdateQuotaCounterKeyByQuotaPeriod.json
 */
async function apiManagementUpdateQuotaCounterKeyByQuotaPeriod() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const quotaCounterKey = "ba";
  const quotaPeriodKey = "0_P3Y6M4DT12H30M5S";
  const parameters = {
    callsCount: 0,
    kbTransferred: 0,
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.quotaByPeriodKeys.update(
    resourceGroupName,
    serviceName,
    quotaCounterKey,
    quotaPeriodKey,
    parameters
  );
  console.log(result);
}

apiManagementUpdateQuotaCounterKeyByQuotaPeriod().catch(console.error);
