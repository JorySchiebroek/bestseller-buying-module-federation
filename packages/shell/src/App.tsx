import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

import { BuyingThemeProvider, BuyingThemeContext } from '@buying/library/components/BuyingThemeProvider';
import { PageLoading } from './PageLoading/PageLoading';

import { AnimatePresence, motion } from 'framer-motion';

import "./styles.css";

const StyleCard = lazy(() => import("style_card/StyleCard"));
const CollectionsPage = lazy(() => import("collections_page/CollectionsPage"));
const StylesPage = lazy(() => import("styles_page/StylesPage"));
const PurchaseOrdersPage = lazy(() => import("purchase_orders_page/PurchaseOrdersPage"));

export function App() {
  const [source, setSource] = useState<string | undefined>();
  const [styleNumber, setStyleNumber] = useState<number | undefined>(undefined);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => void setIsDarkMode((prev) => !prev);

  const handleOpenStyleCard = (newStyleNumber: number | undefined, newSrc?: string) => {
    setSource(newSrc);
    setStyleNumber(newStyleNumber);
  };

  return (
    <BuyingThemeProvider>
      <BuyingThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
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
                        <StylesPage setOpenStyleNumber={(newStyleNumber: number) => handleOpenStyleCard(newStyleNumber, 'styles')} />
                      </Suspense>
                    )}
                  />
                  <Route
                    path="/orders"
                    element={(
                      <Suspense fallback={(<PageLoading />)}>
                        <PurchaseOrdersPage setOpenStyleNumber={(newStyleNumber: number) => handleOpenStyleCard(newStyleNumber, 'purchase orders')} />
                      </Suspense>
                    )}
                  />
                </Routes>
                <Outlet />
                <AnimatePresence>
                  {!!styleNumber && (
                    <Suspense fallback="LOADING">
                      <motion.div
                        initial={{ width: 500, position: 'absolute', top: 100, right: -500 }}
                        animate={{ right: 100 }}
                        exit={{ right: -500 }}
                        transition={{ duration: 0.2 }}
                      >
                        <StyleCard src={source} styleNumber={styleNumber} onClose={() => void handleOpenStyleCard(undefined)} />
                      </motion.div>
                    </Suspense>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </BuyingThemeContext.Provider>
    </BuyingThemeProvider>
  );
}
