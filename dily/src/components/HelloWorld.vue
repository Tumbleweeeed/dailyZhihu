<template>
<div>
  <li>{{this.list}}</li>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[]
    }
  },
  methods:{
    getMes () {
      this.$axios.get("/4/news/latest")
        .then(this.showMes)
        .catch(function(error){
          console.log(error)
        })
    },
    showMes (mes) {
      this.list = mes
    }
  },
  mounted () {
    this.getMes()
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
</style>
