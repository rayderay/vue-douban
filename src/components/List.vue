<template>
  <div class="list">
    <template v-for="item in items">
      <a class="thumbnail">
        <div class="content">
          <img
            :src="item.image_hlarge"
            alt="cover"
          >
          <h3>{{item.title}}</h3>
          <p>{{item.content | subStr}}</p>
        </div>
        <div class="author">
          <span class="name">{{item.category_name}}</span>
          <span
            class="label"
            v-if="item.subcategory_name"
          >
            本活动来自栏目 {{item.subcategory_name}}
          </span>
        </div>
      </a>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.list {
  .thumbnail {
    position: relative;
    display: block;
    padding: 2.5rem 1.8rem 2.5rem 0;
    margin-left: 1.8rem;
    .content {
      overflow: hidden;
      margin-bottom: 1rem;
      img {
        float: right;
        width: 25.6%;
        height: 8.63rem;
        margin-left: 2.5rem;
      }
      h3 {
        font-size: 1.7rem;
        margin: 0 0 0.6rem 0;
        text-align: justify;
      }
      p {
        color: #aaa;
        text-align: justify;
        font-size: 1.2rem;
      }
    }
    .author {
      .name {
        color: #ccc;
      }
      .label {
        color: #ccc;
        position: absolute;
        right: 1.8rem;
        bottom: 2.5rem;
      }
    }
  }

  .thumbnail ~ .thumbnail::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.1rem;
    content: "";
    background: #e3e3e3;
  }
}
</style>

<script>
export default {
  name: "list",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  filters: {
    subStr: function(value) {
      let newVal = value.replace(/<.*?>/g, "");
      return newVal.slice(0, 30);
    }
  }
};
</script>


