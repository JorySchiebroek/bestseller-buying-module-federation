import React from "react";

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import { PageLoading } from './PageLoading/PageLoading';

import "./styles.css";

const CollectionsPage = lazy(() => import("collections_page/CollectionsPage"));
const StylesPage = lazy(() => import("styles_page/StylesPage"));
const PurchaseOrdersPage = lazy(() => import("purchase_orders_page/PurchaseOrdersPage"));

export function App() {
  return (
    <BrowserRouter>
      <div style={{ height: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
          <div style={{ border: '1px solid black', width: '250px' }}>
            <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
              <h3>Bestone Buying</h3>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/collections">Collections</Link>
                </li>
                <li>
                  <Link to="/styles">Styles</Link>
                </li>
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div style={{ width: '100%', border: '1px solid black' }}>
            <Routes>
              <Route
                path="/collections"
                element={(
                  <Suspense fallback={(<PageLoading />)}>
                    <CollectionsPage />
                  </Suspense>
                )}
              />
              <Route
                path="/styles"
                element={(
                  <Suspense fallback={(<PageLoading />)}>
                    <StylesPage />
                  </Suspense>
                )}
              />
              <Route
                path="/orders"
                element={(
                  <Suspense fallback={(<PageLoading />)}>
                    <PurchaseOrdersPage />
                  </Suspense>
                )}
              />
            </Routes>
            <Outlet />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
