/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventGridManagementClient } from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Delete an existing event subscription for a topic.
 *
 * @summary Delete an existing event subscription for a topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/TopicEventSubscriptions_Delete.json
 */
async function topicEventSubscriptionsDelete() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const topicName = "exampleTopic1";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.topicEventSubscriptions.beginDeleteAndWait(
    resourceGroupName,
    topicName,
    eventSubscriptionName
  );
  console.log(result);
}

topicEventSubscriptionsDelete().catch(console.error);
