<template>
    <div class="hero">
        <h1 class="hero-title" v-html="settings.hero_title" />
        <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
        <g-link class="nav__link" :to="{ name: 'contact' }">
          <button>Work With Me</button>
        </g-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style scoped>
.hero {
    text-align: center;
    width: 480px;
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 0 8rem 0;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}
.hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.6;
}

button {
  margin: auto;
  padding: 1rem;
  text-transform: uppercase;
  color: #fafafa;
  background-color: #219653;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 10px rgba(50, 50, 50, 0.4);
  transition: .3s all ease;
  letter-spacing: .1rem;
  font-size: .85rem;
  position: relative;
  top: 0;
  right: 0;
  margin-top: 1rem;
  /* padding-left: 2.5rem; */
}

</style>
