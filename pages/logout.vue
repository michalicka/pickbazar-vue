<template>
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <Spinner text="t('text-signing-out')" />
      </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUIStore } from '@/stores/ui';
import Cookies from "js-cookie";
import Spinner from "@components/ui/loaders/spinner/spinner";

const router = useRouter();
const ui = useUIStore();

onMounted(() => {
    ui.setIsAuthorize(false);  //TODO logout
    Cookies.remove("auth_token");
    Cookies.remove("auth_permissions");
    router.push('/');
})

</script>
