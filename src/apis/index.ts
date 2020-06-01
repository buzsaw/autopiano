import { Provide, Func } from '@midwayjs/decorator'
@Provide()
export class IndexService {

  @Func('index.handler')
  async handler() {
    return {
      message: 'Hello Midway FaaS!',
    }
  }
}
