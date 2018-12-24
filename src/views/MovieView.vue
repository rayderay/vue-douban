<template>
  <div class="movie-view has-header">
    <scroller
      type='hasCover'
      title='影院热映'
      :items='hotMovies'
    ></scroller>
    <scroller
      type='hasCover'
      title="免费在线观影"
      :items='topMovies'
    ></scroller>
    <scroller
      type='hasCover'
      title="新片速递"
      :items='newMovies'
    ></scroller>
    <scroller
      type='onlyString'
      title="发现好电影"
      :items='movieTags'
    ></scroller>
    <types></types>
  </div>
</template>

<script>
import { mapState } from "vuex";

import scroller from "../components/Scroller";
import Types from "../components/Types";
export default {
  name: "movie-view",
  components: { scroller, Types },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      hotMovies: state => state.movies.hotMovies,
      topMovies: state => state.movies.topMovies,
      newMovies: state => state.movies.newMovies,
      movieTags: state => state.movies.movieTags
    })
  },
  methods: {
    getMovie: function() {
      this.$store.dispatch("getMovie");
    }
  },
  created() {
    this.getMovie();
  }
};
</script>

<style lang="scss" scoped>
</style>


