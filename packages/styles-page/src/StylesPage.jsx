import React, { lazy, useState } from "react";
import { Button } from "@buying/library/components/Button";

const StyleCard = lazy(() => import("style_card/StyleCard"));

export default function StylesPage({ setOpenStyleNumber }) {
  return (
    <div>
      <h1>Styles Page</h1>
      <Button onClick={() => setOpenStyleNumber(1111)}>Open style 1111</Button>
      <Button onClick={() => setOpenStyleNumber(2222)}>Open style 2222</Button>
    </div>
  );
}
