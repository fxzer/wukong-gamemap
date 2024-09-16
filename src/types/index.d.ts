export interface Round {
  id: number
  name: string
  regionName: string
}

interface LandmarkCatalog {
  createTime: string
  createUserId: number
  defaultIntro: null
  gameMapId: number
  groupName: string
  groupOrderIndex: number
  iconUrl: string
  id: number
  isDefaultCatalog: boolean
  isStatisticsCatalog: null
  landmarksCount: number
  name: string
  orderIndex: number
  regionType: number
  showLandmarkName: boolean
  themeColor: null
  type: number
  updateTime: string
  updateUserId: number
}
