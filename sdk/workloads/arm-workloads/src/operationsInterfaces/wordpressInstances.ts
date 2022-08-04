/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  WordpressInstanceResource,
  WordpressInstancesListOptionalParams,
  WordpressInstancesGetOptionalParams,
  WordpressInstancesGetResponse,
  WordpressInstancesCreateOrUpdateOptionalParams,
  WordpressInstancesCreateOrUpdateResponse,
  WordpressInstancesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WordpressInstances. */
export interface WordpressInstances {
  /**
   * Lists WordPress instance resources under a phpWorkload resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    phpWorkloadName: string,
    options?: WordpressInstancesListOptionalParams
  ): PagedAsyncIterableIterator<WordpressInstanceResource>;
  /**
   * Gets the WordPress instance resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    phpWorkloadName: string,
    options?: WordpressInstancesGetOptionalParams
  ): Promise<WordpressInstancesGetResponse>;
  /**
   * Create or updated WordPress instance resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param wordpressInstanceResource Resource create or update request payload
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    phpWorkloadName: string,
    wordpressInstanceResource: WordpressInstanceResource,
    options?: WordpressInstancesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<WordpressInstancesCreateOrUpdateResponse>,
      WordpressInstancesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or updated WordPress instance resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param wordpressInstanceResource Resource create or update request payload
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    phpWorkloadName: string,
    wordpressInstanceResource: WordpressInstanceResource,
    options?: WordpressInstancesCreateOrUpdateOptionalParams
  ): Promise<WordpressInstancesCreateOrUpdateResponse>;
  /**
   * Delete WordPress instance resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param phpWorkloadName Php workload name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    phpWorkloadName: string,
    options?: WordpressInstancesDeleteOptionalParams
  ): Promise<void>;
}
