export interface ResResult {
  data?: ResResultData
  status: string | ''
  headers: object
}
export interface ResResultData {
  code?: number
  data?: any
  message: string
  status: string
}
