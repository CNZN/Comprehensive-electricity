<template>
  <div class="datail">
    <el-page-header @back="goBack" content="详情页面"> </el-page-header>
    <div class="lunbo">
      <van-swipe @change="onChange">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <img :src="item" alt="" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </div>
    <!-- 价格 标题 -->
    <div class="detail">
      <p class="p1">￥{{ item.price }}</p>
      <p class="p2">产品名:{{ item.title }}</p>
      <p class="p3">
        <span class="p31">自营</span>
        <span class="p32">{{ item.desc }}</span>
      </p>
      <van-button type="primary" size="large" class="btn"
        @click="toclassify">京东超市！一站式圈生活好物！</van-button
      >
      <van-tabs @click="onClick">
        <van-tab title="评论">内容 1</van-tab>
        <van-tab title="详情">内容 2</van-tab>
      </van-tabs>
      <div style="heigth: 50px"></div>
    </div>
    <!-- 弹出框 -->
    <van-action-sheet v-model="show" title="详情">
      <div class="content">
        <img :src="img" alt="" style="height: 200px" />
        <van-stepper
          v-model="value"
          @change="shownum"
          input-width="40px"
          button-size="32px"
        />
        <button
          style="
            width: 200px;
            height: 50px;
            border-radius: 25px;
            border: none;
            background: #c92519;
            color: white;
          "
          @click="add"
        >
          添加购物车
        </button>
      </div>
    </van-action-sheet>
    <!-- 底部加入购物车 -->
    <van-goods-action style="z-index: 2">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button
        type="danger"
        text="加入购物车"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "vant";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
import { mapMutations } from "vuex";
import { Toast } from "vant";
import { Stepper } from "vant";
import { getToken } from "../utils/auth";
import { Dialog } from "vant";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Stepper);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Lazyload);

export default {
  data() {
    return {
      id: "",
      item: "",
      baseurl: "http://localhost:7777/",
      current: 0,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
      ],
      show: false,
      img: "",
      value: 1,
      active: 1,
    };
  },
  methods: {
    goBack() {
      history.go(-1);
    },
    onChange(index) {
      this.current = index;
    },
    getsomeone() {
      this.$http.get(`/someone/${this.id}`).then((res) => {
        this.item = res.list;
        this.img = this.baseurl + this.item.img;
        this.images.unshift(this.baseurl + this.item.img);
      });
    },
    onClickIcon() {
      Toast("😊😊😊😊");
      this.$router.push({ path: "/car" });
    },
    onClickButton() {
      this.show = true;
      Toast("请选择");
    },
    shownum() {
      // console.log(this.value);
    },
    ...mapMutations(["goods"]),
    add() {
      if (getToken()) {
        var obj = {};
        obj.id = this.id;
        obj.num = this.value;
        this.goods(obj);
        this.show = false;
        Toast("添加成功");
      } else {
        Dialog.confirm({
          title: "提示",
          message: "您还未登录，需要现在登陆吗??",
        })
          .then(() => {
            this.$router.push({
              path: "/mine",
              // query: {
              //   id: id,
              // },
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消",
            });
          });
      }
    },
    onClick(name, title) {
      Toast(title);
    },
    toclassify(){
      this.$router.push({
        path:'/classify'
      })
    }
  },
  created() {
    (this.id = this.$route.params.id), this.getsomeone();
  },
};
</script>
<style lang="scss" scoped>
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.lunbo {
  img {
    width: 99%;
    border-radius: 5px;
  }
}
.content {
  padding: 16px 16px 160px;
}
.datail {
  margin: 5px 10px;
  font-size: 14px;
  .p1 {
    font-size: 22px;
    color: #e51c23;
  }
  .p2 {
    color: #e51c23;
    font-size: 12px;
    margin: 5px 0;
  }
  .p3 {
    font-size: 13px;
    line-height: 19px;
    margin: 0 0 20px 0;
    .p31 {
      display: inline-block;
      color: white;
      background: #e51c23;
      padding: 0 5px;
      margin: 0 5px 0 0;
    }
  }
  .btn {
    background: #f8520d;
    height: 35px;
    font-size: 14px;
    border: none;
  }
}
</style>