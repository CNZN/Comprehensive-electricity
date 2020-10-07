<template>
  <div class="result">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <List></List>
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";
import { Toast } from "vant";
import List from "./List"
Vue.use(Search);
export default {
  data() {
    return {
      value: "",
    };
  },
  components:{
      List
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
      history.go(-1)
    },
  },
  created(){
      this.value = this.$route.query.value
  }
};
</script>

<style>
</style>