## 部署步骤

- 修改 wangEditor 上传图片/视频大小
- 复制 web 文件夹(除了 node_modules 和.next 文件夹,升级不传.env)
- npm install
- 在服务器修改.env (host/baseUrl/templateId/)
- build 打包 (管理员权限)
- npm run start 启动(指定端口)
- 配置 nginx(缓存有效期, ubuntu 端只先配置 http)
- 确保访问成功
- 删除 src
- 维护数据(产品数据/各类 banner 图片/用户数据)

## 配置 ssl

## linux 静默启动

nohup setsid env PORT=3000 npm run start >> app.log 2>&1 &

## 多语言方案

二级域名+.env 配置
NEXT_PUBLIC_DJANGO_BASE_URL 用于 ssr 中的请求
navbar 加边距
switchLang.jsx 里面需要改 languages 常量
switchLangB.jsx 里面需要改 languages 常量

## 代码说明

- NEXT_PUBLIC_DJANGO_BASE_URL 用于 ssr 中的请求
- 富文本编辑器的上传文件带 baseurl
- 后台主题色 #3399cc
- 代码版权归作者所有
- 未经作者同意不得商用

## 学习路径

- 登录鉴权/权限管理
- 路由
- 请求接口并渲染
- components
- 状态管理
- 主题切换
- 多语言
- 字体
- shadCN/Radix ui
- tailwindcss
- sass
- Typescript 混合编程
- SSG/SSR
