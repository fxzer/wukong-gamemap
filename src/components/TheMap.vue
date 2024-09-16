<script setup lang='ts'>
import GameMap from '@/logics/GameMap'
import { useMapStore } from '@/stores'

const mapStore = useMapStore()
const gameMap = new GameMap()

let timer: number | null = null
// const map = useTemplateRef<HTMLElement>('map') ✅
// const mapRef = useTemplateRef<HTMLElement>('map') // ❌ 'map' is defined as ref, but never used.eslintvue/no-unused-refs
const map = ref<HTMLElement | null>(null) // ✅

function initMap() {
  gameMap.init(map.value)
  gameMap.renderTile()
  gameMap.renderZoomControl()
}

onMounted(() => {
  initMap()
})

watch(
  () => mapStore.roundId,
  (id: string) => gameMap.renderTile(id),
)

watch(() => mapStore.markerData, (val: any) => {
  timer = setTimeout(() => {
    gameMap.renderMarkers(val)
  }, 100)
}, {
  immediate: true,
})

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer)
  }
})
</script>

<template>
  <div ref="map" class="absolute left-0 top-0 h-full w-full bg-transparent" />
</template>

<style>
.leaflet-popup-content-wrapper {
  background: #222;

  .popup-content {
    color: #fff;
  }
}

.leaflet-control-zoom {
  position: fixed;
  right: 20px;
  bottom: 100px;
  border: none !important;

  a {
    width: 40px;
    height: 40px;
    border-radius: 4px !important;
    border-bottom: none !important;
    overflow: hidden;
  }

  .leaflet-control-zoom-in {
    margin-bottom: 20px;
    background: url('/wukong-gamemap/control/zoom-in.png');
    background-size: cover;
  }

  .leaflet-control-zoom-out {
    background: url('/wukong-gamemap/control/zoom-out.png');
    background-size: cover;
  }
}

.leaflet-marker-icon {
  .marker-wrapper {
    display: inline-flex;
    flex-flow: column;
    min-width: 90px;
    align-items: center;

    transform: translate3d(-39px, -27px, 0px);

    .marker-title {
      text-shadow: 2px 2px 2px #000;
      font-weight: bold;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
