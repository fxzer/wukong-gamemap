<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  markers: {
    type: Array,
    required: true,
  },
  activeMarkerIds: {
    type: Array,
    required: true,
    default: () => [],
  },
})
defineEmits(['toggleActive'])
</script>

<template>
  <div>
    <h3 mb-10px text-base>
      {{ title }}
    </h3>
    <div class="grid grid-cols-3 gap-2">
      <MarkerItem
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :is-active="activeMarkerIds.includes(marker.id)"
        @click="$emit('toggleActive', marker.id)"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
