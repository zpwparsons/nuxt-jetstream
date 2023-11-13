import {defineStore} from 'pinia';
import {useApiFetch} from "~/composables/useApiFetch";
import type {UserRegisterForm} from "~/types/Forms/UserRegisterForm";
import type {UserLoginForm} from "~/types/Forms/UserLoginForm";
import type {User} from "~/types/Models/User";

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);

    const isLoggedIn = computed(() => !!user.value);
    const verified = computed(() => !!user.value?.email_verified_at);

    async function fetchUser() {
        const { data } = await useApiFetch('/api/user');

        user.value = data.value as User;
    }

    async function register(details: UserRegisterForm) {
        await useApiFetch('/sanctum/csrf-cookie');

        const response = await useApiFetch('/register', {
            method: 'POST',
            body: details,
        });

        await fetchUser();

        return response;
    }

    async function login(credentials: UserLoginForm) {
        await useApiFetch('/sanctum/csrf-cookie');

        const response = await useApiFetch('/login', {
            method: 'POST',
            body: credentials,
        });

        await fetchUser();

        return response;
    }

    async function logout() {
        await useApiFetch('/logout', { method: 'POST' });

        user.value = null;

        navigateTo('/auth/login');
    }

    async function emailPasswordResetLink(email: string) {
        await useApiFetch('/sanctum/csrf-cookie');

        return useApiFetch('/forgot-password', {
            method: 'POST',
            body: { email },
        });
    }

    return {
        emailPasswordResetLink,
        fetchUser,
        isLoggedIn,
        login,
        logout,
        register,
        user,
        verified,
    };
});
