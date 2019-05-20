Vue.component('conditionals', {
    data () {
        return {
            age: 10
        }
    }, 
    template: `
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">Conditionals con v-if v-else-if</h2>
                <div>
                    <input v-model="age" class="form-control" name="edad" id="edad" aria-describedby="edadHelp"/>

                    <small id="edadHelp" class="form-text text-muted" v-if="age < 18">Menor de edad</small>
                    <small id="edadHelp" class="form-text text-muted" v-else-if="age >= 18 && age < 30">Mayor de edad, adulto joven menor de 30</small>
                    <small id="edadHelp" class="form-text text-muted" v-else-if="age >= 30 && age < 65">Mayor de edad. adulto mayor</small>
                    <small id="edadHelp" class="form-text text-muted" v-else>Jubilado</small>
                </div>
            </div>
        </div>
    `
});