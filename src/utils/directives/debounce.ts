import type { Directive, DirectiveBinding } from 'vue'

interface ElType extends HTMLElement {
  debounceHandler: () => any
}

const debounce: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') {
      throw 'callback must be a function'
    }

    let timer: NodeJS.Timeout | null = null
    let arg: string | undefined = binding.arg //默认不传为 undefined
    let wait = arg || 300 // 默认防抖时间为300毫秒

    el.debounceHandler = () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, Number(wait))
    }

    el.addEventListener('input', el.debounceHandler)
  },

  beforeUnmount(el: ElType) {
    el.removeEventListener('input', el.debounceHandler)
  }
}

export default debounce
