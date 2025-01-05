import "./App.css";
import CompNavBar from "./components/ComNavBar/CompNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContacsPage from "./page/contacs.page/ContacsPage";
import ProductosPage from "./page/productos.page/ProductosPage";
import HomePage from "./page/home.page/HomePage";
import { Box } from "@mui/material";
import { infoUser } from "./hooks/UserContext";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYmRiYWEzYy0zNTY1LTQ0MDctYTI0ZC03YjJlMWJlOGI4ZGIiLCJ1c2VybmFtZSI6InVzZXJuYW1lMSIsImlhdCI6MTczNTQ2ODU4MywiZXhwIjoxNzcxNDY4NTgzfQ.MORXwffUYkaXYE1mbZiA1aE18BdJLv7k0EkGIqCJSDE"
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
            <Route path="/" element={<HomePage />} /> {/* Ruta raíz */}
            <Route path="/contactos" element={<ContacsPage />} />
            <Route path="/productos" element={<ProductosPage />} />
          </Routes>
        </div>
      </infoUser.Provider>
    </BrowserRouter>
  );
}

export default App;
