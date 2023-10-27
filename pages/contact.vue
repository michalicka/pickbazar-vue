<template>
    <div class="w-full bg-gray-100">
      <div class="flex flex-col md:flex-row max-w-7xl w-full mx-auto py-10 px-5 xl:py-14 xl:px-8 2xl:px-14">
        <div class="w-full md:w-72 lg:w-96 bg-light p-5 flex-shrink-0 order-2 md:order-1">
          <div class="w-full flex items-center justify-center overflow-hidden mb-8">
            <img
              src="/contact-illustration.svg"
              :alt="$t('nav-menu-contact')"
              class="w-full h-auto"
            />
          </div>

          <div class="flex flex-col mb-8">
            <span class="font-semibold text-heading mb-3">
              {{ $t('text-address') }}
            </span>
            <span class="text-sm text-body">
              {{ siteSettings.author.address }}
            </span>
          </div>

          <div class="flex flex-col mb-8">
            <span class="font-semibold text-heading mb-3">
              {{ $t('text-phone') }}
            </span>
            <span class="text-sm text-body">
              {{ siteSettings.author.phone }}
            </span>
          </div>

          <div class="flex flex-col mb-8">
            <span class="font-semibold text-heading mb-3">
              {{ $t('text-website') }}
            </span>
            <div class="flex items-center justify-between">
              <span class="text-sm text-body">
                {{ siteSettings.author.websiteUrl }}
              </span>
              <a
                :href="siteSettings.author.websiteUrl"
                target="_blank"
                class="text-sm text-accent font-semibold hover:text-accent-hover focus:outline-none focus:text-blue-500"
              >
                {{ $t('text-visit-site') }}
              </a>
            </div>
          </div>

          <div class="flex flex-col mb-8">
            <span class="font-semibold text-heading mb-4">
              {{ $t('text-follow-us') }}
            </span>
            <div class="flex items-center justify-start">
              <a
                v-for="(item, index) in siteSettings.author.social"
                :key="index"
                :href="item.link"
                target="_blank"
                :class="`text-muted focus:outline-none me-8 last:me-0 transition-colors duration-300 hover:${item.hoverClass}`"
              >
                <component :is="item.icon" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div class="w-full order-1 md:order-2 mb-8 md:mb-0 md:ms-7 lg:ms-9 p-5 md:p-8 bg-light">
          <h1 class="mb-7 text-xl md:text-2xl font-body font-bold text-heading">
            {{ $t('text-questions-comments') }}
          </h1>
          <div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                v-model="name"
                name="name"
                :label="$t('text-name')"
                variant="outline"
                :error="errors ? $t(errors.name.message) : ''"
              />
              <Input
                v-model="email"
                name="email"
                :label="$t('text-email')"
                type="email"
                variant="outline"
                :error="errors ? $t(errors.email.message) : ''"
              />
            </div>
            <Input
              v-model="subject"
              name="subject"
              :label="$t('text-subject')"
              variant="outline"
              class-name="my-6"
              :error="errors ? $t(errors.subject.message) : ''"
            />
            <TextArea
              v-model="description"
              name="description"
              :label="$t('text-description')"
              variant="outline"
              class-name="my-6"
              :rows="6"
              :error="errors ? $t(errors.description.message) : ''"
            />

            <Button 
              :loading="isLoading"
              :disabled="isLoading"
              :on-click="() => handleSubmit(onSubmit)"
            >
              {{ $t('text-submit') }}
            </Button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { user } from "@data/me"; //TODO
import { useCustomerStore } from '@/stores/customer';
import { siteSettings } from "@settings/site.settings";
import Input from "@components/ui/input";
import TextArea from "@components/ui/text-area";
import Button from "@components/ui/button";

const { t } = useI18n();
const { $toast } = useNuxtApp();
const customer = useCustomerStore();
const { me } = customer;

const isLoading = ref(false); // TODO
const errors = ref(null); //TODO
const name = ref(_get(me, 'name'));
const email = ref(_get(me, 'email'));
const subject = ref('');
const description = ref('');

const reset = () => {
    subject.value = '';
    description.value = '';
}

const mutate = (data, callbacks) => {
    console.log('TODO.pages/contact.mutate', data, callbacks);
    callbacks.onSuccess();
};

const onSubmit = (values) => {
    mutate(
      values,
      {
        onSuccess: () => {
          // $toast.success(t('email-sent-successful'));
          reset();
        }
      }
    );
}

const handleSubmit = (onSubmit) => {
    onSubmit({
        name: name.value,
        email: email.value,
        subject: subject.value,
        description: description.value,
    });
}

</script>
