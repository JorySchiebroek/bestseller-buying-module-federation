import React, { lazy, useState } from "react";
import { Button } from "@joryschiebroek/ds/components/Button";

const StyleCard = lazy(() => import("style_card/StyleCard"));

export default function PurchaseOrdersPage() {
  const [openStyleNumber, setOpenStyleNumber] = useState();

  return (
    <div>
      <h1>Purchase Orders Page</h1>
      <Button onClick={() => setOpenStyleNumber(1111)}>Open style 1111</Button>
      {!!openStyleNumber && (
        <React.Suspense fallback="LOADING">
          <div>
            <StyleCard src="purchase orders" styleNumber={openStyleNumber} />
          </div>
        </React.Suspense>
      )}
    </div>
  );
}
