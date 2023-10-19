const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { config, withPreviews } = require("../../webpack/webpack.mfe.config");

module.exports = withPreviews({
  ...config,

  plugins: [
    new ModuleFederationPlugin({
      name: "collections_page",
      library: { type: "var", name: "collections_page" },
      filename: "collectionsPageRemoteEntry.js",
      exposes: {
        "./CollectionsPage": "./src/CollectionsPage",
      },
      // shared: [{ react: { singleton: true }, "react-dom": { singleton: true } }],
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
});
