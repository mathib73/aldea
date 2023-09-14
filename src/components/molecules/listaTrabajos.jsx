import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Paper,
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, styled, tableCellClasses,
} from '@mui/material';
import classes from './listaTrabajos.module.scss';
import { OptionListButton } from './optionListButton';

// Harcoded table
const trabajosGuardados = [
  {
    cliente: 'Bruno',
    prototipo: 'Casa Tito 1',
    fecha: '22-06-2023',
    precioFinal: '70.000',
    comentarios: 'Agregar precios barandas.',
  },
  {
    cliente: 'Bruno 2',
    prototipo: 'Casa Tito 2',
    fecha: '25-06-2023',
    precioFinal: '90.000',
    comentarios: 'Agregar fotos.',
  },
];

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#8F9063',
    color: '#F5F5F5',
    fontFamily: 'Inter',
    fontWeight: 500,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '16px',
    padding: '0 !important',
    paddingLeft: '10px !important',
    height: '28px',
  },
}));
const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#FFFFFF',
    outline: 'solid 7px #8F9063',
    height: '35px',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#FFFFFF',
    outline: 'solid 7px #8F9063',
    height: '35px',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:nth-child(n) td': {
    fontWeight: 700,
  },
}));

const ListaTrabajos = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.listContainer}>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="Trabajos guardados">
          <TableHead>
            <TableRow>
              <StyledTableCell>Cliente</StyledTableCell>
              <StyledTableCell align="center">Prototipo</StyledTableCell>
              <StyledTableCell align="center">Fecha</StyledTableCell>
              <StyledTableCell align="center">Precio final</StyledTableCell>
              <StyledTableCell align="left">Comentarios</StyledTableCell>
              <StyledTableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(10)].map((x, i) => (
              <StyledTableRow
                key={trabajosGuardados[i % 2].cliente}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">
                  {trabajosGuardados[i % 2].cliente}
                </TableCell>
                <TableCell align="center">{trabajosGuardados[i % 2].prototipo}</TableCell>
                <TableCell align="center">{trabajosGuardados[i % 2].fecha}</TableCell>
                <TableCell align="center">{trabajosGuardados[i % 2].precioFinal}</TableCell>
                <TableCell align="left">{trabajosGuardados[i % 2].comentarios}</TableCell>
                <TableCell align="right">
                  <OptionListButton />
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export { ListaTrabajos };
