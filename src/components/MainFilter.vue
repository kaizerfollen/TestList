<script setup>

const query = defineModel({
  type: String,
  default: ''
})
</script>

<template>
  <input
    v-model="query"
    type="text"
    class="main-filter"
    placeholder="Поиск..."
  />
</template>

<style scoped lang="scss">
.main-filter {
  width: 100%;
  padding: $spacing-sm $spacing-md;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: $radius-md;
  font-size: $font-size-base;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: $color-primary;
  }
}
</style>
