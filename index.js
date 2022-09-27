Vue.createApp({
    data() {
        return {
            message: "",
            someNumber: 1,
            anotherNumber: null
        }
    },
    methods: {
        Message(message) {
            if (message)
                this.message = message
            else
                this.message = "Must be non-negative number" + message
        }
    }
}).mount("#app")