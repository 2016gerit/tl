// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css'
import '../static/css/global.css'

import Axios from 'axios';
Vue.prototype.$axios=Axios;
Axios.defaults.baseURL='http://192.168.1.5/guanaitang/api/Goods/';
//定义拦截器
//1.请求发起前显示 loading open();
Axios.interceptors.request.use(function(config){
  MintUI.Indicator.open({
    text:'玩儿命加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
});
//2.响应回来后关闭 loading close()
Axios.interceptors.response.use(function(response){
  MintUI.Indicator.close();
  return response;
});
import Navbar from './components/common/Navbar';
Vue.component(Navbar.name,Navbar);

import Moment from 'moment';
Vue.filter('coverTime',function(data,formatStr){
	return Moment(data).format(formatStr);
});
Vue.filter('controll',function(str,num){
    if(str.length<=num){
      return str;
    }
    else{
      return str.substr(0,num-1)+'...';
    }
});
Vue.filter('changs',function(str){
  return str.replace('test.com','192.168.1.5/guanaitang')
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
