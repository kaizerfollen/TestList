<script setup>
defineProps({
  user: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="user-item">
    <div class="user-name">
      {{ user.name }}
    </div>
    <div class="user-email">
      {{ user.email }}
    </div>
    <div class="user-meta">
      <span class="badge">
        {{ user.role }}
      </span>
      <span :class="[user.status, 'status']">
        {{ user.status }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-item {
  padding: $spacing-md;
  border: 1px solid #e0e0e0;
  border-radius: $radius-md;
  background: #f9f9f9;
}

.user-name {
  font-weight: 600;
  color: $color-text;
  margin-bottom: 4px;
}

.user-email {
  font-size: $font-size-base;
  color: $color-text-muted;
  margin-bottom: $spacing-xs;
}

.user-meta {
  display: flex;
  gap: $spacing-xs;
}

.badge {
  display: inline-block;
  padding: 2px $spacing-xs;
  background: $color-primary-bg;
  color: $color-primary;
  border-radius: $radius-sm;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
}

.status {
  display: inline-block;
  padding: 2px $spacing-xs;
  border-radius: $radius-sm;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
}

.status.active {
  background: #e8f5e9;
  color: #388e3c;
}

.status.inactive {
  background: $color-danger-bg;
  color: $color-danger;
}
</style>
