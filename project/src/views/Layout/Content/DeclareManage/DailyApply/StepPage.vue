<template>
  <div class="formAccount">
    <el-card style="margin-top: 8px; margin-left: -8px">
      <div class="top">
        <div>
          <el-steps
            :active="active"
            :space="200"
            finish-status="success"
          >
            <el-step
              :title="item"
              v-for="(item, index) of stepTitle"
              :key="index"
            ></el-step>
          </el-steps>
        </div>
        <!-- 填写单据 -->
        <one v-show="active == '0'"></one>
        <!-- 上传附件 -->
        <two v-show="active == '1'"></two>
        <!-- 冲销借款 -->
        <three v-show="active == '2'"></three>
      </div>
      <div class="bottom">
        <el-button type="primary" @click="open">项目余额</el-button>
        <el-button type="primary" @click="next">下一步</el-button>
      </div>
      <projectDialog ref="child"></projectDialog>
    </el-card>
  </div>
</template>
<script>
import one from "./FormDetail/one.vue";
import two from "./FormDetail/two.vue";
import three from "./FormDetail/three.vue";
import projectDialog from "@/components/projectDialog.vue";
export default {
  data() {
    return {
      active: 0,
      stepTitle: ["填写单据", "上传附件", "冲销借款"],
    };
  },
  methods: {
    // 步骤条下一步
    next() {
      this.active++;
      if (this.active > 3) {
        this.$router.push("/rcDetail");
      }
    },

    open() {
      this.$refs.child.open();
    },
  },
  components: {
    one,
    two,
    three,
    projectDialog,
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-step .el-step__main {
  position: absolute;
  left: 24px;
  top: 0px;
  height: 26px;
  line-height: 26px;
  background-color: #fff;
  padding: 0 10px 0 16px;
}
/deep/ .el-step .el-step__title {
  line-height: 26px;
}
/deep/ .el-step__title.is-process {
  font-weight: 500;
}
/deep/ .el-step__title.is-success{
  color: #2d6dcc;
}
/deep/ .el-step__head.is-success{
  color: #2d6dcc;
  border-color: #2d6dcc;
}
/deep/ .el-step:last-of-type.is-flex {
  flex-basis: 120px !important;
}
/deep/ .el-step__head {
  width: 96%;
}
/deep/ .el-step__icon.is-text {
  width: 24px;
  height: 24px;
  border: 1px solid #d9d9d9;
}
/deep/ .el-step__icon-inner {
  font-size: 12px;
  font-weight: 400;
}
/deep/ .el-step.is-horizontal .el-step__line {
  top: 12px;
}
/deep/ .el-step__head.is-process {
  border-color: #2d6dcc;
}
/deep/ .el-step__head.is-process .el-step__icon.is-text {
  color: #fff;
  background-color: #2d6dcc;
}

.formAccount {
  .el-steps {
    justify-content: center;
    // margin-right: 85px;
  }
  .bottom {
    border-top: 1px solid #e9e9e9;
    padding-top: 8px;
    margin-top: 144px;
    display: flex;
    justify-content: center;
  }
}
</style>
