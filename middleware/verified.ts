import {useAuthStore} from "~/stores/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();

    if (! auth.verified) {
        return navigateTo('/auth/verify-email', { replace: true });
    }
})
