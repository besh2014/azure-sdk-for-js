/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { FleetMembers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerServiceClient } from "../containerServiceClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  FleetMember,
  FleetMembersListByFleetNextOptionalParams,
  FleetMembersListByFleetOptionalParams,
  FleetMembersCreateOrUpdateOptionalParams,
  FleetMembersCreateOrUpdateResponse,
  FleetMembersGetOptionalParams,
  FleetMembersGetResponse,
  FleetMembersDeleteOptionalParams,
  FleetMembersListByFleetResponse,
  FleetMembersListByFleetNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FleetMembers operations. */
export class FleetMembersImpl implements FleetMembers {
  private readonly client: ContainerServiceClient;

  /**
   * Initialize a new instance of the class FleetMembers class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerServiceClient) {
    this.client = client;
  }

  /**
   * Lists the members of a fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param options The options parameters.
   */
  public listByFleet(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetMembersListByFleetOptionalParams
  ): PagedAsyncIterableIterator<FleetMember> {
    const iter = this.listByFleetPagingAll(
      resourceGroupName,
      fleetName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByFleetPagingPage(
          resourceGroupName,
          fleetName,
          options
        );
      }
    };
  }

  private async *listByFleetPagingPage(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetMembersListByFleetOptionalParams
  ): AsyncIterableIterator<FleetMember[]> {
    let result = await this._listByFleet(resourceGroupName, fleetName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByFleetNext(
        resourceGroupName,
        fleetName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByFleetPagingAll(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetMembersListByFleetOptionalParams
  ): AsyncIterableIterator<FleetMember> {
    for await (const page of this.listByFleetPagingPage(
      resourceGroupName,
      fleetName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * A member contains a reference to an existing Kubernetes cluster. Creating a member makes the
   * referenced cluster join the Fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param fleetMemberName The name of the Fleet member resource.
   * @param parameters The Fleet member to create or update.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
    parameters: FleetMember,
    options?: FleetMembersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<FleetMembersCreateOrUpdateResponse>,
      FleetMembersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<FleetMembersCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, fleetName, fleetMemberName, parameters, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * A member contains a reference to an existing Kubernetes cluster. Creating a member makes the
   * referenced cluster join the Fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param fleetMemberName The name of the Fleet member resource.
   * @param parameters The Fleet member to create or update.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
    parameters: FleetMember,
    options?: FleetMembersCreateOrUpdateOptionalParams
  ): Promise<FleetMembersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      fleetName,
      fleetMemberName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a Fleet member.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param fleetMemberName The name of the Fleet member resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
    options?: FleetMembersGetOptionalParams
  ): Promise<FleetMembersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, fleetName, fleetMemberName, options },
      getOperationSpec
    );
  }

  /**
   * Deleting a Fleet member results in the member cluster leaving fleet. The Member azure resource is
   * deleted upon success. The underlying cluster is not deleted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param fleetMemberName The name of the Fleet member resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
    options?: FleetMembersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, fleetName, fleetMemberName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deleting a Fleet member results in the member cluster leaving fleet. The Member azure resource is
   * deleted upon success. The underlying cluster is not deleted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param fleetMemberName The name of the Fleet member resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
    options?: FleetMembersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      fleetName,
      fleetMemberName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the members of a fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param options The options parameters.
   */
  private _listByFleet(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetMembersListByFleetOptionalParams
  ): Promise<FleetMembersListByFleetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, fleetName, options },
      listByFleetOperationSpec
    );
  }

  /**
   * ListByFleetNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param nextLink The nextLink from the previous successful call to the ListByFleet method.
   * @param options The options parameters.
   */
  private _listByFleetNext(
    resourceGroupName: string,
    fleetName: string,
    nextLink: string,
    options?: FleetMembersListByFleetNextOptionalParams
  ): Promise<FleetMembersListByFleetNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, fleetName, nextLink, options },
      listByFleetNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.FleetMember
    },
    201: {
      bodyMapper: Mappers.FleetMember
    },
    202: {
      bodyMapper: Mappers.FleetMember
    },
    204: {
      bodyMapper: Mappers.FleetMember
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fleetName,
    Parameters.fleetMemberName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FleetMember
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fleetName,
    Parameters.fleetMemberName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fleetName,
    Parameters.fleetMemberName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch],
  serializer
};
const listByFleetOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FleetMembersListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fleetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByFleetNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FleetMembersListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.fleetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
