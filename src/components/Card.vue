<template>
  <div class="card">
    <div class="list">
      <ul>
        <li>
          <div>
            <div class="desc">
              <a href="/">
                <img src="https://img1.doubanio.com/icon/up52991663-7.jpg">
              </a>
              <a>
                <div class="user-info">
                  <span class="user-name">Jesse</span><span style="color:#aaa"> say</span>
                  <div class="time">2018-12-25 14:52:54</div>
                </div>
              </a>
            </div>
            <div class="content">
              light up the darkness
            </div>
          </div>
          <div class="info">
            <span class="btn like"><i>4</i></span>
            <span class="btn comment"><i>0</i></span>
            <span class="btn retweet"><i>1</i></span>
            <span class="btn more"></span>
          </div>
        </li>
        <li>
          <div>
            <div class="desc">
              <a href="/">
                <img src="https://img1.doubanio.com/icon/up52991663-7.jpg">
              </a>
              <a>
                <div class="user-info">
                  <span class="user-name">Jesse</span><span style="color:#aaa"> say</span>
                  <div class="time">2018-12-25 14:52:54</div>
                </div>
              </a>
            </div>
            <div class="content">
              light up the darkness
            </div>
          </div>
          <div class="info">
            <span class="btn like"><i>4</i></span>
            <span class="btn comment"><i>0</i></span>
            <span class="btn retweet"><i>1</i></span>
            <span class="btn more"></span>
          </div>
        </li>
        <li>
          <div>
            <div class="desc">
              <a href="/">
                <img src="https://img1.doubanio.com/icon/up52991663-7.jpg">
              </a>
              <a>
                <div class="user-info">
                  <span class="user-name">Jesse</span><span style="color:#aaa"> say</span>
                  <div class="time">2018-12-25 14:52:54</div>
                </div>
              </a>
            </div>
            <div class="content">
              light up the darkness
            </div>
          </div>
          <div class="info">
            <span class="btn like"><i>4</i></span>
            <span class="btn comment"><i>0</i></span>
            <span class="btn retweet"><i>1</i></span>
            <span class="btn more"></span>
          </div>
        </li>
        <li>
          <div>
            <div class="desc">
              <a href="/">
                <img src="https://img1.doubanio.com/icon/up52991663-7.jpg">
              </a>
              <a>
                <div class="user-info">
                  <span class="user-name">Jesse</span><span style="color:#aaa"> say</span>
                  <div class="time">2018-12-25 14:52:54</div>
                </div>
              </a>
            </div>
            <div class="content">
              light up the darkness
            </div>
          </div>
          <div class="info">
            <span class="btn like"><i>4</i></span>
            <span class="btn comment"><i>0</i></span>
            <span class="btn retweet"><i>1</i></span>
            <span class="btn more"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "care",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.list {
  position: relative;
  ul {
    display: block;
    overflow: hidden;
    li {
      position: relative;
      padding-bottom: 1rem;
      margin-left: 2rem;
      margin-top: 2rem;
      padding-left: 4rem;
      margin-right: 2rem;
      .desc {
        margin-left: -4rem;
        a {
          display: inline-block;
          vertical-align: text-top;
        }
        img {
          width: 4rem;
          height: 4rem;
          margin-right: 1rem;
          border-radius: 50%;
          vertical-align: text-top;
        }
        .user-name {
          font-size: 1.4rem;
          font-weight: bolder;
        }
        .time {
          color: #aaa;
        }
      }
      .content {
        padding-left: 1.5rem;
      }
    }
    .info {
      padding-left: 1.5rem;
      margin-top: 2rem;
      span {
        margin-right: 2rem;
        font-size: 1rem;
      }

      .like::before {
        background: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg);
      }

      .comment::before {
        background: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg);
      }

      .retweet::before {
        background: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg);
      }

      .more::before {
        background: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg);
        background-repeat: no-repeat;
        background-position: center center;
        margin-bottom: -0.2rem;
      }

      .more {
        float: right;
        margin-right: 0;
      }

      i {
        font-style: normal;
        color: #ccc;
        margin-left: 0.3rem;
        margin-top: -0.3rem;
      }
    }
  }
  li::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #e8e8e8;
    -webkit-transform: scaleY(0.5);
    content: "";
    position: absolute;
    -webkit-transform-origin: 0 bottom;
  }
  .btn::before {
    content: "";
    width: 1rem;
    height: 1rem;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
    margin-bottom: -0.4rem;
  }
}
</style>


