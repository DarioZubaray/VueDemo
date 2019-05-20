Vue.component('parent-data', {
    template: `
    <div class="card">
    <div class="card-body">
        <h2 class="card-title">Acceso a los datos del componente padre</h2>
        <div>
            <span>{{$parent.appName}}</span>
        </div>
    </div>
</div>
    `
});