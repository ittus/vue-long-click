import Vue from 'vue'
import App from './App.vue'
import longClick from './directives/longclick'

Vue.config.productionTip = false

const longClickInstance = longClick({})
Vue.directive('longclick', longClickInstance)

new Vue({
  render: h => h(App),
}).$mount('#app')
