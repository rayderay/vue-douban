<template>
  <div class="broadcast-view has-header">
    <div class="banner">
      <div class="banner_bg">
        <img
          src="../assets/promotion_bg.jpg"
          alt="cover"
        >
      </div>
      <div class="banner_wrapper">
        <div class="wrapper_inner">
          <div class="promo_title">
            <span>打开App，回复广播</span>
          </div>
          <div class="bottom_wrapper">
            <a class="download">极速下载</a>
            <a class="open">打开</a>
          </div>
        </div>
      </div>
    </div>

    <card></card>
    <download-app></download-app>
  </div>
</template>

<script>
import Card from "../components/Card";
import DownloadApp from "../components/DownloadApp";
export default {
  name: "broadcast-view",
  components: { Card, DownloadApp },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 6.5rem;
  .banner_bg {
    position: absolute;
    img {
      max-width: 100%;
    }
  }
  .banner_wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 18px;
    right: 10px;
    display: flex;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    .wrapper_inner {
      vertical-align: middle;
      .promo_title {
        display: inline-block;
      }
      span {
        font-size: 1.4rem;
        line-height: 2.2rem;
      }
    }
    .bottom_wrapper {
      display: inline-block;
      margin-left: 1rem;
      .download {
        color: #fff;
        border: 1px solid #42db56;
        background: #42db56;
        font-size: 1.3rem;
        width: auto;
        padding: 0 14px;
        position: relative;
        display: inline-block;
        border-radius: 3px;
        line-height: 2;
      }
      .open {
        color: #42db56;
        border: 1px solid #42db56;
        font-size: 1.3rem;
        width: auto;
        padding: 0 14px;
        position: relative;
        display: inline-block;
        border-radius: 3px;
        line-height: 2;
      }
    }
  }
}
</style>




