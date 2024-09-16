<script setup>
const props = defineProps({
  marker: {
    type: Object,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})

const iconUrl = computed(() => {
  return `${import.meta.env.VITE_BASE_URL}${props.marker.iconUrl}`
})
</script>

<template>
  <div flex cursor-pointer items-center :class="isActive ? 'text-primary' : 'text-#fff9'">
    <img :src="iconUrl" :alt="marker.name" inline-block wh-5>
    <span mx-1>{{ marker.name }}</span>
    <span>{{ marker.landmarksCount }}</span>
  </div>
</template>

<style scoped>

</style>
