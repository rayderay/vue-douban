<template>
  <div class="id">
    <router-view class="view"></router-view>
    <router-view class="view" name="subject"></router-view>
    <router-view class="view" name="search"></router-view>
  </div>
</template>
  

<script>
export default {
  name: "app"
};
</script>

<style lang="scss" >
html {
  font-size: 62.5%;
}

#app {
  max-width: 41.2rem;
  margin: 0 auto;
}

.has-header {
  margin-top: 4.8rem;
}

h2 {
  font-size: 1.68rem;
  font-weight: normal;
  color: #111;
}

ul,
li,
a,
h2 {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  margin: 0;
  padding: 0;
}
</style>

