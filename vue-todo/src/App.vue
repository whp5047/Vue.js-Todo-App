<template>
  <div id="App">
      <todo-header></todo-header>
      <todo-input v-on:addTodoItem="addOneItem"></todo-input>
      <todo-list
       v-on:removeItem="removeOneItem"
       v-on:toggleItem="toggleOneItem"></todo-list>
      <todo-footer v-on:clearAll="clearAllItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
  name: 'App',

  data(){
    return{
      todoItems : [],
    }
  },

  methods: {
    addOneItem(todoItem){
       var obj ={completed: false, item: todoItem};
       localStorage.setItem(todoItem, JSON.stringify(obj));
       this.todoItems.push(obj);
    },

    removeOneItem(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },

    toggleOneItem(todoItem, index){
      this.todoItems[index].completed = !this.todoItems[index].completed // 기존에 받아온 item을 수정 후 저장했다면, index 번호를 받아 저장되어 있는 index를 찾아가서 수정 
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem)); // localStorage를 갱신할 방법x 따라서 completed 속성을 변경 후 다시 저장
    },

    clearAllItems(){
      localStorage.clear();
      this.todoItems = [];
    },

  },

  components: {
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter,

  }
}
</script>

<style>
  body{
    text-align: center;
    background-color: #F6F6F6;
  }

  input{
    border-style: groove;
    width: 200px;
  }

  button{
    border-style: groove;
    margin: 3px;
  }

  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
  }

</style>
