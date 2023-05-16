const appEmailList = Vue.createApp({
    data() {
        return {
            dataServer: [],
            dataPreLoad: [],
            showList: false,        }
    },
    computed: {
        postEmailJSON(){
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(response => this. dataServer[index] = response.data.response);
            };
        },
        preEmailJSON() {
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(response => this.dataPreLoad[index] = response.data.response);
            };
            setInterval(() => {
                this.showList = true;
            }, 1300);
        },
    },
}).mount('#app')