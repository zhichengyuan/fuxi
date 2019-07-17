<template>
  <div>
    <div class="info-header">
      <el-row :gutter="20">
        <el-col :span="5">
          <span>申请表编号：</span>
          <span>{{applyCode}}</span>
        </el-col>
        <el-col :span="5">
          <span>备案回执号：</span>
          <span>{{num}}</span>
        </el-col>
        <el-col :span="5">
          <span> 区流水号：</span>
          <span>{{flownum}}</span>
        </el-col>
        <el-col :span="5">
          <span>家庭类型：</span>
          <span>{{familyType}}</span>
        </el-col>
        <el-col :span="4">
          <span>是否失独家庭：</span>
          <span>{{alonFamily}}</span>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="11">
          <span>申请人及所有共同申请人是否拥有自有住房（未包含保障性住房）：</span>
          <span> {{hadHouse}} </span>
        </el-col>
        <el-col :span="13">
          <span>申请人及所有共同申请人是否存在转让（或分割）自有住房（未包含保障性住房）情形：</span>
          <span> {{transferHouse}} </span>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col>
          <span>申请人及所有共同申请人是否租住保障性住房（市本级）:</span>
          <span> {{renHouse}} </span>
        </el-col>
      </el-row>
      <el-form>
        <el-row :gutter="20">
          <el-form-item size="mini" label="公示备注" label-width="5rem">
            <el-input  type="textarea" v-model="pulicRemark"></el-input>
          </el-form-item>
        </el-row>
        <el-row :gutter="20">
          <el-form-item size="mini" label="备注" label-width="5rem">
            <el-input  type="textarea" v-model="remark"></el-input>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
    <!-- 申请人信息 -->
    <div class="info-content">
      <div class="title">
        <div class="title-icon"></div>
        <div class="title-font">主申请人（{{familyType}}）</div>
      </div>
      <table>
        <tr>
          <td>姓名</td>
          <td> {{applyForm.name}} </td>
          <td>性别</td>
          <td> {{applyForm.sex}} </td>
          <td>出生日期</td>
          <td> {{applyForm.birthday}} </td>
        </tr>
        <tr>
          <td>证件类型</td>
          <td> {{applyForm.type}} </td>
          <td>证件号码</td>
          <td> {{applyForm.idcard}} </td>
          <td>居住地址</td>
          <td> {{applyForm.address}} </td>
        </tr>
        <tr>
          <td>手机号</td>
          <td> {{applyForm.tel}} </td>
          <td>固定电话</td>
          <td> {{applyForm.tel}} </td>
          <td>通讯地址</td>
          <td> {{applyForm.address}} </td>
        </tr>
        <tr>
          <td>人才类型</td>
          <td> {{applyForm.type}} </td>
          <td>最高职称</td>
          <td> {{applyForm.type}} </td>
          <td>公积金账号</td>
          <td> {{applyForm.tel}} </td>
        </tr>
        <tr>
          <td>工作单位名称</td>
          <td colspan="3"> {{applyForm.comName}} </td>
          <td>工作单位统一社会信用代码</td>
          <td> {{applyForm.tel}} </td>
        </tr>
      
      </table>
      <div class="more-info">
        <div style="font-size:18px">残疾情况</div>
        <div style="padding-left:40px"> {{disabilityState}} </div>
        <div style="font-size:18px">优抚情况</div>
        <div style="padding-left:40px"> {{careState}} </div>
        <div style="font-size:18px">户籍</div>
        <div style="padding-left:40px">
          <div>户籍所在区：{{testData}}，入深户时间：{{date1}}</div>
          <div>持有本市居住证，居住证首次办理时间：{{date1}}</div>
          <div>不持有本市居住证</div>
        </div>
        <div style="font-size:18px">婚姻</div>
        <div style="padding-left:40px">
          <div>已婚 &nbsp;&nbsp;配偶姓名：{{testData}}&nbsp;&nbsp;配偶证件类型：{{date1}}&nbsp;&nbsp; 配偶证件号码：{{date1}}</div>
          <div>上一次婚姻离异时间：{{testData}} &nbsp;&nbsp;原配偶姓名：{{testData}}&nbsp;&nbsp;原配偶证件类型：{{date1}}&nbsp;&nbsp; 原配偶证件号码：{{date1}}</div>
          <div>离异{{date1}}&nbsp;&nbsp;原配偶姓名：{{testData}}&nbsp;&nbsp;原配偶证件类型：{{date1}}&nbsp;&nbsp; 原配偶证件号码：{{date1}}</div>
          <div>未婚</div>
          <div>丧偶</div>
        </div>
        <div style="font-size:18px">社保</div>
        <div style="padding-left:40px">
          <div>无社保信息</div>
          <div>社会保险电脑号：{{testData}}&nbsp;&nbsp;首次社保缴纳时间：{{date1}}&nbsp;&nbsp;累计缴纳本市社保总月数：{{date1}}</div>
        </div>
      </div>
    </div>
    <!-- <iframe src="http://58.246.138.178:443/zentao/bug-browse-16-0-unconfirmed-0.html" frameborder="0" style="width:100%"></iframe> -->
  </div>
</template>

<script>
export default {
  name: 'publicfamily',
  data() {
    return {
      applyCode: 'SZNS2019042588', //申请表编号
      num: 'SZNS2019042588', // 备案回执号
      flownum: 'SZNS2019042588', // 区流水号
      familyType: '富人家庭', //家庭类型
      alonFamily: '否', //失独家庭
      hadHouse: '是', //是否拥有自有住房
      transferHouse: '是', //是否存在转让房
      renHouse: '是', //是否存在租房
      pulicRemark: '深圳前海湾拥有一栋写字楼，盐田有个岛。', //公示备注
      remark: '我不想在备注什么了', //备注
      applyForm: {
        name: '欧阳思恒',
        sex: '男',
        birthday: '2019-04-25',
        address: '广东省深圳市福田区振兴路赛格科技园4栋西10层A07',
        comName: '广东省深圳市福田区振兴路赛格科技园4栋西10层A07',
        tel: '19888886666',
        type: '身份证',
        idcard: '434677899898907876'
      },
      edit:true, //是否可编辑
      disabilityState: '无残疾证明',
      careState: '无抚恤定补优抚证明',
      testData:'龙华区',
      date1: '2019-09-09'
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  padding-bottom: 10px;
  display: flex;
  .title-icon{
    width: 3px;
    background: #F5A623;
    margin-right: 10px;
    height: 26px;
  }
  .title-font{
    font-size: 20px;
  }
}
table {
  width: 100%;
  margin: 0 auto;
  border: 1px solid #dde5f9;
  border-collapse: collapse;
  text-align: center;
  & /deep/ .el-input__inner{
    border: none;
    outline: none;
  }
  tr {
    border: 1px solid #dde5f9;
  }
  td {
    border: 1px solid #dde5f9;
    // font-weight: 500;
    font-size: 14px;
    // height: 2rem;
    // width: 8rem;
    & /deep/ .el-input.is-disabled .el-input__inner {
      color: #050507;
    }
  }
  td:nth-child(odd) {
    width: 16%;
    background: aliceblue;
  }
}
.more-info {
  margin-top: 10px;
}
</style>

