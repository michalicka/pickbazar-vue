<template>
    <section class="upload">
      <div
        v-bind="getRootProps()"
        class="border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none"
      >
        <input v-bind="getInputProps()" :name="name" />
        <UploadIcon class="text-muted-light" />

        <p class="text-body text-sm mt-4 text-center">
          <span class="text-accent font-semibold">
            {{ $t('text-upload-highlight') }}
          </span>
          {{ $t('text-upload-message') }} <br />
          <span class="text-xs text-body">{{ $t('text-img-format') }}</span>
        </p>
      </div>

      <aside v-if="!!files.length || loading" class="flex flex-wrap mt-2">
        <div
          v-for="(file, idx) in files"
          class="inline-flex flex-col overflow-hidden border border-border-100 rounded mt-2 me-2 relative"
          :key="idx"
        >
          <div class="flex items-center justify-center min-w-0 w-16 h-16 overflow-hidden">
            <img :src="file.preview" />
          </div>
        </div>
        <div v-if="loading" class="h-16 flex items-center mt-2 ms-2">
          <Spinner
            :text="$t('text-loading')"
            :simple="true"
            class="w-6 h-6"
          />
        </div>
      </aside>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useDropzone } from "vue3-dropzone";
import UploadIcon from "@components/icons/upload-icon";
import Spinner from "@components/ui/loaders/spinner/spinner";

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Array,
        default: []
    },
    name: {
        type: String,
        default: ''
    },
    onChange: {
        type: Function,
        default: null
    }
});

const loading = ref(false);
const files = ref(props.modelValue);
const setFiles = (data) => {
    console.log('TODO.uploader.setFiles', data);
    files.value = data;
}

const upload = (files, callbacks) => {
    console.log('TODO.uploader.upload', files, callbacks);
    callbacks.onSuccess(files);
}

const onDrop = (acceptedFiles, rejectedReasons) => {
  console.log(acceptedFiles);
  upload(acceptedFiles, {
    onSuccess: (data) => {
        if (props.onChange) {
            props.onChange(data);
            emit('update:modelValue', data);
        }
    }
  });
  setFiles(acceptedFiles.map((file) => Object.assign(file, {
    preview: URL.createObjectURL(file)
  })));
}

const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop, accept: 'image/*' });

</script>
