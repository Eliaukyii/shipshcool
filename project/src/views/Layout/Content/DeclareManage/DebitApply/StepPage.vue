<template>
  <div class="formAccount">
    <el-card style="margin-top: 8px; margin-left: -8px">
      <div class="top">
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
        <one v-show="active == '1'"></one>
        <!-- 上传附件 -->
        <two v-show="active == '2'"></two>
      </div>
      <div class="bottom">
        <el-button type="primary" @click="next">保存进入下一步</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
import one from "./FormDetail/one.vue";
import two from "./FormDetail/two.vue";
export default {
  data() {
    return {
      active: 1,
      stepTitle: ["填写借支报销单", "上传附件"],
    };
  },
  methods: {
    // 步骤条下一步
    next() {
      this.active++;
    },
  },
  components: {
    one,
    two,
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
    margin-top:144px;
    display: flex;
    justify-content: center;
  }
}
</style>
