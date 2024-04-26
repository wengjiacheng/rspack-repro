const ThemeColorReplacer = require("./skin-utils/src/index");
const { getElementUISeries } = require("./skin-utils/forElementUI");
const extrasColor = require("./extraCssvars");
const changeSelector = require("./changeSelector");
const themePluginOption = {
  fileName: "css/theme-colors.[contenthash:8].css",
  matchColors: getElementUISeries("#2d8cf0").concat(Object.values(extrasColor)),
  // 解决history模式下路由跳转样式不生效问题
  injectCss: true,
  changeSelector(selector, util) {
    // 解决样式覆盖问题
    return changeSelector(selector, util);
  },
};
const createThemeColorReplacerPlugin = () =>
  new ThemeColorReplacer(themePluginOption);

module.exports = createThemeColorReplacerPlugin;
