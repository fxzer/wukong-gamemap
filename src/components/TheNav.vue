<script setup>
import { useMapStore } from '@/stores'

const mapStore = useMapStore()
</script>

<template>
  <nav class="bg-#222" h-full w-90 p5 text-sm text-white>
    <img src="/layout/nav-logo.png" alt="" inline-block h-25>
    <div grid grid-cols-3 gap-3 py-5>
      <div
        v-for="item in mapStore.roundList" :key="item.id"
        class="h-8 cursor-pointer rounded-md text-center leading-8"
        :class="item.id === mapStore.roundId ? 'bg-#eac27e text-#222' : ' bg-#46464c '"
        @click="mapStore.roundId = item.id"
      >
        {{ item.regionName }}
      </div>
    </div>
    <MarkerGroup
      v-for="item in mapStore.markerGoups"
      :key="item.groupName"
      mb5
      :title="item.groupName"
      :markers="item.landmarkCatalogs"
      :active-marker-ids="mapStore.activeMarkerIds"
      @toggle-active="mapStore.toggleMarkerActive"
    />
  </nav>
</template>

<style scoped>

</style>
