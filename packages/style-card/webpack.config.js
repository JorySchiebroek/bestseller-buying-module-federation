const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { config, withPreviews } = require("../../webpack/webpack.mfe.config");

module.exports = withPreviews((usePreviews) => ({
  ...config,

  plugins: [
    ...config.plugins,
    new ModuleFederationPlugin({
      name: "style_card",
      library: { type: "var", name: "style_card" },
      filename: "styleCardRemoteEntry.js",
      exposes: {
        "./StyleCard": "./src/StyleCard",
        "./UpsellModal": "./src/UpsellModal",
      },
      // make dependencies eager for preview to work
      shared: [
        {
          react: { eager: usePreviews, singleton: true },
          "react-dom": { eager: usePreviews, singleton: true },
          "react-router-dom": { eager: usePreviews, singleton: true },
        },
      ],
      // shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
}));
