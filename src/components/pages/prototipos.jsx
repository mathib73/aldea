import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Grid, Modal, Slide, Stack, Typography,
} from '@mui/material';
import classes from './prototipos.module.scss';
import globalStyles from '../../assets/stylesheets/globalStyles.module.scss';
import { Navbar } from '../molecules/navbar';
import { TextContainer } from '../molecules/textContainer';
import { CardSlider } from '../molecules/cardSlider';
import { getPrototipos } from '../../controllers/prototipeController';
import { sendExcel } from '../../controllers/excelController';

const title = 'Los prototipos';
const paragraph = `Aquí distintos prototipos de casas proyectados especialmente para el
barrio. Todos ellos siguen el espíritu del barrio y están pensadas en
función de los sistemas constructivos que se implementarían.`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const Prototipos = () => {
  const [loading, setLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [prototipos, setPrototipos] = React.useState([]);

  const onChange = async (e) => {
    await sendExcel(e.target.files[0]);
    window.location.reload();
  };

  React.useEffect(async () => {
    setLoading(true);
    const p = await getPrototipos();
    setPrototipos(p);
    setLoading(false);
  }, []);
  return (
    <div className={classes.container}>
      <Grid
        container
        className={classes.gridContainer}
        direction="column"
      >
        <Navbar setOpen={setOpen} />
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={classes.modal}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Seleccione el excel para cargar los datos
              </Typography>
              <Button
                variant="contained"
                component="label"
              >
                Selecione el excel
                <input
                  type="file"
                  hidden
                  onChange={onChange}
                />
              </Button>
            </div>
          </Box>
        </Modal>
        <TextContainer title={title} paragraph={paragraph} open />
        <Box className={[classes.boxContainer, globalStyles.baseMargin].join(' ')}>
          {!loading
          && (
            <Stack direction="row" spacing={2} className={classes.stack}>
              {
                prototipos.map((p) => (
                  <CardSlider
                    prototipo={p}
                  />
                ))
              }
            </Stack>
          )}
          {loading
          && (
            <CircularProgress sx={{ color: 'white' }} />
          )}
        </Box>
      </Grid>
    </div>
  );
};

export { Prototipos };
