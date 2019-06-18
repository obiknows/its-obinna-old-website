<template>
    <footer class="footer">
        <img 
            src="../../static/OBINNA.svg"
            :alt="settings.site_name" 
            class="footer-logo"
        />
        <div class="container">
            <span v-html="settings.footer" />
        </div>
    </footer>
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
.footer-logo {
    height: 1.5rem;
    margin-bottom: 0.25rem;
}

.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
    text-align: center;
}
</style>
