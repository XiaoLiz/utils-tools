import { get, post } from '@/utils/request/https.ts'

const baseURL = import.meta.env.VITE_BASE_API_FUND

type HomeListRes = {
  card: []
  nav: []
  detail_ad: null
}
const url: string = `/v3.0.0/index/homepage`

const getList = async () => get<HomeListRes>({ url, baseURL })

export { getList }
