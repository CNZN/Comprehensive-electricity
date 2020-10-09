<template>
  <div class="car">
    <van-tabs v-model="active">
      <van-tab title="全部">
        <div v-if="flag == true" class="nouser">
          <p>空空如也</p>
          <p>您还未登录哦</p>
          <p @click="tologin" class="np1">现在去登录</p>
        </div>
        <div v-else>
          <ul>
            <li v-for="item in data" :key="item._id" class="son">
              <label>
                <input
                  type="checkbox"
                  v-if="item._id"
                  v-model="checkgroup"
                  :value="item"
                />
              </label>
              <img :src="item.img" alt="" />
              <div>
                <p>{{ item.desc }}</p>
                <p style="margin-top: 3px; margin-bottom: 3px">
                  {{ item.title }}
                </p>
                <p>
                  单价：￥{{ item.price }}
                  <van-stepper v-model="item.num" />
                </p>
              </div>
              <button class="bbbtn">删除</button>
            </li>
            <!-- {{checkgroup}} -->
          </ul>
          <van-submit-bar
            :price="totalprice"
            button-text="提交订单"
            style="position: fixed; bottom: 50px"
          >
            <input
              type="checkbox"
              v-model="checkall"
              @click="changeall()"
            />全选
          </van-submit-bar>
          <div style="height: 100px"></div>
        </div>
      </van-tab>
      <van-tab title="降价"><List></List></van-tab>
      <van-tab title="常买"><List></List></van-tab>
      <van-tab title="分类"><List></List></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import List from "../../components/List";
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
  components: { List },
  data() {
    return {
      active: 0,
      list: "",
      lists: "",
      flag: true,
      checked: true,
      data: "",
      datas: "",
      checkgroup: [],
      checkall: false,
    };
  },
  computed: {
    ...mapState(["goods"]),
    totalprice() {
      if (this.checkgroup.length) {
        // 此为乱入的判断全选框是否勾选
        this.$nextTick(() => {
          if (this.checkgroup.length == this.data.length) {
            this.checkall = true;
          } else {
            this.checkall = false;
          }
        });
        //

        var a = 0;
        for (var i = 0; i < this.checkgroup.length; i++) {
          a += this.checkgroup[i].num * this.checkgroup[i].price * 100;
        }
        return a;
      } else {
        return 0;
      }
    },
  },
  created() {
    //取购物车所有商品的id
    this.list = JSON.parse(localStorage.getItem("goods")).goods.map((item) => {
      return item.id;
    });
    //取购物车所有商品对应的数量
    this.items = JSON.parse(localStorage.getItem("goods")).goods.map((item) => {
      return item.num;
    });
    // 将要展示的信息列表 反转
    this.datas = this.items.reverse();
    //判断是否登录 是否有token 若无则看不到购物车得二确切信息
    if (getToken()) {
      this.flag = false;
    }
    //获取购物车商品
    this.getdetail();
  },
  methods: {
    tologin() {
      this.$router.push({
        path: "/mine",
      });
    },
    //获取购物车商品
    getdetail() {
      // console.log(this.list) 数组 ['12','112']
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
    changeall() {
      
      this.checkall = !this.checkall;
      if (this.checkall) {
        this.checkgroup = this.data;
      } else {
        this.checkgroup = [];
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.nouser {
  font-weight: 800;
  width: 200px;
  height: 100px;
  margin: 50px auto;
  background: #666;
  color: white;
  text-align: center;
  font-size: 14px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  p {
    margin: 5px;
  }
  .np1 {
    width: 100px;
    height: 20px;
    background: white;
    border-radius: 10px;
    color: red;
    text-align: center;
    padding-top: 5px;
  }
}
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
.bbbtn {
  position: absolute;
  right: 0px;
  border: none;
  background: #f6390d;
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