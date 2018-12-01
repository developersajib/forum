<template>
	<div>
		<toolbar></toolbar>
		<v-container>
			<router-view></router-view>
	    </v-container>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import toolbar from  './Toolbar';
	import AppFooter from  './AppFooter';
	import Login from  './login/Login';
	export default {
		components:{toolbar, AppFooter}
	}
</script>

<style>
	

</style>
