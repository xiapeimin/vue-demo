<template>
    <div>
        <input type="text" v-model="inputValue">
        <button @click="handleSubmit">提交</button>
        <br/>
        <ul>
            <todo-item 
            v-for="(item, index) of list" 
            :key="index"
            :content="item"
            :index="index"
            @delete="handleDelete"
            ></todo-item>
        </ul>
    </div>
</template>
 
<script>
    import todoItem from './todoItem'
    export default {
        //局部组件的注册和声明，可本页面使用局部组件
        components: {
            'todo-item': todoItem,
        },
        data() {
            return {
                inputValue: '',
                list:[]
            }
        },
        methods: {
            //提交之后将输入的值存在数组list[]中，然后将输入的值置空
            handleSubmit(){
                this.list.push(this.inputValue)
                this.inputValue = ''
            },
            // 点击删除
            handleDelete(index){
                this.list.splice(index,1)
            }
        }
 
    }
</script>
 
<style>
 
</style>
