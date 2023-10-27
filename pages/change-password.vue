<template>
    <div class="flex flex-col xl:flex-row items-start max-w-1920 w-full mx-auto py-10 px-8 xl:py-14 xl:px-16 2xl:px-20 bg-gray-100">
      <ProfileSidebar class="flex-shrink-0 hidden xl:block xl:w-80 me-10" />
      <Card class="w-full">
        <h1 class="mb-5 sm:mb-8 text-lg sm:text-xl text-heading font-semibold">
          {{ $t('change-password') }}
        </h1>

        <div class="flex flex-col">
          <PasswordInput
            v-model="oldPassword"
            name="oldPassword"
            :label="$t('text-old-password')"
            :error="errors ? $t(errors.oldPassword.message) : ''"
            class="mb-5"
            variant="outline"
          />
          <PasswordInput
            v-model="newPassword"
            name="newPassword"
            :label="$t('text-new-password')"
            :error="errors ? $t(errors.newPassword.message) : ''"
            class="mb-5"
            variant="outline"
          />
          <PasswordInput
            v-model="passwordConfirmation"
            name="passwordConfirmation"
            :label="$t('text-confirm-password')"
            :error="errors ? $t(errors.passwordConfirmation.message) : ''"
            class="mb-5"
            variant="outline"
          />
          <Button 
            :loading="loading" 
            :disabled="loading" 
            class="ms-auto"
            :on-click="() => handleSubmit(onSubmit)"
          >
            {{ $t('text-submit') }}
          </Button>
        </div>
      </Card>
    </div>
</template>

<script setup>
import { user } from "@data/me"; //TODO
import { useCustomerStore } from '@/stores/customer';
import { useSelectedStore } from '@/stores/selected';
import ProfileSidebar from "@components/profile/profile-sidebar";
import Spinner from "@components/ui/loaders/spinner/spinner";
import Card from "@components/ui/card";
import Button from "@components/ui/button";
import PasswordInput from "@components/ui/password-input";

const loading = ref(false); //TODO
const oldPassword = ref('');
const newPassword = ref('');
const passwordConfirmation = ref('');
const errors = ref(null);

const { t } = useI18n();
const { $toast } = useNuxtApp();
const store = useSelectedStore();
const customer = useCustomerStore();
customer.setMe(user); //TODO
const { me } = customer;

const changePassword = (data, callbacks) => {
    console.log('TODO.change-password.changePassword', data, callbacks);
    callbacks.onSuccess({
        success: true
    });
};

const onSubmit = (values) => {
    changePassword(
      {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      },
      {
        onSuccess: (data) => {
          if (!data.success) {
            store.setError('oldPassword', {
              type: 'manual',
              message: data.message,
            });
            return;
          }
          $toast.success(t('password-successful'));
        },
        onError: (error) => {
          const {
            response: { data },
          } = error || {};
          Object.keys(data).forEach((field) => {
            store.setError(field, {
              type: "manual",
              message: data[field][0],
            });
          });
        },
      });
}

const handleSubmit = (onSubmit) => {
    onSubmit({
        oldPassword: oldPassword.value,
        newPassword: newPassword.value
    });
}

</script>
