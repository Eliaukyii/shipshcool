<template>
  <div class="wrap">
    <div class="content">
      <div class="box">
        <div
          class="box1"
          v-for="(item,index) in imgLists"
          :key="index"
          :style="{ 'background-image': 'url(' + item.img + ')' }"
        >
          <p class="report">{{ item.text }}</p>
          <p class="num">{{ item.number }}</p>
          <p class="tab">
            <span class="back">退回 {{ item.back }}</span>
            <span class="pending">进行中 {{ item.pending }}</span>
            <span class="pass">审核通过 {{ item.pass }}</span>
          </p>
        </div>
      </div>
      <el-row>
        <el-col :span="16" style="padding-right: 16px">
          <!-- 常用菜单 -->
          <div class="text">
            <span class="left">常用菜单</span><span class="right">设置</span>
          </div>
          <el-card>
            <div class="navbar-list">
              <ul>
                <li v-for="(item, index) in menuLists" :key="index">
                  <img :src="item.image" alt="" />
                  <p>{{ item.name }}</p>
                </li>
              </ul>
            </div>
          </el-card>
          <!-- 我的待办 -->
          <div class="text">
            <span class="left">我的待办</span
            ><span class="right">查看全部</span>
          </div>
          <el-card>
            <el-table
              :data="tableData"
              style="width: 100%"
            >
              <el-table-column
                :label="item.label"
                v-for="(item,index) in tableHeader"
                :key="index"
                :prop="item.value"
                :show-overflow-tooltip="true"
                align="center"
              >
              </el-table-column>
                <el-table-column fixed="right" label="操作" width="80" align="center">
            <template>
              <el-button type="text" size="small">审核</el-button>
            </template>
          </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="8">
          <!-- 政策信息 -->
          <div class="text">
            <span class="left">政策信息</span>
            <span class="right">查看全部</span>
          </div>
          <el-card style="margin-bottom: 52px">
            <el-table
              :data="titleLists"
              style="width: 100%"
              :show-header="false"
            >
              <el-table-column prop="title" width="92">
                <template slot-scope="scope">
                  <span
                    v-if="scope.row.title === '美的集团'"
                    style="color: #2d6dcc; background: #eff5ff; padding: 8px"
                    >美的集团</span
                  >
                  <span
                    v-if="scope.row.title === '贵州茅台'"
                    style="color: #2d6dcc; background: #eff5ff; padding: 8px"
                    >贵州茅台</span
                  >
                </template>
              </el-table-column>
              <el-table-column prop="content"> </el-table-column>
              <el-table-column prop="date" align="right"> </el-table-column>
            </el-table>
          </el-card>
          <!-- 消息通知 -->
          <div class="text" style="margin-top: -22px">
            <span class="left">消息通知</span>
            <span class="right">查看全部</span>
          </div>
          <el-card>
            <el-table
              :data="messageLists"
              style="width: 100%"
              :show-header="false"
            >
              <el-table-column prop="info"></el-table-column>
              <el-table-column prop="date" align="right"></el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuLists: [
        {
          name: "差旅报销",
          image: require("@/assets/images/main/menus/常用菜单图标1.png"),
        },
        {
          name: "报销申请",
          image: require("@/assets/images/main/menus/常用菜单图标2.png"),
        },
        {
          name: "借款申请",
          image: require("@/assets/images/main/menus/常用菜单图标3.png"),
        },
        {
          name: "付款申报",
          image: require("@/assets/images/main/menus/常用菜单图标4.png"),
        },
        {
          name: "查询",
          image: require("@/assets/images/main/menus/常用菜单图标5.png"),
        },
        {
          name: "其它",
          image: require("@/assets/images/main/menus/常用菜单图标6.png"),
        },
      ],
      tableData: [
        {
          type: "报销审核",
          date: "2022-09-26 23:38",
          name: "陈晨",
          number: "2022092600010002",
          money: "20,000.00",
          desc: "摘要摘要摘要摘要摘要…",
          operate: "审核",
        },
        {
          type: "薪酬审核",
          date: "2022-09-26 23:38",
          name: "陈晨",
          number: "2022092600010002",
          money: "20,000.00",
          desc: "摘要摘要摘要摘要摘要…",
          operate: "审核",
        },
        {
          type: "借款审核",
          date: "2022-09-26 23:38",
          name: "陈晨",
          number: "2022092600010002",
          money: "20,000.00",
          desc: "摘要摘要摘要摘要摘要…",
          operate: "审核",
        },
        {
          type: "付款审核",
          date: "2022-09-26 23:38",
          name: "陈晨",
          number: "2022092600010002",
          money: "20,000.00",
          desc: "摘要摘要摘要摘要摘要…",
          operate: "审核",
        },
        {
          type: "报销审核",
          date: "2022-09-26 23:38",
          name: "陈晨",
          number: "2022092600010002",
          money: "20,000.00",
          desc: "摘要摘要摘要摘要摘要…",
          operate: "审核",
        },
        {
          type: "薪酬审核",
          date: "2022-09-26 23:38",
          name: "陈晨",
          number: "2022092600010002",
          money: "20,000.00",
          desc: "摘要摘要摘要摘要摘要…",
          operate: "审核",
        },
        {
          type: "借款审核",
          date: "2022-09-26 23:38",
          name: "陈晨",
          number: "2022092600010002",
          money: "20,000.00",
          desc: "摘要摘要摘要摘要摘要…",
          operate: "审核",
        },
        {
          type: "付款审核",
          date: "2022-09-26 23:38",
          name: "陈晨",
          number: "2022092600010002",
          money: "20,000.00",
          desc: "摘要摘要摘要摘要摘要…",
          operate: "审核",
        },
      ],
      titleLists: [
        {
          title: "美的集团",
          content: "标题标题标题",
          date: "9-26",
        },
        {
          title: "贵州茅台",
          content: "标题标题标题标题标题",
          date: "9-26",
        },
        {
          title: "贵州茅台",
          content: "标题标题标题标题标题",
          date: "9-26",
        },
        {
          title: "贵州茅台",
          content: "标题标题标题标题标题",
          date: "9-26",
        },
        {
          title: "贵州茅台",
          content: "标题标题标题标题标题",
          date: "9-26",
        },
      ],
      messageLists: [
        {
          info: "产品行情同步失败产品行情同步失败",
          date: "9-26",
        },
        {
          info: "日出清算处理成功日出清算处理成功",
          date: "9-26",
        },
        {
          info: "日出清算处理成功日出清算处理",
          date: "9-26",
        },
        {
          info: "产品行情同步成功日出清算处理成功",
          date: "9-26",
        },
        {
          info: "日出清算处理成功日出清算处",
          date: "9-26",
        },
        {
          info: "日出清算处理成功日出清算处",
          date: "9-26",
        },
        {
          info: "日出清算处理成功日出清算处",
          date: "9-26",
        },
      ],
      imgLists: [
        {
          text: "日常报销",
          number: "30",
          img: require("@/assets/images/main/蓝色.png"),
          back: "5",
          pending: "20",
          pass: "5",
        },
        {
          text: "差旅报销",
          number: "120",
          img: require("@/assets/images/main/红色.png"),
          back: "5",
          pending: "20",
          pass: "95",
        },
        {
          text: "借款申请",
          number: "120000",
          img: require("@/assets/images/main/紫色.png"),
          back: "5",
          pending: "20",
          pass: "95",
        },
        {
          text: "付款申报",
          number: "30",
          img: require("@/assets/images/main/蓝色.png"),
          back: "5",
          pending: "20",
          pass: "95",
        },
        {
          text: "报销申报",
          number: "30",
          img: require("@/assets/images/main/红色.png"),
          back: "5",
          pending: "20",
          pass: "5",
        },
      ],
      tableHeader: [
        {
          label: "申报类型",
          value: "type",
        },
        {
          label: "申请日期",
          value: "date",
        },
        {
          label: "申请人",
          value: "name",
        },
        {
          label: "单号",
          value: "number",
        },
        {
          label: "申请金额",
          value: "money",
        },
        {
          label: "摘要",
          value: "desc",
        }
      ],
    };
  },
  methods: {},
  components: {},
};
</script>

<style lang='less' scoped>
.wrap {
  margin-top: 5px;
  background-color: #fff;
  margin-left: -8px;
  .content {
    padding: 16px;
    .box {
      display: flex;
      justify-content: space-around;
      .box1 {
        width: 268px;
        height: 138px;
        color: #fff;
        text-align: center;
        float: left;
        margin-right: 16px;
        .report {
          font-size: 14px;
          padding-top: 24px;
        }
        .num {
          font-size: 32px;
          padding-top: 15px;
        }
        .tab {
          font-size: 12px;
          padding-top: 25px;
          .back {
            float: left;
            padding-left: 16px;
          }
          .pass {
            float: right;
            padding-right: 12px;
          }
        }
      }
    }

    .text {
      margin-bottom: 12px;
      margin-top: 22px;
      .left {
        font-size: 16px;
        font-weight: 600;
      }
      .right {
        float: right;
        color: #999;
        font-size: 12px;
      }
    }
    .navbar-list {
      ul {
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        li {
          float: left;
          img {
            margin: 0 auto;
            display: block;
          }
          p {
            text-align: center;
            margin-top: 16px;
          }
        }
      }
    }
  }
}
//设置标题行(th)的字体属性；
::v-deep .el-table th > .cell {
  color: #333333;
  font-size: 12px;
}
//去除表头的下标线；
/deep/.el-table th.is-leaf {
  border-bottom: none;
}
//去除表格的最下边框线；
.el-table::before {
  height: 0;
}

//去除表格每一行的下标线；
/deep/.el-table td {
  border-bottom: none;
}
//设置表格每一行悬停的背景色
/deep/.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #f3f9ff;
}
</style>
