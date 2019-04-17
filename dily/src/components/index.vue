<template>
<div class="wrapper">
  <home-header></home-header>
  <slide-show></slide-show>
</div>
</template>

<script>
import HomeHeader from "./header/header"
import SlideShow from "./header/slide"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[]
    }
  },
  components: {
    HomeHeader,
    SlideShow
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .wrapper
    width 100%
    height 100%
    top 0
    background #f6f6f6
    .content
      background #aaa
      width 98%
      height 93%
      margin .06rem
      margin-top .1rem
</style>
