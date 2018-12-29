<template>
  <div class="group-view has-header">
    <group
      title="租房找室友"
      :items="group_a"
    >
      <a
        class="list-link"
        href="#"
        slot="more"
      >更多相关小组</a>
    </group>
    <group
      title="来聊五块钱"
      :items="group_b"
    >
      <a
        class="list-link"
        href="#"
        slot="more"
      >来聊五块钱</a>
    </group>
    <group
      title="买买买"
      :items="group_c"
    >
      <a
        class="list-link"
        href="#"
        slot="more"
      >更多相关小组</a>
    </group>
    <download-app></download-app>
  </div>
</template>

<script>
import Group from "../components/Group";
import { mapState } from "vuex";

import DownloadApp from "../components/DownloadApp";
export default {
  name: "group-view",
  data() {
    return {};
  },
  components: { Group, DownloadApp },
  computed: {
    // Getting Vuex State from store/modules/group
    ...mapState({
      group_a: state => state.groups.group_a,
      group_b: state => state.groups.group_b,
      group_c: state => state.groups.group_c
    })
  },
  created: function() {
    // Dispatching getGroup on created
    this.$store.dispatch("getGroup");
  }
};
</script>

<style lang="scss" scoped>
.list-link {
  display: block;
  margin-bottom: 3rem;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  line-height: 1.8rem;
  text-align: center;
  color: #42bd56;
}

.user-bar {
  margin-bottom: 1.5rem;
}
</style>


