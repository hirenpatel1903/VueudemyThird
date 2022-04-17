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
            name: '',
        }
    },
    methods: {
        setName(event, lastname) {
            this.name = event.target.value + ' ' + lastname;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        }
    },
});

app.mount('#events');