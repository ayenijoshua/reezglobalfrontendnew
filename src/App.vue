<template>
  <div id="app">
   <router-view/>
  
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      idleTimer: null,
      idleLimit: 15 * 60 * 1000 // 15 minutes
    }
  },
  mounted() {
    const events = ['mousemove', 'keydown', 'scroll', 'click', 'touchstart']
    events.forEach(event => window.addEventListener(event, this.resetIdleTimer))
    this.resetIdleTimer()
  },
  beforeDestroy() {
    const events = ['mousemove', 'keydown', 'scroll', 'click', 'touchstart']
    events.forEach(event => window.removeEventListener(event, this.resetIdleTimer))
    clearTimeout(this.idleTimer)
  },
  methods: {
    resetIdleTimer() {
      clearTimeout(this.idleTimer)
      this.idleTimer = setTimeout(this.logoutUser, this.idleLimit)
    },
    logoutUser() {
      // Check current route to determine user type
      const currentPath = this.$route.path

      if (currentPath.startsWith('/admin')) {
        this.$store.dispatch('authStore/logOut') // Admin logout
        this.$router.push('/admin-login')        // Redirect admin
      } else {
        this.$store.dispatch('authStore/logout') // Member logout
        this.$router.push('/login')              // Redirect user
      }
    }
  }
}
</script>

