<template>
  <div class="video">
    <Header1></Header1>
    <van-sidebar v-model="activeKey" class="left">
      <van-sidebar-item title="标签名1" />
      <van-sidebar-item title="标签名2" />
      <van-sidebar-item title="标签名3" />
      <van-sidebar-item title="标签名1" />
      <van-sidebar-item title="标签名2" />
      <van-sidebar-item title="标签名3" />
      <van-sidebar-item title="标签名1" />
      <van-sidebar-item title="标签名2" />
      <van-sidebar-item title="标签名3" />
      <van-sidebar-item title="标签名1" />
      <van-sidebar-item title="标签名2" />
      <van-sidebar-item title="标签名3" />
      <van-sidebar-item title="标签名1" />
      <van-sidebar-item title="标签名2" />
      <van-sidebar-item title="标签名3" />
    </van-sidebar>

    <div style="height: 45px"></div>
  </div>
</template>

<script>
import Header1 from "../../components/Header1";
import Vue from "vue";
import { Sidebar, SidebarItem } from "vant";
Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
  name: "Video",
  components: {
    Header1,
  },
  data() {
    return {
      activeKey: 0,
    };
  },
  methods: {},
};
</script>

<style scoped>
.video{
  height: 50rem;
}
.left {
  height: 90%;
  overflow-y: auto;
}
</style>