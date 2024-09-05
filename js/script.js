const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [
                {
                    text: "Fare la spesa",
                    done: false
                },
                {
                    text: "Lavare i piatti",
                    done: true
                },
                {
                    text: "Finire il progetto",
                    done: false
                },
                {
                    text: "Allenarsi in palestra",
                    done: true
                }
            ],
            newTodoText: '',
        }
    },
    methods: {
        // metodo per rimuovere dalla lista un todo
        removeTodo(index) {
            this.todoList.splice(index, 1);
        },
        // metodo per aggiunger un nuovo todo alla lista
        newTodo() {
            if (this.newTodoText.length < 3) {
                return;
            } else {
                this.todoList.push({
                    text: this.newTodoText,
                    done: false
                });
                this.cleanerNewTodo();
            }
        },
        cleanerNewTodo() {
            this.newTodoText = '';
        }
    }
}).mount('#app')