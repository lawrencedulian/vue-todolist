const { createApp } = Vue;

createApp ({
    data () {
        return {
            newTask: "",
            tasks: [],
            hasError: false
        }
    },

    methods: {
        addNewTask() {
            if (this.newTask.lenght <= 5) {
                this.hasError = true;
            } else {
                this.tasks.unshift(this.newTask);
                this.newTask = "";
                this.hasError = false;
            }
        }
    }
}).mount("#app")