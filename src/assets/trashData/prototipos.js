// HARCODED DATA (DELETE)
import image1 from '../images/trash/1.png';
import image2 from '../images/trash/2.png';
import image3 from '../images/trash/3.png';

import sketchImg from '../images/trash/sketch.jpg';
import plantaImage from '../images/trash/plantas.jpg';
import wideImg from '../images/trash/wide.jpg';

const prototipos = [
  {
    id: 1,
    title: 'Casa tito 1',
    proyectoDe: 'Estudio arquitectura 1',
    data: {
      land: 'Terreno X1',
      m2: 140,
      m2Interiores: 80,
      m2Exteriores: 60,
      dormitorios: 2,
      banos: 1,
      usdEstandar: 12000,
      plazoEstandar: '8 meses',
      usdMovimientoTierrasEstandar: 5000,
      usdImpuestosEstandar: 3000,
      usdConstruccion: 47000,
      descripcionPrototipo: `Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.

                    Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.

                    Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.`,
      imageText: `Interactúa con el modelo para
                  conocer la volumetría del proyecto.`,
      image: image1,
      sketchImg,
      plantaImage,
      wideImg,
    },
    gruposDeAreas: [
      {
        id: 1,
        name: 'Base',
        idRubros: [
          {
            id: 1,
            idSubRubros: [
              1, 2, 3,
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Baño adicional',
        idRubros: [
          {
            id: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Casa tito 2',
    proyectoDe: 'Estudio arquitectura 2',
    data: {
      land: 'Terreno X2',
      m2: 140,
      m2Interiores: 80,
      m2Exteriores: 60,
      dormitorios: 2,
      banos: 1,
      usdEstandar: 47000,
      plazoEstandar: '8 meses',
      usdMovimientoTierrasEstandar: 5000,
      usdImpuestosEstandar: 3000,
      usdConstruccion: 47000,
      descripcionPrototipo: `Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual..

                    Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.

                    Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.`,
      imageText: `Interactúa con el modelo para
                  conocer la volumetría del proyecto.`,
      image: image2,
      sketchImg,
      plantaImage,
      wideImg,
    },
  },
  {
    id: 3,
    title: 'Casa tito 3',
    proyectoDe: 'Estudio arquitectura 3',
    data: {
      land: 'Terreno X3',
      m2: 140,
      m2Interiores: 80,
      m2Exteriores: 60,
      dormitorios: 2,
      banos: 1,
      usdEstandar: 47000,
      plazoEstandar: '8 meses',
      usdMovimientoTierrasEstandar: 5000,
      usdImpuestosEstandar: 3000,
      usdConstruccion: 47000,
      descripcionPrototipo: `Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual..

                    Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.

                    Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.`,
      imageText: `Interactúa con el modelo para
                  conocer la volumetría del proyecto.`,
      image: image3,
      sketchImg,
      plantaImage,
      wideImg,
    },
  },
  {
    id: 3,
    title: 'Casa tito 3',
    proyectoDe: 'Estudio arquitectura 3',
    data: {
      land: 'Terreno X3',
      m2: 140,
      m2Interiores: 80,
      m2Exteriores: 60,
      dormitorios: 2,
      banos: 1,
      usdEstandar: 47000,
      plazoEstandar: '8 meses',
      usdMovimientoTierrasEstandar: 5000,
      usdImpuestosEstandar: 3000,
      usdConstruccion: 47000,
      descripcionPrototipo: `Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual..

                    Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.

                    Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.`,
      imageText: `Interactúa con el modelo para
                  conocer la volumetría del proyecto.`,
      image: image2,
      sketchImg,
      plantaImage,
      wideImg,
    },
  },
  {
    id: 4,
    title: 'Casa tito 4',
    proyectoDe: 'Estudio arquitectura 4',
    data: {
      land: 'Terreno X4',
      m2: 140,
      m2Interiores: 80,
      m2Exteriores: 60,
      dormitorios: 2,
      banos: 1,
      usdEstandar: 47000,
      plazoEstandar: '8 meses',
      usdMovimientoTierrasEstandar: 5000,
      usdImpuestosEstandar: 3000,
      usdConstruccion: 47000,
      descripcionPrototipo: `Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual..

                    Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.

                    Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.`,
      imageText: `Interactúa con el modelo para
                  conocer la volumetría del proyecto.`,
      image: image1,
      sketchImg,
      plantaImage,
      wideImg,
    },
  },
  {
    id: 5,
    title: 'Casa tito 5',
    proyectoDe: 'Estudio arquitectura 1',
    data: {
      land: 'Terreno X5',
      m2: 140,
      m2Interiores: 80,
      m2Exteriores: 60,
      dormitorios: 2,
      banos: 1,
      usdEstandar: 47000,
      plazoEstandar: '8 meses',
      usdMovimientoTierrasEstandar: 5000,
      usdImpuestosEstandar: 3000,
      usdConstruccion: 47000,
      descripcionPrototipo: `Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual..

                    Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.

                    Breve memoria del proyecto con realizada por el estudio de arquitectura.
                    Sería una descripción a nivel conceptual.`,
      imageText: `Interactúa con el modelo para
                  conocer la volumetría del proyecto.`,
      image: image3,
      sketchImg,
      plantaImage,
      wideImg,
    },
  },
];

export { prototipos };
