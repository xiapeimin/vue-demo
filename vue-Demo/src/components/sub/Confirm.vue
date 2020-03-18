<template>
    <div class='confirm-button'>
        <p>{{msg}}</p>
        <button @click='getButtonClick'>{{text || '确认'}}</button>
    </div>
</template>

<script>
    export default {   
        name:'confirm-button',
        props:['text'],     //父组件传给子组件的值   
        data(){
            return{
                msg:'这是子组件'
            }
   
        },
        methods:{
            getButtonClick(){  //点击按钮的时候，向父组件传值
                this.$emit("message",this.msg); //向父组件传值
            }
        }
    }
    //父组件传给子组件的值通过props接收，子组件通过$emit向父组件传值
</script>


