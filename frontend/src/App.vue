<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <div class="menu-right">
      <router-link v-if="!this.isLoggedIn" to="/login">Login</router-link>
      <a href="#" v-if="this.isLoggedIn" v-on:click="this.logout()">Logout</a>
    </div>
  </div>
  <router-view/>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
   methods: {
    ...mapActions(["logout"]),
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav .menu-right {
  float: right;
}
</style>
