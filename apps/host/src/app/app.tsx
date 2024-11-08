// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { lazy, Suspense } from 'react';
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

const RemoteOne = lazy(() => import('remote_one/App'))

export function App() {
  return (
    <div>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <RemoteOne />
            </Suspense>
          }
        />
        <Route
          path="/page-2/sub-page"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <div>
                This is the sub page
              </div>
            </Suspense>
          }
        />
        <Route
          path="/page-2/sub-page/child-page"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <div>
                This is the childPage
              </div>
            </Suspense>
          }
        />
      </Routes>
      <NxWelcome title="host" />

      {/* END: routes */}
    </div>
  );
}

export default App;
