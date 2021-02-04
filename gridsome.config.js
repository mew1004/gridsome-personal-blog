// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Personal-Blog',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        //GraphQL类型、template名称，
        //src/templates下的.vue文件必须通过typeName指定一个模板
        typeName: 'Welcome', 
        //数据源路径
        path: './content/blog/**/*.md',
      }
    }
  ]
}
