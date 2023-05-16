const appEmailList = Vue.createApp({
    data() {
        return {
            dataServer: [],
        }
    },
    methods: {
        getEmailJSON(element){
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(response => element[index] = response.data.response);
            }
        }
    },
}).mount('#app')