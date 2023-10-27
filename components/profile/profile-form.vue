<template>
    <div>
      <div class="flex mb-8">
        <Card class="w-full">
          <div class="mb-8">
            <FileInput :name="profile.avatar" :on-change="onChange" />
          </div>

          <div class="flex flex-col sm:flex-row sm:space-s-4 mb-6">
            <Input
              v-model="name"
              name="name"
              class-name="flex-1"
              :label="$t('text-name')"
              variant="outline"
            />
            <Input
              v-model="profile.contact"
              name="profile.contact"
              :label="$t('text-contact-number')"
              class-name="flex-1"
              variant="outline"
            />
          </div>

          <TextArea
            v-model="profile.bio"
            name="profile.bio"
            :label="$t('text-bio')"
            variant="outline"
            class="mb-6"
          />

          <div class="flex">
            <Button 
                class="ms-auto" 
                :loading="loading" 
                :disabled="loading" 
                :on-click="() => handleSubmit(onSubmit)"
            >
              {{ $t('text-save') }}
            </Button>
          </div>
        </Card>
      </div>
    </div>
</template>

<script setup>
import { user } from "@data/me"; //TODO
import { useCustomerStore } from '@/stores/customer';
import Card from "@components/ui/card";
import Input from "@components/ui/input";
import FileInput from "@components/ui/file-input";
import TextArea from "@components/ui/text-area";
import Button from "@components/ui/button";

const { t } = useI18n();
const { $toast } = useNuxtApp();
const customer = useCustomerStore();
const { me } = customer;

const loading = ref(false); // TODO
const control = ref(null);
const name = ref(_get(me, 'name'));
const profile = ref({
    id: _get(me, 'profile.id'),
    bio: _get(me, 'profile.bio'),
    contact: _get(me, 'profile.contact'),
    avatar: _get(me, 'profile.avatar')
});

const updateProfile = (data, callbacks) => {
    console.log('TODO.profile-form.updateProfile', data, callbacks);
    Object.assign(customer.me, data);
    callbacks.onSuccess();
};

const onSubmit = (values) => {
    updateProfile(
      {
        id: user.id,
        name: values.name,
        profile: {
          id: _get(user, 'profile.id'),
          ...values.profile
        },
      },
      {
        onSuccess: () => {
          $toast.success(t('profile-update-successful'));
        }
      }
    );
}

const handleSubmit = (onSubmit) => {
    onSubmit({
        name: name.value,
        profile: Object.assign({}, profile.value)
    });
}

const onChange = (files) => {
    console.log('TODO.profile-form.onChange', files); //TODO
    profile.value.avatar = _get(files, '0.path'); //TODO
}

</script>
