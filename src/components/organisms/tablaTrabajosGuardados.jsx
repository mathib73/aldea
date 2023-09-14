import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToPage, routeNaming } from '../../navigation';
import { Search } from '../molecules/search';
import classes from './tablaTrabajosGuardados.module.scss';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';
import { ListaTrabajos } from '../molecules/listaTrabajos';

const TablaTrabajosGuardados = () => {
  const [filterText, setFilterText] = React.useState('');
  const navigate = useNavigate();
  const abrirTrabajosGuardados = () => {
    goToPage(routeNaming.TRABAJOS, navigate);
  };
  return (
    <div className={[classes.tableContainer, globalStyles.baseMargin].join(' ')}>
      <Search filterText={filterText} setFilterText={setFilterText} />
      <ListaTrabajos filterText={filterText} setFIlterText={setFilterText} />
    </div>
  );
};

export { TablaTrabajosGuardados };
