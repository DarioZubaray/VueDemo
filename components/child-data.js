Vue.component('child-data', {
    data() {
        return {
            compName: 'child data componente hijo'
        }
    },
    template: `
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">Acceso a los datos del componente hijos</h2>
                <div>
                    <span>{{compName}}</span>
                </div>
            </div>
        </div>
    `
});