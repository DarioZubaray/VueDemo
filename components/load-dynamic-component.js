Vue.component('load-dynamic-component', {
    data() {
        return {
            components: ['cmp1', 'cmp2', 'cmp3'],
            currentComponent: 'cmp1'
        }
    },
    methods: {
        changeComponent(cmp) {
            this.currentComponent = cmp;
        }
    },
    template: `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title mx-auto">Componentes dinamicos</h2>
            <div>
                <button class="btn btn-secondary mx-2" v-for="cmp in components" :key="cmp" @click="changeComponent(cmp)" >
                    Seleccionar {{cmp}}
                </button>
                <div class="my-2">
                    <component :is="currentComponent" />
                </div>
            </div>
        </div>
    </div>
    `
});