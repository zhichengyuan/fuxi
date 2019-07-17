<template>
  <div class="staff-Library">
    <div class="top">
      <el-form :model="form" size="mini" label-position="left">
        <el-row :gutter="20">
          <el-col :span="5">
            <el-form-item label="姓名" label-width="3rem">
              <el-input v-model="form.name" clearable placeholder style="width:100%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="证件号码" label-width="5rem">
              <el-input v-model="form.iden" clearable placeholder style="width:100%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <el-form-item label="户籍所在区(深圳)" label-width="8rem">
              <el-select v-model="form.domicileDistrictName" clearable placeholder style="width:80%">
                <el-option
                v-for="(item,index) in areaData"
                  :key="index"
                  :label="item.name"
                  :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
           <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
              <el-button type="primary" @click="onExport">导出</el-button>
            </el-form-item>
          </el-col>
        </el-row>
     
      </el-form>
    </div>
    <div class="content">
      <el-table :data="tableData" border @cell-dblclick="jumpDetailPage" size="mini" style="width: 100%">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="iden" label="证件号码"></el-table-column>
        <el-table-column prop="domicileDistrictName" label="户籍所在区"></el-table-column>
      </el-table>
      <!-- 分页功能 -->
      <div class="block" align="right">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="pageSizesList"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNumber"
          background
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import http from '@/api/common.js'

export default {
  name: 'staffLibrary',
  data() {
    return {
      form: {}, //表单
      tableData: [], //表格
      //分页需要的数据
      currentPage: 1,
      pageNo: 1,
      pageSize: 5,
      pageSizesList: [10, 20, 50, 100],
      totalNumber: 0, //数据的总数
      areaData: [],
    };
  },
  computed: {
    ...mapGetters([
      'openTab'
    ]),
    activeIndex: {
      get() {
        return this.$store.state.activeIndex;
      },
      set(val) {
        this.$store.commit("set_active_index", val);
      }
    }
  },

  methods: {
    //在册状态
    selfBuiltFormat(selfBuiltDataStatus) {
      return selfBuiltDataStatus.selfBuilt ? "已出册" : "正常轮候";
    },
   
    //获取字典数据
    getDictionary() {
      let nameData = ["户籍所在区"];
      let params = {
        names: nameData.toString()
      };
      http.getDictionary(params).then(res => {
        res = JSON.parse(res);
        this.areaData = res.户籍所在区;
      });
    },
    getTableList(){
      let params = {
        name: this.form.name,
        iden: this.form.iden,
        domicileDistrictName: this.form.domicileDistrictName,
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
      };
      http.getStaffList(params).then(res => {
        this.tableData = res.content;
        this.totalNumber = res.totalElements;

      })
    },
    //查询
    onSubmit() {
      this.getTableList();
    },
    //导出
    onExport() {
      //
    },
    //双击，去到详情页
    jumpDetailPage(val) {
      let flag = false;
      let newpath = "/settleDownList" + "/" + val.code;
      for (let item of this.openTab) {
        if (item.route === newpath) {
          this.$store.commit("set_active_index", newpath);
          this.$router.push({ path: newpath });
          flag = true;
          break;
        }
      }
      if (!flag) {
        this.$router.push({ path: newpath, query: { guid: val.guid } }); //跳转页面
        this.$store.commit("add_tabs", {
          route: newpath,
          name: val.name,
          type: "notMenu",
          childTabs: [],
          childActiveIndex: "",
          data: []
        }); //^构建一个全新的对象
        this.$store.commit("set_active_index", newpath); //设置以及tab的activeIndex
      }
    },
    //pageSize改变
    handleSizeChange(val) {
      this.pageSize = val;
      this.getTableList();
    },
    // currentPage改变
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getTableList();
    },
  },
    mounted() {
     // this.getNeighbourhoodList(); //分页获取小区列表
    this.getDictionary(); //获取字典数据
    this.getTableList()
  },
   watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      // this.getDictionary()//获取字典数据
    }
  }
};
</script>

<style lang="scss" scoped>
.staff-Library {
  .top {
    background: #fff;
    padding: 18px 10px 0px 10px;
  }
 
}
// .dialog-box {
//   /deep/ .el-dialog {
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     overflow: auto;
//     background: #fff;
//     height: calc(100% - 100px);
//     margin: 50px auto !important;
//   }
//   /deep/ .el-dialog__header {
//     padding: 10px 20px 10px 20px;
//     background: #0b7ef7;
//   }
//   /deep/ .el-dialog__headerbtn {
//     top: 15px;
//   }
//   /deep/ .el-dialog__headerbtn .el-dialog__close {
//     color: #fff;
//   }
//   /deep/ .el-dialog__title {
//     color: #fff;
//   }
//   /deep/ .el-dialog__body {
//     padding: 20px;
//     height: calc(100% - 100px);
//     overflow: auto;
//   }
// }
.content{
  margin-top:20px;
}
.el-table /deep/ td,
.el-table /deep/ th {
  text-align: center;
}
.el-table /deep/ th {
  background: #e6f0fc;
  border-right: 1px solid #d0cdc7;
  border-bottom: 1px solid #d0cdc7;
}
.el-table /deep/ td {
  border-right: 1px solid #d0cdc7;
  border-bottom: 1px solid #d0cdc7;
}
.el-table {
  border: 1px solid #d0cdc7;
}
.block {
  margin-top: 10px;
}
</style>