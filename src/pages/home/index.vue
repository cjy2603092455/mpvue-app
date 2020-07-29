<template>
  <div class="home">
    <img :src="img.user" alt />
  </div>
</template>

<script>
import img from '@/utils/img.js'
export default {
  data () {
    return {
      img,
      curCate: 'd',
      cates: [
        {id: 1, label: 'label1', value: 'a'},
        {id: 2, label: 'label2', value: 'b'},
        {id: 3, label: 'label3', value: 'c'},
        {id: 4, label: 'label4', value: 'd'}
      ]
    }
  }
}
</script>

<style scoped>
</style>
