<template>
  <div>
    <p class="headline">武汉船舶职业技术学院经费报销单</p>
    <table style="margin: 0 auto" id="myTable">
      <tr>
        <td colspan="3" style="border: 0">
          <i
            class="el-icon-circle-plus-outline"
            style="font-size: 24px; color: #2d6dcc"
            @click="addRow"
          ></i>
          <i
            class="el-icon-remove-outline"
            style="font-size: 24px; color: #ccc; margin-left: 10px"
            @click="deleteRow"
          ></i>
          <i
            class="el-icon-printer"
            style="font-size: 24px; color: #2d6dcc; float: right"
          ></i>
        </td>
      </tr>
      <tr>
        <td>
          <span class="title">经费部门：</span
          ><el-select v-model="selectDept" placeholder="请选择">
            <el-option
              v-for="(item, index) in list"
              :key="index"
              :label="item.DeptName"
              :value="item.DeptCode"
            ></el-option>
          </el-select>
        </td>
        <td>
          <span class="title">报销时间：</span>
          <el-date-picker
            v-model="applyTime"
            type="date"
            :clearable="false"
            placeholder="选择日期"
          >
          </el-date-picker>
        </td>
        <td>&nbsp;</td>
      </tr>
      <tr style="text-align: center">
        <td>
          <div class="desc" @click="desc">
            <span class="title">摘要</span
            ><i
              class="el-icon-setting"
              style="color: #2d6dcc; margin-left: 5px"
            ></i>
          </div>
        </td>
        <td><span class="title">经费用途(项目归属)</span></td>
        <td style="padding-right: 12px">
          <span class="title">报销金额</span>
        </td>
      </tr>
      <tr id="Tr">
        <td><el-input placeholder="请输入" v-model="form.descript" /></td>
        <td><el-input placeholder="请选择" v-model="form.project" /></td>
        <td>
          <el-input placeholder="请输入" v-model="form.account" />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <span class="title"
            >总金额（大写）：<span class="write"
              >零元&nbsp;零角&nbsp;零分&nbsp;</span
            ></span
          >
        </td>
        <td style="padding-left: 12px">0</td>
      </tr>
      <tr>
        <td colspan="3"><span class="title">其它记载：</span></td>
      </tr>
      <tr>
        <td @click="handleClick">
          <span class="title">申报人：</span
          ><el-input
            type="text"
            placeholder="请输入"
            v-model="form.applicant"
            style="width: 84%"
          />
        </td>
        <td @click="handleClick">
          <span class="title">经办人：</span
          ><el-input
            type="text"
            placeholder="请输入"
            v-model="form.agent"
            style="width: 84%"
          />
        </td>
        <td @click="handleClick">
          <span class="title">报销人：</span
          ><el-input
            type="text"
            placeholder="请输入"
            v-model="form.reimburser"
            style="width: 84%"
          />
        </td>
      </tr>
      <tr>
        <td style="border: 0"><span class="text">会计：</span></td>
        <td style="border: 0"><span class="text">出纳：</span></td>
        <td style="border: 0"><span class="text">报账初审：</span></td>
      </tr>
    </table>
    <user-dialog v-if="Visiable" ref="dialog"></user-dialog>
  </div>
</template>

<script>
import { DeptList } from "@/api/index.js";
import userDialog from "../component/userDialog.vue";
export default {
  data() {
    return {
      applyTime: "",
      selectDept: "",
      list: [],
      form: {
        descript: "", //摘要
        project: "", //经费用途
        account: "", //报销金额
        applicant: "", //申报人
        agent: "", //经办人
        reimburser: "", //报销人
      },
      Visiable: false,
    };
  },
  created() {
    DeptList().then((res) => {
      this.list = res.data.list;
    });
  },
  methods: {
    addRow() {
      var Tr = document.getElementById("Tr");
      var newRow = document.createElement("tr");
      for (var i = 0; i < Tr.cells.length; i++) {
        var newCell = document.createElement("td");
        newCell.innerHTML = Tr.cells[i].innerHTML;
        newCell.style["border"] = "1px solid #ccc";
        newRow.appendChild(newCell);
        document.getElementById("myTable").insertBefore(newRow, Tr);
      }
    },
    deleteRow() {
      var table = document.getElementById("myTable");
      console.log(table);
    },
    desc() {
      this.$router.push("/zygl");
    },
    handleClick(data) {
      this.Visiable = true;
      this.$nextTick(() => {
        //这里的dialog与上面dialog-component组件里面的ref属性值是一致的
        //init调用的是dialog-component组件里面的init方法
        //data是传递给弹窗页面的值
        this.$refs.dialog.init(data);
      });
    },
  },
  components: {
    userDialog,
  },
};
</script>

<style lang="less" scoped>
input::-webkit-input-placeholder {
  padding-left: 4px;
}
/deep/ .el-input__inner {
  border: 0;
}
/deep/ .el-input__prefix {
  color: #2d6dcc;
  right: -340px !important;
  cursor: pointer;
}

/deep/ .el-icon-arrow-up:before {
  content: "";
}

.headline {
  font-size: 28px;
  color: #333333;
  text-align: center;
  line-height: 36px;
  font-weight: 400;
  margin-bottom: 32px;
  margin-top: 40px;
}
table {
  line-height: 42px;
  tr {
    td {
      border: 1px solid #ccc;
      height: 42px;
      width: 400px;
      .title {
        font-size: 13px;
        color: #333333;
        font-weight: 600;
        margin-left: 12px;
      }
      .text {
        color: #999999;
        font-size: 12px;
        margin-left: 12px;
      }
      .write {
        font-size: 12px;
      }
      input {
        outline: none;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 0;
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
</style>
