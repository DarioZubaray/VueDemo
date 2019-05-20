Vue.component('message', {
    data() {
        return {
            message: 'Hola mundo'
        }
    },
    template: `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">Componente message:</h2>
            <div>
                <span>{{message}}</span>
            </div>
        </div>
    </div>
    `
});

