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
  UnlockDeleteRequest,
  DataProtectionClient
} from "@azure/arm-dataprotection";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to UnlockDelete call for ResourceGuardProxy, executed before one can delete it
 *
 * @summary UnlockDelete call for ResourceGuardProxy, executed before one can delete it
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/stable/2023-11-01/examples/ResourceGuardProxyCRUD/UnlockDeleteResourceGuardProxy.json
 */
async function unlockDeleteResourceGuardProxy() {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] ||
    "5e13b949-1218-4d18-8b99-7e12155ec4f7";
  const resourceGroupName =
    process.env["DATAPROTECTION_RESOURCE_GROUP"] || "SampleResourceGroup";
  const vaultName = "sampleVault";
  const resourceGuardProxyName = "swaggerExample";
  const parameters: UnlockDeleteRequest = {
    resourceGuardOperationRequests: [
      "/subscriptions/f9e67185-f313-4e79-aa71-6458d429369d/resourceGroups/ResourceGuardSecurityAdminRG/providers/Microsoft.DataProtection/resourceGuards/ResourceGuardTestResource/deleteBackupInstanceRequests/default"
    ],
    resourceToBeDeleted:
      "/subscriptions/5e13b949-1218-4d18-8b99-7e12155ec4f7/resourceGroups/SampleResourceGroup/providers/Microsoft.DataProtection/backupVaults/sampleVault/backupInstances/TestBI9779f4de"
  };
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result = await client.dppResourceGuardProxy.unlockDelete(
    resourceGroupName,
    vaultName,
    resourceGuardProxyName,
    parameters
  );
  console.log(result);
}

async function main() {
  unlockDeleteResourceGuardProxy();
}

main().catch(console.error);
