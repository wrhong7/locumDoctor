$(document).ready(function(){ 
	$(".navbarContent").append(
	`
	<div class="navbarOptionCover">
		<div class="navbarOptionCoverLeft">
			<div class="navbarLogo">
				<a class="navbarOptionLeft" onclick="approach()">How it works?</a>
				<a class="navbarOptionLeft" onclick="approach()">Our Mission</a>
			</div>
		</div>

		<div class="navbarOptionCoverRight">
			<a class="navbarOptionRight" onclick="signUp()">Help</a>
			<a class="navbarOptionRight" onclick="signUp()">Sign Up</a>
			<a class="navbarOptionRight" onclick="signin()">Sign In</a>
		</div>
	</div>
	`
	)
})