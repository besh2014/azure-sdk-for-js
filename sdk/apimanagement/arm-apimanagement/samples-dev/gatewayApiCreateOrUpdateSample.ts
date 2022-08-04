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
  AssociationContract,
  GatewayApiCreateOrUpdateOptionalParams,
  ApiManagementClient
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Adds an API to the specified Gateway.
 *
 * @summary Adds an API to the specified Gateway.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateGatewayApi.json
 */
async function apiManagementCreateGatewayApi() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const gatewayId = "gw1";
  const apiId = "echo-api";
  const parameters: AssociationContract = { provisioningState: "created" };
  const options: GatewayApiCreateOrUpdateOptionalParams = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.gatewayApi.createOrUpdate(
    resourceGroupName,
    serviceName,
    gatewayId,
    apiId,
    options
  );
  console.log(result);
}

apiManagementCreateGatewayApi().catch(console.error);
