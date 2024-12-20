import { createContext, useContext, useEffect, useState } from "react";
import authService from "../appwrite/auth";
import { UserSession } from "../interface";
import { removeItems, setItems } from "../utils";

interface AuthContextType {
  user: UserSession | null;
  isLoading: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
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
        setItems("User", currentUser);
        setUser(currentUser);
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
      setItems("User", currentUser);
      setUser(currentUser);
    } catch (error: any) {
      console.error("!! Error signing in with Google:", error.message);
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      setError(null);
      setIsLoading(true);
      await authService.loginWithEmailAndPassword({ email, password });
      const currentUser = await authService.getCurrentUser();
      setItems("User", currentUser);
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
      removeItems("User");
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
        loginWithEmailAndPassword,
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
