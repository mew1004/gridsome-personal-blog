<template>
  <div class="layout">
    <header class="header">
      <!-- <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong> -->
      <g-image alt="Example image" src="~/favicon.png" width="35" />
      <nav class="nav">
        <g-link class="nav__link" to="/">Nature</g-link>
        <g-link class="nav__link" to="/about/">Welcome</g-link>
      </nav>
    </header>
    <slot/>
    <footer class="footer">
      <span>Copyright © 2021</span>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  box-sizing: border-box;
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 6rem;
  padding-right: 6rem;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover{
  color: #333;
  text-decoration:none;
}

.footer {
  margin-top: 6rem;
}
</style>
