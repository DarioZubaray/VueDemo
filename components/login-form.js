Vue.component('login-form', {
    data() {
        return {
            logged: false,
            user: {
                name: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.logged = this.user.name == 'test' && this.user.password == '123';
        }
    },
    template:  `
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">Login form</h2>
                <div>
                    <div v-show="logged" class="alert alert-success" role="alert">
                        Haz iniciado sessión
                    </div>
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label for="name">Nombre de usuario</label>
                            <input type="text" v-model="user.name" class="form-control" id="name" name="name" aria-describedby="nameHelp" placeholder="Ingrese su usuario test">
                            <small id="nameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" v-model="user.password" class="form-control" id="password" name="password" placeholder="Ingrese su password 123">
                        </div>
                        <button type="submit" class="btn btn-success">Login</button>
                    </form>
                </div>
            </div>
        </div>
    `
});