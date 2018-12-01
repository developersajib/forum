<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Single Page Form</title>
	<link rel="stylesheet" href="{{ asset( 'css/app.css')}}">
</head>
<body>
	<div id="app">
	    <v-app>
			<app-home></app-home>
	    </v-app>		
	</div>

	<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>