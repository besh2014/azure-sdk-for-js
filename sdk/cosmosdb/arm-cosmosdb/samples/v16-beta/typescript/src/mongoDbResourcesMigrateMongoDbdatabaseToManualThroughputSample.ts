/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Migrate an Azure Cosmos DB MongoDB database from autoscale to manual throughput
 *
 * @summary Migrate an Azure Cosmos DB MongoDB database from autoscale to manual throughput
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBMongoDBDatabaseMigrateToManualThroughput.json
 */
async function cosmosDbMongoDbdatabaseMigrateToManualThroughput() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.beginMigrateMongoDBDatabaseToManualThroughputAndWait(
    resourceGroupName,
    accountName,
    databaseName
  );
  console.log(result);
}

cosmosDbMongoDbdatabaseMigrateToManualThroughput().catch(console.error);
