import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompNavBar from "./components/ComNavBar/CompNavBar";
import ContacsPage from "./page/contacs.page/ContacsPage";
import ProductosPage from "./page/productos.page/ProductosPage";
import HomePage from "./page/home.page/HomePage";
import LoginPage from "./page/login.page/LoginPage";
import { infoUser } from "./hooks/UserContext";
import { Box } from "@mui/material";

function App() {
  const [userState, setUserState] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  return (
    <BrowserRouter>
      {" "}
      <infoUser.Provider value={{ token, setToken }}>
        <Box sx={{ margin: "30px" }}>
          <CompNavBar />{" "}
        </Box>
        <div style={{ paddingTop: "20px" }}>
          <Routes>
            {userState && <Route path="/finFrontEnd/" element={<HomePage />} />}
            {!userState && (
              <Route
                path="/finFrontEnd/"
                element={
                  <LoginPage
                    setToken={setToken}
                    setUserState={setUserState}
                    // // setUserState={setUserState}
                  />
                }
              />
            )}{" "}
            {/* Ruta raíz */}
            <Route
              path="/finFrontEnd/contactos"
              element={<ContacsPage />}
            />
            <Route
              path="/finFrontEnd/productos"
              element={<ProductosPage  />}
            />
            <Route
              path="/finFrontEnd/login"
              element={
                <LoginPage setToken={setToken} setUserState={setUserState} />
              }
            />
          </Routes>
        </div>
      </infoUser.Provider>
    </BrowserRouter>
  );
}

export default App;
