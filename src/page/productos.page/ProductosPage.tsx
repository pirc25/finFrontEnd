import CompDataGrid from "../../components/CompDataGrid/CompDataGrid";
import { Box, Typography } from "@mui/material";
import "./ProductosPage.css";
import { useState } from "react";
import CompAgregarItem from "./../../components/CompAgregarItem/CompAgregarItem";

type Campos = {
  propiedad: string;
  nombre: string;
  agregar: boolean;
  editar: boolean;
  tipoDato: string;
};

export default function ProductsPage() {
  const [agregarItem, setAgregarItem] = useState<boolean>(false);
  const [actualizacionEstado, setActualizacionEstado] =
    useState<boolean>(false);
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

  const campos: Campos[] = [
    {
      propiedad: "code",
      nombre: "Código",
      agregar: true,
      editar: true,
      tipoDato: "string",
    },
    {
      propiedad: "name",
      nombre: "Nombre",
      agregar: true,
      editar: true,
      tipoDato: "string",
    },
    {
      propiedad: "price",
      nombre: "Precio",
      agregar: true,
      editar: true,
      tipoDato: "number",
    },
    {
      propiedad: "cost",
      nombre: "Costo",
      agregar: true,
      editar: true,
      tipoDato: "number",
    },
    {
      propiedad: "discount",
      nombre: "Descuento",
      agregar: true,
      editar: true,
      tipoDato: "number",
    },
    {
      propiedad: "vat",
      nombre: "Iva",
      agregar: true,
      editar: true,
      tipoDato: "number",
    },
    {
      propiedad: "factor",
      nombre: "Factor",
      agregar: true,
      editar: true,
      tipoDato: "number",
    },
    {
      propiedad: "tax",
      nombre: "Impuestos",
      agregar: true,
      editar: true,
      tipoDato: "number",
    },
    {
      propiedad: "productType",
      nombre: "Tipo de producto",
      agregar: true,
      editar: true,
      tipoDato: "string",
    },
    {
      propiedad: "unidadCompra",
      nombre: "Unidad de compra",
      agregar: true,
      editar: true,
      tipoDato: "string",
    },
    {
      propiedad: "unidadVenta",
      nombre: "Unidad de venta",
      agregar: true,
      editar: true,
      tipoDato: "string",
    },
    {
      propiedad: "stockCompra",
      nombre: "Stock de compra",
      agregar: true,
      editar: true,
      tipoDato: "number",
    },
    {
      propiedad: "stockVenta",
      nombre: "Stock de venta",
      agregar: true,
      editar: true,
      tipoDato: "number",
    },
    {
      propiedad: "observation",
      nombre: "Observaciones",
      agregar: true,
      editar: true,
      tipoDato: "string",
    },
    {
      propiedad: "print",
      nombre: "Codigo Impresión",
      agregar: true,
      editar: true,
      tipoDato: "string",
    },
  ];

  const url = "products";
  return (
    <Box className="productosPage">
      {" "}
      <Typography sx={{ marginLeft: "20px" }} variant="h2">
        Productos
      </Typography>
      <CompDataGrid
        cols={cols}
        url={url}
        agregarItem={agregarItem}
        setAgregarItem={setAgregarItem}
        actualizacionEstado={actualizacionEstado}
        setActualizacionEstado={setActualizacionEstado}

      />
      {agregarItem && (
        <CompAgregarItem
          open={agregarItem}
          setOpen={setAgregarItem}
          campos={campos}
          url={url}
          setActualizacionEstado={setActualizacionEstado}
        />
      )}
    </Box>
  );
}
