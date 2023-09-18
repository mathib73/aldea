import { Home } from './components/pages/home';
import { Prototipos } from './components/pages/prototipos';
import { Steps } from './components/pages/steps';
import { Trabajos } from './components/pages/trabajos';
import { routeNaming } from './navigation/Routes';

const RouteConfig = [
  {
    name: routeNaming.HOME,
    component: Home,
  },
  {
    name: routeNaming.PROTOTIPOS,
    component: Prototipos,
  },
  {
    name: routeNaming.TRABAJOS,
    component: Trabajos,
  },
  {
    name: routeNaming.PERSONALIZACION,
    component: Steps,
  },
];

export { RouteConfig };
