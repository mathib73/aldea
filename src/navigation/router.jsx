import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routes } from './Routes';
import { ScrollToTop } from './scroll-to-top';

const routeConfigTemplate = {
  name: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

const IPropTypes = {
  routeConfig: PropTypes.arrayOf(PropTypes.shape(routeConfigTemplate)).isRequired,
};

const zipRouteData = (routeData) => (
  routeData.map((data) => {
    const route = routes.find((r) => r.name === data.name);
    return {
      ...data,
      ...route,
    };
  })
);

const renderRoutes = (routeData) => (
  zipRouteData(routeData).map((data) => (
    <Route
      key={data.path}
      exact
      path={[process.env.PUBLIC_URL, data.path].join('')}
      element={<data.component />}
    />
  ))
);

/* const GlobalCss = withStyles({
  '@global': {
    '.MuiMenu-list': {
      width: '100%',
    },
    '.MuiOutlinedInput-root': {
      height: '50px',
      // minWidth: '520px',
    },
    '.MuiFormHelperText-contained': {
      // margin: '0px',
    },
    '.MuiInputLabel-outlined': {
      transform: 'translate(14px, 12px) scale(1)',
    },
    '.MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)',
    },
    '.MuiIconButton-root': {
      padding: '0px',
    },
    '.MuiBox-root': {
      width: '100%',
    },
    '.MuiBox-root-2': {
      width: 'auto',
    },
    '.WAMuiChipInput-inputRoot-14.WAMuiChipInput-outlined-17': {
      height: 'auto',
    },
    '.MuiDialog-container': {
      width: '100%',
    },
    '.PrivateTabIndicator-colorSecondary-5': {
      backgroundColor: '#3663c9;',
      height: '5px',
    },
    '.PrivateTabIndicator-colorSecondary-9': {
      backgroundColor: '#3663c9;',
      height: '5px',
    },
    '.MuiCheckbox-colorSecondary.Mui-checked': {
      color: '#3663c9;',
    },
    '.PrivateTabIndicator-colorSecondary-7': {
      backgroundColor: '#3663c9;',
      height: '5px',
    },
    '.PrivateTabIndicator-colorSecondary-11': {
      backgroundColor: '#3663c9;',
      height: '5px',
    },
  },
})(() => null);
*/

const Router = (props) => {
  const { routeConfig } = props;
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <Routes>
          {renderRoutes(routeConfig)}
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
Router.propTypes = IPropTypes;

export { Router };
