<script lang="ts">
	import type { FaviconSettings } from './seo.js';

	interface Props {
		favicon: FaviconSettings;
	}

	const { favicon }: Props = $props();
</script>

{#if favicon.basic}
	<link rel={favicon.basic.rel} type={favicon.basic.type} href={favicon.basic.href} />
{/if}

{#if favicon.appleTouch}
	<link
		rel={favicon.appleTouch.rel}
		sizes={favicon.appleTouch.sizes}
		href={favicon.appleTouch.href}
	/>
{/if}

{#if favicon.android?.small}
	<link
		rel={favicon.android.small.rel}
		type={favicon.android.small.type}
		href={favicon.android.small.href}
	/>
{/if}

{#if favicon.android?.large}
	<link
		rel={favicon.android?.large.rel}
		type={favicon.android?.large.type}
		href={favicon.android?.large.href}
	/>
{/if}

{#if favicon.ms?.tileImage}
	<meta name={favicon.ms.tileImage.name} content={favicon.ms.tileImage.content} />
{/if}

{#if favicon.ms?.tileColor}
	<meta name={favicon.ms.tileColor.name} content={favicon.ms.tileColor.content} />
{/if}

{#if favicon.svg}
	<link rel={favicon.svg.rel} type={favicon.svg.type} href={favicon.svg.href} />
{/if}

{#if favicon.png?.small}
	<link
		rel={favicon.png.small.rel}
		type={favicon.png.small.type}
		sizes={favicon.png.small.sizes}
		href={favicon.png.small.href}
	/>
{/if}

{#if favicon.png?.large}
	<link
		rel={favicon.png.large.rel}
		type={favicon.png.large.type}
		sizes={favicon.png.large.sizes}
		href={favicon.png.large.href}
	/>
{/if}

{#if favicon.pwa}
	<link rel={favicon.pwa.rel} href={favicon.pwa.href} />
{/if}

{#if favicon.theme}
	<meta name={favicon.theme.name} content={favicon.theme.content} />
{/if}

{#if favicon.safari?.app}
	<meta name={favicon.safari.app.name} content={favicon.safari.app.content} />
{/if}

{#if favicon.safari?.status}
	<meta name={favicon.safari?.status.name} content={favicon.safari.status.content} />
{/if}

{#if favicon.windows}
	<meta name={favicon.windows.name} content={favicon.windows.content} />
{/if}
