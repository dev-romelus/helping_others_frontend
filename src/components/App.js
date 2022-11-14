import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import PublicRoute from './helpers/PublicRoute';
import PrivateRoute from './helpers/PrivateRoute';

import { publicRoutes, privateRoutes } from '../routes';

const Layout = loadable(() => import('./layouts/Layout'));

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {privateRoutes.map(({ path, component }, key) => (
          <Route key={key} path={path} element={<PrivateRoute component={component} />} />
        ))}
      </Route>

      {publicRoutes.map((publicRoute, key) => (
        <Route key={key} path={publicRoute.path} element={<PublicRoute component={publicRoute.component} path={publicRoute.path} />}/>
      ))}
    </Routes>
  );
}

export default App;
