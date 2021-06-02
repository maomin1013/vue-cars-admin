// 我好困啊，怎么github学习都要这么久，谁叫自己回来没有两小时内。。。

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 高德地图
import "./plugins/aMap";

// 守卫路由
import "./router/permit";
// svgIcon
import "./icon";
// 导入elementui
import "./plugins/elementui";
// 导入Composition API模块
import "./plugins/compositionApi";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // 
  /*1.如果使用的是：runtime-compiler:
  tempalte->ast->render->vitual dom->ui
  
  render:function(h){
    return h(App)
 }*/

  /**2.如果使用的是runtime-only----------结论1：性能更高
   * render->vdom->ui
   */
  render: h => h(App)
}).$mount("#app");
