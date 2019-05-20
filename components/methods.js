Vue.component('methods', {
    data () {
        return {
            name: 'dario',
            surname: 'zubaray'
        }
    },
    computed: {
        fullName() {
            return `${this.name} ${this.surname}`
        }
    },
    methods: {
        hello() {
            alert(this.fullName);
        }
    },
    template: `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">Ejecutar metodos con VueJs</h2>
            <div>
                <span>pulsa aqui para ejecutar el metodo hello()</span>
                <button @click="hello" class="btn btn-primary float-right">Hello</button>
            </div>
        </div>
    </div>
    `
});