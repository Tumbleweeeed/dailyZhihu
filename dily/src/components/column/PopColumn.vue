<template>
  <div class="wrapper">
    <ul>
      <li class='bar'>今日份</li>
      <router-link 
        tag="li" v-for="(item,indx) of totalData" 
        :to="'column/'+item.id"
        @click.native="sendColumn(item.id)"
      >
        <p>{{item.name}}</p>
        <p>{{item.description}}</p>
        <img :src="item.thumbnail" alt="">
        <div class="br"></div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  name:"TodayNews",
  data () {
    return{
      totalData:''
    }
  },
  methods: {
    getData () {
      axios.get("/api/3/sections")
        .then(this.showMessage)
    },
    showMessage (res) {
      this.totalData = res.data.data
    },
    sendColumn (res) {
      this.$store.dispatch('column',res)
      console.log(this.$store.state.column)
    }
  },
  mounted () {
    this.getData()
  }

}
</script>

<style lang="stylus" scoped>
  .wrapper
    background #fff
    height 100%
    color #333
    margin .06rem
  .bar
    width 98%
    background #0084ff
    border-radius .1rem
    color #fff
    height .5rem
    line-height .15rem
    padding-left .5rem
  li
    overflow hidden
    padding .2rem
    line-height .4rem
    p
      margin-right 1.8rem
      height 1rem
      padding-top .2rem
    img
      width 1.5rem
      margin-top -1rem
      float right
    .br
      width 100%
      height .02rem
      background #0084ff
      margin-top .7rem
</style>