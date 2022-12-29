import { createStore } from 'vuex';

const storage = {
    fetch(){
        const arr = [];
        if(localStorage.length >0) {
            for(var i =0 ; i< localStorage.length ; i++){
                // this.todoItems.push(localStorage.key(i));
                let value = JSON.parse(localStorage.getItem(localStorage.key(i)));
                arr.push(value); // 파싱된 Json 객체를 저장
            }
        }
        return arr;
    },
};

export const store = createStore ({
    state :{
        todoItems : storage.fetch(),

    },

    mutations :{

    },

    actions :{

    },

});

