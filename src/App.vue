<template>
<div class="id">
  <router-view ></router-view>
	<div class="tab">
		<div class="tab-item">
			<router-link to='/home' class="item">
				<img class="icon"  src="./common/img/bottom/icon-home.png">
				<p class="text">首页</p>
			</router-link>
		</div>
		<div class="tab-item" >
			<router-link to="/book" class="item">
				<img src="./common/img/bottom/icon-book.png">
				<p class="text">书影音</p>
			</router-link>
		</div>
		<div class="tab-item">
			<router-link to="/mine" class="item">
				<img src="./common/img/bottom/home-mine.png">
				<p class="text">我的</p>
			</router-link>
		</div>
	</div>
</div>
	
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.tab {
  position: fixed;
  display: flex;
  bottom: 0px;
  left: 0px;
  height: 40px;
  width: 100%;
  border-top: 1px solid #e6e6e6;
  .tab-item {
    flex: 1;
    text-align: center;
    .item {
      display: inline-block;
      width: 100px;
      .text {
        color: #a09b9b;
        font-size: 10px;
        -webkit-transform: scale(0.8);
        margin-top: -11px;
      }
    }
  }
}
</style>

