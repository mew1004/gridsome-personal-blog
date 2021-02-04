<template>
  <Layout>
    <div v-html="mdToHtml($page.welcome.edges[0].node.content)"></div>
  </Layout>
</template>

<page-query>
query {
  welcome:allWelcome {
    edges {
      node {
        content 
      }
    }
  }
}
</page-query>

<script>
const md = require('markdown-it')({ html: true });

export default {
  name: 'AboutPage',
  metaInfo: {
    title: 'Welcome'
  },
  methods: {
    //将.md格式的字符串转换为html字符串
    mdToHtml(content) {
      return md.render(content);
    }
  }
}
</script>
