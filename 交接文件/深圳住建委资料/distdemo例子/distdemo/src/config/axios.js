/* 封装异步请求 */
import Vue from 'vue'
import axios from 'dist-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

const val = new Vue()
export default {

  get(url, params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: params
      }).then(res => {
        if (res.data.status == "success") {
          resolve(res.data.data || res.data || res)
        } else {
          val.$alert(res.data.message, "提示")
        }
      }).catch(err => {
        val.$alert(err.message, "提示")
      })
    })
  },

  post(url, params, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: data,
        params: params
      }).then(res => {
        if (res.data.status == "success") {
          resolve(res.data.data || res.data || res)

        } else {
          val.$alert(res.data.message, "提示")
        }
      }).catch(err => {
        console.log(err)
        val.$alert(err.message, "提示")
      })
    })
  }
}
