<template>
    <div>
        <transition-group name="fade" tag="ul">
            <!-- <ul> -->
                <li v-for="(todoItem, index) in todoList" :key="todoItem.item" class="shadow">
                    <i class="checkBtn fa-solid fa-check"  :class="{checkBtnCompleted: todoItem.completed}"
                    @click="toggleComplete(todoItem,index)"></i>
                    <span :class="{textCompleted: todoItem.completed}"> {{ todoItem.item }} </span>
                    <span class="removeBtn" @click="removeTodo(todoItem, index)"> 
                        <i class="fa-solid fa-trash-can"></i>
                    </span>
                </li>
            <!-- </ul> -->
        </transition-group>
    </div>
</template>
<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex'

export default {
    props : ['propsData'], // 상위 컴포넌트에서 내려준 값을 받음 v-for in propsdaa로 변경하여 반목문 실행

    methods: {
        removeTodo(todoItem, index){
            this.$emit('removeItem', todoItem, index)
        },
        
        toggleComplete(todoItem, index){
            this.$emit('toggleItem', todoItem, index);
            
        }
    },

    setup(){
        const store = useStore();
        const todoList = computed(() => store.state.todoItems);
    },
}
</script>
<style>
    ul{
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }

    li{
        display: flex;
        min-height: 50px;
        height: auto;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
        color: black;
    }

    .checkBtn{
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }

    .checkBtnCompleted{
        color: #b3adad;
    }

    .textCompleted{
        text-decoration: line-through;
        color: #b3adad;
    }

    .removeBtn{
        margin-left: auto;
        color: #de4343;
    }
    
    .fade-enter-active, .fade-leave-active {
         transition: all .8s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }

</style>