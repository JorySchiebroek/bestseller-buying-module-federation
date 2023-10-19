import React from "react";

import { lazy } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import { PageLoading } from './PageLoading/PageLoading';

import "./styles.css";

const CollectionsPage = lazy(() => import("app_products/ProductsPage"));
const StylesPage = lazy(() => import("app_products/ProductsPage"));
const PurchaseOrdersPage = lazy(() => import("app_products/ProductsPage"));

const ProductsPage = lazy(() => import("app_products/ProductsPage"));
const BillingPage = lazy(() => import("app_billing/BillingPage"));

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
                <li>
                  <Link to="/billing">Billing</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div style={{ width: '100%', border: '1px solid black' }}>
            <Routes>
              <Route
                path="/collections"
                element={(
                  <React.Suspense fallback={(<PageLoading />)}>
                    <CollectionsPage />
                  </React.Suspense>
                )}
              />
              <Route
                path="/styles"
                element={(
                  <React.Suspense fallback={(<PageLoading />)}>
                    <StylesPage />
                  </React.Suspense>
                )}
              />
              <Route
                path="/orders"
                element={(
                  <React.Suspense fallback={(<PageLoading />)}>
                    <PurchaseOrdersPage />
                  </React.Suspense>
                )}
              />

              <Route
                path="/billing"
                element={(
                  <React.Suspense fallback={(<PageLoading />)}>
                    <BillingPage />
                  </React.Suspense>
                )}
              />
              <Route
                path="/"
                element={(
                  <React.Suspense fallback={(<PageLoading />)}>
                    <ProductsPage />
                  </React.Suspense>
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
