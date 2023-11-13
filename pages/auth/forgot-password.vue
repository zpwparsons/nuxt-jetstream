<script lang="ts" setup>
import {useAuthStore} from "~/stores/useAuthStore";
import AuthenticationCard from "~/components/AuthenticationCard.vue";

definePageMeta({
  middleware: ['guest'],
});

const sendPasswordResetLink = async ({email}) => {
  const auth = useAuthStore();
  await auth.emailPasswordResetLink(email);

  // We have emailed your password reset link.
};
</script>

<template>
  <AuthenticationCard title="Forgot your password?">
    <p class="text-gray-500 text-sm mb-6">
      No problem. Just let us know your email address and we will email
      you a password reset link that will allow you to choose a new one.
    </p>

    <FormKit
        type="form"
        @submit="sendPasswordResetLink"
        submit-label="Email Password Reset Link"
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
    </FormKit>
  </AuthenticationCard>
</template>
