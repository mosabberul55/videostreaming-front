import { defineStore } from "pinia";
export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: accessToken() || null,
        user: getUser() || null,
    }),
    getters: {
        isLoggedIn: (state) => {
            return !!(state.token) && !!(state.user)
        },
    },
    actions: {
        setToken(token) {
            this.token = token
            setAccessToken(token)
        },
        setUser(user) {
            this.user = user
            setUser(user)
        },
        clearAuth() {
            this.user = null
            this.token = null
            resetAllCookies()
        },
        async login(payload) {
            const {data, error, execute, refresh} = await postData('auth/login', payload)
            if (data) {
                this.setToken(data.value?.token)
                this.setUser(data.value?.user)
            }
            return {data, error, execute, refresh}
        },
        async register(payload) {
            const {data, error, execute, refresh} = await postData('auth/register', payload)
            if (data) {
                this.setToken(data.value?.token)
                this.setUser(data.value?.user)
            }
            return {data, error, execute, refresh}
        },
        async getLoggedUser() {
            const { data, error, execute, refresh } = await getData('user')
            if (data) {
                if (data.value.data?.permissions) {
                    delete data.value.data.permissions
                }
                this.setUser(data.value?.data)
            }
            return { data, error, execute, refresh }
        },
        async logout() {
            this.clearAuth()
        }
    }
})