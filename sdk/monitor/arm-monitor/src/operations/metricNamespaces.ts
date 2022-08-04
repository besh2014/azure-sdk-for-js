/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { MetricNamespaces } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  MetricNamespace,
  MetricNamespacesListOptionalParams,
  MetricNamespacesListResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing MetricNamespaces operations. */
export class MetricNamespacesImpl implements MetricNamespaces {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class MetricNamespaces class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Lists the metric namespaces for the resource.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  public list(
    resourceUri: string,
    options?: MetricNamespacesListOptionalParams
  ): PagedAsyncIterableIterator<MetricNamespace> {
    const iter = this.listPagingAll(resourceUri, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceUri, options);
      }
    };
  }

  private async *listPagingPage(
    resourceUri: string,
    options?: MetricNamespacesListOptionalParams
  ): AsyncIterableIterator<MetricNamespace[]> {
    let result = await this._list(resourceUri, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceUri: string,
    options?: MetricNamespacesListOptionalParams
  ): AsyncIterableIterator<MetricNamespace> {
    for await (const page of this.listPagingPage(resourceUri, options)) {
      yield* page;
    }
  }

  /**
   * Lists the metric namespaces for the resource.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  private _list(
    resourceUri: string,
    options?: MetricNamespacesListOptionalParams
  ): Promise<MetricNamespacesListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/microsoft.insights/metricNamespaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricNamespaceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion9, Parameters.startTime],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
