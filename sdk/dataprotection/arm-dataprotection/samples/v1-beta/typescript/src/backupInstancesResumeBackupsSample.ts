/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DataProtectionClient } from "@azure/arm-dataprotection";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to This operation will resume backups for backup instance
 *
 * @summary This operation will resume backups for backup instance
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/preview/2022-11-01-preview/examples/BackupInstanceOperations/ResumeBackups.json
 */
async function resumeBackups() {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] ||
    "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const resourceGroupName =
    process.env["DATAPROTECTION_RESOURCE_GROUP"] || "testrg";
  const vaultName = "testvault";
  const backupInstanceName = "testbi";
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result = await client.backupInstances.beginResumeBackupsAndWait(
    resourceGroupName,
    vaultName,
    backupInstanceName
  );
  console.log(result);
}

async function main() {
  resumeBackups();
}

main().catch(console.error);
