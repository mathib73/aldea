import React from 'react';

import './App.css';
import { Router } from './navigation/router';
import { RouteConfig } from './RouteConfig';

function App() {
  return (
    <div className="App" style={{ height: '100%' }}>
      <Router routeConfig={RouteConfig} />
    </div>
  );
}

export { App };
