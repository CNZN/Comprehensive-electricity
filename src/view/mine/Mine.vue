<template>
  <div class="account">
    <Header2 title="账号"></Header2>
    <!-- 登录 -->
    <div class="login" v-if="flag == 'login'">
      <h1>登录页面</h1>
      <van-form @submit="onSubmit1">
        <van-field
          v-model="username1"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password1"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <span class="span1" @click="toregister">现在去注册</span>
          <van-button round block type="info" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
    <!-- 注册 -->
    <div class="register" v-if="flag == 'register'">
      <h1>注册页面</h1>
      <van-form @submit="onSubmit2">
        <van-field
          v-model="username2"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password2"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <span class="span2" @click="tologin">已注册去登陆</span>
          <van-button round block type="info" native-type="submit">
            注册
          </van-button>
        </div>
      </van-form>
    </div>
    <!-- 登陆后 -->
    <div class="after" v-if="flag == 'after'">
      <van-swipe-cell>
        <van-card
          :desc="uname"
          title="用户"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <template #right>
          <van-button
            square
            text="退出"
            type="danger"
            class="delete-button"
            @click="quit"
          />
        </template>
      </van-swipe-cell>
      <van-grid :border="true" :clickable="true">
        <van-grid-item icon="star-o" text="商品关注" />
        <van-grid-item icon="like-o" text="店铺关注" />
        <van-grid-item icon="thumb-circle-o" text="喜欢的内容" />
        <van-grid-item icon="underway-o" text="浏览记录" />
      </van-grid>
      <p></p>
      <van-grid :border="true" :clickable="true" style="margin-top: 20px">
        <van-grid-item icon="gem-o" text="白条" />
        <van-grid-item icon="gift-o" text="金条" />
        <van-grid-item icon="point-gift-o" text="优惠卷" />
        <van-grid-item icon="balance-list-o" text="金豆" />
      </van-grid>
      <p class="p1">工具与服务</p>
      <van-grid :column-num="3" style="margin-top: 10px">
        <van-grid-item
          v-for="value in 6"
          :key="value"
          icon="photo-o"
          text="主题换肤"
        />
      </van-grid>
      <p class="p2">
        <van-icon name="like" style="color:pink;"/>
        为你推荐
      </p>
      <List></List>
    </div>
  </div>
</template>

<script>
import Header2 from "../../components/Header2";
import { getToken, setToken, removeToken } from "../../utils/auth";
import { Dialog } from "vant";
import Vue from "vue";
import { SwipeCell } from "vant";
import { Grid, GridItem } from "vant";
import List from "../../components/List";
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(SwipeCell);
export default {
  name: "Account",
  components: {
    Header2,
    List,
  },
  data() {
    return {
      username1: "",
      password1: "",
      username2: "",
      password2: "",
      flag: "login",
      uname: "",
    };
  },
  created() {
    if (localStorage.getItem("status") == 3) {
      this.flag = "after";
    }
    this.uname = localStorage.getItem("username");
    if (getToken()) {
      this.flag = "after";
    }
  },
  methods: {
    onSubmit1(values) {
      console.log("submit", values);
      var username = this.username1;
      var password = this.password1;
      this.$http.post("/login2", { username, password }).then((res) => {
        if (res.code === 20000) {
          Dialog({ message: res.msg });
          this.flag = "after";
          setToken(username);
          localStorage.setItem("status", 3);
          localStorage.setItem("username", username);
          this.uname = localStorage.getItem("username");
        } else {
          localStorage.setItem("status", 2);
          localStorage.setItem("username", "");
        }
      });
    },
    // 注册
    onSubmit2(values) {
      console.log("submit", values);
      var username = this.username2;
      var password = this.password2;
      this.$http.post("/login1", { username, password }).then((res) => {
        if (res.code === 20000) {
          Dialog({ message: res.msg });
          this.flag = "login";
        }
      });
    },
    toregister() {
      this.flag = "register";
    },
    tologin() {
      this.flag = "login";
    },
    quit() {
      Dialog.confirm({
        title: "提示",
        message: "您确定注销吗",
      })
        .then(() => {
          localStorage.setItem("status", 2);
          this.flag = "login";
          removeToken();
          this.$message({
            type: "标题",
            message: "成功退出",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 20px;
  font-size: 35px;
  text-align: center;
  font-weight: 900;
}
.span1,
.span2 {
  font-size: 15px;
  color: red;
  font-weight: 400;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
.p1 {
  font-size: 14px;
  margin-top: 10px;
  margin-left: 20px;
}
.p2 {
  height: 25px;
  line-height: 25px;
  text-align: center;
  background: #efefef;
}
</style>