<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
        <h1 class="hero-subtitle">Hi there, I'm an independent Digital Designer & Art Director focused on digital design for brands that like to have fun.</h1>
      </div>
      <div class="projects">
        <div class="project">
          <g-link class="project-link" to="/">
            <img class="thumbnail g-image g-image--lazy g-image--loaded" src="/img/8.jpg" width="950">
            <h3 class="project-title">Firmament</h3>
            <div class="categories">
              <span class="category">universe</span>
              <span class="category">explorations</span>
            </div>
          </g-link>
        </div>
        <div class="project">
          <g-link class="project-link" to="/">
            <img class="thumbnail g-image g-image--lazy g-image--loaded" src="/img/6.jpg" width="440">
            <h3 class="project-title">Mountaintop</h3>
            <div class="categories">
              <span class="category">nature</span>
              <span class="category">tourism</span>
            </div>
          </g-link>
        </div>
        <div class="project">
          <g-link class="project-link" to="/">
            <img class="thumbnail g-image g-image--lazy g-image--loaded" src="/img/7.jpg" width="440">
            <h3 class="project-title">Field</h3>
            <div class="categories">
              <span class="category">nature</span>
              <span class="category">tourism</span>
            </div>
          </g-link>
        </div>
        <div class="project">
          <g-link class="project-link" to="/">
            <img class="thumbnail g-image g-image--lazy g-image--loaded" src="/img/10.jpg" width="950">
            <h3 class="project-title">River Water</h3>
            <div class="categories">
              <span class="category">nature</span>
              <span class="category">tourism</span>
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
          <g-link class="journal nav__link" to="/">
            <h3 class="journal-title">universe</h3>
          </g-link>
          <g-link class="journal nav__link" to="/">
            <h3 class="journal-title">nature</h3>
          </g-link>
          <g-link class="journal nav__link" to="/">
            <h3 class="journal-title">landscape</h3>
          </g-link>
          <g-link class="journal nav__link" to="/">
            <h3 class="journal-title">plant</h3>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'HomePage'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 6rem;
}

.hero {
  text-align: center;
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0 8rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem;
}

.hero-subtitle {
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.68;
  opacity: .6;
}

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}

.project {
  text-align: center;
  grid-column-start: auto;
  grid-column-end: span 1;
}

.project:nth-child(3n+1) {
  grid-column-start: auto;
  grid-column-end: span 2;
}

.project-title {
  font-size: 1rem;
  color: #333;
  margin: 2rem 0 1rem;
}

.thumbnail {
  -o-object-fit: cover;
  object-fit: cover;
  transition: all .15s ease;
}

.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0,0,0,.25);
}

.categories {
  font-size: .8rem;
  color:#333;
}

.category {
  margin-right: .8rem;
}

.latest-journals-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: .6rem;
  font-weight: 400;
  text-transform: uppercase;
}

.latest-journals-heading > .label {
  display: block;
  font-weight: 700;
  margin-bottom: .5rem;
}

.latest-journals {
  max-width: 100%;
  margin: 0;
  border-left: 0;
  border-right: 0;
  border-top: 1px solid #F2F6FC;
  border-bottom: 1px solid#F2F6FC;
}

.latest-journals > .container {
  padding: 0 6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.latest-journals .journal {
  padding: 2rem 0;
  flex: 1;
  border: 0;
  border-right: 1px solid #F2F6FC;
}

.latest-journals .journal-title {
  font-size: 1rem;
  text-align: center;
}
</style>
