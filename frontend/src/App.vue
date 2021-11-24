<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/signUp">Sign up</router-link>
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
  background: #FFFAF0;
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

.card {
  /* Add shadows to create the "card" effect */
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 200px;
  height: 450px;
  background: white;
  cursor: pointer;
  padding: 5px;
  margin:10px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(127, 255, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
.imgCard{
  width: 200px;
  height: 200px;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
</style>
