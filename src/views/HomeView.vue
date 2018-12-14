<template>
  <div class="home-view has-header">
    <quick-nav></quick-nav>
    <list :items="events"> </list>
    <infinite-loading
      :on-infinite="onInfinite"
      ref="infiniteLoading"
    >
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import quickNav from "../components/quickNav";
import List from "../components/List";
import Loading from "../components/Loading";
import InfiniteLoading from "vue-infinite-loading";
export default {
  components: { quickNav, List, Loading, InfiniteLoading },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      events: state => state.activities.events
    })
  },
  methods: {
    onInfinite() {
      setTimeout(() => {
        this.loadMore();
        this.$refs.infiniteLoading.$emit("$InfiniteLoading:loaded");
      }, 1000);
    },
    ...mapActions(["loadMore"])
  }
};
</script>
<style lang="sass" scoped>

</style>

