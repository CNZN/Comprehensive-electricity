<template>
  <div class="footer">
    <ul>
      <router-link tag="li" to="/index">
        <div class="box">
          <van-icon class="icon" name="smile" />
          <span>首页</span>
        </div>
      </router-link>
      <router-link tag="li" to="/find">
        <div class="box">
          <van-icon class="icon" name="play-circle" />
          <span>发现</span>
        </div>
      </router-link>
      <router-link tag="li" to="/classify">
        <div class="box">
          <van-icon class="icon" name="music" />
          <span>分类</span>
        </div>
      </router-link>
      <router-link tag="li" to="/car">
        <div class="box">
          <van-icon class="icon" name="friends" />
          <span>购物车</span>
        </div>
      </router-link>
      <router-link tag="li" to="/mine">
        <div class="box">
          <van-icon class="icon" name="manager" />
          <span>我的</span>
        </div>
      </router-link>
    </ul>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
  position: fixed;
  background: white;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  li {
    float: left;
    list-style: none;
    width: 20%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    &.active {
      color: red;
      font-size: 18px;
    }
    .box{
      font-size: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon{
        font-size: 24px;
      }
    }
  }
}
</style>