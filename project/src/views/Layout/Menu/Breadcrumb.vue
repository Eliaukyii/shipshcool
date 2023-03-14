<template>
  <div class="tab">
    <span class="tabbar">
      <!-- <i class="iconfont icon-left-mini"></i>
      <span
        class="text"
        style="color: #2d6dcc"
        v-for="(item, index) in List"
        :key="index"
        >{{ item.Menu_Name }}</span> -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{ path: '/' }"
          v-for="(item, index) in List"
          :key="index"
          >{{ item.Menu_Name }}</el-breadcrumb-item
        >
        </el-breadcrumb>
    </span>
  </div>
</template>

<script>
var spanArr = document.getElementsByTagName("span");
console.log(spanArr);
</script>
<script>
import { getChildMenu } from "@/api/index.js";
export default {
  data() {
    let a = sessionStorage.getItem("Token");
    return {
      MenuID: "000000",
      Token: a,
      List: [],
      Menu_Name: "",
    };
  },
  created() {
    this.getChildMenu({
      Token: this.Token,
      MenuID: this.MenuID,
    });
  },
  methods: {
    getChildMenu(data) {
      getChildMenu(data).then((res) => {
        // console.log(res);
        this.List = res.data.List;
        this.Menu_Name = res.data.Menu_Name;
      });
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
/deep/ .el-breadcrumb__inner.is-link{
  color: #333;
  font-weight: 400;
  cursor: pointer;
}
/deep/.el-breadcrumb__item{
  line-height: 32px;
}
.tab {
  height: 32px;
  background-color: #fff;
  margin-left: -18px;
  margin-top: -20px;
  .tabbar {
    font-size: 12px;
    line-height: 32px;
    // .text {
    //   padding: 10px 8px 10px 8px;
    //   border: 1px solid #e6e6e6;
    //   cursor: pointer;
    //   color: #333 !important;
    // }
  }
}
</style>
