import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

// if (ENDPOINT) {
//   client
//     .setEndpoint(ENDPOINT?.toString() ?? "")
//     .setProject(PROJECT_ID!.toString())
//     .setKey(API_KEY!.toString());
// }

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66b073de002314f19bc7")
  .setKey(
    "5b0335d214e79e11e461e548551a47057f5a1598cf1c934d0daa4ba7f07b5c7f8d4a0a05dc27fb6cc7fc907804574369750a7f6c61094a921997ffff59a606630ba2580045f842a8ac2b03e2f8a415bb2141773ac053efb3581fa69712890c1041c5fe0fe25714eb35a35ea2952ad78157f9b7af32e77ea7e01b52159025f2d4"
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
