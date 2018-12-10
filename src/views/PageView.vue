<template>
  <div class="page-view">
    <head-bar></head-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import headBar from "../components/HeadBar";
import quickNav from "../components/quickNav";
export default {
  name: "page-view",
  components: { headBar, quickNav },
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>

</style>



