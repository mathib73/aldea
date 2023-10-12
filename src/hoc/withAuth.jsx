import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import { goToPage, routeNaming } from '../navigation';
import styles from './withAuth.module.scss';

class AuthenticationEnforcer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const response = await UserController.getUsers();
    if (response.error && response.message === 'Authentication error') {
      goToPage(routeNaming.LOGIN);
    }
    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div className={styles.circularProgressDiv}>
          <CircularProgress />
        </div>
      );
    }
    const { children } = this.props;
    return children;
  }
}
AuthenticationEnforcer.propTypes = {
  children: PropTypes.node.isRequired,
};

const withAuthentication = (WrappedComponent) => (props) => (
  <AuthenticationEnforcer>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <ContextProvider>
      <WrappedComponent {...props} />
    </ContextProvider>
  </AuthenticationEnforcer>
);

export { withAuthentication };
