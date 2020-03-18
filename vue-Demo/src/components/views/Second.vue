<template>
  <div class="first-app">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'First',
  data () {
    return {
      msg: '欢迎来到第二页'
    }
  }
}
//https://cn.vuejs.org/v2/api/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.first-app{
    color:red;
    font-size:50px;
}

</style>
