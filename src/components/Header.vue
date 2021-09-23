<template>
	<header>
		<nav>
			<router-link id="logo" :to="{ hash: '#main' }">TK</router-link>
			<ol>
				<li><router-link :to="{ hash: '#about' }">About</router-link></li>
				<li><router-link :to="{ hash: '#projects' }">Projects</router-link></li>
				<li><router-link :to="{ hash: '#contacts' }">Contacts</router-link></li>
			</ol>
		</nav>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
	position: fixed;
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 0 20px;
	backdrop-filter: blur(15px);
	background-color: var(--header-background-color);
	@include mobile {
		height: 60px;
	}
	a {
		text-decoration: none;
		color: var(--color-primary-text);
	}
}
#logo {
	font-size: 32px;
	font-weight: 900;
}
nav {
	width: 100%;
	max-width: 1200px;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	ol {
		display: grid;
		margin: 0;
		padding: 0;
		grid-auto-flow: column;
		list-style: none;
		gap: 25px;
		li {
			position: relative;
			&:before {
				content: "";
				position: absolute;
				bottom: -10px;
				left: 0;
				right: 0;
				width: 100%;
				height: 3px;
				background-color: var(--color-primary-text);
				transition: transform ease-in-out 100ms;
				transform: scaleX(0);
			}
			&:hover:before {
				transform: scaleX(1);
			}
		}
	}
}
</style>
