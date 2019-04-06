<template>
<div class="wrapper">
  <home-header @changeTab="changeTab"></home-header>
  <slide-show :sendIndex="indexFont"></slide-show>
</div>
</template>

<script>
import HomeHeader from "./header/header"
import TodayNews from "./news/home"
import PopNews from "./popular/home"
import SlideShow from "./header/slide"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[],
      indexFont:0 
    }
  },
  components: {
    HomeHeader,
    SlideShow
  },
  methods: {
    changeTab (value) {
      console.log(value)
      this.indexFont = value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .wrapper
    position fixed
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
