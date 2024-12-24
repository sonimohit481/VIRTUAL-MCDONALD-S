import { Client, Account, ID, OAuthProvider } from "appwrite";
import { LogInForm } from "../interface";
import { config } from "../config";

export class AuthService {
  private client: Client;
  private account: Account;

  constructor() {
    this.client = new Client();

    try {
      this.client
        .setEndpoint(config.appwrite.appwriteUrl)
        .setProject(config.appwrite.appwriteProjectId);

      this.account = new Account(this.client);
    } catch (error: any) {
      throw new Error(`!! Failed to initialize AuthService: ${error?.message}`);
    }
  }

  async createWithEmail({ email, password, name }: LogInForm) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return await this.loginWithEmail({ email, password });
      } else {
        throw new Error("!! Failed to create user account");
      }
    } catch (error: any) {
      throw new Error(`!! Failed to create account: ${error.message}`);
    }
  }

  async loginWithEmail({ email, password }: LogInForm) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error: any) {
      throw new Error(`!! Failed to log in: ${error.message}`);
    }
  }

  async loginWithGoogle() {
    try {
      return await this.account.createOAuth2Session(
        OAuthProvider.Google,
        config.google.googleRedirectUrl,
        config.google.googleCallbackUrl
      );
    } catch (error: any) {
      throw new Error(`!! Failed to log in with Google: ${error.message}`);
    }
  }

  async getCurrentSession() {
    try {
      return await this.account.getSession("current");
    } catch (error: any) {
      throw new Error(
        `!! Failed to retrieve the current session: ${error.message}`
      );
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error: any) {
      throw new Error(`!! Failed to get the current user: ${error.message}`);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error: any) {
      throw new Error(`!! Failed to logout: ${error.message}`);
    }
  }
}

const authService = new AuthService();

export default authService;
