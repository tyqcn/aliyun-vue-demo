<template>
  <div class="content-layer hello">
    <h1>{{ msg }}</h1>
    <div class="nav1-btn" @click="onJumpMask">前往Mask层</div>
    <div class="nav1-content">这里是内容</div>
  </div>
</template>

<script>
export default {
  name: 'Nav1',
  data () {
    return {
      msg: 'Welcome to Nav1'
    }
  },
  methods:{
    onJumpMask(){
      this.$router.push("/mask")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .nav1-btn{width: 3.2rem;height: 1rem;font-size: .36rem;border: 1px solid #e8e8e8;text-align: center;line-height: 1rem;margin: 2rem auto;}
  .nav1-content{padding: 2rem 0 7rem;text-align: center;}
</style>
