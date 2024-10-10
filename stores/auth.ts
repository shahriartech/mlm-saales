import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
    async login(email, password) {
      const { data, error } = await useNuxtApp().$supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      this.setUser(data.user)
    },
    async logout() {
      const { error } = await useNuxtApp().$supabase.auth.signOut()
      if (error) throw error
      this.setUser(null)
    },
  },
})