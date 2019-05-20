Vue.component('computed-properties-get-set', {
    data() {
        return {
            amount: 0
        }
    },
    computed: {
        amountFormatter: {
            get() {
                return `${this.amount}`;
            }
            /*
            ,
            set(newValue) {
                this.amount = newValue * 44.75;
            }
            */
        }
    },
    template: `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">computed-properties-get-set</h2>
            <div>
                <input class="form-control" v-model="amount" />
                <p>{{amountFormatter | currency_filter('$')}}</p>
            </div>
        </div>
    </div>
    `
});