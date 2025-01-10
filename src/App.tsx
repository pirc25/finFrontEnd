dimport "./App.css";
import CompNavBar from "./components/ComNavBar/CompNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContacsPage from "./page/contacs.page/ContacsPage";
import ProductosPage from "./page/productos.page/ProductosPage";
import LoginPage from "./page/login.page/LoginPage";
import HomePage from "./page/home.page/HomePage";
import { Box } from "@mui/material";
import { infoUser } from "./hooks/UserContext";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyN2UxM2Q3MS04Y2FmLTRmZDgtODZlYS1lYTQ2YWZkMGVkNWMiLCJ1c2VybmFtZSI6InBpcmMyNSIsImlhdCI6MTczNjQ4MTkzNywiZXhwIjoyMDk2NDgxOTM3fQ.SPHO74YMsFNklGM0B9H-rQX0GJ5JsWWkKKihSuRa1a4"
  );
  return (
    <BrowserRouter>
      {" "}
      <infoUser.Provider value={{ token, setToken }}>
        <Box sx={{ margin: "30px" }}>
          <CompNavBar />{" "}
        </Box>
        <div style={{ paddingTop: "20px" }}>
          <Routes>
            <Route path="/finFrontEnd/" element={<HomePage />} /> {/* Ruta raíz */}
            <Route path="/finFrontEnd/contactos" element={<ContacsPage />} />
            <Route path="/finFrontEnd/productos" element={<ProductosPage />} />
            <Route path="/finFrontEnd/login" element={<LoginPage />} />
          </Routes>
        </div>
      </infoUser.Provider>
    </BrowserRouter>
  );
}

export default App;
