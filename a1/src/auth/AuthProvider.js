import { createContext, useEffect, useMemo, useState } from "react";

import { getCurrentUser } from "./auth.actions";

// @ts-ignore
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    getCurrentUser()
      .then((response) => {
        setLoading(false);
        setSession(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response?.data.message);
      });
  }, []);

  const value = useMemo(
    () => ({ session, error, loading }),
    [error, loading, session]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
