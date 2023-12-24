import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const register = (name, email, password) => {
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Registration Successfully");
        }
      });
  };

  const login = (email, password) => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
          setIsAuthenticated(true);
          alert("Login successful");
        
      });
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await fetch("http://localhost:5000/checkLogin");
      const data = await response.json();
      if (response.status === 200 && data.status === "authenticated") {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };

  const logout = () => {
    fetch("http://localhost:5000/logout");
    setIsAuthenticated(false);
    alert("Logout successful");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, register, checkLoginStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
