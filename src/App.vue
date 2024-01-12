<template>
  <div>
    <!-- <button v-throttle:1500="throttleHandler">节流点击</button>
    <br />
    <input class="debounce" v-debounce:200="debounceHandler" placeholder="防抖" /> -->
  </div>
</template>

<script setup lang="ts">
import { getList } from '@/api/test/index'

getList().then(res => {
  console.log(res, 'getList')
})

// const throttleHandler = () => {
//   console.log('throttleHandler')
// }
// const debounceHandler = () => {
//   console.log('debounceHandler')
// }
</script>

<style scoped>
.debounce {
  padding: 10px 10px;
  box-sizing: border-box;
  margin-top: 20px;
}
</style>
