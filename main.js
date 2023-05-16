const appEmailList = Vue.createApp({
    data() {
        return {
            dataServer: [],
            dataPreLoad: [],
            showList: false,
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
    computed: {
        setDataPreLoad() {
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(response => this.dataPreLoad[index] = response.data.response);
            }
        },
    },
}).mount('#app')