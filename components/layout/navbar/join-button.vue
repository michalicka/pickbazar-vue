<template>
    <Button class-name="font-semibold" size="small" @click="handleJoin">
      {{ $t("join-button") }}
    </Button>
</template>

<script setup>
import Button from "@components/ui/button";

const { $eventBus } = useNuxtApp();

const handleJoin = () => { 
    $eventBus.emit('modal:open', 'LOGIN_VIEW');
};

</script>
