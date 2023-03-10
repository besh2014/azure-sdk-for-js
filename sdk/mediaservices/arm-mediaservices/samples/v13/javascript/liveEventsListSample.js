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
 * This sample demonstrates how to Lists all the live events in the account.
 *
 * @summary Lists all the live events in the account.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Streaming/stable/2022-08-01/examples/liveevent-list-all.json
 */
async function listAllLiveEvents() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "0a6ec948-5a62-437d-b9df-934dc7c1b722";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "mediaresources";
  const accountName = "slitestmedia10";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.liveEvents.list(resourceGroupName, accountName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAllLiveEvents();
}

main().catch(console.error);
