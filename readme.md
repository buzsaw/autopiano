## 自由钢琴开发

- 打开 CloudIDE 右下角的「终端」窗口，输入以下命令安装依赖
```
npm install
```

## 自由钢琴调试

- 进入 config 目录，打开 index.js 文件，确认 assetsPublicPath 的值是 ./
```
assetsPublicPath: './',
```

- 打开 CloudIDE 右下角的「终端」窗口，输入以下命令安装依赖
```
npm run build
```

- 执行成功后会将构建产物生成到 dist 目录

- 打开 CloudIDE 侧边栏 「WB」插件，点击「测试」，在「用户路径」输入
```
/dist/index.html
```

- 勾选「预览模式」

- 点击「测试」，即可看到测试效果


## 部署

- 打开 CloudIDE 侧边栏 「WB」插件，点击「部署」，选择一个环境，点击「部署」
- 部署成功后，会给出一个免费的临时测试域名用于访问部署到线上的效果，如果你要用自己的域名，参见：https://help.aliyun.com/document_detail/176711.html