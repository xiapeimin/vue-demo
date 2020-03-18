<template>
    <li @click="handleDelete">{{content}}</li>
</template>

<script>
    export default {      
        //子组件通过props接收父组件传来的值
        props: ['content','index'], 
        methods: {
            //子组件触发了事件，父组件监听并处理 delete
            handleDelete(){
                this.$emit('delete',this.index)
            }
        }
    }
</script>


