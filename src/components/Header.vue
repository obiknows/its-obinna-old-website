<template>
    <header class="header" :class="{sticky: $route.path === '/' || $route.path.includes('/projects/')}">
        <div class="container">
            <div class="left">
                <g-link :to="{ name: 'home' }" class="home-link">
                    <img 
                        src="../../static/GOLD-OBINNA.svg"
                        :alt="settings.site_name" 
                        class="logo"
                    />
                </g-link>
            </div>
            <nav class="nav right">
                <g-link class="nav__link" :to="{ name: 'services' }">Services</g-link>
                <g-link class="nav__link" :to="{ name: 'journal' }">Ideas</g-link>
                <g-link class="nav__link" :to="{ name: 'store' }">Store</g-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
        // logo: require("../../static/logo.svg"),
        settings: require("../../data/theme.json")
    }
  }
}
</script>

<style scoped>
.header {
    position: relative;
    height: 6rem;
    z-index: 10;
}
.header.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.header > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}
.home-link {
    text-decoration: none;
}
.logo {
    height: 3rem;
}
.site-name {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;   
}
.nav > * {
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 4px;
    margin-right: 3rem;
    padding-bottom: 4px;
    border-bottom: 1px solid;
    border-color: transparent;
    transition: border 0.15s;
}

.nav > *:last-of-type {
    margin: 0;
}
.nav > *:hover {
    border-color: inherit;
}
.nav > .active {
    border-color: inherit;
}

/* PHONE ONLY */
@media only screen and (max-width: 600px) {
    .nav {
        margin-left: 2rem;   
    }

    .nav > * {
        margin-right: 2rem;
    }
}

</style>
