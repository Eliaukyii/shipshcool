<template>
  <div>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <Aside></Aside>
      <el-main>
        <breadcrumb></breadcrumb>
        <!-- 路由出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/views/Layout/Menu/Aside.vue";
import Header from "@/views/Layout/Menu/Header.vue";
import Breadcrumb from "@/views/Layout/Menu/Breadcrumb.vue";
export default {
  data() {
    return {};
  },
  methods: {
  },
  components: {
    Aside,
    Header,
    Breadcrumb,
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #2d6dcc;
  height: 48px !important;
  padding: 0;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
