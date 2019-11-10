export default {
    getUser() {
        return axios.get('/auth/user').then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    login(email, password) {
        return axios.post('/login', {
                email: email,
                password: password
            })
            .then(function (response) {
                window.store.dispatch('user/getUser')
                window.router.push({name: 'home'})
            })
            .catch(function (error) {
                return error.message;
            });
    }, signUp(payload) {
        return axios.post('/register', {
            name: payload.name,
            email: payload.email,
            password: payload.password,
            password_confirmation: payload.password_confirmation,
        }).then(function (response) {
            window.store.dispatch('user/getUser')
            window.router.push({name: 'home'})
        }).catch(function (error) {
            return error.message;
        });
    }

}
