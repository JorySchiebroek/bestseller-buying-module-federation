import { useContext } from "react";

import { Button } from "@buying/library/components/Button";
import { BuyingThemeContext, useBuyingTheme } from "@buying/library/components/BuyingThemeProvider";

export default function CollectionsPage() {
  // const { isDarkMode, toggleTheme } = useBuyingTheme();
  const { isDarkMode, toggleTheme } = useContext(BuyingThemeContext);
  return (
    <div>
      <h1>Collections Page</h1>
      <p>isDarkMode: {String(isDarkMode)}</p>
      <Button onClick={() => toggleTheme()}>toggle dark mode</Button>
    </div>
  );
}
