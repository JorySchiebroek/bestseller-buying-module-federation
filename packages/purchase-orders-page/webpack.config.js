const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { config, withPreviews } = require("../../webpack/webpack.mfe.config");

module.exports = withPreviews({
  ...config,

  plugins: [
    new ModuleFederationPlugin({
      name: "purchase_orders_page",
      library: { type: "var", name: "purchase_orders_page" },
      filename: "purchaseOrdersPageRemoteEntry.js",
      exposes: {
        "./PurchaseOrdersPage": "./src/PurchaseOrdersPage",
      },
      remotes: {
        style_card: "style_card",
      },
      // shared: [{ react: { singleton: true }, "react-dom": { singleton: true } }],
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
});
