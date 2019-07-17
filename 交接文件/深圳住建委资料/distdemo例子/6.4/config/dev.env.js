'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API: '"http://192.168.2.137:8083/phbip_demand_mnt"'  //正式接口
  API: '"http://wbl-app1:8480/phbip_demand_mnt"'  //正式接口
})
