# 吴华杰的毕业设计

##  npm 指令

### `npm start`
跳转 [http://localhost:3000](http://localhost:3000)
### `npm test`
### `npm run build`
### `npm run eject`
### `npm run build` 
### 删除旧版本 ``npm uninstall -g create-react-app``
### 登录模块 logon
- **登录** Sign in
- __注册__ register
- __找回密码（忘记密码）__ Forgot password
  - 使用邮箱找回密码
- __描述__
    1. 使用`Material-UI`提供的组件
    2. 使用`react-redux`实现登录的状态管理
    3. 
    
## 组件描述
### 布局
1. Stack 垂直或水平布局 (一列或一行)
   - spacing={num}  间距大小
   - direction=""   布局方向 
     - column 列
     - row 行
   - divider={}   分隔线
     - 如`<Divider orientation="vertical" flexItem />`
2. Box 一般用于包装组件
    - sx={} 自定义样式
    - component="" box类型，如 div(默认), span, from
3. Container 可以其包含的内容水平剧中
    - maxWidth="" 最大宽度 可定义为 sm 
    - fixed  固定大小
4. Grid 栅格
    - container 居中
    - spacing={num} 间距大小
    - rowSpacing 行间距
    - columnSpacing 列间距
    - item 声明是一个格子
    - xs={num} 一个格子的宽度 num最大值为12
    - md={num}
    - key
    - item 声明这个`<Grid>`是子元素