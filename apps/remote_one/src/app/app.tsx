// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link, Navigate } from 'react-router-dom';

export function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="/page-2/sub-page">Click here to go Sub Page.</Link>
              <div>
                <h1>Remote One</h1>
              </div>
            </div>
          }
        >
          <Route index element={<Navigate to={"/page-2"} />} />
          <Route>

          <Route index element={<Navigate to={"/page-2/sub-page"} />} />
            <Route path='/page-2/sub-page' element={
              <div>
                This is the sub page
              </div>
            } />

            <Route path='/page-2/sub-page/child-page' element={
              <div>
                This is the childPage
              </div>
            } />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
