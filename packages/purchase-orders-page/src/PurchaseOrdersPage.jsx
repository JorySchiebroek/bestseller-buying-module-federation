import React, { lazy } from "react";
import { Button } from "@buying/library/components/Button";

const StyleCard = lazy(() => import("style_card/StyleCard"));

export default function PurchaseOrdersPage({ openStyleNumber, setOpenStyleNumber }) {
  return (
    <div>
      <h1>Purchase Orders Page</h1>
      <Button onClick={() => setOpenStyleNumber(1111)}>Open style 1111</Button>
      {!!openStyleNumber && (
        <React.Suspense fallback="LOADING">
          <div>
            <StyleCard src="purchase orders" styleNumber={openStyleNumber} onClose={() => void setOpenStyleNumber(null)} />
          </div>
        </React.Suspense>
      )}
    </div>
  );
}
