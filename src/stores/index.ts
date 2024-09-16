import type { Round } from '@/types'
import { getMarkerListById, getRoundList } from '@/api'

export const useMapStore = defineStore('map', () => {
  const markerGoups = ref<any>([])
  const roundId = ref(48)

  const roundList = ref<Round[]>([])
  async function fetchRoundList() {
    roundList.value = await getRoundList()
  }

  async function fetchMarkerData() {
    const { landmarkCatalogGroups = [] } = await getMarkerListById(roundId.value) as any
    markerGoups.value = landmarkCatalogGroups
  }
  const activeMarkers = ref<number[]>([])

  function toggleMarkerActive(id: number) {
    if (activeMarkers.value.includes(id)) {
      activeMarkers.value = activeMarkers.value.filter(item => item !== id)
    }
    else {
      activeMarkers.value.push(id)
    }
  }
  onMounted(() => {
    fetchRoundList()
    fetchMarkerData()
  })
  return {
    markerGoups,
    roundId,
    roundList,
    activeMarkers,
    fetchRoundList,
    toggleMarkerActive,
  }
})
