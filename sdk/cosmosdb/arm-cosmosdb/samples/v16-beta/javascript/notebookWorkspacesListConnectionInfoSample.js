/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Retrieves the connection info for the notebook workspace
 *
 * @summary Retrieves the connection info for the notebook workspace
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBNotebookWorkspaceListConnectionInfo.json
 */
async function cosmosDbNotebookWorkspaceListConnectionInfo() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const notebookWorkspaceName = "default";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.notebookWorkspaces.listConnectionInfo(
    resourceGroupName,
    accountName,
    notebookWorkspaceName
  );
  console.log(result);
}

cosmosDbNotebookWorkspaceListConnectionInfo().catch(console.error);
