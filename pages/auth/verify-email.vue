<script setup lang="ts">
import {useAuthStore} from "~/stores/useAuthStore";
import AuthenticationCard from "~/components/AuthenticationCard.vue";

const auth = useAuthStore();

definePageMeta({
  middleware: [
    'auth',
    'not-verified',
  ],
});

const resendVerificationEmail = async () => {
  await auth.emailPasswordResetLink(auth.user.email);

  // We have emailed your password reset link.
};

const logOut = async () => {
  await auth.logout();
};
</script>

<template>
  <AuthenticationCard title="Verify Email Address">
    <p class="text-gray-500 text-sm mb-6">
      Before continuing, could you verify your email address by
      clicking on the link we just emailed to you? If you didn't
      receive the email, we will gladly send you another.
    </p>

    <FormKit
        type="form"
        @submit="resendVerificationEmail"
        submit-label="Resent Verification Email"
        :submit-attrs="{
          inputClass: 'w-full justify-center rounded-md font-semibold hover:bg-indigo-500',
        }"
    />

    <div class="mt-4 flex justify-between items-center">
      <NuxtLink to="/user/profile" class="py-2 text-sm text-gray-700 underline">
        Edit Profile
      </NuxtLink>

      <a @click.prevent="logOut" href="/" class="p-2 text-sm text-gray-700 underline">
        Log Out
      </a>
    </div>
  </AuthenticationCard>
</template>
