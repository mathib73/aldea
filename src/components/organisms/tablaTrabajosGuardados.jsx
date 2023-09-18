import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToPage, routeNaming } from '../../navigation';
import { Search } from '../molecules/search';
import classes from './tablaTrabajosGuardados.module.scss';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';
import { ListaTrabajos } from '../molecules/listaTrabajos';

// Harcoded table
const trabajosGuardadosHardcoded = [
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

const TablaTrabajosGuardados = () => {
  const [filterText, setFilterText] = React.useState('');
  const navigate = useNavigate();
  const abrirTrabajosGuardados = () => {
    goToPage(routeNaming.TRABAJOS, navigate);
  };
  return (
    <div className={[classes.tableContainer, globalStyles.baseMargin].join(' ')}>
      <Search
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ListaTrabajos
        filterText={filterText}
        trabajosGuardadosHardcoded={trabajosGuardadosHardcoded}
      />
    </div>
  );
};

export { TablaTrabajosGuardados };
