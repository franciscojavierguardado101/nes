<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">{{appName}}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav row">
                <li class="nav-item active col">
                    <a class="nav-link" href="#">Portfolio <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item col">
                    <a class="nav-link" href="#">Main</a>
                </li>
                <li class="nav-item col">
                    <a class="nav-link" href="#">Other Works</a>
                </li>
                <li class="nav-item col">
                    <a class="nav-link" href="#">Images</a>
                </li>

                <li class="nav-item col" v-show="isAdmin">
                    <a class="nav-link" href="#" @click="goToPostCreate()">Posts</a>
                </li>

                <li class="nav-item col" v-show="isLoggedIn">
                    <b-dropdown variant="light" :text="userNameText" @click="goTologin()">
                        <b-dropdown-item @click="goToLogout()">Logout</b-dropdown-item>
                    </b-dropdown>
                    <!--                    <a class="nav-link" href="#" ></a>-->
                </li>
                <li class="nav-item col" v-show="!isLoggedIn">
                    <a class="nav-link" href="#" @click="goTologin()">Login</a>
                </li>


            </ul>
        </div>
    </nav>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex';

    export default {
        name: "NavBar",
        computed: {
            ...mapState({
                user: state => state.user.user
            }), ...mapGetters('user', {
                isAdmin: 'isAdmin',
            }),
            userNameText() {
                return !_.isEmpty(this.user) ? this.user.name : "Login";
            }, isLoggedIn() {
                return !_.isEmpty(this.user)
            }
        },
        data: function () {
            return {
                appName: "Laravel"
            }
        }, methods: {
            goTologin() {
                this.$router.push({name: 'login'})
            },
            goToPostCreate() {
                this.$router.push({name: 'postCreate'})
            },
            goToLogout() {
                return axios.post('/logout')
                    .then(function (response) {
                        window.store.dispatch('user/getUser')
                        window.router.push({name: 'home'})
                    })
                    .catch(function (error) {
                        return error.message;
                    });
            }
        },
    }
</script>

<style scoped>
    transparentColor {
        background-color: aliceblue;

    }
</style>
