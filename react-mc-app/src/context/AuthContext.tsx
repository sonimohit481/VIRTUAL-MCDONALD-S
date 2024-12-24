import { createContext, useContext, useEffect, useState } from "react";
import authService from "../appwrite/auth";
import { UserSession } from "../interface";

interface AuthContextType {
  user: UserSession | null;
  isLoading: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  sighUpWithEmail: (
    email: string,
    password: string,
    name: string
  ) => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserSession | null | any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const currentUser = await authService.getCurrentUser();
        // setItems("User", currentUser);
        setUser(currentUser);

        // Initialize or refresh last activity timestamp
        // const storedLastActivity = localStorage.getItem("lastActivity");
        // if (!storedLastActivity) {
        //   updateLastActivity();
        // }
      } catch (error: any) {
        console.error("!! Error fetching current user:", error.message);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const signInWithGoogle = async () => {
    try {
      setError(null);
      setIsLoading(true);
      await authService.loginWithGoogle();
      const currentUser = await authService.getCurrentUser();
      // setItems("User", currentUser);
      setUser(currentUser);
      // updateLastActivity(); // Reset activity timestamp on login
    } catch (error: any) {
      console.error("!! Error signing in with Google:", error.message);
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const sighUpWithEmail = async (
    email: string,
    password: string,
    name: string
  ) => {
    try {
      setError(null);
      setIsLoading(true);
      await authService.createWithEmail({ email, password, name });
      const currentUser = await authService.getCurrentUser();
      // setItems("User", currentUser);
      setUser(currentUser);
      // updateLastActivity(); // Reset activity timestamp on login
    } catch (error: any) {
      console.error("!! Error Sign Up with email and password:", error.message);
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      setError(null);
      setIsLoading(true);
      await authService.loginWithEmail({ email, password });
      const currentUser = await authService.getCurrentUser();

      setUser(currentUser);
    } catch (error: any) {
      console.error(
        "!! Error logging in with email and password:",
        error.message
      );
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setError(null);
      setIsLoading(true);
      await authService.logout();
      setUser(null);
    } catch (error: any) {
      console.error("!! Error logging out:", error.message);
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        signInWithGoogle,
        sighUpWithEmail,
        signInWithEmail,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("!! useAuth must be used within an AuthProvider");
  }
  return context;
};
