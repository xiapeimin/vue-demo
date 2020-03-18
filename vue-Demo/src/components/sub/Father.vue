<template>
    <div id='root'>
        <p>{{fmsg}}</p>
        <p>llllll</p>
        <confirm text='注册' @message='getMessage'></confirm>
    </div>
</template>

<script>
    //在父子间中引入子组件
    import Confirm from './Confirm'
    export default {      
        name:'Confirm',
        components: {
            'Confirm': Confirm,
        },
        data(){
            return{
                fmsg:'这是父组件'
            }
  
        },
        methods:{
            getMessage(val){ // val为子组件传给父组件的值
                alert(val)
            }
        }
    }
</script>

<style>
#root{
    color:'red';
}
<style>


