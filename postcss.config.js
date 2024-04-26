const path = require("path");
module.exports = {
  plugins: {
    "postcss-custom-properties": {
      preserve: false,
      importFrom: path.resolve(__dirname, "./import-properties.js"),
    },
  },
};
