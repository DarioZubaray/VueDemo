Vue.component('computed-properties', {
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
    template: `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">Computed  properties</h2>
            <div>
                <p>{{fullName}}</p>
            </div>
        </div>
    </div>
    `
});