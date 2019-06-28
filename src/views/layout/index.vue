<template>
  <div class="app-wrap">
    <navbar/>
    <app-main/>
    <footers/>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
import AppMain from "./components/AppMain";
import Footers from "./components/Footers";

export default {
  name: "Layout",
  components: { Navbar, AppMain, Footers },
  data: function(){
    return {
      menuType: 1
    }
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.app-wrap {
  max-width: 1920px;
  margin: 0 auto;
}
</style>