import { Directive, DirectiveBinding } from 'vue'

interface ElType extends HTMLElement {
  throttleHandlerClick: () => any
}

const throttle: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') {
      throw 'callback must be a function'
    }

    let lastExecTime = 0
    let arg: string | undefined = binding.arg //默认不传为 undefined
    let wait = arg || 300 // 默认节流时间为300毫秒

    el.throttleHandlerClick = () => {
      const now = Date.now()
      if (now - lastExecTime >= Number(wait)) {
        lastExecTime = now
        binding.value()
      }
    }

    el.addEventListener('click', el.throttleHandlerClick)
  },

  beforeUnmount(el: ElType) {
    el.removeEventListener('click', el.throttleHandlerClick)
  }
}

export default throttle
