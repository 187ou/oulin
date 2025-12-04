<template>
  <button class="ou-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
defineOptions({ name: "ou-button" });
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`ou-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
