Vue.component('vmodel-array', {
    data () {
        return {
            frameworks: []
        }
    },
    template: `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">v-model con arrays</h2>
            <div>
                <form>
                <label class="checkbox-inline" for="vuejs2">
                    <input type="checkbox" id="vuejs2" v-model="frameworks" value="vuejs2" />
                    Vuejs2
                </label>
                <label class="checkbox-inline" for="reactjs">
                    <input type="checkbox" id="reactjs" v-model="frameworks" value="reactjs" />
                    reactjs
                </label>
                <label class="checkbox-inline" for="angular">
                    <input type="checkbox" id="angular" v-model="frameworks" value="angular" />
                    angular
                </label>
                </form>
                <p>Frameworks seleccionados: {{frameworks}}</p>
            </div>
        </div>
    </div>
    `
});