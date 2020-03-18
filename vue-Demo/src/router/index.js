import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/views/First'
import Todo from '@/components/views/Todolist'
import Father from '@/components/sub/Father'
import Second from '@/components/views/Second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/first',
      name:'First',
      component: First
    },
    {
      path:'/todo',
      name:'Todo',
      component: Todo
    },
    {
      path:'/father',
      name:'Father',
      component: Father
    },
    {
      path:'/second',
      name:'Second',
      component: Second
    }
  ]
});


//npm run dev运行服务