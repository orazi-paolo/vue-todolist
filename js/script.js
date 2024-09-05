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
    }
}).mount('#app')