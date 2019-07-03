<template>
  <Layout>
    <!-- Link: TAILWIND -->
    <div class="container">
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>


      <div class="services-header">
        <h1 class="services-title">Services</h1>
        
        <section class="cf w-100 pa2-ns mb2">
          <!-- 1. Web Creation -->
          <article class="fl w-100 w-50-m  w-25-ns pa2-ns mb3">
            <div class="aspect-ratio aspect-ratio--1x1">
              <img style="background-image:url(http://mrmrs.github.io/images/0006.jpg);" 
              class="db bg-center cover aspect-ratio--object" />
            </div>
            <g-link class="nav__link ph2 ph0-ns pb3 link db" to="/services/website-creation">
              <h3 class="f5 f4-ns mb0 black-90">Website Creation</h3>
              <h3 class="f6 f5 fw4 mt2 black-60">I'll design and build a website to fit your needs.</h3>
            </g-link>
          </article>

          <!-- 2. Logo Design -->
          <article class="fl w-100 w-50-m  w-25-ns pa2-ns mb3">
            <div class="aspect-ratio aspect-ratio--1x1">
              <img style="background-image:url(http://mrmrs.github.io/images/0006.jpg);" 
              class="db bg-center cover aspect-ratio--object" />
            </div>
            <g-link class="nav__link ph2 ph0-ns pb3 link db" to="/services/logo-design">
              <h3 class="f5 f4-ns mb0 black-90">Logo Design</h3>
              <h3 class="f6 f5 fw4 mt2 black-60">I'll design a logo and branding kit to suit your needs.</h3>
            </g-link>
          </article>

          <!-- 3. Brand Consultation -->
          <article class="fl w-100 w-50-m  w-25-ns pa2-ns mb3">
            <div class="aspect-ratio aspect-ratio--1x1">
              <img style="background-image:url(http://mrmrs.github.io/images/0006.jpg);" 
              class="db bg-center cover aspect-ratio--object" />
            </div>
            <g-link class="nav__link ph2 ph0-ns pb3 link db" to="/services/brand-consultation">
              <h3 class="f5 f4-ns mb0 black-90">Brand Consultation</h3>
              <h3 class="f6 f5 fw4 mt2 black-60">We'll meet and I'll craft a strategy to help build your brand.</h3>
            </g-link>
          </article>
          <!-- 4. Animate / Illustrate -->
          <article class="fl w-100 w-50-m  w-25-ns pa2-ns mb3">
            <div class="aspect-ratio aspect-ratio--1x1">
              <img style="background-image:url(http://mrmrs.github.io/images/0002.jpg);" 
              class="db bg-center cover aspect-ratio--object" />
            </div>
            <g-link class="nav__link ph2 ph0-ns pb3 link db" to="/services/animate-illustrate">
              <h3 class="f5 f4-ns mb0 black-90">Animate / Illustrate</h3>
              <h3 class="f6 f5 fw4 mt2 black-60">I will create a piece of art for a specific purpose you desire.</h3>
            </g-link>
          </article>
  
</section>
        <!-- <nav class="menu menu--adsila">
          <a class="menu__item" href="#">
            <span class="menu__item-name">UI/UX Design</span>
          </a>
          <a class="menu__item" href="#">
            <span class="menu__item-name">Logo Design</span>
          </a>
          <a class="menu__item" href="#">
            <span class="menu__item-name">Website Design</span>
          </a>
          <a class="menu__item" href="#">
            <span class="menu__item-name">Ecommerce Design</span>
          </a>
          <a class="menu__item" href="#">
            <span class="menu__item-name">Branding Consultation</span>
          </a>
        </nav> -->
      </div>

    </div>
  </Layout>
</template>

<script>
// FROM CODROPS




export default {}
</script>

<style scoped>
/* FROM CODROPS  */



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

/* From Codrops */
/* .menu {
	position: relative;
	z-index: 10;
}
.menu__item {
	position: relative;
	display: block;
	outline: none;
	margin: 0 0 1.5em;
	line-height: 1;
}
.menu__item-name,
.menu__item-label {
	position: relative;
	display: inline-block;
}
.menu__item-name {
	font-size: 1.25em;
}
.menu__item-label {
	margin: 0 0 0 0.5em;
}
.menu--adsila {
	font-size: 1.15em;
	font-family: 'Nunito', sans-serif;
}
.menu--adsila a {
	color: #272727;
}
.menu--adsila .menu__item {
	margin: 0 0 1em;
}
.menu--adsila .menu__item-name {
	padding: 0 0.35em;
	font-weight: bold;
	line-height: 1.4;
	transition: color 0.5s;
	transition-timing-function: cubic-bezier(0.2,1,0.3,1);
}
.menu--adsila .menu__item-name::before {
	content: '';
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 50%;
	left: 0;
	bottom: 0;
	opacity: 0.3;
	transform: scale3d(0,1,1);
	transform-origin: 0% 50%;
	transition: transform 0.5s;
	transition-timing-function: cubic-bezier(0.2,1,0.3,1);
}
.menu--adsila .menu__item-label {
	font-size: 1em;
	letter-spacing: 0.05em;
	transform: translate3d(-0.5em,0,0);
	transition: transform 0.5s, color 0.5s;
	transition-timing-function: cubic-bezier(0.2,1,0.3,1);
}
.menu--adsila .menu__item-label::before {
	content: '';
	position: absolute;
	z-index: -1;
	width: 25%;
	height: 1px;
	left: 0.05em;
	top: 1.25em;
	opacity: 0.3;
	transform: scale3d(0,1,1);
	transform-origin: 100% 50%;
	transition: transform 0.5s;
	transition-timing-function: cubic-bezier(0.2,1,0.3,1);
}
.menu--adsila .menu__item:nth-child(odd) .menu__item-name::before,
.menu--adsila .menu__item:nth-child(odd) .menu__item-label::before {
	background: #fe628e;
}
.menu--adsila .menu__item:nth-child(even) .menu__item-name::before,
.menu--adsila .menu__item:nth-child(even) .menu__item-label::before  {
	background: #6265fe;
}
/* Hover */
/* .menu--adsila .menu__item:nth-child(odd):hover,
.menu--adsila .menu__item:nth-child(odd):focus {
	color: #fe628e;
}
.menu--adsila .menu__item:nth-child(even):hover,
.menu--adsila .menu__item:nth-child(even):focus {
	color: #6265fe;
}
.menu--adsila .menu__item:hover .menu__item-name::before,
.menu--adsila .menu__item:focus .menu__item-name::before,
.menu--adsila .menu__item:hover .menu__item-label::before,
.menu--adsila .menu__item:focus .menu__item-label::before {
	transform: scale3d(1,1,1);
}
.menu--adsila .menu__item:hover .menu__item-label,
.menu--adsila .menu__item:focus .menu__item-label {
	transform: translate3d(0,0,0);
}
.menu--adsila .menu__item:hover .menu__item-label::before,
.menu--adsila .menu__item:focus .menu__item-label::before {
	transition-timing-function: ease;
	transform-origin: 0% 50%;
}
*/
</style>

