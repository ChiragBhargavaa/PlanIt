import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getMe, logout as apiLogout } from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchUser = async () => {
    try {
      const { data } = await getMe();
      setUser(data?.user ?? null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await apiLogout();
    } catch {
      /* ignore */
    }
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    if (loading || !user) return;
    const path = location.pathname;
    if (path === "/" || path === "/login" || path === "/signup") {
      navigate("/homelogged", { replace: true });
    }
  }, [user, loading, location.pathname, navigate]);

  const value = { user, loading, logout, refetch: fetchUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
