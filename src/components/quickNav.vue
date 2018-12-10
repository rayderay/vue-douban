<template>
  <div class="nav">
    <ul class="quickNav">
      <li>
        <a>影院热映</a>
      </li>
      <li>
        <a>欧洲新碟榜</a>
      </li>
      <li>
        <a>注册账号</a>
      </li>
      <li>
        <a>登录豆瓣</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  padding: 1rem 1rem;
  .quickNav {
    overflow: hidden;
    margin: 1rem 0;
    li {
      float: left;
      width: 49%;
      font-size: 1.5rem;
      padding: 0.2rem 0.1rem;
      a {
        display: block;
        max-width: 100%;
        padding: 1.2rem 0;
        line-height: 2rem;
        text-align: center;
        background-color: #f6f6f6;
        color: #494949;
      }
    }
  }
}
</style>

<script>
export default {
  name: "quick-nav",
  data() {
    return {};
  }
};
</script>


