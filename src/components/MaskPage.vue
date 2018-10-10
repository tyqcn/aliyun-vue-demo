<template>
  <div class="mask-layer">
    <div class="mask-content">这是Mask层</div>
  </div>
</template>

<script>
export default {
  name: 'Nav1',
  data () {
    return {
      msg: 'Welcome to Nav1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mask-content{font-size: .32rem;text-align: center;padding: 1rem ;}
</style>
