<template>
	<section>
		<h1 id="headLine">
			안녕하세요,
			<br />
			<span id="name" class="text-bolder">문태경</span>입니다.
		</h1>
		<p id="keyword">Web Developer / Frontend / Backend</p>
		<p id="hashtags">#반응형 #포트폴리오</p>
	</section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#main {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
#headLine {
	font-size: 4vw;
	letter-spacing: 2px;
}
#name {
	font-size: 5vw;
	font-weight: 800;
}
#keyword {
	margin-top: 3em;
}
#hashtags {
	margin-top: 1em;
	font-weight: 300;
}
@include tablet {
	#headLine {
		font-size: 8vw;
	}
	#name {
		font-size: 9vw;
	}
}
@include mobile {
	#headLine {
		font-size: 12vw;
	}
	#name {
		font-size: 13vw;
	}
}
</style>
