import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { loginServices } from "../../services/auth/login.services";
import { useNavigate } from "react-router-dom";

interface LoginPageProps {
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setUserState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginPage({ setToken, setUserState }: LoginPageProps) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleIngresar = async () => {
    if (user !== "" && password !== "") {
      const datos = await loginServices(user, password);
      if (datos !== "") {
        setToken(datos);
        setUserState(true);
        navigate("/finFrontEnd"); // Navegar a la nueva ruta
      }
    } else {
      console.error("Algún valor esta vacío");
    }
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", justifyContent: "center" }}
      autoComplete="off"
    >
      <Grid2 container>
        <Grid2 size={12}>
          {" "}
          <Typography>Login</Typography>
        </Grid2>
        <Grid2 size={12}>
          {" "}
          <TextField
            id="usuarioTextfiled"
            value={user}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUser(event.target.value);
            }}
          >
            Usuario
          </TextField>
        </Grid2>
        <Grid2 size={12}>
          <TextField
            id="passwordTextfiled"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
          >
            Password
          </TextField>
        </Grid2>
        <Grid2 size={12}>
          <Button onClick={handleIngresar}>Ingresar</Button>
        </Grid2>
      </Grid2>
    </Box>
  );
}
