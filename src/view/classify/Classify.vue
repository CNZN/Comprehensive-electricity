<template>
  <div class="classify">
    <Header1 class="45px"></Header1>
    <van-tree-select
      height="calc(667px - 90px)"
      :items="items"
      :main-active-index.sync="active"
      class="box"
    >
      <template #content class="inner">
        <div v-if="active === 0">
          <p v-for="item in datalist" :key="item.price" @click="todetail(item._id)">
            <img :src="item.img" alt="" v-if="item.title" style="margin:10px;"/>
            <span>{{item.title}}</span>
          </p>
          <div style="height:20px;"></div>
        </div>
        <van-image
          v-if="active === 1"
          src="https://img.yzcdn.cn/vant/apple-1.jpg"
        />
        <List v-if="active === 2"></List>
        <van-image
          v-if="active === 3"
          src="https://img.yzcdn.cn/vant/apple-2.jpg"
        />
        <List v-if="active === 4"></List>
        <van-image
          v-if="active === 5"
          src="https://img.yzcdn.cn/vant/apple-3.jpg"
        />
        <List v-if="active === 6"></List>
        <van-image
          v-if="active === 7"
          src="https://img.yzcdn.cn/vant/apple-4.jpg"
        />
        <List v-if="active === 8"></List>
        <van-image
          v-if="active === 9"
          src="https://img.yzcdn.cn/vant/apple-5.jpg"
        />
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import Header1 from "../../components/Header1";
import List from "../../components/List";
import Vue from "vue";
import { TreeSelect } from "vant";

Vue.use(TreeSelect);
export default {
  name: "Classify",
  components: {
    Header1,
    List,
  },
  data() {
    return {
      active: 0,
      items: [
        { text: "推荐分类" },
        { text: "京东超市" },
        { text: "国际名牌" },
        { text: "奢侈品" },
        { text: "海屯全球" },
        { text: "唯品会" },
        { text: "男装" },
        { text: "女装" },
        { text: "女鞋" },
        { text: "内衣配饰" },
        { text: "男装" },
        { text: "女装" },
        { text: "女鞋" },
        { text: "内衣配饰" },
      ],
      datalist: null,
      baseurl: "http://localhost:7777/",
    };
  },
  methods: {
    getlist() {
      this.$http.get("/allinfo").then((res) => {
        this.datalist = res.goodslist;
        this.datalist.forEach((item) => {
          item.img = this.baseurl + item.img;
        });
      });
    },
    todetail(id) {
      this.$router.push({
        path:'/detail/'+id
      })
    },
  },
  mounted() {
    this.getlist();
  },
};
</script>

<style lang="scss" scoped>
img{width: 100px;border-radius: 5px;}
</style>