const { createApp } = Vue;

createApp({
    data(){
        return{
            newTask : '',
            todo_list :[
                {
                    text : 'Fare la spesa',
                    done : false
                },
                {
                    text : 'Fare i compiti',
                    done : false
                },
                {
                    text : 'Fare la doccia',
                    done : false
                },
                {
                    text : 'Comprare i regali di Natale',
                    done : false
                }
            ] 
        }
    },
    methods : {
        removeTodo(index){
            this.todo_list.splice(index,1);
        },
        addNewTask(){
            let obj = {
                text: this.newTask,
                done: false
            };
            this.todo_list.push(obj);
            this.newTask = '';
        }
    }
}).mount('#app')