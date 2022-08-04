/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  AnalysisServicesServerUpdateParameters,
  AzureAnalysisServices
} from "@azure/arm-analysisservices";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates the current state of the specified Analysis Services server.
 *
 * @summary Updates the current state of the specified Analysis Services server.
 * x-ms-original-file: specification/analysisservices/resource-manager/Microsoft.AnalysisServices/stable/2017-08-01/examples/updateServer.json
 */
async function updateAServer() {
  const subscriptionId = "613192d7-503f-477a-9cfe-4efc3ee2bd60";
  const resourceGroupName = "TestRG";
  const serverName = "azsdktest";
  const serverUpdateParameters: AnalysisServicesServerUpdateParameters = {
    asAdministrators: {
      members: ["azsdktest@microsoft.com", "azsdktest2@microsoft.com"]
    },
    sku: { name: "S1", capacity: 1, tier: "Standard" },
    tags: { testKey: "testValue" }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureAnalysisServices(credential, subscriptionId);
  const result = await client.servers.beginUpdateAndWait(
    resourceGroupName,
    serverName,
    serverUpdateParameters
  );
  console.log(result);
}

updateAServer().catch(console.error);
