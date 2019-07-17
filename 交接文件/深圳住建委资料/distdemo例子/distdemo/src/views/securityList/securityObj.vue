<template>
  <div class="security-Obj">
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
          <el-col :span="6">
            <el-form-item label="户籍所在区" label-width="6rem">
              <el-input v-model="form.domicileDistrictName" clearable placeholder style="width:100%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="住房/补贴类型" label-width="7rem" style="width:90%">
               <el-select v-model="form.detailTypeName" clearable placeholder style="width:100%">
                <el-option
                  v-for="(item,index) in detailedData"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
               </el-select>
            </el-form-item>
          </el-col>
          
        </el-row>
        <el-row :gutter="20">
          <el-col :span="5">
            <el-form-item label="保障方式" label-width="5rem">
              <el-select v-model="form.typeName" clearable placeholder style="width:100%">
                <el-option
                  v-for="(item,index) in areaData"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="分配批次" label-width="5rem">
              <el-input v-model="form.allocationBatchName" clearable placeholder style="width:100%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="是否在保" label-width="5rem">
              <el-select v-model="form.effective" clearable placeholder style="width:100%">
                <el-option
                  v-for="(item,index) in effectiveData"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="人才类型" label-width="5rem">
            <el-input v-model="form.rcType" clearable placeholder style="width:100%"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="保障起始时间" label-width="6rem">
                <el-date-picker type="date" placeholder="选择时间" v-model="form.beginTime" style="width:47%"></el-date-picker>
                <span>至</span>
                <el-date-picker type="date" placeholder="选择时间" v-model="form.endTime" style="width:47%"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="残疾情况" label-width="5rem">
              <el-select v-model="form.disablityType" clearable placeholder style="width:55%">
                <el-option
                  v-for="(item,index) in TypeData"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
               <el-select v-model="form.disablityLevel" clearable placeholder  style="width:35%">
                <el-option
                  v-for="(item,index) in LevelData"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="是否优抚" label-width="5rem">
              <el-input v-model="form.specialCare" clearable placeholder style="width:100%"></el-input>
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
        <el-table-column prop="name" label="申请人姓名" width="160"></el-table-column>
        <el-table-column prop="iden" label="申请人证件号" width="120"></el-table-column>
        <el-table-column prop="domicileDistrictName" label="申请人户籍所在区" width="120"></el-table-column>
        <el-table-column prop="typeName" label="保障方式" width="120"></el-table-column>
        <el-table-column prop="detailTypeName" label="住房/补贴类型" width="120"></el-table-column>
        <el-table-column prop="allocationBatchName" label="分配批次"></el-table-column>
        <el-table-column prop="beginTime" label="保障起始时间" width="120"></el-table-column>
        <el-table-column prop="endTime" label="保障结束时间" width="100"></el-table-column>
        <el-table-column prop="effective" label="是否在保"  :formatter="effectiveFormat" width="100"></el-table-column>
      
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
  name: 'securityObj',
  data() {
    return {
      form: {}, //表单
      tableData: [
        {
          name: '野男孩',
          code: '00001',
          guid:'iii00'
        },
        {
          name: '杨千嬅',
          code: '00007',
          guid:'ioio998'
        }
      ], //表格
      //分页需要的数据
      currentPage: 1,
      pageNo: 1,
      pageSize: 5,
      pageSizesList: [10, 20, 50, 100],
      totalNumber: 0, //数据的总数
      effectiveData: [
        {
          name: "是",
          value: true
        },
        {
          name: "否",
          value: false
        }
      ], //自建数据-下拉
      areaData: [], //区域数据-下拉
      belongAreaData: {item:'是', item:'否'}, //归属数据-下拉
      TypeData:[],
      LevelData:[],
      detailedData:[],
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
     effectiveFormat(effectiveDataStatus){
        //selfBuilt 布尔值
        return effectiveDataStatus.effective == true ? '是' : '否';
    },
    //获取字典数据
    getDictionary() {
      let nameData = ["住房or补贴类型", "保障方式","残疾情况","残疾等级"];
      let params = {
        names: nameData.toString()
      };
      http.getDictionary(params).then(res => {
        res = JSON.parse(res);
        this.detailedData = res.住房or补贴类型;
        this.areaData = res.保障方式;
        this.TypeData = res.残疾情况;
        this.LevelData = res.残疾等级;
      });
    },
    //页面table信息
    getTasbleList(){
       let params = {
         name: this.form.name,
         iden: this.form.iden,
         domicileDistrictName: this.form.domicileDistrictName,
         detailTypeName: this.form.detailTypeName,
         allocationBatchName: this.form.allocationBatchName,
         typeName: this.form.typeName,
         effective: this.form.effective,
         rcType: this.form.rcType,
         beginTime: this.form.beginTime,
         endTime: this.form.endTime,
         disablityType: this.form.disablityType,
         disablityLevel: this.form.disablityLevel,
         specialCare: this.form.specialCare,
         name: this.form.name,
         pageIndex: this.currentPage,
         pageSize: this.pageSize,
       };
       http.getSecurityList(params).then(res => {
         this.tableData = res.content;
         this.totalNumber = res.totalElements;
       })
    },
    //查询
    onSubmit() {
      this.getTasbleList();
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
      this.getTasbleList();
    },
    // currentPage改变
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getTasbleList();
    },
  },
   mounted() {
      this.getTasbleList()
    this.getDictionary(); //获取字典数据
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      // this.getDictionary()//获取字典数据
      this.getTasbleList()
    }
  }
};
</script> 

<style lang="scss" scoped>
.security-Obj {
  .top {
    background: #fff;
    padding: 18px 10px 0px 10px;
  }
  .aside-btn {
    margin: 10px 0 10px 0px;
  }
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