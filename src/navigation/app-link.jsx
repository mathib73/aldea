import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getRouteFor } from './route-helpers';

/*
  This component is a wrapper for linking across and inside apps.

  AppLink automatically detects if the route passed is inside or outside the
  current app, and creates a Link or <a> tag according to the case.

  NOTE: this component is only useful for routing inside the apps
  defined in this project. To link outside, use <a></a> tags as usual.
*/

const IPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
  className: PropTypes.string,
  pathParams: PropTypes.shadow,
  queryParams: PropTypes.shadow,
  routeName: PropTypes.string.isRequired,
  targetBlank: PropTypes.bool,
};

const defaultProps = {
  className: '',
  pathParams: {},
  queryParams: {},
  targetBlank: false,
};

const AppLink = (props) => {
  const {
    routeName, pathParams, queryParams,
    targetBlank, className, children,
  } = props;
  const routePath = getRouteFor(routeName, pathParams, queryParams);
  let targetBlankProps = {};
  if (targetBlank) {
    targetBlankProps = {
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }
  return (
    <Link
      className={className}
      to={routePath}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...targetBlankProps}
    >
      {children}
    </Link>
  );
};

AppLink.propTypes = IPropTypes;
AppLink.defaultProps = defaultProps;

export { AppLink };
