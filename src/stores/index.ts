import type { Round } from '@/types'
import { getMarkerData, getMarkerListById, getRoundList } from '@/api'

export const useMapStore = defineStore('map', () => {
  const markerGoups = ref<any>([])
  const roundId = ref(48)

  const roundList = ref<Round[]>([])
  const markerData = ref<any>([])
  const activeMarkerIds = ref<number[]>([])

  async function fetchRoundList() {
    roundList.value = await getRoundList()
  }

  async function fetchMarkerList() {
    const { landmarkCatalogGroups = [] } = await getMarkerListById(roundId.value) as any
    markerGoups.value = landmarkCatalogGroups
  }

  async function fetchMarkerData(ids: number[]) {
    markerData.value = await getMarkerData(ids)
  }

  function toggleMarkerActive(id: number) {
    if (activeMarkerIds.value.includes(id)) {
      activeMarkerIds.value = activeMarkerIds.value.filter(item => item !== id)
    }
    else {
      activeMarkerIds.value.push(id)
    }
  }
  fetchRoundList()
  fetchMarkerList()

  watchEffect(() => {
    fetchMarkerData(activeMarkerIds.value)
  })
  return {
    markerGoups,
    roundId,
    roundList,
    markerData,
    activeMarkerIds,
    fetchRoundList,
    toggleMarkerActive,
  }
}, {
  persist: true,
})
