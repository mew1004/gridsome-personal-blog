<template>
  <Layout>
    <div class="nature-container">
      <div class="nature-header">
        <h1 class="nature-title">{{$page.nature.title}}</h1>
        <div class="nature-info">
          <div class="categories-container">
            <div class="categories">
              <span class="label">Categories</span>
              <span v-for="item in $page.nature.categories" :key="item.id">{{item.title}}</span>
            </div>
          </div>
          <div class="year-container">
            <span class="label">Year</span>
            <div>{{$page.nature.create}}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="nature-content">{{$page.nature.content}}</div>
        <img class="thumbnail g-image g-image--lazy g-image--loaded" :src="$page.nature.url" width="950">  
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  nature(id: $id) {
    id
    title
    url
    content
    create
    categories {
      id 
      title
    }
  }
}
</page-query>

<script>
export default {
  name: 'NaturePage'
}
</script>

<style>
  .nature-header {
    padding: 10vh 0 2rem;
  }
  .nature-info {
    display: flex;
    flex-wrap: wrap;
    font-size: .8rem;
  }
  .categories-container > div {
    margin-right: 5rem;
  }
  .label {
    display: block;
    font-weight: 700;
    margin-bottom: .5rem;
  }
  .nature-content {
    width: 950px;
    margin: 2rem 0;
  }
</style>