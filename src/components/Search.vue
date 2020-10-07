<template>
  <div class="search">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        autofocus="true"
      />
    </form>
    <div class="box1">
      <p class="p1">
        <span class="sp1">搜索历史</span>
        <van-icon name="delete" />
      </p>
      <p class="p2">
        <span class="sp2" @click="toresult($event)">智利干露</span>
        <span class="sp3" @click="toresult($event)">自行车</span>
      </p>
    </div>
    <div class="box2">
      <p class="p3">
        <span class="sp4">搜索发现</span>
        <van-icon name="replay" />
      </p>
      <p class="p4">
        <span class="sp5" @click="toresult($event)">智利干露</span>
        <span class="sp6" @click="toresult($event)">自行车</span>
        <span class="sp7" @click="toresult($event)">粉红女郎</span>
        <span class="sp8" @click="toresult($event)">进口红酒</span>
        <span class="sp9" @click="toresult($event)">纸巾</span>
        <span class="sp10" @click="toresult($event)">笔记本电脑</span>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
import { Search } from "vant";
import { Icon } from "vant";

Vue.use(Icon);
Vue.use(Search);
export default {
  data() {
    return {
      value: "",
      text:''
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
      history.go(-1);
    },
    toresult(e){
        this.text = e.target.innerHTML
        this.$router.push({
            path:"/result",
            query:{
                value:this.text
            }
        })
    }
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.search {
  margin: 0 10px;
  .p1,
  .p3 {
    font-size: 14px;
    margin: 5px 0px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
  }
  .p2,.p4{
      font-size: 13px;
      span{
          display:inline-block;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background: #F8F8F8;
          margin: 3px 10px;
          border-radius: 15px;
          padding: 0 10px;
      }
  }
}
</style>