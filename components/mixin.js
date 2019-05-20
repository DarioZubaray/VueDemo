let myMixin = {
    mounted() {
        console.log('MIXIN init');
        console.log(this.mixinData);
        this.test();
    },
    data() {
        return {
            mixinData: 'Mixin Data'
        }
    },
    methods: {
        test() {
            console.log('test from mixin');
        }
    },
    template: '<h4>myMixin</h4>'
};

Vue.component('mixin', {
    mixins: [myMixin],
    mounted() {
        console.log("Mixin from component")
    },
    template: `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">Mixins</h2>
            <div>
                <i>Mira la consola del navegador</i>
            </div>
        </div>
    </div>
    `
});