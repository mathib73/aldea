import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, styled, tableCellClasses,
} from '@mui/material';
import classes from './listaTrabajos.module.scss';
import { OptionListButton } from './optionListButton';

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

const ListaTrabajos = (props) => {
  const { trabajosGuardadosHardcoded, filterText } = props;
  const [trabajosFiltrados, setTrabajosFiltrados] = React.useState(trabajosGuardadosHardcoded);
  console.log('trabajosGuardadosHardcoded: ', trabajosGuardadosHardcoded);
  React.useEffect(() => {
    setTrabajosFiltrados(trabajosGuardadosHardcoded.filter((t) => {
      if (t.cliente.includes(filterText)) return true;
      if (t.fecha.includes(filterText)) return true;
      if (t.precioFinal.includes(filterText)) return true;
      if (t.prototipo.includes(filterText)) return true;
      return false;
    }));
  }, [filterText]);
  console.log('trabajosFiltrados: ', trabajosFiltrados);
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
            {trabajosFiltrados.map((t) => (
              <StyledTableRow
                key={t.cliente}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">
                  {t.cliente}
                </TableCell>
                <TableCell align="center">{t.prototipo}</TableCell>
                <TableCell align="center">{t.fecha}</TableCell>
                <TableCell align="center">{t.precioFinal}</TableCell>
                <TableCell align="left">{t.comentarios}</TableCell>
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

ListaTrabajos.propTypes = {
  trabajosGuardadosHardcoded: PropTypes.object.isRequired,
  filterText: PropTypes.string.isRequired,
};

export { ListaTrabajos };
