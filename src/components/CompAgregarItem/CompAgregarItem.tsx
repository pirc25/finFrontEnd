import { Dispatch, useContext, useState, SetStateAction } from "react";
import {
  Box,
  Button,
  Fade,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { postData } from "../../services/global.services";
import { infoUser } from "../../hooks/UserContext";

const style = {
  position: "absolute",
  maxHeight: "50vh",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  overflowY: "auto", // Habilitar scroll vertical
};

type Campos = {
  propiedad: string;
  nombre: string;
  agregar: boolean;
  editar: boolean;
  tipoDato: string;
};

interface AgregarItem {
  campos: Campos[];
  open: boolean;
  setOpen: (value: boolean) => void;
  url: string;
  setActualizacionEstado: Dispatch<SetStateAction<boolean>>;

  // setStateModifications: (value: boolean) => void;
}

export default function AgregarItem({
  campos,
  open,
  setOpen,
  url,
  setActualizacionEstado,
}: // setStateModifications,
AgregarItem) {
  const { token } = useContext(infoUser);
  const [formData, setFormData] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.id;
    const campo = campos.find((elemento) => elemento.propiedad === key);
    const tipoDato = campo?.tipoDato || "string";
    const value =
      tipoDato === "number" ? Number(event.target.value) : event.target.value;
    setFormData({ ...formData, [key]: value });
  };

  const handleAgregar = async () => {
    await postData(url, formData, token);
    setActualizacionEstado(true);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  // postData(data, token);

  return (
    <div>
      {" "}
      <Fade in={open}>
        <Paper elevation={3}>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            // aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h3"
                component="h2"
                sx={{ textAlign: "center", marginBottom: "10px" }}
              >
                Agregar un item{" "}
              </Typography>
              <form>
                <Grid container spacing={1}>
                  {campos.map((element, index) => (
                    <Grid key={index} size={5}>
                      <TextField
                        id={element.propiedad}
                        label={element.nombre}
                        onChange={handleChange}
                        // value={formData[element.propiedad] || ""}
                        required
                      >
                        {" "}
                        Ingrese un valor
                      </TextField>
                    </Grid>
                  ))}
                  <Grid size={5}></Grid>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {" "}
                    <Grid size={3}>
                      {" "}
                      <Button onClick={handleAgregar} variant="contained">
                        Agregar
                      </Button>
                    </Grid>
                    <Grid size={3}>
                      {" "}
                      <Button onClick={handleClose} variant="contained">
                        Cancelar
                      </Button>
                    </Grid>
                  </Box>
                </Grid>{" "}
              </form>
            </Box>
          </Modal>
        </Paper>
      </Fade>
    </div>
  );
}
