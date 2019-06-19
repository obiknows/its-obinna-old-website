<template>
  <Layout>
    <div class="container">

      <div class="services-header">
        <h1 class="services-title">Services</h1>

        <nav class="menu menu--adsila">
          <a class="menu__item" href="#">
            <span class="menu__item-name">UI/UX Design</span>
            <!-- <span class="menu__item-label">I'll craft </span> -->
          </a>
          <a class="menu__item" href="#">
            <span class="menu__item-name">Logo Design</span>
            <!-- <span class="menu__item-label">I'll </span> -->
          </a>
          <a class="menu__item" href="#">
            <span class="menu__item-name">Website Design</span>
            <!-- <span class="menu__item-label">I'll draft, desgin and deliver a website to your specificationa and budget</span> -->
          </a>
          <a class="menu__item" href="#">
            <span class="menu__item-name">Ecommerce Design</span>
            <!-- <span class="menu__item-label">I'll draft, desgin and deliver a custom ecom</span> -->
          </a>
          <a class="menu__item" href="#">
            <span class="menu__item-name">Branding Consultation</span>
            <!-- <span class="menu__item-label">Get in touch and I'l</span> -->
          </a>
        </nav>
      </div>

    </div>
  </Layout>
</template>

<script>
export default {}
</script>

<style scoped>
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
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
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
.menu {
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

.menu--adsila .menu__item:nth-child(odd):hover,
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

</style>

