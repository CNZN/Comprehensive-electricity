<template>
  <div class="mine">
    <Header2 title="发现"></Header2>

    <ul>
      <li>
        <div class="item" v-for="(item, index) in hallImg" :key="index">
          <img :src="item" alt="" />
        </div>
        <van-uploader :after-read="onRead2" class="upimg">
          <van-icon name="plus" />
        </van-uploader>
      </li>
    </ul>

    {{ hallImg }}

    <el-calendar v-model="value"> </el-calendar>

    <div style="height: 100px"></div>
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
      hallImg: [],
    };
  },

  methods: {
    onRead2(file) {
      let content = file.file;
      let data = new FormData();
      data.append("avatar", content);
      this.$http.post("/upload", data).then((res) => {
        // console.log(res)
        let datas = res.path;
        // console.log(datas)
        this.hallImg.push(`http://localhost:7777/${datas}`);
        // console.log(this.hallImg)
      });
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.upimg {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 100px;
}
img {
  width: 100px;
  height: 100px;
}
</style>