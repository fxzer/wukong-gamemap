import axios from 'axios'

const instance = axios.create({
  baseURL: '/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
})
instance.interceptors.response.use(res => res.data)

export function getRoundList() {
  return instance.get<unknown, { id: number, name: string, regionName: string }[]>(
    '/api/map/getRoundList',
  )
}
export function getMarkerListById(id: number = 48) {
  return instance.get('/api/map/getMarkerList', { params: { id } })
}

export function getMarkList(ids: number[] = [3266]) {
  return instance.get('/api/mark/getMarkList', { params: { ids: ids.join(',') } })
}

export function getPopupTmpl() {
  return instance.get<unknown, string>('/templates/popup.ejs')
}

export function getMarkerTmpl() {
  return instance.get<unknown, string>('/templates/marker.ejs')
}
