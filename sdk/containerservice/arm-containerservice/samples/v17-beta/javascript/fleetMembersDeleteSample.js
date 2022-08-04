/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deleting a Fleet member results in the member cluster leaving fleet. The Member azure resource is deleted upon success. The underlying cluster is not deleted.
 *
 * @summary Deleting a Fleet member results in the member cluster leaving fleet. The Member azure resource is deleted upon success. The underlying cluster is not deleted.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-06-02-preview/examples/FleetMembers_Delete.json
 */
async function deletesAFleetMemberResource() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const fleetName = "fleet-1";
  const fleetMemberName = "member-1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleetMembers.beginDeleteAndWait(
    resourceGroupName,
    fleetName,
    fleetMemberName
  );
  console.log(result);
}

deletesAFleetMemberResource().catch(console.error);
