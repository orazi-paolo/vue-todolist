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
        }
    },
    methods: {
        // metodo per rimuove dalla lista un todo
        removeTodo(index) {
            this.todoList.splice(index, 1);
        }
    }
}).mount('#app')