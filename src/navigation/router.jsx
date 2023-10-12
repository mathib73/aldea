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
      path={data.path}
      element={<data.component />}
    />
  ))
);

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
