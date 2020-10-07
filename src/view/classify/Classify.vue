<template>
  <div class="classify">
    <Header1 class="45px"></Header1>
    <van-tree-select
      height="150vw"
      :items="items"
      :main-active-index.sync="active"
    >
      <template #content>
        <List v-if="active === 0"></List>
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
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>