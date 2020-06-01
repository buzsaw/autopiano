# 网页版钢琴

这个网页版钢琴由B站Up主@亚当不是程序员 (https://space.bilibili.com/454850597/) 基于云开发平台的Midway FaaS+React框架开发。

## 相关视频介绍
https://www.bilibili.com/video/BV1P5411x77F

## 以下为Midway FaaS+React框架配置相关教程

### 本地开发

```shell
# 首先需要安装开发依赖

$ npm i --registry=https://registry.npm.taobao.org
```

```shell
# 启动 react 本地 watch 和 函数本地 Dev Server
# 在终端中会输出 本地 Dev Server 的URL链接

$ npm run dev
```

> Tips: 可执行 `npm run local:url` 单独获取本地Dev Server 的URL链接

### 构建
```shell
# 发布前需要构建前端代码
$ npm run build
```

### 部署
点击左侧菜单栏第一个Tab，进行发布


## 以下为钢琴后端配置指引

### 将代码包中的音频文件上传至任一OSS桶
90 BPM 44.mp3
90 BPM 34.mp3
### 添加访问控制密钥
找到src/apis/getAudio.ts, 在以下位置添加访问控制密钥
```javascript
bucket: 'YOURBUCKETNAME', 
region: 'YOURBUCKETREGION', 
accessKeyId: 'YOURACCESSKEY', 
accessKeySecret: 'YOURSECRETACCESSKEY'
```

## About Midway FaaS

Midway FaaS 是用于构建云函数的 Serverless 框架。帮助您在云原生时代大幅降低维护成本，更专注于产品研发。<br />

- **跨云厂商：**一份代码可在多个云平台间快速部署，不用担心你的产品会被云厂商所绑定。
- **代码复用：**通过框架的依赖注入能力，让每一部分逻辑单元都天然可复用，可以快速方便地组合以生成复杂的应用。
- **传统迁移：**通过框架的运行时扩展能力，让 Egg.js 、Koa、Express.js 等传统应用无缝迁移至各云厂商的云函数。


<br />Midway FaaS 是阿里巴巴集团发起的开源项目，由一个专业的 Node.js 架构团队进行维护。已大规模应用于阿里集团各 BU 线上业务，稳定承载了数千万的流量。

查阅[详细文档](https://www.yuque.com/midwayjs/faas/quick_start)
