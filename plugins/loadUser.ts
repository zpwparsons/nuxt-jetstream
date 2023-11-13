export default defineNuxtPlugin(async (nuxtApp) => {
    const auth = useAuthStore();

    if (auth.isLoggedIn) return;

    await auth.fetchUser();
})
