<template>
  <div id="app">
    <router-view></router-view>

    <Footer
      v-show="
        flag == (path == '/list' || path == '/search' || path == '/result')
          ? false
          : true
      "
    ></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer";

export default {
  data() {
    return {
      flag: true,
    };
  },
  name: "App",
  components: {
    Footer,
  },
  created() {},
  computed: {
    path() {
      return this.$route.path;
    },
  },
  mounted() {},
};
</script>

<style>
</style>
