import { get, post } from '@/utils/request/https.ts'
import { ResHomePageData, ParamsDetailData } from '@/api/test/types'

const baseURL = import.meta.env.VITE_BASE_API_FUND

const getList = async () => {
  const url: string = `/v3.0.0/index/homepage`
  return get<ResHomePageData>({ url, baseURL })
}

const getDetailInfo = async (data: ParamsDetailData) => {
  const url: string = `/v3.0.0/project/index/data`
  return post<any>({ url, data })
}

export { getList, getDetailInfo }
