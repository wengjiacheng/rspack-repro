import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import Vue from "vue";
import App from "./App.vue";
Vue.use(ViewUI);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
