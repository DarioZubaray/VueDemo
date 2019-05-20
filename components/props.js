Vue.component('props', {
    props: ['name', 'surname'],
    template: `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">Props en Vuejs2</h2>
            <div>
                <p>{{name}} {{surname}}</p>
            </div>
        </div>
    </div>
    `
});