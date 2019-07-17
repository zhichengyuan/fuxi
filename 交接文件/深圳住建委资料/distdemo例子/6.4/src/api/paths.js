/* 此处添加api接口 */
export const url = {
    // batchInfo:"batch/list",  //例子
    getDictionary:'/demand/dictionary',//根据字典名称查询
    getTableList:'/demand/queue_list/page',//公租，安居轮候册table信息
    getTurnoverList: '/demand/queue_list/page/turnover', //周转轮候册table信息
    getSecurityList:'/demand/beneficiary/page', //保障对象查询,table信息
    getStaffList:'/demand/store/person', //人员库查询table信息
    getUnitList:'/demand/store/unit' // 单位库查询table信息
}


