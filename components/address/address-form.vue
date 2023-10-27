<template>
    <div class="p-5 sm:p-8 bg-light">
      <h1 class="text-heading font-semibold text-lg text-center mb-4 sm:mb-6">
        {{ !_isEmpty(address) ? $t('text-update') : $t('text-add-new') }} {{ $t('text-address') }}
      </h1>
      <div
        noValidate
        class="grid grid-cols-2 gap-5 h-full"
      >
        <div>
          <Label>{{ $t('text-type') }}</Label>

          <div class="space-s-4 flex items-center">
            <Radio
              id="billing"
              name="type"
              type="radio"
              v-model="type"
              :label="$t('text-billing')"
            />

            <Radio
              id="shipping"
              name="type"
              type="radio"
              v-model="type"
              :label="$t('text-shipping')"
            />
          </div>
        </div>

        <Input
          v-model="title"
          name="title"
          :label="$t('text-title')"
          :error="errors ? $t(errors.title.message) : ''"
          variant="outline"
          class-name="col-span-2"
        />

        <Input
          v-model="address.country"
          name="address.country"
          :label="$t('text-country')"
          :error="errors ? $t(errors.address.country.message) : ''"
          variant="outline"
        />

        <Input
          v-model="address.city"
          name="address.city"
          :label="$t('text-city')"
          :error="errors ? $t(errors.address.city.message) : ''"
          variant="outline"
        />

        <Input
          v-model="address.state"
          name="address.state"
          :label="$t('text-state')"
          :error="errors ? $t(errors.address.state.message) : ''"
          variant="outline"
        />

        <Input
          v-model="address.zip"
          name="address.zip"
          :label="$t('text-zip')"
          :error="errors ? $t(errors.address.zip.message) : ''"
          variant="outline"
        />

        <TextArea
          :label="$t('text-street-address')"
          name="address.street_address"
          v-model="address.street_address"
          :error="errors ? $t(errors.address.street_address.message) : ''"
          variant="outline"
          class-name="col-span-2"
        />

        <Button class="w-full col-span-2" :on-click="onSubmit">
          {{ !_isEmpty(address) ? $t('text-update') : $t('text-save') }} {{ $t('text-address') }}
        </Button>
      </div>
    </div>
</template>

<script setup>
import { useSelectedStore } from '@/stores/selected';
import { useCustomerStore } from '@/stores/customer';
import Label from "@components/ui/label";
import Radio from "@components/ui/radio/radio";
import Input from "@components/ui/input";
import TextArea from "@components/ui/text-area";
import Button from "@components/ui/button";

const errors = ref(null); //TODO

const { $eventBus } = useNuxtApp();
const store = useSelectedStore();
const customer = useCustomerStore();

const { customerId, address: source } = store;
const id = ref(source.id || null);
const type = ref(source.type || 'billing');
const title = ref(source.title || '');
const address = ref(Object.assign({
    country: '',
    city: '',
    state: '',
    zip: '',
    street_address: ''
}, source.address));

const closeModal = () => {
    $eventBus.emit('modal:close');
}

const updateProfile = (value) => {
    console.log('TODO.address-form.updateProfile', value); //TODO check
    if (value.id) {
        customer.updateAddress(value.id, value);
    } else {
        value.id = new Date().getTime();
        customer.addAddress(value);
    }
}

const onSubmit = () => {
    updateProfile({
      id: id.value,
      type: type.value,
      title: title.value,
      address: _cloneDeep(address.value)
    });

    closeModal();
}

</script>
