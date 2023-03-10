/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureMediaServices } = require("@azure/arm-mediaservices");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Deletes a live event.
 *
 * @summary Deletes a live event.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Streaming/stable/2022-08-01/examples/liveevent-delete.json
 */
async function deleteALiveEvent() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "0a6ec948-5a62-437d-b9df-934dc7c1b722";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "mediaresources";
  const accountName = "slitestmedia10";
  const liveEventName = "myLiveEvent1";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.liveEvents.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    liveEventName
  );
  console.log(result);
}

async function main() {
  deleteALiveEvent();
}

main().catch(console.error);
