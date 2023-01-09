<template>
  <div>
    <el-card style="margin-top: 8px; margin-left: -8px" v-if="homeShow">
      <div class="wrap">
        <div style="margin-left: 64px">
          <div class="nav">
            <div class="state">审批状态</div>
            <div class="tab">
              <div
                v-for="(item, index) in status"
                :key="index"
                class="list"
                @click="check(index)"
                :class="currentIndex.indexOf(index) !== -1 ? 'activeClass' : ''"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="choice" style="margin-top: 16px">
            <span>报销部门</span>
            <el-select
              v-model="value"
              placeholder="请选择"
              style="width: 152px; margin-left: 8px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <span style="margin-left: 56px">报销项目</span>
            <el-select
              v-model="value"
              placeholder="请选择"
              style="width: 152px; margin-left: 8px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select
              v-model="value"
              multiple
              filterable
              remote
              reserve-keyword
              placeholder="请输入申请单号、申报人、报销人"
              style="width: 256px; margin-left: 8px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <button
              class="btn"
              style="margin-left: 8px; background: #2d6dcc; color: #fff"
            >
              查询
            </button>
            <button class="btn">重置</button>
            <span style="margin-left: 8px; color: #2d6dcc; cursor: pointer"
              >高级 <i class="el-icon-arrow-down"></i
            ></span>
          </div>
        </div>
        <button
          class="newBtn"
          @click="newBtn"
          style="background: #2d6dcc; color: #fff; cursor: pointer"
        >
          新建
        </button>
        <button class="btn">删除</button>
        <button class="btn">导出</button>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          max-height="580"
          stripe
          :header-cell-style="{ 'border-right': '1px solid #d9d9d9' }"
        >
          <el-table-column type="selection"></el-table-column>
          <el-table-column
            v-for="item in tableHeader"
            :key="item.label"
            :label="item.label"
            :prop="item.value"
            align="center"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="170"
            align="center"
          >
            <template>
              <el-button type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination
        style="margin-top: 12px"
        :current-page="currentPage"
        :page-sizes="[20, 40, 60]"
        :page-size="pageSize"
        layout="->,total, prev, pager, next, sizes, jumper"
        :total="133"
      >
      </el-pagination>
    </el-card>
    <newBxsq v-if="childShow"></newBxsq>
  </div>
</template>

<script>
import newBxsq from "./newBxsq.vue";
export default {
  data() {
    return {
      currentIndex: [],
      homeShow: true,
      childShow: false,
      isShow: false,
      value: "",
      options: [
        {
          value: "选项",
          label: "暂无",
        },
      ],
      currentPage: 1,
      pageSize: 5,
      tableData: [
        {
          progress: "0%",
          number: "",
          date: "2022-09-27 21:11:09",
          num: "14480048",
          class: "工会办公室",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "财务稽查",
          manage: "编辑 删除",
        },
        {
          progress: "70%",
          number: "14480049",
          date: "2022-09-27 21:11:09",
          num: "14480049",
          class: "财务处",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "单位领导",
          manage: "编辑 删除",
        },
        {
          progress: "70%",
          number: "144800411",
          date: "2022-09-27 21:11:09",
          num: "14480048",
          class: "工会办公室",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "财务稽查",
          manage: "编辑 删除",
        },
        {
          progress: "100%",
          number: "",
          date: "2022-09-27 21:11:09",
          num: "144800441",
          class: "财务处",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "单位领导",
          manage: "编辑 删除",
        },
        {
          progress: "70%",
          number: "",
          date: "2022-09-27 21:11:09",
          num: "14480043",
          class: "工会办公室",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "财务稽查",
          manage: "编辑 删除",
        },
        {
          progress: "70%",
          number: "",
          date: "2022-09-27 21:11:09",
          num: "14480043",
          class: "工会办公室",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "财务稽查",
          manage: "编辑 删除",
        },
        {
          progress: "70%",
          number: "",
          date: "2022-09-27 21:11:09",
          num: "14480043",
          class: "工会办公室",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "财务稽查",
          manage: "编辑 删除",
        },
        {
          progress: "70%",
          number: "",
          date: "2022-09-27 21:11:09",
          num: "14480043",
          class: "工会办公室",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "财务稽查",
          manage: "编辑 删除",
        },
        {
          progress: "70%",
          number: "",
          date: "2022-09-27 21:11:09",
          num: "14480043",
          class: "工会办公室",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "财务稽查",
          manage: "编辑 删除",
        },
      ],
      tableHeader: [
        { label: "进度", value: "progress" },
        { label: "申请日期", value: "date" },
        { label: "单号", value: "num" },
        { label: "部门", value: "class" },
        { label: "金额", value: "money" },
        { label: "摘要", value: "desc" },
        { label: "报销人", value: "advancer" },
        { label: "申报人", value: "declarant" },
        { label: "经办人", value: "operator" },
        { label: "审批状态", value: "status" },
        { label: "待批人", value: "person" },
      ],
      status: [
        "全部",
        "已完成",
        "进行中",
        "未提交",
        "退回",
        "逾期",
        "绿色通道",
        "系统冻结",
        "临时冻结",
      ],
    };
  },
  methods: {
    newBtn() {
      this.homeShow = !this.homeShow;
      this.childShow = !this.childShow;
    },
    check(index) {
      if (this.currentIndex.indexOf(index) == -1) {
        this.currentIndex.push(index);
      } else {
        this.currentIndex.splice(this.currentIndex.indexOf(index), 1);
      }
    },
  },
  components: {
    newBxsq,
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-input--suffix .el-input__inner {
  height: 28px;
  font-size: 12px;
}
/deep/ .el-input--prefix .el-input__inner {
  padding-left: 15px;
}
/deep/ .el-input__icon {
  line-height: inherit;
}
/deep/ .el-input__prefix,
.el-input__suffix {
  right: -180px;
}

// /deep/ .el-table td.el-table__cell {
//   border: 0;
// }
//设置表头的背景色
/deep/.el-table th {
  background-color: #f7f7f7;
}
//设置标题行(th)的字体属性；
::v-deep .el-table th > .cell {
  color: #333333;
  font-size: 14px;
}

//去除表格的最下面一行的边框
.tableStyle::before {
  width: 0;
}
//设置表的外边框
.el-table {
  border: 1px solid #ccc;
}
.wrap {
  font-size: 12px;
  .nav {
    display: flex;
    .state {
      line-height: 28px;
    }
    .tab {
      color: #4686f2;
      margin-left: 8px;
      .list {
        float: left;
        padding: 8px;
        border: 1px solid #4686f2;
        margin-right: 8px;
        cursor: pointer;
        position: relative;
      }
      .activeClass::before {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        border: 8px solid #4686f2;
        border-top-color: transparent;
        border-left-color: transparent;
      }
      .activeClass::after {
        content: "";
        position: absolute;
        width: 3px;
        height: 6px;
        right: 1px;
        bottom: 0px;
        border: 2px solid #fff;
        border-top-color: transparent;
        border-left-color: transparent;
        transform: rotate(45deg);
      }
    }
  }
  .btn,
  .newBtn {
    margin-bottom: 8px;
    width: 52px;
    height: 28px;
    background: #fff;
    border: 1px solid #ddd;
    color: #333;
    margin-right: 8px;
  }
}
</style>
<style>
.el-popper[x-placement^="bottom"] {
  margin-top: 5px;
}
</style>