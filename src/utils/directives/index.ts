import type { App } from 'vue'
import debounce from './debounce'
import throttle from './throttle'

const directivesList: any = {
  debounce,
  throttle
}

const directives = {
  install: (app: App<Element>) => {
    Object.keys(directivesList).forEach(key => {
      app.directive(key, directivesList[key])
    })
  }
}

export default directives
