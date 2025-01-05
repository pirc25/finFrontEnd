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
// import { postData } from "../../services/global.services";

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

interface AgregarItem {
  campos: string[];
  open: boolean;
  setOpen: (value: boolean) => void;
  setStateModifications: (value: boolean) => void;
}

export default function AgregarItem({
  campos,
  open,
  setOpen,
  setStateModifications,
}: AgregarItem) {
  const handleAgregar = async () => {
    // await postData(data, token);
    setStateModifications(true);
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
              <Grid container spacing={1}>
                {campos
                  .filter((element) => element !== "id")
                  .map((element, index) => (
                    <Grid key={index} size={5}>
                      <TextField id={element} label={element}>
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
            </Box>
          </Modal>
        </Paper>
      </Fade>
    </div>
  );
}
