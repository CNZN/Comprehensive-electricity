<template>
  <div class="car">
    <van-tabs v-model="active">
      <van-tab title="全部">
        全部
        {{list}}
      </van-tab>
      <van-tab title="降价">降价</van-tab>
      <van-tab title="常买">常买</van-tab>
      <van-tab title="分类">分类</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import { mapState } from "vuex"
Vue.use(Tab);
Vue.use(Tabs);
export default {
  name: "Car",
  components: {},
  data() {
    return {
      active: 0,
      list:''
    };
  },
  computed:{
    ...mapState(['goods'])
  },
  created(){
    this.list = JSON.parse(localStorage.getItem('goods'))
  }
};
</script>

<style>
</style>