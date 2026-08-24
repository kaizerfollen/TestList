<script setup>
import Loader from './MainLoader.vue'
import MainListItem from './MainListItem/MainListItem.vue'

defineProps({
  users: {
    type: Array,
    default: null,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <Loader
    v-if="loading"
    text="Загрузка пользователей..."
  />

  <div
    v-else-if="error || !users"
    class="state state--error"
  >
    {{ error || 'Не удалось получить список пользователей.' }}
  </div>

  <div v-else class="users-list">
    <p
      v-if="!users.length"
      class="state"
    >
      Пользователи не найдены.
    </p>

    <MainListItem
      v-for="user in users"
      :key="user.id"
      :user="user"
    />
  </div>
</template>

<style scoped lang="scss">
.users-list {
  display: grid;
  gap: $spacing-md;
}

.state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-sm;
  padding: $spacing-lg;
  border-radius: $radius-md;
  font-size: $font-size-base;
  color: $color-text-muted;
}

.state--error {
  color: $color-danger;
  background: $color-danger-bg;
}
</style>
