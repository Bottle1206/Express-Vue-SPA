<template>
  <div class="hello">
    hello world！
    <p>{{msg}}</p>
    <div class="color-priamry">this is express returnInfo: {{expressInfo}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    expressInfo() {
      return this.$store.state.expressInfo;
    }
  },
  created() {
    this.$store.dispatch('query')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .hello
    padding 50px
  .color-priamry
    color #03a9f4
</style>
