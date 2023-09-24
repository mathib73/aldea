import React from 'react';
import PropTypes from 'prop-types';

import { Collapse, Typography } from '@mui/material';
import classes from './resultList.module.scss';
import { InteriorLeftRow } from './interiorLeftRow';

const ResultList = (props) => {
  const { rubro, isExternal, listNumber } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState('');
  const changeRubro = (id) => {
    setSelectedId(id);
    setOpen(!open);
  };
  return (
    <>
      <InteriorLeftRow
        selectedId={isExternal ? `ext_${selectedId}` : selectedId}
        idRubro={isExternal ? `ext_${rubro.id}` : rubro.id}
        title={isExternal ? 'Terminaciones exteriores' : rubro.title}
        changeRubro={() => changeRubro(rubro.id)}
        listNumber={listNumber}
        customClass={classes.row}
        isResult
        open={open}
      />
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <ul className={classes.list}>
          {isExternal
          && (
            <li>
              <Typography className={classes.listItem1}>
                {rubro.title}
              </Typography>
              <Typography className={classes.listItem2}>
                {`${rubro.desc} USD ${rubro.cost}/m2`}
              </Typography>
            </li>
          )}
          {console.log(rubro)}
          {!isExternal
            && rubro.subRubros.map((subRubro) => (
              <li>
                <Typography className={classes.listItem1}>
                  {console.log(subRubro)}
                  {subRubro.title}
                </Typography>
                <Typography className={classes.listItem2}>
                  {`${subRubro.option.title} ${subRubro.option.moneda} ${subRubro.option.cost}/${subRubro.option.medidaUnidad}`}
                </Typography>
              </li>
            ))}
        </ul>
      </Collapse>
    </>
  );
};

ResultList.propTypes = {
  rubro: PropTypes.object.isRequired,
  isExternal: PropTypes.bool.isRequired,
  listNumber: PropTypes.number.isRequired,
};

export { ResultList };
