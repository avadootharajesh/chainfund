import { createThirdwebClient } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
let clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
  // set to null
  clientId = ""; // setting it to null will cause errors as it is used in various other 3rd web link resources
  throw new Error("No client ID provided");
}
// Sample Hello msg
// The new pay otion needs an update too

export const client = createThirdwebClient({
  clientId: clientId,
});
