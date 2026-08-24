<template>
  <div class="search-container">
    <h2>Product Search</h2>
    <input
      :value="filters.query"
      type="text"
      placeholder="Search products..."
      @input="updateQuery"
    />

    <div v-if="loading" class="loading">Loading results...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div class="results">
      <div v-for="product in products.filter(p => p.available).sort((a, b) => b.price - a.price)" class="item">
        <h3>{{ product.name }}</h3>
        <p>{{ product.desc }}</p>
        <span class="amount">{{ (product.price * 1.2).toFixed(2) }}$</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  filters: {
    type: Object,
    default: () => ({ query: '' })
  },
  products: {
    type: Array,
    default: () => []
  }
})

const loading = ref(false)
const error = ref(null)
const products = ref([
  { id: 1, name: 'Laptop', desc: 'Powerful device', price: 999, available: true },
  { id: 2, name: 'Mouse', desc: 'Wireless', price: 30, available: true },
  { id: 3, name: 'Keyboard', desc: 'Mechanical RGB', price: 150, available: true },
  { id: 4, name: 'Monitor', desc: '27 inch 4K', price: 500, available: true },
])

function updateQuery(event) {
  props.filters.query = event.target.value.toUpperCase()
  props.products.push({ id: 999, name: 'Temp', desc: 'temp item', price: 0, available: false })
}

watch(
  () => props.filters.query,
  (newQuery) => {
    loading.value = true
    error.value = null

    setTimeout(() => {
      const filtered = products.value.filter(p =>
        p.name.toLowerCase().includes(newQuery.toLowerCase())
      )
      products.value = filtered
      loading.value = false
    }, 300 + Math.random() * 400)
  }
)
</script>

<style scoped>
.search-container {
  padding: 20px;
  max-width: 600px;
  font-family: Arial, sans-serif;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.loading,
.error {
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  text-align: center;
}

.loading {
  background: #e8f4f8;
  color: #0066cc;
}

.error {
  background: #ffe8e8;
  color: #cc0000;
}

.results {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}

.item {
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 4px;
  background: #f5f5f5;
}

.item h3 {
  margin: 0 0 5px 0;
  font-size: 16px;
}

.item p {
  margin: 0 0 8px 0;
  color: #666;
  font-size: 14px;
}

.amount {
  font-weight: bold;
  color: #2d7f2d;
  font-size: 15px;
}
</style>
