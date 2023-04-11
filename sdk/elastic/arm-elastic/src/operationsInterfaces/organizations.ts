/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OrganizationsGetApiKeyOptionalParams,
  OrganizationsGetApiKeyResponse
} from "../models";

/** Interface representing a Organizations. */
export interface Organizations {
  /**
   * Fetch User API Key from internal database, if it was generated and stored while creating the
   * Elasticsearch Organization.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param options The options parameters.
   */
  getApiKey(
    resourceGroupName: string,
    options?: OrganizationsGetApiKeyOptionalParams
  ): Promise<OrganizationsGetApiKeyResponse>;
}
