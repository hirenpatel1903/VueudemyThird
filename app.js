// document.getElementById('button').addEventListener();

function add() {
    counter = counter + 1;
}

function reduce() {
    counter = counter - 1;
}

const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        }
    },
});

app.mount('#events');