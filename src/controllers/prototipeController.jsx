import axios from 'axios';

import image1 from '../assets/images/trash/1.png';
import sketchImg from '../assets/images/trash/sketch.jpg';
import plantaImage from '../assets/images/trash/plantas.jpg';
import wideImg from '../assets/images/trash/wide.jpg';

import maderaRojo from '../assets/images/trash/madera-rojo.png';
import maderaOtro from '../assets/images/trash/madera-otro.png';
import imgMuestra from '../assets/images/trash/imgMuestra.png';

const transformData = (backPrototipe) => ({
  id: backPrototipe.id,
  title: backPrototipe.name,
  ProyectoDe: backPrototipe.proyectoDe,
  data: {
    land: backPrototipe.shortDesc,
    m2: backPrototipe.m2,
    m2Interiores: backPrototipe.m2Interiores,
    m2Exteriores: backPrototipe.m2Exteriores,
    dormitorios: backPrototipe.dormitorios,
    banos: backPrototipe.banos,
    usdEstandar: backPrototipe.usdEstandar,
    plazoEstandar: backPrototipe.plazoEstandar,
    usdMovimientoTierrasEstandar: backPrototipe.usdMovimientoTierrasEstandar,
    usdImpuestosEstandar: backPrototipe.usdImpuestosEstandar,
    usdConstruccion: backPrototipe.usdConstruccion,
    descripcionPrototipo: backPrototipe.description,
    imageText: backPrototipe.imgText,
    image: image1,
    sketchImg,
    plantaImage,
    wideImg,
  },
});

const transformOptions = (option) => ({
  id: option.id,
  title: option.name,
  cost: option.costo,
  moneda: option.moneda,
  medidaUnidad: option.medidaUnidad,
});

const transformSubRubro = (subRubro) => (
  {
    id: subRubro.id,
    title: subRubro.name,
    opciones: subRubro.options.map(transformOptions),
  }
);

const transformRubrosExteriores = (rubro) => ({
  id: rubro.id,
  title: rubro.name,
  desc: rubro.description,
  cost: rubro.cost,
  img: rubro.name === 'Madera pintada de rojo.' ? maderaRojo : maderaOtro,
  imgMuestra,
});
const transformRubrosInteriores = (rubro) => ({
  id: rubro.id,
  title: rubro.name,
  subRubros: rubro.subRubros.map(transformSubRubro),
});

const getPrototipos = async () => {
  const config = {
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}/prototipos`,
  };

  const res = await axios(config);

  console.log('res.status: ', res.status);
  return res.data.map(transformData);
};

const getPrototipo = async (id) => {
  const config = {
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}/prototipos/${id}`,
  };

  const res = await axios(config);

  console.log('res.status: ', res.status);
  console.log('res.data: ', res.data);
  return {
    prototipo: transformData(res.data),
    rubrosExteriores: res.data.rubroExteriors.map(transformRubrosExteriores),
    rubrosInteriores: res.data.rubros.map(transformRubrosInteriores),
  };
};

export { getPrototipos, getPrototipo };
