Vue.createApp({
    data() {
        return {
            word: "",
            times: "",
            text: ""
        }
    },
    methods: {     
        Repeat(word, times) {
            if (times < 0)
                this.text = "Must be non-negative number" + times
            else
                for (let i = 0; i < times; i++) {
                    this.text += word;
                }
        }
    }
}).mount("#app")