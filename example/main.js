import Vue from 'vue'
import App from './app.vue'
import GSRSkillbar from '../src'

Vue.use(GSRSkillbar)

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
})
