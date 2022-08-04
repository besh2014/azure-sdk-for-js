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
  MobileNetwork,
  MobileNetworkManagementClient
} from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a mobile network.
 *
 * @summary Creates or updates a mobile network.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-04-01-preview/examples/MobileNetworkCreate.json
 */
async function createMobileNetwork() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const mobileNetworkName = "testMobileNetwork";
  const parameters: MobileNetwork = {
    location: "eastus",
    publicLandMobileNetworkIdentifier: { mcc: "001", mnc: "01" }
  };
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.mobileNetworks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    mobileNetworkName,
    parameters
  );
  console.log(result);
}

createMobileNetwork().catch(console.error);
