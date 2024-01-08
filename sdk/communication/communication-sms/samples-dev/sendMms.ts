// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Send an SMS message to 1 or more recipients
 */

import { MmsContentType, MmsClient, MmsSendRequest } from "@azure/communication-sms";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

export async function main() {
  console.log("== Send MMS Message ==");

  // You will need to set this environment variable or edit the following values
  const connectionString =
    process.env.COMMUNICATION_SAMPLES_CONNECTION_STRING ||
    "endpoint=https://<resource-name>.communication.azure.com/;<access-key>";

  // create new client
  const client = new MmsClient(connectionString);

  // construct send request
  let phoneNumbers: string[];
  if (process.env.TO_PHONE_NUMBERS !== undefined) {
    phoneNumbers = process.env.TO_PHONE_NUMBERS.split(",");
  } else if (process.env.AZURE_PHONE_NUMBER !== undefined) {
    phoneNumbers = [process.env.AZURE_PHONE_NUMBER];
  } else {
    phoneNumbers = ["<to-phone-number-1>", "<to-phone-number-2>"];
  }

  const sendRequest: MmsSendRequest = {
    from: process.env.FROM_PHONE_NUMBER || process.env.AZURE_PHONE_NUMBER || "<from-phone-number>",
    to: phoneNumbers,
    message: "Hello World via SMS!",
    attachments: [
      {
        contentType: MmsContentType.ImagePng,
        content: new Uint8Array(Buffer.from("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", "base64"))
      },
    ],
  };

  // send sms with request
  const sendResults = await client.send(sendRequest);

  // individual messages can encounter errors during sending
  // use the "successful" property to verify
  for (const sendResult of sendResults) {
    if (sendResult.successful) {
      console.log("Success: ", sendResult);
    } else {
      console.error("Something went wrong when trying to send this message: ", sendResult);
    }
  }

  console.log("== Done: Send SMS Message ==");
}

main().catch((error) => {
  console.error("Encountered an error while sending SMS: ", error);
  process.exit(1);
});
