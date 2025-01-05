import CompDataGrid from "../../components/CompDataGrid/CompDataGrid";
import { Box, Typography } from "@mui/material";
import "./ProductosPage.css";

export default function ProductsPage() {
  const cols = [
    // { headerName: "id", field: "id" },
    { headerName: "Código", field: "code", width: 150 },
    { headerName: "Nombre", field: "name", width: 200 },
    // { headerName: "Estado", field: "isActive" },
    // { headerName: "Tipo de producto", field: "productType" },
    { headerName: "Precio", field: "price", width: 80 },
    { headerName: "Costo", field: "cost", width: 80 },
    // { headerName: "Fecha de creación", field: "createdAt" },
    { headerName: "Descuento", field: "discount", width: 100 },
    { headerName: "iva", field: "vat", width: 80 },
    { headerName: "Factor", field: "factor", width: 80 },
    // { headerName: "Imprimir", field: "print" },
    // { headerName: "Impuesto", field: "tax" },
    { headerName: "Unidad de compra", field: "unidadCompra", width: 150 },
    { headerName: "Unidad de venta", field: "unidadVenta", width: 150 },
    { headerName: "Stock1", field: "stockCompra", width: 100 }, // READONLY
    { headerName: "Stock2", field: "stockVenta", width: 100 }, // READONLY
    // { headerName: "Actualizado", field: "updateAt" },
    // { headerName: "Observacción", field: "observation" },
  ];

  const url = "products";
  return (
    <Box className="productosPage">
      {" "}
      <Typography sx={{ marginLeft: "20px" }} variant="h2">
        Productos
      </Typography>
      <CompDataGrid cols={cols} url={url} />
    </Box>
  );
}
git 