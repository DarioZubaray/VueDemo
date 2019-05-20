Vue.component('vmodel', {
    data () {
        return {
            framework: 'Vuejs2'
        }
    },
    template: `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">v-model</h2>
            <div>
                <input v-model="framework" v-mi-focus class="form-control" placeholder="Ingrese el nombre del framework..."/>
                <div class="span12 text-center"><i>El framework elegido es <b>{{framework}}</b></i></div>
            </div>
        </div>
    </div>
    `
});