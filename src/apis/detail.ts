import { Provide, Func } from '@midwayjs/decorator'
@Provide()
export class DetailService {

  @Func('detail.handler')
  async handler() {
    return {
      message: 'Midway FaaS 是用于构建 Node.js 云函数的 Serverless 框架。帮助您在云原生时代大幅降低维护成本，更专注于产品研发。',
    }
  }
}