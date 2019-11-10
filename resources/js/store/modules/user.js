import userModels from '../../api/user';

const state = {
    user: null
}

// getters
const getters = {
    getUser: (state, getters) => {
        return state.user;
    },
    isAdmin: (state, getters) => {
        return !_.isEmpty(state.user) ? state.user.role === 'admin' : false;
    },
    isLoggedIn: (state, getters) => {
        return !_.isEmpty(state.user);
    }
};

// actions
const actions = {
    getUser({commit}) {
        userModels.getUser().then(function (response) {
            commit('setUser', response);
        });
    },
    login({commit}, payload) {
        userModels.login(payload.email, payload.password);
    },
    signUp({commit}, payload) {
        userModels.signUp(payload);
    }
}

// mutations
const mutations = {
    setUser(state, user) {
        state.user = user;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
