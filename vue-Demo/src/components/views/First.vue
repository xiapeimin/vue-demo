<template>
  <div class="first-app">
    <p>{{msg}}</p>
    <div>
        <p v-if="seen">现在你看到我了</p>
        <ol>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
    </div>
    <p><router-link to='/second'>路由跳转</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'First',
  data () {
    return {
      msg: 'Welcome to First',
      seen: false,
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '开发 vue项目' }
      ]
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
