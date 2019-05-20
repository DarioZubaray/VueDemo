Vue.component('watchers', {
    data () {
        return {
            user: null,
            oldUser: null
        }
    },
    methods: {
        async randomUser() {
            try {
                const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 100)+1}`);
                const json = await data.json();
                this.user = json;
            } catch (e) {
                console.log(e);
            }
        }
    },
    watch: {
        user(newVal, oldVal) {
            this.user = newVal;
            this.oldUser = oldVal;
        }
    },
    template: `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">Ejemplo de watchers</h2>
            <div>
                <button @click="randomUser" class="btn btn-primary">Usuario random</button>
                <br/>
                <p>Nuevo usuario: {{user}}</p>
                <p>Usuario anterior: {{oldUser}}</p>
            </div>
        </div>
    </div>
    `
});