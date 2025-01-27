import {
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
  GridRowId,
} from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import * as globalServices from "../../services/global.services.ts";
import { infoUser } from "../../hooks/UserContext.tsx";
// import AgregarItem from "../CompAgregarItem/CompAgregarItem.tsx";

interface CompDataGridProps {
  url: string;
  cols: GridColDef[];
  agregarItem: boolean;
  setAgregarItem: Dispatch<SetStateAction<boolean>>;
  actualizacionEstado: boolean;
  setActualizacionEstado: Dispatch<SetStateAction<boolean>>;
}

interface RowData {
  id: number; // Cambiar según tu estructura de datos
  [key: string]: unknown;
}

export default function CompDataGrid({
  url,
  cols,
  setAgregarItem,
  actualizacionEstado,
  setActualizacionEstado,
}: CompDataGridProps) {
  // const [openAddItem, setOpenAddItem] = useState<boolean>(false);
  const [rows, setRows] = useState<RowData[]>([]);
  // const [stateModifications, setStateModifications] = useState<boolean>(false);
  const { token } = useContext(infoUser);
  // const campos: string[] = cols
  //   .map((element) => element.headerName)
  //   .filter((headerName): headerName is string => headerName !== undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await globalServices.getData(url, token);
        setRows(res);
        setActualizacionEstado(false);
      } catch (error) {
        console.error("Error feching data:", error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, url, actualizacionEstado]);

  const handleCreateItem = () => {
    setAgregarItem(true);
    console.log("Crear una nuevo item");
  };

  const editRow = (id: GridRowId) => {
    console.log("Vamos a editar la fila", id);
  };
  const deleteRow = (id: GridRowId) => {
    console.log("Vamos a eliminar la fila", id);
  };

  const acciones: GridColDef = {
    field: "acciones",
    headerName: "Acciones",
    type: "actions",
    getActions: (params: GridRowParams) => [
      <GridActionsCellItem
        icon={<EditIcon />}
        onClick={() => editRow(params.id)}
        label="Editar"
      />,
      <GridActionsCellItem
        icon={<DeleteIcon />}
        onClick={() => deleteRow(params.id)}
        label="Eliminar"
      />,
    ],
  };

  // let columns = cols.map((element) => ({
  //   field: element,
  //   headerName: element,
  // }));

  const columns: GridColDef[] = [acciones, ...cols];

  return (
    <div>
      <Button
        sx={{ width: "200px", margin: "20px" }}
        variant="contained"
        onClick={handleCreateItem}
      >
        Agregar Item
      </Button>
      <Box sx={{ margin: "0px 20px" }}>
        <DataGrid rows={rows} columns={columns} />
        {/* {openAddItem && (
          <AgregarItem
            campos={campos}
            open={openAddItem}
            setOpen={setOpenAddItem}
            setStateModifications={setStateModifications}
          />
        )} */}
      </Box>
    </div>
  );
}
