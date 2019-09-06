<template>
  <Layout>
    <!-- Link: TAILWIND -->
    <div class="container white">
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>


      <div class="services-header">
        <h1 class="services-title">Services</h1>
        
        <!-- <section class="service-grid">
          <div style="background-color:red">1</div>
          <div style="background-color:yellow">2</div>
          <div style="background-color:green">3</div>
          <div style="background-color:green">4</div>
          <div style="background-color:orange">5</div>
          <div style="background-color:red">6</div>
        </section> -->

        <section class="cf w-100 pa2-ns mb2">
          <!-- 1. Web Creation -->
          <article class="fl w-100 w-50-m  w-25-ns pa2-ns mb3">
            <div class="aspect-ratio aspect-ratio--1x1">
              <!-- <img style="background-image:url(http://mrmrs.github.io/images/0006.jpg);"  -->
              <img 
                src="../../static/services/sites-stores.svg"
                class="db bg-center cover aspect-ratio--object"
              />
            </div>
            <!-- <g-link class="nav__link ph2 ph0-ns pb3 link db" to="/services/website-creation"> -->
              <h3 class="f5 f4-ns mb0 ">Sites & Stores</h3>
              <h3 class="f6 f5 fw4 mt2 ">I'll design and build a website or webstore to fit your needs.</h3>
            <!-- </g-link> -->
          </article>

          <!-- 2. Logo Design -->
          <article class="fl w-100 w-50-m  w-25-ns pa2-ns mb3">
            <div class="aspect-ratio aspect-ratio--1x1">
              <img 
                src="../../static/services/logo.svg"
                class="db bg-center cover aspect-ratio--object" />
              />
            </div>
            <!-- <g-link class="nav__link ph2 ph0-ns pb3 link db" to="/services/logo-design"> -->
              <h3 class="f5 f4-ns mb0 ">Logos</h3>
              <h3 class="f6 f5 fw4 mt2 ">I'll design a logo and branding kit to suit your needs.</h3>
            <!-- </g-link> -->
          </article>

          <!-- 3. Branding -->
          <article class="fl w-100 w-50-m  w-25-ns pa2-ns mb3">
            <div class="aspect-ratio aspect-ratio--1x1">
              <img 
              src="../../static/services/branding.svg"
              class="db bg-center cover aspect-ratio--object" />
            </div>
            <!-- TODO: change links to branding -->
            <!-- <g-link class="nav__link ph2 ph0-ns pb3 link db" to="/services/brand-consultation"> -->
              <h3 class="f5 f4-ns mb0 ">Branding Kit</h3>
              <h3 class="f6 f5 fw4 mt2 ">I'll craft a strategy to help build your brand.</h3>
            <!-- </g-link> -->
          </article>
          <!-- 4. Animate / Illustrate -->
          <article class="fl w-100 w-50-m  w-25-ns pa2-ns mb3">
            <div class="aspect-ratio aspect-ratio--1x1">
              <img 
              src="../../static/services/illustration.svg" 
              class="db bg-center cover aspect-ratio--object" />
            </div>
            <!-- TODO: change link to /animations -->
            <!-- <g-link class="nav__link ph2 ph0-ns pb3 link db" to="/services/animate-illustrate"> -->
              <h3 class="f5 f4-ns mb0 ">Animations</h3>
              <h3 class="f6 f5 fw4 mt2 ">I will create a piece of art for a specific purpose you desire.</h3>
            <!-- </g-link> -->
          </article>
          <!-- 5. Infographics -->
          <article class="fl w-100 w-50-m  w-25-ns pa2-ns mb3">
            <div class="aspect-ratio aspect-ratio--1x1">
              <img 
              src="../../static/services/ads-info.svg" 
              class="db bg-center cover aspect-ratio--object" />
            </div>
            <!-- TODO: change links to /infographics -->
            <!-- <g-link class="nav__link ph2 ph0-ns pb3 link db" to="/services/animate-illustrate"> -->
              <h3 class="f5 f4-ns mb0 ">Ads & Infographics</h3>
              <h3 class="f6 f5 fw4 mt2 ">I will create a piece of art for a specific purpose you desire.</h3>
            <!-- </g-link> -->
          </article>
          <!-- 6. Product Mockups -->
          <article class="fl w-100 w-50-m  w-25-ns pa2-ns mb3">
            <div class="aspect-ratio aspect-ratio--1x1">
              <img 
              src="../../static/services/product.svg" 
              class="db bg-center cover aspect-ratio--object" />
            </div>
            <!-- TODO: change links to /mockups -->
            <!-- TODO: rewrite descriptions -->
            <!-- <g-link class="nav__link ph2 ph0-ns pb3 link db" to="/services/animate-illustrate"> -->
              <h3 class="f5 f4-ns mb0 ">Product Mockups</h3>
              <h3 class="f6 f5 fw4 mt2 ">I will create product mockups tailor made for your brand.</h3>
            <!-- </g-link> -->
          </article>
          <!-- 7. Music & Beats -->
          <article class="fl w-100 w-50-m  w-25-ns pa2-ns mb3">
            <div class="aspect-ratio aspect-ratio--1x1">
              <img 
              src="../../static/services/music-beats.svg"
              class="db bg-center cover aspect-ratio--object" />
            </div>
            <!-- TODO: change links to /beats -->
            <!-- TODO: rewrite descriptions -->
            <!-- <g-link class="nav__link ph2 ph0-ns pb3 link db" to="/services/animate-illustrate"> -->
              <h3 class="f5 f4-ns mb0 ">Music & Beats</h3>
              <h3 class="f6 f5 fw4 mt2 ">I'll create royalty-free sounds to brind your project to life.</h3>
            <!-- </g-link> -->
          </article>
          <!-- 8. Custom Work -->
          <article class="fl w-100 w-50-m  w-25-ns pa2-ns mb3">
            <div class="aspect-ratio aspect-ratio--1x1">
              <img 
              src="../../static/services/custom.svg"
              class="db bg-center cover aspect-ratio--object" />
            </div>
            <!-- TODO: change links to /custom (with a form about inquiry & budget) -->
            <!-- TODO: rewrite descriptions -->
            <!-- <g-link class="nav__link ph2 ph0-ns pb3 link db" to="/services/animate-illustrate"> -->
              <h3 class="f5 f4-ns mb0 ">Custom Project</h3>
              <h3 class="f6 f5 fw4 mt2 ">Need a custom work not mentioned here? Tap In and lets get to business</h3>
            <!-- </g-link> -->
          </article>
  
        </section>
      </div>

    </div>
  </Layout>
</template>

<script>
// FROM CODROPS




export default {}
</script>

<style scoped>
/* Services Grid */
.service-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

}
.service-grid div {
  height: 5rem;
}


.services-means-title {
  font-size: 2rem;
  margin: 0 0 1rem 0;
  padding: 0;
}
.services-header {
  padding: 2rem 0 4rem 0;
  text-align: center;
}
.services-title {
  font-size: 4rem !important; 
  margin: 0 0 4rem 0 !important;
  padding: 0 !important;
}
.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
input:focus,textarea:focus {
  border-color: var(--color-contrast-1);
}
input,textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
</style>

