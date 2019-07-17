/* 公共方法 */
import Dhttp from '@/config/axios'
import { url } from '@/api/paths'

export default {//例子
    getDictionary(params) {
       return Dhttp.get(url.getDictionary, params) //查询公租轮候册信息
   },
    getTableList(params) {
    return Dhttp.get(url.getTableList, params) //查询安居轮候册信息
    },
    getTurnoverList(params) { 
        return Dhttp.get(url.getTurnoverList, params) //查询周转轮候册页面信息
    },
    getSecurityList(params) {
        return Dhttp.get(url.getSecurityList, params)  //查询保障对象页面信息
    },
    getStaffList(params) {
        return Dhttp.get(url.getStaffList, params) //人员库页面信息
    },
    getUnitList(params) {
        return Dhttp.get(url.getUnitList, params) //单位库页面信息
    },
}
