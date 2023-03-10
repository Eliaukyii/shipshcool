<template>
  <div>
    <el-container>
      <el-header><Header></Header></el-header>
      <el-container>
        <el-aside width="210px;"><Aside></Aside></el-aside>
        <el-container>
          <el-main>
            <breadcrumb></breadcrumb>
            <!-- 路由出口 -->
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
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
  color: #333;
  line-height: 200px;
  // text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
