import { ResResultData } from '@/api/types'

export interface ResHomePageData extends ResResultData {
  data?: {
    card: []
    nav: []
    recommend: []
    project: []
    detail_ad?: null
  }
}

export interface ResHomePageData extends ResResultData {
  data?: {
    card: []
    nav: []
    recommend: []
    project: []
    detail_ad?: null
  }
}

// 项目详情
// index/data

export interface ParamsDetailData {
  tag?: string
  uuid: string
  require?: object
  referrer?: string
}

// export interface ReqAuth {
//   auths: string[];
//   modules: string[];
//   is_admin?: 0 | 1;
// }

// export interface ResResult {
//   data?: ResResultData;
//   status: string | '';
//   headers: object;
// }
// export interface ResResultData {
//   code?: number;
//   result?: any;
//   message: string;
//   status: string;
// }
