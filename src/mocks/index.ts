import mockjs from 'mockjs'
import rounds from './map-rounds'
import mapsMarker from './maps-marker'
import markerData from './marker-data'

function mocRoundList() {
  mockjs.mock(/\/api\/map\/getRoundList/, 'get', () => {
    return rounds
  })
}
function mockMarkerList() {
  mockjs.mock(/\/api\/map\/getMarkerList/, 'get', (opts) => {
    const urlParams = new URLSearchParams(opts.url.split('?')[1])
    const id = Number.parseInt(urlParams.get('id') ?? '48', 10)

    return mapsMarker.find(item => item.id === id)
  })
}

function mockMarkerData() {
  mockjs.mock(/\/api\/mark\/getMarkerData/, 'get', (opts) => {
    const urlParams = new URLSearchParams(opts.url.split('?')[1])
    const ids = urlParams.get('ids')

    return markerData
      .filter(item => ids?.split(',')?.includes(`${item.landmarkCatalogId}`))
      .map(item => ({ ...item, iconUrl: _getIcon(item.landmarkCatalogId) ?? '' }))
  })
}

const _iconMap = new Map()
function _getIcon(id: number): string | void {
  if (_iconMap.has(id)) {
    return _iconMap.get(id)
  }
  for (const i of mapsMarker) {
    for (const j of i.landmarkCatalogGroups) {
      for (const k of j.landmarkCatalogs) {
        _iconMap.set(k.id, k.iconUrl)
        if (k.id === id) {
          return k.iconUrl
        }
      }
    }
  }
}

export function setupMock() {
  mocRoundList()
  mockMarkerList()
  mockMarkerData()
}
