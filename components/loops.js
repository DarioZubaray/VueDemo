Vue.component('loops', {
    data() {
        return {
            frameworks: [
                {id: 1, name: 'Vuejs'},
                {id: 2, name: 'Reactjs'},
                {id: 3, name: 'Angularjs'},
                {id: 4, name: 'Adonisjs'},
                {id: 5, name: 'Laravel'},
                {id: 6, name: 'Emberjs'},
            ]
        }
    },
    template: `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">Loops con v-for</h2>
            <div>
                <ul v-if="frameworks.length" class="list-group list-group-flush">
                    <li v-for="framework in frameworks" :key="framework.id" class="list-group-item">{{framework.name}}</li>
                </ul>
            </div>
        </div>
    </div>
`
});