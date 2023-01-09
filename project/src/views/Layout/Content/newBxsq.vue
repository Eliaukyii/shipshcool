<template>
  <div class="formAccount">
    <el-card style="margin-top: 8px; margin-left: -8px">
      <div class="top" style="height: 724px">
        <div id="Design">
          <el-steps
            :active="active"
            :space="200"
            align-center
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
        <bxd v-show="active == '1'"></bxd>
        <!-- 上传附件 -->
        <fj v-show="active == '2'"></fj>
        <!-- 冲销借款 -->
        <cxjk v-show="active == '3'"></cxjk>
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
import bxd from "@/views/Layout/Content/bxsq/bxd.vue";
import fj from "@/views/Layout/Content/bxsq/fj.vue";
import cxjk from "@/views/Layout/Content/bxsq/cxjk.vue";
import projectDialog from '@/components/projectDialog.vue'
export default {
  data() {
    return {
      active: 1,
      stepTitle: ["填写单据", "上传附件", "冲销借款"],
    };
  },
  methods: {
    // 步骤条下一步
    next() {
      this.active++;
    },
    open() {
      this.$refs.child.open();
    },
  },
  components: {
    bxd,
    fj,
    cxjk,
    projectDialog
  },
};
</script>

<style lang="less" scoped>
::v-deep .el-step.is-center .el-step__line {
  left: 60%;
  right: -40%;
}
::v-deep .el-step__title.is-success {
  color: #2d6dcc;
}
::v-deep .el-step__head.is-success {
  color: #2d6dcc;
  border-color: #2d6dcc;
}
.formAccount {
  .el-steps {
    justify-content: center;
    // margin-right: 85px;
  }
  .bottom {
    border-top: 1px solid #e9e9e9;
    padding-top: 8px;
    display: flex;
    justify-content: center;
  }
}
</style>
