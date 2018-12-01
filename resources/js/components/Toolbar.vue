<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>FORUM</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
    <router-link to="/login"><v-btn flat>Login</v-btn></router-link>	
      
      <v-btn flat>Forum</v-btn>
      <v-btn flat>Ask Question</v-btn>
      <v-btn flat>Category</v-btn>
    </div>
  </v-toolbar>
</template>

<script>
	export default {

	}
</script>

<style>
	

</style>
