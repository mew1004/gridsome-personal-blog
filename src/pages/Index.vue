<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
        <h1 class="hero-subtitle">Hi there, I'm an independent Digital Designer & Art Director focused on digital design for brands that like to have fun.</h1>
      </div>
      <div class="projects">
        <div class="project" v-for="nature in $page.natures.edges" :key="nature.node.id">
          <g-link class="project-link" :to="'/nature/' + nature.node.id">
            <img class="thumbnail g-image g-image--lazy g-image--loaded" :src="nature.node.url" 
            :width="nature.node.id === '1' || nature.node.id === '4' ? 950: 440 ">
            <h3 class="project-title">{{nature.node.title}}</h3>
            <div class="categories">
              <span class="category" v-for="item in nature.node.categories" :key="item.id">{{item.title}}</span>
            </div>
          </g-link>
        </div>
      </div>
    </div>

    <div>
      <div class="latest-journals-heading container">
        <span class="label">Latest and greatest</span>
      </div>
      <div class="latest-journals">
        <div class="container">
          <g-link class="journal nav__link" v-for="category in $page.categories.edges" 
            :key="category.node.id" :to="'/category/' + category.node.id">
            <h3 class="journal-title">{{category.node.title}}</h3>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  natures:allNature(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        title
        url
        categories {
          id
          title
        }
      }
    }
  }

  categories:allCategories(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'HomePage'
  }
}
</script>

<style>
  @import url('../styles/index.css');
</style>
