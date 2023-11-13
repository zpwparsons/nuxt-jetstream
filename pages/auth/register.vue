<script lang="ts" setup>
import type {UserRegisterForm} from "~/types/Forms/UserRegisterForm";
import AuthenticationCard from "~/components/AuthenticationCard.vue";

definePageMeta({
  middleware: ['guest'],
});

const register = async (form: UserRegisterForm) => {
  const auth = useAuthStore();
  const {error} = await auth.register(form);

  if (!error.value) {
    navigateTo('/dashboard');
  }
};
</script>

<template>
  <AuthenticationCard title="Create your account">
    <FormKit
        type="form"
        @submit="register"
        submit-label="Register"
        :submit-attrs="{
          inputClass: 'w-full justify-center rounded-md font-semibold hover:bg-indigo-500',
        }"
    >
      <FormKit
          type="text"
          name="name"
          id="name"
          label="Name"
          validation="required"
      />

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

      <FormKit
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          label="Confirm Password"
          validation="required"
      />
    </FormKit>

    <template #footer>
      <p class="mt-10 text-center text-sm text-gray-500">
        <span>Already a member?</span>

        <NuxtLink to="/auth/login" class="ml-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Sign in to your account
        </NuxtLink>
      </p>
    </template>
  </AuthenticationCard>
</template>
