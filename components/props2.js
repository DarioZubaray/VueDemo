Vue.component('props2', {
    props: {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: false
        },
        age: {
            type: Number,
            required: true,
            validator: value => {
                if(value < 18) {
                    console.log('Eres menor de edad');
                    return true;
                }
                return false;
            }
        }
    },
    template: `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">Props2 en Vuejs2</h2>
            <div>
                <p>{{name}} {{surname}}, Edad: {{age}}</p>
            </div>
        </div>
    </div>
    `
});