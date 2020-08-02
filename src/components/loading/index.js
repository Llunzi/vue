/**
 * Created by liyunfeng on 2017/9/20.
 */
/* eslint-disable */
import loadingComponent from './Load.vue'

let $vm

const loadingPlugin = {
  install(Vue, options = {}){
    const Loading = Vue.extend(loadingComponent)

    if(!$vm){
      $vm = new Loading({
        el:document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    if(!Vue.loading){
      Vue.prototype.$loading = Vue.loading = {
        show:$vm.show,
        hide:$vm.hide
      }
    }
  }
}

export default loadingPlugin
