<template>
  <div class="movieTypes">
    <h2>分类浏览</h2>
    <div class="content">
      <ul>
        <li v-for="item in items">
          <a :href=" baseUrl + item.href">
            {{item.title}}
            <span></span>
          </a>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>


