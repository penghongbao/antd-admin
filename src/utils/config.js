module.exports = {
  name: '圣谷',
  prefix: 'antdAdmin',
  footerText: 'Ant Design Admin  © 2017 zuiidea',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  baseURL: 'http://localhost:8000/api/v1',
  YQL: ['http://www.zuimeitianqi.com'],
  CORS: ['http://localhost:7000'],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  api: {
    userLogin: '/user/login',
    userLogout: '/user/logout',
    userInfo: '/userInfo',
    users: '/users',
    posts: '/posts',
    user: '/user/:id',
    dashboard: '/dashboard',
  },
}
