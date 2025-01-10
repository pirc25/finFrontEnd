import { Box, Button, Grid2, TextField, Typography } from "@mui/material";

export default function LoginPage() {
  const handleIngresar = () => {
    console.log("Estamos Logeando");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Grid2 container>
        <Grid2 size={12}>
          {" "}
          <Typography>Login</Typography>
        </Grid2>
        <Grid2 size={12}>
          {" "}
          <TextField required id="outlined-required" label="Usuario">
            Usuario
          </TextField>
        </Grid2>
        <Grid2 size={12}>
          <TextField>Password</TextField>
        </Grid2>
        <Grid2 size={12}>
          <Button onClick={handleIngresar}>Ingresar</Button>
        </Grid2>
      </Grid2>
    </Box>
  );
}
