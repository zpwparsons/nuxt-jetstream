<script lang="ts" setup>
import {useAuthStore} from "~/stores/useAuthStore";
import type {UserLoginForm} from "~/types/Forms/UserLoginForm";
import AuthenticationCard from "~/components/AuthenticationCard.vue";

definePageMeta({
  middleware: ['guest'],
});

const login = async (form: UserLoginForm) => {
  const auth = useAuthStore();
  const {error} = await auth.login(form);

  if (!error.value) {
    navigateTo('/dashboard');
  }
};
</script>

<template>
  <AuthenticationCard title="Sign in to your account">
    <FormKit
        type="form"
        @submit="login"
        submit-label="Sign In"
        :submit-attrs="{
          inputClass: 'w-full justify-center rounded-md font-semibold hover:bg-indigo-500',
        }"
    >
      <FormKit
          type="text"
          name="email"
          id="email"
          label="Email"
          validation="required|email"
      />

      <FormKit
          type="password"
          name="password"
          id="password"
          label="Password"
          validation="required"
      />

      <div class="flex items-center justify-between">
        <FormKit
            type="checkbox"
            name="remember"
            label="Remember me"
        />

        <div class="text-sm leading-6">
          <NuxtLink to="/auth/forgot-password" class="font-semibold text-indigo-600 hover:text-indigo-500">
            Forgot password?
          </NuxtLink>
        </div>
      </div>
    </FormKit>

    <template #footer>
      <p class="mt-10 text-center text-sm text-gray-500">
        <span>Not a member?</span>

        <NuxtLink to="/auth/register" class="ml-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Create an account
        </NuxtLink>
      </p>
    </template>
  </AuthenticationCard>
</template>
