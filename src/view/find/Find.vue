<template>
  <div class="mine">
    <Header2 title="发现"></Header2>
    <el-calendar v-model="value"> </el-calendar>
  </div>
</template>

<script>
import Header2 from "../../components/Header2";
export default {
  name: "Mine",
  components: {
    Header2,
  },
  data() {
    return {
      value: new Date(),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>