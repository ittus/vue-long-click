import Vue from 'vue'
import App from './App.vue'
import { longClickDirective } from './index'

Vue.config.productionTip = false

const longClickInstance = longClickDirective({delay: 400, interval: 50})
Vue.directive('longclick', longClickInstance)

new Vue({
  render: h => h(App),
}).$mount('#app')
