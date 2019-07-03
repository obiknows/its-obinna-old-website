<template>
  <Layout>
    <div class="project">

      <div class="container">

        <div class="project-header">
          <h1 class="project-title" v-html="$page.service.title" />
        </div>

      </div>

    </div>
  </Layout>
</template>

<page-query>
query ServicePost ($path: String!) {
  service: servicesPost (path: $path) {
    title
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.service.title,
      bodyAttrs: {
        style: `background-color: ${this.$page.service.projectBgColor ? this.$page.service.projectBgColor : 'var(--color-base)'}; color: ${this.$page.service.projectFgColor ? this.$page.service.projectFgColor : 'var(--color-contrast)'}`
      }
    }
  }
}
</script>

<style scoped>
.project-header {
  padding: 20vh 0 4rem 0;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ', '
}
.category:last-of-type:after {
  content: '';
}
</style>
