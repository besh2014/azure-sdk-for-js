/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates the bookmark.
 *
 * @summary Creates or updates the bookmark.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/bookmarks/CreateBookmark.json
 */
async function createsOrUpdatesABookmark() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const bookmarkId = "73e01a99-5cd7-4139-a149-9f2736ff2ab5";
  const bookmark = {
    created: new Date("2021-09-01T13:15:30Z"),
    createdBy: { objectId: "2046feea-040d-4a46-9e2b-91c2941bfa70" },
    displayName: "My bookmark",
    entityMappings: [
      {
        entityType: "Account",
        fieldMappings: [{ identifier: "Fullname", value: "johndoe@microsoft.com" }],
      },
    ],
    etag: '"0300bf09-0000-0000-0000-5c37296e0000"',
    labels: ["Tag1", "Tag2"],
    notes: "Found a suspicious activity",
    query: "SecurityEvent | where TimeGenerated > ago(1d) and TimeGenerated < ago(2d)",
    queryResult: "Security Event query result",
    tactics: ["Execution"],
    techniques: ["T1609"],
    updated: new Date("2021-09-01T13:15:30Z"),
    updatedBy: { objectId: "2046feea-040d-4a46-9e2b-91c2941bfa70" },
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.bookmarks.createOrUpdate(
    resourceGroupName,
    workspaceName,
    bookmarkId,
    bookmark
  );
  console.log(result);
}

createsOrUpdatesABookmark().catch(console.error);
