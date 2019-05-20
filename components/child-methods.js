Vue.component('child-methods', {
    data() {
        return {
            compName: 'child data componente hijo by methods'
        }
    },
    methods: {
        showComponentName() {
            console.log('Llamada al metodo showComponentName: ' + this.compName);
        }
    },
    template: `
    <div class="card">
    <div class="card-body">
        <h2 class="card-title">Acceso a métodos del componente hijos desde el padre</h2>
        <div>
            <span>{{compName}}</span>
        </div>
    </div>
</div>
    `
});