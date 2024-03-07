import App from './App'
import { createPinia } from 'pinia'
// #ifdef H5
import lazyPlugin from 'vue3-lazy'
// #endif

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(createPinia())
  // #ifdef H5
  app.use(lazyPlugin, {
    loading: '@/static/loading.png',
  })
  // #endif
  return {
    app
  }
}
// #endif