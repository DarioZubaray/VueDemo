Vue.component('emit', {
    data () {
        return {
            carbrand: 'Toyota'
        }
    },
    template: `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">Emitir evento con Vuejs</h2>
            <div>
                <p @click="$emit('showcarbrand', carbrand)" >Pulse aqui para emitir un evento a ROOT</p>
            </div>
        </div>
    </div>
    `
});