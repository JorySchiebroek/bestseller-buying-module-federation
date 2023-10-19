import React, { lazy } from "react";
import { Button } from "@buying/library/components/Button";

export default function PurchaseOrdersPage({ setOpenStyleNumber }) {
  return (
    <div>
      <h1>Purchase Orders Page</h1>
      <Button onClick={() => setOpenStyleNumber(1111)}>Open style 1111</Button>
    </div>
  );
}
