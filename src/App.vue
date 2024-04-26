<template>
  <Button @click="handleClick" type="primary">换色</Button>
</template>

<script>
import client from "../skin-utils/client";
import { getElementUISeries } from "../skin-utils/forElementUI";
const extrasColors = require("../extraCssvars");
export default {
  data() {
    return {
      check: true,
    };
  },
  methods: {
    toggleTheme(primaryColor) {
      const colors = getElementUISeries(primaryColor).concat(
        Object.values(extrasColors)
      );
      const options = {
        newColors: colors,
        changeUrl(cssUrl) {
          return `/${cssUrl}`;
        },
      };
      client.changer.changeColor(options, Promise).then(() => {
        console.log("Theme change!!!");
      });
    },
    handleClick() {
      this.check = !this.check;
      this.toggleTheme(this.check ? "#2d8cf0" : "#e72733");
    },
  },
};
</script>

<style></style>
