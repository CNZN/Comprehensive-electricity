<template>
  <div class="friend"  ref="scrollDiv">
    <Header1></Header1>
    <Lunbo></Lunbo>
    <Grid></Grid>
    <div class="list">
      <div class="cutdown">
        <div class="cut1">
          京东秒杀
          <van-count-down :time="time" style="margin-left: 20px">
            <template #default="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
        <div class="cut2">
          <van-grid :border="true" :column-num="3" :clickable="true">
            <van-grid-item class="cut21">
              <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
              <p class="p1">￥6669</p>
              <p class="p2">￥8889</p>
            </van-grid-item>
            <van-grid-item class="cut21">
              <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
              <p class="p1">￥6669</p>
              <p class="p2">￥8889</p>
            </van-grid-item>
            <van-grid-item class="cut21">
              <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
              <p class="p1">￥6669</p>
              <p class="p2">￥8889</p>
            </van-grid-item>
          </van-grid>
        </div>
      </div>

      <div class="find">
        <p>发现好货</p>
        <p style="color: #41e189; font-size: 12px; margin-top: 10px">
          品质新生活
        </p>
        <van-grid :border="true" :column-num="2" :clickable="true">
          <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          </van-grid-item>
        </van-grid>
      </div>
    </div>

    <div class="brand">
      <div>
        <p class="bp1">品牌秒杀</p>
        <p class="bp2">品质好物秒</p>
        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="" />
      </div>
      <div>
        <p class="bp1">品质秒杀</p>
        <p class="bp3">低至1588</p>
        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="" />
      </div>
      <div>
        <p class="bp1">新品首发</p>
        <p class="bp4">华为智慧屏</p>
        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="" />
      </div>
      <div>
        <p class="bp1">排行榜</p>
        <p class="bp5">跟榜购好物</p>
        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="" />
      </div>
    </div>

    <Tapbar></Tapbar>
    <router-view></router-view>
    <Totop></Totop>

    <div class="theLast"></div>
  </div>
</template>

<script>
import Header1 from "../../components/Header1";
import Lunbo from "./detail/Lunbo";
import Totop from "../../components/Totop";
import Grid from "./detail/Grid";
import Tapbar from "./tapbar/Tapbar";
export default {
  name: "Friend",
  components: {
    Header1,
    Lunbo,
    Grid,
    Tapbar,
    Totop,
  },
  data() {
    return {
      data: [],
      time: 300 * 60 * 60 * 1000,
    };
  },
  methods: {
    // scrollEvent() {
    //   console.log(this.$refs.scrollDiv.scrollTop);
    // },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.list {
  min-height: 166px;
  margin-top: 25px;
  display: flex;
  font-size: 14px;
  .cutdown {
    width: 50%;
    display: flex;
    flex-direction: column;
    .cut1 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cut2 {
      .cut21 {
        // display: flex;
        font-size: 12px;
        .p2 {
          text-decoration: line-through;
        }
      }
    }
  }
  .find {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
}
.brand {
  display: flex;
  div {
    width: 25%;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
    }
    .bp1 {
      font-size: 16px;
      color: black;
      text-align: center;
    }
  }
}
.bp2 {
  font-size: 12px;
  color: #f99104;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.bp3 {
  font-size: 12px;
  color: #f73118;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.bp4 {
  font-size: 12px;
  color: #2caafd;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.bp5 {
  font-size: 12px;
  color: #a753ee;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.theLast {
  height: 50px;
}
// .totop {
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background: #eeeeee;
//   position: fixed;
//   bottom: 60px;
//   right: 10px;
//   text-align: center;
//   line-height: 60px;
// }
</style>