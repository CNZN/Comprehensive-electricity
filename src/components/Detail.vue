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
      <p>价格:{{ item.price }}</p>
      <p>产品名:{{ item.title }}</p>
      <p>产品描述:{{ item.desc }}</p>
    </div>
    <!-- 弹出框 -->
    <div class="sku-container">
      <van-sku
        v-model="showBase"
        :sku="sku"
        :goods="goods_info"
        :goods-id="goods_id"
        :hide-stock="sku.hide_stock"
        :quota="quota"
        :quota-used="quota_used"
        :initial-sku="initialSku"
        reset-stepper-on-hide
        reset-selected-sku-on-hide
        disable-stepper-input
        :close-on-click-overlay="closeOnClickOverlay"
        :custom-sku-validator="customSkuValidator"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
      <!-- disable-stepper-input  数字框左右的数字框可以按 里面的数字不能手动输入 -->
      <!-- <van-button block type="primary" @click="showBase = true"> </van-button> -->
    </div>
    <!-- 底部加入购物车 -->
    <van-goods-action style="height: 50px; z-index: 2">
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="showBase = true"/>
      <van-goods-action-button type="danger" text="立即购买" @click="showBase = true"/>
    </van-goods-action>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "vant";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

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
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色",
            k_id: "1",
            v: [
              {
                id: "30349",
                name: "天蓝色",
                imgUrl:
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg",
              },
              {
                id: "1215",
                name: "白色",
              },
            ],
            k_s: "s1",
            count: 2,
          },
          {
            k: "尺寸",
            k_id: "2",
            v: [
              {
                id: "1193",
                name: "1",
              },
              {
                id: "1194",
                name: "2",
              },
            ],
            k_s: "s2",
            count: 2,
          },
        ],
        // 所有 sku 的组合列表，如下是：白色1、白色2、天蓝色1、天蓝色2
        list: [
          {
            id: 2259,
            price: 120, //价格
            discount: 122,
            s1: "1215",
            s2: "1193",
            s3: "0",
            s4: "0",
            s5: "0",
            stock_num: 20, //库存
            goods_id: 946755,
          },
          {
            id: 2260,
            price: 110,
            discount: 112,
            s1: "1215",
            s2: "1194",
            s3: "0",
            s4: "0",
            s5: "0",
            stock_num: 2, //库存
            goods_id: 946755,
          },
          {
            id: 2257,
            price: 130,
            discount: 132,
            s1: "30349",
            s2: "1193",
            s3: "0",
            s4: "0",
            s5: "0",
            stock_num: 40, //库存
            goods_id: 946755,
          },
          {
            id: 2258,
            price: 100,
            discount: 100,
            s1: "30349",
            s2: "1194",
            s3: "0",
            s4: "0",
            s5: "0",
            stock_num: 50, //库存
            goods_id: 946755,
          },
        ],
        price: "5.00", //？？
        stock_num: 227, // 商品总库存？？
        none_sku: false, // 是否无规格商品 false正常显示那些可供选择的标准，此处是颜色和尺寸
        hide_stock: false, // 是否隐藏剩余库存 false正常显示剩余多少件的那个库存
      },
      goods_id: "946755",
      quota: 3, //限购数量 库存旁边显示限购数
      quota_used: 0, //已经购买过的数量 和下方的数字选择框显示不一样 与限购数量是相对应的 0数字选择框显示3   1 -- 2   2 -- 1  3 -- 0
      goods_info: {
        title: "测试商品A",
        picture:
          "https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg", //图片这个我有点混乱
      },
      initialSku: {
        s1: "0001",
        s2: "1001",
        selectedNum: 1,
      },
      showBase: false, //sku的框的显示
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true, //点击空白处关闭购物框
      // initialSku: {
      //   s1: "30349",
      //   s2: "1193",
      //   selectedNum: 3, //下面的数字选择框的数字即买了多少件
      // },
      customSkuValidator: () => "请选择xxx!", //？？
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
        this.images.unshift(this.baseurl + this.item.img);
      });
    },
    onBuyClicked(sku) {
      this.$toast("buy:" + JSON.stringify(sku));
      console.log(JSON.stringify(sku));
    },

    onAddCartClicked(sku) {
      this.$toast("add cart:" + JSON.stringify(sku));
    },
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
    width: 90%;
    height: 305px;
  }
}
</style>