Vue.component('slots', {
    template: `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">Slots. ejemplo de layout</h2>
            <div>
                <header>
                    <slot name="header"></slot>
                </header>
                <main>
                    <slot></slot>
                </main>
                <footer>
                    <slot name="footer"></slot>
                </footer>
            </div>
        </div>
    </div>
    `
});