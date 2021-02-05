<template>
  <Layout>
    <h1>{{$page.categories.title}}</h1>
    <div class="nature-container" v-for="nature in $page.categories.belongsTo.edges" :key="nature.node.id">
      <div class="nature-header">
        <h4 class="nature-title">{{nature.node.title}}</h4>
        <div>
          <span class="label">Year </span>
          <span>{{nature.node.create}}</span>
        </div>
      </div>
      <div>
        <div class="nature-content">{{nature.node.content}}</div>
        <img class="thumbnail g-image g-image--lazy g-image--loaded" :src="nature.node.url" width="950">  
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  categories(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Nature {
            id
            title
            url
            create
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'CategoriesPage'
}
</script>

<style>
  h1 {
    font-size: 56px;
    text-align: center;
  }
  .nature-container {
    padding: 1rem 0;
    border-bottom: 1px dashed #f8f8f8;
  }
  .label {
    font-weight: 700;
  }
  .nature-content {
    width: 950px;
    margin: .5rem 0;
  }
</style>