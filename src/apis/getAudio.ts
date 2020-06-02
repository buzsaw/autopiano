import { Provide, Func, Inject } from '@midwayjs/decorator'

@Provide()
export class GetAudioService {

  @Inject()
  ctx;

  @Func('getAudio.handler')
  async handler() {
    console.log('ctx: '+this.ctx);
    //let body = {metre:'90 BPM 44'};
    let body = this.ctx.req.body;
    let url = 'mp3/' +body['metre']+ '.mp3';
    return {
      url: url
    };
  }
}
