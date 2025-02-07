<script>
	import Seo from '$lib/Seo.svelte';
</script>

<svelte:head>
	<Seo
		description="Test page"
		titleDefault="Hi"
		titleTemplate="%s | Svelte SEO"
		og={{ title: 'Hello', video: { src: '/video.mp4' } }}
	/>
</svelte:head>
