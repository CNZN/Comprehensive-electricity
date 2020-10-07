<template>
  <div class="header1">
    <div class="box">
      <i id="i1" class="el-icon-microphone"></i>
      <div>
        <van-search
          v-model="value"
          shape="round"
          background="#ffffff"
          placeholder="请输入搜索关键词"
          @click="tosearch"

        />
      </div>
      <i id="i2" class="el-icon-camera-solid"></i>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";

Vue.use(Search);
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    tosearch(){
      this.$router.push({
        path:"/search"
      })
    }
  },
  components: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.box {
  color: #888888;
  background: #ffffff;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
#i1 {
  margin-left: 20px;
}
#i2 {
  margin-right: 20px;
}
</style>