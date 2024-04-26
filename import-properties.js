const colors = require("./extraCssvars");
const primaryColors = {
  "--c-primary-color": "#e72733",
  "--c-primary-click-bg": "#b91f29",
  "--c-primary-hover-bg": "#ec525c",
};
module.exports = {
  customProperties: { ...colors, ...primaryColors },
};
