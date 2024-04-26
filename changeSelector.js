module.exports = function changeSelector(selector) {
  // 解决样式覆盖问题
  switch (selector) {
    case ".ivu-btn:hover":
      return ".ivu-btn:hover:not(.ivu-btn-primary):not(.ivu-btn-error):not(.ivu-btn-info):not(.ivu-btn-success):not(.ivu-btn-warning):not(.ivu-btn-info):not(.ivu-btn-success)";
    case ".ivu-btn:active, .ivu-btn.active":
      return ".ivu-btn:active:not(.ivu-btn-primary):not(.ivu-btn-error):not(.ivu-btn-info):not(.ivu-btn-success):not(.ivu-btn-warning),.ivu-btn.active:not(.ivu-btn-primary):not(.ivu-btn-error):not(.ivu-btn-info):not(.ivu-btn-success):not(.ivu-btn-warning)";
    case ".ivu-btn:active":
      return ".ivu-btn:active:not(.ivu-btn-primary):not(.ivu-btn-error):not(.ivu-btn-info):not(.ivu-btn-success):not(.ivu-btn-warning)";
    case ".ivu-btn.active":
      return ".ivu-btn.active:not(.ivu-btn-primary):not(.ivu-btn-error):not(.ivu-btn-info):not(.ivu-btn-success):not(.ivu-btn-warning)";
    case ".ivu-btn:focus":
      return ".ivu-btn:focus:not(.ivu-btn-primary):not(.ivu-btn-error):not(.ivu-btn-info):not(.ivu-btn-success):not(.ivu-btn-warning)";
    default:
      return selector;
  }
};
