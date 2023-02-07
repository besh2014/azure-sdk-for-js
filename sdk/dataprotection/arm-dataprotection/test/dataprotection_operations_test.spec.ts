/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { DataProtectionClient } from "../src/dataProtectionClient";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("DataProtection test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: DataProtectionClient;
  let location: string;
  let resourceGroup: string;
  let vaultName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new DataProtectionClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    vaultName = "swaggerExample"
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("backupVaults create test", async function () {
    const res = await client.backupVaults.beginCreateOrUpdateAndWait(
      resourceGroup,
      vaultName,
      {
        identity: { type: "None" },
        location,
        properties: {
          monitoringSettings: {
            azureMonitorAlertSettings: { alertsForAllJobFailures: "Enabled" }
          },
          storageSettings: [
            { type: "LocallyRedundant", datastoreType: "VaultStore" }
          ]
        },
        tags: { key1: "val1" }
      },
      testPollingOptions);
    assert.equal(res.name, vaultName);
  });

  it("backupVaults get test", async function () {
    const res = await client.backupVaults.get(resourceGroup, vaultName);
    assert.equal(res.name, vaultName);
  });

  it("backupVaults list test", async function () {
    const resArray = new Array();
    for await (let item of client.backupVaults.listInResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("backupVaults delete test", async function () {
    const resArray = new Array();
    const res = await client.backupVaults.delete(resourceGroup, vaultName)
    for await (let item of client.backupVaults.listInResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})
