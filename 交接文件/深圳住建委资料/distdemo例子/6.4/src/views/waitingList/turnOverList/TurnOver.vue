<template>
  <div class="turn-over">
    <div class="top">
      <el-form :model="form" size="mini" label-position="left">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="备案回执号" label-width="6rem">
              <el-input v-model="form.receiptNo" clearable placeholder style="width:100%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="申请人姓名" label-width="6rem">
              <el-input v-model="form.name" clearable placeholder style="width:100%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="申请人身份证号" label-width="7rem">
              <el-input v-model="form.identityCardNo" clearable placeholder style="width:100%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
      
            <el-form-item label="在册状态" label-width="5rem">
              <el-select v-model="form.isOutList" clearable placeholder style="width:100%">
                <el-option
                  v-for="(item,index) in belongAreaData"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <el-form-item label="受理时间" label-width="6rem">
                <el-date-picker type="datetime" placeholder="选择时间" v-model="form.acceptTimeStart"></el-date-picker>
                <span>至</span>
                <el-date-picker type="datetime" placeholder="选择时间" v-model="form.acceptTimeEnd"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="工作单位" label-width="5rem">
              <el-input v-model="form.unitName" clearable placeholder style="width:100%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="单位性质" label-width="5rem">
              <el-select v-model="form.unitPropertyName" clearable placeholder style="width:100%">
                <el-option
                  v-for="(item,index) in areaData"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item style="float:right">
              <el-button type="primary" @click="onSubmit">查询</el-button>
              <el-button type="primary" @click="onExport">导出</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="aside-btn">
      <el-button type="primary" @click="onUpdateClick" size="mini">更新公布排位</el-button>
    </div>
    <div class="content">
      <el-table :data="tableData" border @cell-dblclick="jumpDetailPage" size="mini" style="width: 100%">
        <el-table-column prop="receiptNo" label="备案回执号" width="160"></el-table-column>
        <el-table-column prop="name" label="申请人姓名" width="120"></el-table-column>
        <el-table-column prop="identityCardNo" label="申请人身份证号" width="120"></el-table-column>
        <el-table-column prop="mobilePhone" label="申请人电话" width="120"></el-table-column>
        <el-table-column prop="realTimeSortNo" label="轮候册排位" width="120"></el-table-column>
        <el-table-column prop="unitName" label="工作单位"></el-table-column>
        <el-table-column prop="unitPropertyName" label="单位性质" width="120"></el-table-column>
        <el-table-column prop="isOutList" label="在册状态" width="100"  :formatter="isOutListFormat"></el-table-column>
        <el-table-column prop="acceptTime" label="受理时间" width="100"></el-table-column>
        <el-table-column prop="inTime" label="入册时间" width="100"></el-table-column>
      </el-table>
      <!-- 分页功能 -->
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
</template>

<script>
import {mapGetters} from 'vuex'
import http from '@/api/common.js'

export default {
  name: 'turnover',
  data() {
    return {
      form: {}, //表单
      tableData: [], //表格
      stateData: [], //下拉框数据
      //分页需要的数据
      currentPage: 1,
      pageNo: 1,
      pageSize: 5,
      pageSizesList: [10, 20, 50, 100],
      totalNumber: 0, //数据的总数
      selfBuildData: [
        {
          name: "是",
          value: 1
        },
        {
          name: "否",
          value: 0
        }
      ], //自建数据-下拉
      areaData: [], //区域数据-下拉
      belongAreaData: [], //归属数据-下拉
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
    isOutListFormat(row,column) {
      return row.isOutList == true ? "已出册" : "正常轮候";
    },
    //更新公布排位
    onUpdateClick() {
      //
    },
 
    //获取字典数据
    getDictionary() {
      let nameData = ["在册状态", "单位性质"];
      let params = {
        names: nameData.toString()
      };
      http.getDictionary(params).then(res => {
        res = JSON.parse(res);
        this.areaData = res.在册状态;
        this.belongAreaData = res.单位性质;
      });
    },
    getTableList(){
     let params = {
        type: 3,
        receiptNo:this.form.receiptNo,
        name: this.form.name,
        identityCardNo: this.form.identityCardNo,
        isOutList: this.form.isOutList,
        acceptTimeStart: this.form.acceptTimeStart,
        acceptTimeEnd: this.form.acceptTimeEnd,
        unitName: this.form.unitName,
        unitPropertyName: this.form.unitPropertyName,
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
     };
     http.getTurnoverList(params).then(res =>{
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
      let newpath = "/turnOverList" + "/" + val.code;
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
      this.getDictionary()//获取字典数据
      // this.getTableList()

    }
  }
};
</script>

<style lang="scss" scoped>
.turn-over {
  .top {
    background: #fff;
    padding-top: 5px;
  }
  .content{
    margin-top:20px;
    .el-pagination{/*分页*/
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }
  }
}
.el-table {
  border: 1px solid #DBDBDB;
  border-right: 0;
}
</style>