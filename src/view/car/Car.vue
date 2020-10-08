<template>
  <div class="car">
    <van-tabs v-model="active">
      <van-tab title="全部">
        <div v-if="flag == true">
          <p>空空如也</p>
          <p>您还未登录哦</p>
          <p @click="tologin">现在去登录</p>
        </div>
        <div v-else>
          <ul>
            <li v-for="item in data" :key="item._id" class="son">
              <label>
                <input type="checkbox" v-if="item._id" />
              </label>
              <img :src="item.img" alt="" />
              <div>
                <p>{{ item.desc }}</p>
                <p>{{ item.title }}</p>
                <p>
                  单价：￥{{ item.price }}
                  <van-stepper v-model="item.num" />
                </p>
              </div>
              <button class="bbbtn" >删除</button>
            </li>
          </ul>
          <van-submit-bar
            :price="3050"
            button-text="提交订单"
            style="position: fixed; bottom: 50px"
          >
            <van-checkbox >全选</van-checkbox>
          </van-submit-bar>
          <div style="height: 100px"></div>
        </div>
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
import { mapState } from "vuex";
import { getToken } from "../../utils/auth";
import { Checkbox, CheckboxGroup } from "vant";
import { Stepper } from "vant";

Vue.use(Stepper);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Tab);
Vue.use(Tabs);
export default {
  name: "Car",
  components: {},
  data() {
    return {
      active: 0,
      list: "",
      lists: "",
      flag: true,
      checked: true,
      data: "",
      datas: "",
    };
  },
  computed: {
    ...mapState(["goods"]),
    // checkAll: {
    //   // 手动改变checkAll的值时触发set
    //   set(v) {
    //     console.log(v);
    //     this.list.forEach((item) => (item.checked = v));
    //   },
    //   // 当所依赖的数据list发生改变之后会触发get操作，重新计算当前checkAll的值
    //   get() {
    //     // console.log(this.list.length)
    //     return (
    //       this.list.length === this.list.filter((item) => item.checked).length
    //     );
    //   },
    // },
  },
  created() {
    this.list = JSON.parse(localStorage.getItem("goods")).goods.map((item) => {
      return item.id;
    });
    this.items = JSON.parse(localStorage.getItem("goods")).goods.map((item) => {
      return item.num;
    });
    this.datas = this.items.reverse();
    if (getToken()) {
      this.flag = false;
    }
    this.getdetail();
  },
  methods: {
    tologin() {
      this.$router.push({
        path: "/mine",
      });
    },
    getdetail() {
      this.$http.get(`/someonecar/${this.list}`).then((res) => {
        this.data = res.list.reverse();
        for (var i = 0; i < this.data.length; i++) {
          for (var j = 0; j < this.datas.length; j++) {
            if (i == j) {
              this.data[i].num = this.datas[j];
            }
          }
        }
      });
    },
    onSubmit() {},
  },
  mounted() {},
};
// var oNums  = document.getElementByClassName('nums')
// console.log(oNums)
</script>

<style lang="scss" scoped>
img {
  width: 80px;
  border-radius: 5px;
  margin-right: 5px;
}
ul {
  overflow: auto;
}
li {
  display: flex;
  align-items: center;
  font-size: 14px;
  position: relative;
}
.bbbtn{
  position: absolute;
  right: 0px;
  border: none;
  background: #F6390D;
  color: white;
  height: 25px;
  width: 48px;
  border-radius: 5px;
}
.son {
  margin: 10px 10px;
  border-top: 1px solid #999;
  padding: 10px 0;
}
</style>