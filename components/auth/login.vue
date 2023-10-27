<template>
    <div class="py-6 px-5 sm:p-8 bg-light w-screen md:max-w-md h-screen md:h-auto flex flex-col justify-center">
      <div class="flex justify-center">
        <Logo />
      </div>
      <p class="text-center text-sm md:text-base text-body mt-4 sm:mt-5 mb-8 sm:mb-10">
        {{ $t('login-helper') }}
      </p>
      <Alert
        v-if="store.errorMsg"
        variant="error"
        :message="store.errorMsg"
        class="mb-6"
        :closeable="true"
        :on-close="() => store.setErrorMsg('')"
      />
      <div>
        <Input
          :label="$t('text-email')"
          v-model="email"
          name="email"
          type="email"
          variant="outline"
          class="mb-5"
          :error="errors ? $t(errors.email.message) : ''"
        />
        <PasswordInput
          :label="$t('text-password')"
          v-model="password"
          name="password"
          :error="errors ? $t(errors.password.message) : ''"
          variant="outline"
          class="mb-5"
          :forgot-page-route-on-click="() => openModal('FORGOT_VIEW')"
        />
        <div class="mt-8">
          <Button
            class="w-full h-11 sm:h-12"
            :loading="loading"
            :disabled="loading"
            :on-click="() => handleSubmit(onSubmit)"
          >
            {{ $t('text-login') }}
          </Button>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-11 mb-6 sm:mb-8">
        <hr class="w-full" />
        <span class="absolute start-2/4 -top-2.5 px-2 -ms-4 bg-light">
          {{ $t('text-or') }}
        </span>
      </div>

      <div class="grid grid-cols-1 gap-4 mt-2">
        <Button
          class="w-full !bg-social-facebook hover:!bg-social-facebook-hover"
          :disabled="loading"
          :on-click="() => signIn('facebook')"
        >
          <Facebook class="w-4 h-4 mr-3" />
          {{ $t('text-login-facebook') }}
        </Button>
        <Button
          class="!bg-social-google hover:!bg-social-google-hover"
          :disabled="loading"
          :on-click="() => signIn('google')"
        >
          <Google class="w-4 h-4 mr-3" />
          {{ $t('text-login-google') }}
        </Button>
      </div>

      <div class="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-11 mb-6 sm:mb-8">
        <hr class="w-full" />
      </div>
      <div class="text-sm sm:text-base text-body text-center">
        {{ $t('text-no-account') }}
        <button
          @click="() => openModal('REGISTER')"
          class="ms-1 underline text-accent font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover hover:no-underline focus:no-underline"
        >
          {{ $t('text-register') }}
        </button>
      </div>
    </div>
</template>

<script setup>
import Cookies from "js-cookie";
import { useUIStore } from '@/stores/ui';
import { useSelectedStore } from '@/stores/selected';
import Logo from "@components/ui/logo";
import Input from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import Button from "@components/ui/button";
import Facebook from "@components/icons/facebook";
import Google from "@components/icons/google";
import Alert from "@components/ui/alert";

const loading = ref(false); //TODO
const email = ref(''); //TODO
const password = ref(''); //TODO
const errors = ref(null); //TODO

const { $eventBus } = useNuxtApp();
const ui = useUIStore();
const store = useSelectedStore();

const login = (data, callbacks) => {
    console.log('TODO.login.login', data, callbacks);
    callbacks.onSuccess({
      "token": "2|2YNldmOBiHxP5oYqrf098iDPjH3O8UOWJiTTuHPX", //TODO remove
      "permissions": [
        "super_admin",
        "customer",
        "store_owner"
      ]
    });
};

const openModal = (view) => {
    $eventBus.emit('modal:open', view);
}

const closeModal = () => {
    $eventBus.emit('modal:close');
}

const signIn = (type) => {
    console.log('TODO.login.signIn', type);
    onSubmit({ email: type, password: type });
}

const authorize = () => {
    console.log('TODO.login.authorize');
    ui.setIsAuthorize(true);  //TODO login
}

const onSubmit = ({ email, password }) => {
    login(
      {
        email,
        password,
      },
      {
        onSuccess: (data) => {
          if (data.token && data.permissions.length) {
            Cookies.set('auth_token', data.token);
            Cookies.set('auth_permissions', data.permissions);
            authorize();
            closeModal();
            return;
          }
          if (!data.token) {
            store.setErrorMsg('error-credential-wrong');
          }
        },
        onError: () => {
          //TODO Sentry
          console.log(error.message);
        },
      }
    );
}

const handleSubmit = (onSubmit) => {
    onSubmit({
        email: email.value,
        password: password.value
    });
}

</script>
