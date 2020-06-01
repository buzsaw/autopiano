import { Provide, Func, Inject } from '@midwayjs/decorator'
import {OSS} from 'ali-oss';
//import { FaaSContext, FunctionHandler} from '@midwayjs/faas';

@Provide()
export class GetAudioService {

  @Inject()
  ctx;

  @Func('getAudio.handler')
  async handler() {
    const body = this.ctx.request.body;
    let OSS = require('ali-oss');
    const metre = body['metre']
    let store = new OSS({
        bucket: 'YOURBUCKETNAME',
        region: 'YOURBUCKETREGION',
        accessKeyId: 'YOURACCESSKEY',
        accessKeySecret: 'YOURSECRETACCESSKEY'
    })
    const url = store.signatureUrl(metre+'.mp3');
    console.log(url);
    return {
      url: url
    }
  }
}
