
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './router';
import { useEffect, useCallback } from 'react';
import { useAuth } from './hooks/auth.hook';
import { useHttp } from './hooks/http.hook';
import { AuthContext } from './context/auth.context';
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { useState } from 'react';

function App() {
  const { request, error } = useHttp();
  const { token, userName, login, changeName, logout, userId, ready, status } = useAuth();

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const jwtTry = useCallback(async () => {
    try {
      const data = await request('/api/jwt/jwt', 'GET', null, { Authorization: `Bearer ${token}` })
    } catch (e) { }
  }, [token, request])

  useEffect(() => {
    if (token != null) {
      jwtTry()
    }
  }, [jwtTry])

  useEffect(() => {
    if (error != null) {
      logout();
    }
  }, [error]);

  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AuthContext.Provider value={{ token, userName, login, changeName, logout, userId, isAuthenticated, status }}>
        <Router>
          {routes}
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
