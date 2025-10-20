// Import necessary Appwrite classes
import { Client, Account, ID } from 'appwrite';

// Initialize Appwrite client
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Ensure this is the correct endpoint for your Appwrite instance
  .setProject('6719dba400006c5a5f5e');         // Your Appwrite Project ID, double-check for accuracy

// Export the Account instance for authentication
export const account = new Account(client);

// Export ID for generating unique IDs if needed
export { ID };
