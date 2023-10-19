const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { config, withPreviews } = require("../../webpack/webpack.mfe.config");

module.exports = withPreviews({
  ...config,

  plugins: [
    new ModuleFederationPlugin({
      name: "styles_page",
      library: { type: "var", name: "styles_page" },
      filename: "stylesPageRemoteEntry.js",
      exposes: {
        "./StylesPage": "./src/StylesPage",
      },
      remotes: {
        app_billing: "app_billing",
        style_card: "style_card",
      },
      // shared: [{ react: { singleton: true }, "react-dom": { singleton: true } }],
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
});
