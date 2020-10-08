<template>
  <div class="grid">
    <van-swipe
      :loop="false"
      :width="375"
      :height="200"
      indicator-color="#333333"
    >
      <van-swipe-item>
        <van-grid :border="true" :column-num="5" :clickable="true">
          <van-grid-item class="main" dot>
            <div class="box" style="background: #41de14">
              <p class="inner">超市</p>
            </div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box" style="background: #f6412d">
              <p class="inner">数码</p>
            </div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box" style="background: #a753ee">
              <p class="inner">服饰</p>
            </div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box" style="background: #f6412d">
              <p class="inner">生鲜</p>
            </div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box" style="background: #2caafd">
              <p class="inner">到家</p>
            </div>
            <p class="outer">京东超市</p>
          </van-grid-item>
        </van-grid>
        <van-grid :border="true" :column-num="5" :clickable="true">
          <van-grid-item class="main">
            <div class="box" style="background: red">
              <p class="inner">服务</p>
            </div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box" style="background: pink">
              <p class="inner">京豆</p>
            </div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box" style="background: #f86b3e">
              <p class="inner">领卷</p>
            </div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box" style="background: #2f3d78">
              <p class="inner">借钱</p>
            </div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box" style="background: #41e189">
              <p class="inner">会员</p>
            </div>
            <p class="outer">PLUS会员</p>
          </van-grid-item>
        </van-grid>
      </van-swipe-item>

      <van-swipe-item>
        <van-grid :border="false" :column-num="5">
          <van-grid-item class="main">
            <div class="box"><p class="inner">超市</p></div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box"><p class="inner">超市</p></div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box"><p class="inner">超市</p></div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box"><p class="inner">超市</p></div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box"><p class="inner">超市</p></div>
            <p class="outer">京东超市</p>
          </van-grid-item>
        </van-grid>
        <van-grid :border="false" :column-num="5">
          <van-grid-item class="main">
            <div class="box"><p class="inner">超市</p></div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box"><p class="inner">超市</p></div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box"><p class="inner">超市</p></div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box"><p class="inner">超市</p></div>
            <p class="outer">京东超市</p>
          </van-grid-item>
          <van-grid-item class="main">
            <div class="box"><p class="inner">超市</p></div>
            <p class="outer">京东超市</p>
          </van-grid-item>
        </van-grid>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-size: 12px;

  .box {
    border-radius: 50%;
    background: skyblue;
    width: 48px;
    height: 48px;
    .inner {
      line-height: 48px;
      text-align: center;
      color: white;
      font-weight: 900;
    }
  }
  .outer {
    line-height: 20px;
    text-align: center;
    font-weight: 600;
  }
}
</style>