<template>
  <div>
    <p class="text">武汉船舶职业技术学院经费报销单</p>
    <table style="margin: 0 auto">
      <table id="Ttable">
        <tr>
          <td colspan="3" style="border: 0">
            <i
              class="el-icon-circle-plus-outline"
              style="font-size: 24px; color: #2d6dcc"
              @click="addTr"
            ></i>
            <i
              class="el-icon-remove-outline"
              style="font-size: 24px; color: #ccc; margin-left: 10px"
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
            ><span class="text">请选择</span>
          </td>
          <td>
            <span class="title">报销时间：</span
            ><span class="write">2022-10-03</span>
            <i
              class="el-icon-date"
              style="
                color: #2d6dcc;
                float: right;
                margin-top: 12px;
                margin-right: 10px;
              "
            ></i>
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
          <td><span class="text">请输入</span></td>
          <td><span class="text">请选择</span></td>
          <td>
            <span class="text">请输入</span>
          </td>
        </tr>
      </table>
      <table>
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
          <td>
            <span class="title">申报人：</span><span class="write">蔡其松</span>
          </td>
          <td>
            <span class="title">经办人：</span><span class="text">请输入</span>
          </td>
          <td>
            <span class="title">报销人：</span><span class="text">请输入</span>
          </td>
        </tr>
        <tr>
          <td style="border: 0"><span class="text">会计：</span></td>
          <td style="border: 0"><span class="text">出纳：</span></td>
          <td style="border: 0"><span class="text">报账初审：</span></td>
        </tr>
      </table>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addTr() {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      td1.innerHTML = "请输入";
      td2.innerHTML = "请选择";
      td3.innerHTML = "请输入";
      document.getElementById("Ttable").appendChild(tr);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
    },
    desc() {
      this.$router.push("/zygl");
    }
  },
  components: {},
};
</script>

<style lang="less" scoped>
.text {
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
    }
  }
}
</style>
