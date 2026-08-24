<template>
  <div class="app">
    <h1>Users</h1>
    <MainFilter v-if="users" v-model="query" />
    <MainList :users="filteredUsers" :loading="loading" :error="error" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { fetchUsers } from './api/mock.js'
import MainList from './components/MainList.vue'
import MainFilter from './components/MainFilter.vue'

const users = ref(null)
const loading = ref(false)
const error = ref(null)
const query = ref('')

const filteredUsers = computed(() => {
  if (!users.value) return users.value

  const q = query.value.trim().toLowerCase()
  if (!q) return users.value

  return users.value.filter((user) =>
    [user.name, user.email, user.role, user.status].some((field) =>
      field.toLowerCase().includes(q)
    )
  )
})

onMounted(() => {
  loading.value = true
  error.value = null

  fetchUsers()
    .then((data) => {
      users.value = data
    })
    .catch((err) => {
      error.value = err.message || 'Не удалось загрузить пользователей'
    })
    .finally(() => {
      loading.value = false
    })
})
</script>

<style scoped lang="scss">
.app {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h1 {
  color: $color-text;
  margin-bottom: 20px;
}
</style>
