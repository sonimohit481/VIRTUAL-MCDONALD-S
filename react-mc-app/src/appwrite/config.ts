import { Client, ID, Databases, Query } from "appwrite";
import { config } from "../config";

export class Service {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwrite.appwriteUrl)
      .setProject(config.appwrite.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createOrder({
    userId,
    itemNames,
    totalItems,
    total,
    status,
  }: {
    userId: string;
    itemNames: string;
    totalItems: number;
    total: number;
    status: string;
  }) {
    try {
      return await this.databases.createDocument(
        config.appwrite.appwriteDatabaseId,
        config.appwrite.appwriteOrdersCollectionId,
        ID.unique(),
        {
          userId,
          itemNames,
          totalItems,
          total,
          status,
          createdAt: new Date().toISOString(),
        }
      );
    } catch (error) {
      console.error("Appwrite Service :: createOrder :: error", error);
      return null;
    }
  }

  async getOrdersByUser(userId: string) {
    try {
      const response = await this.databases.listDocuments(
        config.appwrite.appwriteDatabaseId,
        config.appwrite.appwriteOrdersCollectionId,
        [Query.equal("userId", userId), Query.orderDesc("createdAt")]
      );
      return response.documents;
    } catch (error) {
      console.error("Appwrite Service :: getOrdersByUser :: error", error);
      return [];
    }
  }

  async deleteOrder(orderId: string) {
    try {
      await this.databases.deleteDocument(
        config.appwrite.appwriteDatabaseId,
        config.appwrite.appwriteOrdersCollectionId,
        orderId
      );
      return true;
    } catch (error) {
      console.error("Appwrite Service :: deleteOrder :: error", error);
      return false;
    }
  }
}

const orderService = new Service();
export default orderService;
