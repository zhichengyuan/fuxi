<!--批次管理-->
<template>
  <div class="center">
    <!--头部-->
    <div class="top">
      <div class="left">
        <el-button type="primary" size="mini" @click="onQualificationCheck">资格审核</el-button>
      </div>
    </div>
    <!--基本信息-->
    <!-- 资格核查 -->
        <!-- 核查开始 -->
        <el-dialog title="资格核查" :visible.sync="checkone" width="1000px">
            <!-- <checkqualifying-verification></checkqualifying-verification> -->
            <div style="width:auto;height:460px;">
              <div class="check">
                  <div class="proposer" >
                      <div class="title orange">
                          申请人
                      </div>
                      <div class="con">
                          <el-checkbox :indeterminate="isIndeterminateone" @change="allone()">全选</el-checkbox>
                          <el-checkbox-group v-model="checkedProposer">
                              <div class="check-box" v-for="(itemx,index) of condition" :key="index">
                                  <el-checkbox :label="itemx">{{itemx}}</el-checkbox>
                              </div>
                          </el-checkbox-group>
                      </div>
                  </div>
                  <div class="proposer">
                      <div class="title green">
                          配偶
                      </div>
                      <div class="con">
                          <el-checkbox :indeterminate="isIndeterminatetwo" @change="alltwo()">全选</el-checkbox>
                          <el-checkbox-group v-model="checkedMate">
                              <div class="check-box" v-for="(itemx,index) of condition" :key="index">
                                  <el-checkbox :label="itemx">{{itemx}}</el-checkbox>
                              </div>
                          </el-checkbox-group>
                      </div>
                  </div>
                  <div class="proposer">
                      <div class="title blue">
                          其他人员
                      </div>
                      <div class="con">
                          <el-checkbox :indeterminate="isIndeterminatethree" @change="allthree()">全选</el-checkbox>
                          <el-checkbox-group v-model="checkedOther">
                              <div class="check-box" v-for="(itemx,index) of condition" :key="index">
                                  <el-checkbox :label="itemx">{{itemx}}</el-checkbox>
                              </div>
                          </el-checkbox-group>
                      </div>
                  </div>
              </div> 
          </div>
            <div style="margin-top:30px;text-align:center">
              <el-button @click="qualificationCheckOne" type="primary" size="mini">确定</el-button>
              <el-button @click="checkone=false" size="mini">取消</el-button>
            </div>
        </el-dialog>

        <!-- 核查中 -->
        <el-dialog :visible.sync="checktwo" title="资格审查" width="30%">
          <div style="text-align:center;padding:0 20px 30px 20px">
              <!-- <img src="../../../../static/image/check.png" width="100%"><br> -->
              <el-button @click="checktwo=false" type="primary" size="mini">取消审查</el-button>
          </div>
        </el-dialog>
        <!-- 查看核查结果 -->
        <el-dialog :visible.sync="checkthree" title="资格审查" width="600px">
          <div class="checktwo">
            <h3>核查结果</h3>
            <el-tabs type="card">
              <el-tab-pane v-for="(item,index) of people" :key="index" :label="item.relationship">
                <div class="describe">
                  <span><b>姓名：</b>{{item.name}}</span>
                  <span><b>证件号码：</b>{{item.IDcard}}</span>
                  <span><b>与申请人的关系：</b>{{item.relationship}}</span>
                </div>
                <div>
                  <ul>
                    <li v-for="(itemx,index) of condition" :key="index">
                      <span>{{itemx}}</span><span>查看详情</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
            <div style="margin-top:20px;text-align:center">
              <el-button @click="qualificationCheckThree" type="primary" size="mini">确定</el-button>
              <el-button @click="checkthree=false" size="mini">取消</el-button>
            </div>
          </div>
        </el-dialog>
    <div class="basicTable">
      <div class="content">
        <!--加载内容-->
        <el-tabs
          v-model="childActiveIndex"
          type="border-card"
          closable
          v-if="childOpenTab.length"
          @tab-click="tabClick"
          @tab-remove="tabRemove"
          style="height:100%;background:#fff"
        >
          <el-tab-pane
            :key="item.path"
            v-for="(item) in childOpenTab"
            :label="item.name"
            :name="item.path"
          ></el-tab-pane>
          <router-view></router-view>
        </el-tabs>
      </div>
      <!-- 侧边栏 -->
      <div class="siderbar">
        <SliderRight></SliderRight>
      </div>
    </div>
  </div>
</template>

<script>
import SliderRight from "@/components/SliderRight";
import { mapGetters } from "vuex";
export default {
  name: "settledowncom",
  components: {
    SliderRight
  },
  data() {
    return {
      checkone:false,//资格核查第一步
      checktwo:false,//资格核查第二步
      checkthree:false,//资格核查第三步
      people:[
              {name:"张三",relationship:"申请人",IDcard:"360281xxxxxxxxx0359"},
              {name:"魅力",relationship:"配偶",IDcard:"360281xxxxxxxxx0359"},
              {name:"张五",relationship:"其他人",IDcard:"360281xxxxxxxxx0359"},
            ],
      condition:['社保', '公安户籍', '人才安居补贴', '共租轮候','购房-市场商品房','购房-政策性住房','租房-承租保障性住房','安居房轮候',
                '区级政策型住房（出租）','区级政策型住房（出售）','房改住房补贴','广东省婚姻情况','周转房轮候申请','历史违建申报信息','新引进人才住房补贴信息',
                '高层次专业人才信息','高层次海外人才信息','低收入补贴'],//所有的申请人
      checkedProposer: [],//已选的
      checkedMate: [],//已选的
      checkedOther: [],//已选的
      checkallone:false,
      checkalltwo:false,
      checkallthree:false,
      isIndeterminateone: true,
      isIndeterminatetwo: true,
      isIndeterminatethree: true,
    };
  },
  computed: {
    childOpenTab() {
      return this.$store.state.childOpenTab;
    },
    childActiveIndex: {
      get() {
        return this.$store.state.childActiveIndex;
      },
      set(val) {
        this.$store.commit("set_child_active_index", val);
      }
    },
    activeIndex: {
      get() {
        return this.$store.state.activeIndex;
      },
      set(val) {
        this.$store.commit("set_active_index", val);
      }
    },
    ...mapGetters([
      "getCode",
      'openTab'
      ])
  },
  methods: {
    //tab标签点击时切换路由
    tabClick(tab) {
      // console.log("tab", tab);
      console.log("childActiveIndex=", this.childActiveIndex);
      console.log("childOpenTab=", this.childOpenTab);
      console.log("active==", this.activeIndex);
      console.log("openTab==", this.openTab);
      this.$router.push({ path: this.childActiveIndex });
      //将childActiveIndex存入openTab中相应的childActiveIndex中
      this.$store.commit("setIndexToOpenTab", {
        activeIndex: this.activeIndex,
        childActiveIndex: this.childActiveIndex
      });
    },
    //移除tab标签
    tabRemove(targetName) {
      console.log("二级tabs删除：", targetName);
      // 首页不删
      if (targetName == "/") {
        return;
      }
      this.$store.commit("delete_child_tabs", {
        targetName: targetName,
        activeIndex: this.activeIndex
      });
      if (this.childActiveIndex === targetName) {
        //设置当前激活的路由
        if (this.childOpenTab && this.childOpenTab.length >= 1) {
          this.$store.commit(
            "set_child_active_index",
            this.childOpenTab[this.childOpenTab.length - 1].path
          );
          this.$store.commit("setIndexToOpenTab", {
            activeIndex: this.activeIndex,
            childActiveIndex: this.childActiveIndex
          }); //^将activeIndex1存入openTab中相应的childActiveIndex中
          this.$router.push({ path: this.childActiveIndex });
        } else {
          // this.$router.push({ path: "/" });
        }
      }
      let arr = this.openTab;
      if (this.childOpenTab.length == 0) {
        for (let item of arr) {
          if (item.route === this.activeIndex) {
            this.$store.commit("delete_tabs", this.activeIndex);
            break;
          }
        }
        this.$router.push({ path: arr[arr.length - 1].route }); ///删除到最后一个二级tab时，这里开始跳转
        this.$store.commit(
          "set_active_index",
          this.openTab[this.openTab.length - 1].route
        );
        //判断此时的activeIndex对应的type是否为menu
        let flag = false;
        this.openTab.forEach(element => {
          if (this.activeIndex == element.route && element.type == "isMenu") {
            console.log("我是菜单类型的tab");
            flag = true;
          }
        });
        if (!flag) {
          console.log("我是一般的tab");
          this.$store.commit("changeChildOpenTab", {
            activeIndex: this.activeIndex,
            openTab: this.openTab
          }); //返回与一级tab中activeIndex相应的数据给到opentab1
          this.$store.commit("setChildActiveIndex", {
            activeIndex: this.activeIndex
          }); //设置子级的active
          this.$router.push({ path: this.childActiveIndex });
          this.$store.commit("changeGuid", {
            activeIndex: this.activeIndex,
            name: this.childActiveIndex
          }); //---传入一二级tab的activeIndex去更改guid
        }
      }
    },
    //资格审核
    onQualificationCheck() {
      this.checkone=true;
    },
    allone() {//全选
          this.checkallone=!this.checkallone;
          if(this.checkallone){
              this.checkedProposer=this.condition;
              this.isIndeterminateone=true;
          }else{
              this.checkedProposer=[];
              this.isIndeterminateone=false;
          }
        },
        alltwo() {//全选
          this.checkalltwo=!this.checkalltwo;
          if(this.checkalltwo){
              this.checkedMate=this.condition;
              this.isIndeterminatetwo=true;
          }else{
              this.checkedMate=[];
              this.isIndeterminatetwo=false;
          }
        },
        allthree() {//全选
          this.checkallthree=!this.checkallthree;
          if(this.checkallthree){
              this.checkedOther=this.condition;
              this.isIndeterminatethree=true;
          }else{
              this.checkedOther=[];
              this.isIndeterminatethree=false;
          }
        },
        qualificationCheckOne(){//资格核查一
          this.checkone=false;
          this.checktwo=true;
          setTimeout(()=>{
            this.checktwo=false;
            this.checkthree=true;
          } ,2000);
        },
        qualificationCheckThree(){//资格核查三
          this.checkthree=false;
          this.$message({
            message: '核查结束',
            type: 'success'
          });
        },
  },
  created() {
    console.log("===========================");
    //返回与一级tab中activeIndex相应的数据给到childOpenTab
    this.$store.commit("changeChildOpenTab", {
      activeIndex: this.activeIndex,
      openTab: this.openTab
    });
    //进入到该页面时，sliderCon默认将导航的第一条数据添加到childOpenTab中
    this.$store.commit("settleDownList", {
      path: this.$route.path,
      openTab: this.childOpenTab
    }); 
    console.log("this.childActiveIndex====", this.childActiveIndex);
    //将childActiveIndex存入openTab中相应的childActiveIndex中
    this.$store.commit("setIndexToOpenTab", {
      activeIndex: this.activeIndex,
      childActiveIndex: this.childActiveIndex
    });
    //++保存批次的guid？？？？和当前的childActiveIndex
    this.$store.commit("setGuid", {
      activeIndex: this.activeIndex,
      guidData: { name: "batchcode", guid: this.$route.query.guid || "" }
    });
  },
};
</script>

<style  lang="scss"  scoped>
.center {
  min-width: 800px;
  min-height: 600px;
  .top {
    padding: 5px 0 20px 0; /* 更改头部按钮高度 */
    display: flex;
    justify-content: space-between;
    /* /deep/ .el-dialog__header {
      background: #057ff8;
    }
    /deep/ .el-dialog__title {
      color: #fff;
    }
    /deep/ .el-dialog__headerbtn .el-dialog__close {
      color: #fff;
    } */
  }
  .basicTable {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .content {
      width: 85%;
      min-width: cals(100%-300);
      margin-right: 20px;
    }
    .siderbar {
      width: 15%;
      max-width: 300px;
      .sider-top {
        height: 40px;
        background: #2386f2;
        color: #fff;
        font-size: 1.2em;
        line-height: 40px;
        padding-left: 20px;
      }
    }
  }
  // & /deep/ .el-dialog {
  //   overflow: auto;
  //   background: #fff;
  //   & /deep/ .el-dialog__header {
  //     padding: 10px 20px 10px 20px;
  //     background: #0b7ef7;
  //   }
  //   & /deep/ .el-dialog__headerbtn {
  //     top: 15px;
  //   }
  //   & /deep/ .el-dialog__title {
  //     color: #fff;
  //   }
  //   & /deep/ .el-dialog__headerbtn .el-dialog__close {
  //     color: #fff;
  //   }
  //   & /deep/ .el-dialog__body {
  //     padding: 20px;
  //     overflow: auto;
  //   }
  // }
  // .dialog-footer {
  //   margin-top: 20px;
  //   text-align: center;
  // }
}
.content /deep/ .el-tabs__item {
  /*设置梯形*/
  position: relative;
  display: inline-block;
  color: #909399;
  padding: 5px 40px 5px 20px;
  z-index: 1;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #ccc;
  border-right: none;
}
.content /deep/ .el-tabs__item::before {
  /*设置梯形*/
  content: ""; /*用伪元素来生成一个矩形*/
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-right: 1px solid #ccc;
  transform: scaleY(1.3) perspective(0.5em) rotateX(3deg);
  transform-origin: bottom left;
  border-top: 3px solid #2386f2;
  background: #fff;
}
.check{
    display: flex;
    justify-content: space-between;
    .title{ //标题
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 30px;
    }
    /deep/ .is-checked+.el-checkbox__label{
      color:#606266;
    }
    .orange{
        color:#F5A726;
        background: #FEF6E9;
    }
    .green{
        color:#57C796;
        background: #EEF9F4;
    }
    .blue{
        color:#5BC7EB;
        background: #E9F7FC;
    }
    .proposer{ //申请人
        width: 32%;
        height: 100%;
        padding-bottom:10px;
        box-shadow: 1px 5px 5px #ccc;
        border-radius: 5px;
        overflow: hidden;
    }
    .con{ //内容
        width: 100%;
        padding-left: 10px;
    }
}
    /deep/ .el-dialog{
      color:#fff;
      & /deep/ .el-dialog__header{
        position: relative;
        background: #0B7EF7;
        padding:10px 20px;
        .el-dialog__headerbtn{
          position:absolute;
          right: 20px;
          top:50%;
          transform: translateY(-50%);
        }
      }
    }
    /deep/ .el-dialog__title,/deep/ .el-dialog__headerbtn .el-dialog__close{
      color: #fff;
    }
    /deep/ .el-dialog__body{
      padding:20px;
      overflow: auto;
    }
  
.checktwo{
  h3{
    margin-bottom: 20px;
    font-weight: bold;
  }
  /deep/ .el-tabs__header{
    border:none;
    .el-tabs__nav{
      border:none;
      border-radius: 0;
      border-left:1px solid #D6E0F0;
      .el-tabs__item{
        //border:none;
        border:1px solid #D6E0F0;
        border-radius: 0;
        border-left: none;
      }
      .is-active{
        color:#fff;
        background: #0B7EF7;
        border:1px solid #0B7EF7;
      }
    }
  }
  .describe{
    margin-bottom: 10px;
    span{
      margin-right: 20px;
    }
  }
  ul{
    color:#333;
    border:1px solid #D6E0F0;
    li{
      display:flex;
      padding: 0 10px;
      height: 28px;
      line-height: 28px;
      justify-content: space-between;
      span:last-child{
        color:#409eff;
      }
    }
    li:nth-of-type(odd){
      background:#F2F8FE;
    }
  }
}
</style>