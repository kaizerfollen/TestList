<script setup>

defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="loader">
    <span class="spinner" />
    <span v-if="text">
      {{ text }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-sm;
  padding: $spacing-lg;
  border-radius: $radius-md;
  font-size: $font-size-base;
  color: $color-primary;
  background: $color-primary-bg;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid #90caf9;
  border-top-color: $color-primary;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
