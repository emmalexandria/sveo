<script lang="ts">
	import Meta from './Meta.svelte';
	import OpenGraph from './Opengraph.svelte';
	import type { BasicMeta, FaviconSettings, OGSettings } from './seo.js';

	interface Props {
		title?: string;
		titleDefault?: string;
		titleTemplate?: string;
		description?: string;
		charset?: 'UTF-8' | 'ascii' | 'ansi' | 'iso-8859-1';
		favicon?: FaviconSettings;
		noIndex?: boolean;
		noFollow?: boolean;
		metaTags?: BasicMeta;
		og?: OGSettings;
	}

	const {
		title,
		titleTemplate = '%s',
		titleDefault = '',
		description,
		charset = 'UTF-8',
		favicon,
		noIndex,
		noFollow,
		metaTags,
		og
	}: Props = $props();

	const getTitle = (): string => {
		if (title) {
			return titleTemplate.replace('%s', title);
		} else {
			return titleTemplate.replace('%s', titleDefault);
		}
	};

	const robotsContent = noIndex ? 'noindex' : 'index' + noFollow ? 'noFollow' : 'follow';
</script>

{#if title}
	<title>{getTitle()}</title>
{/if}

{#if description}
	<meta name="description" content={description} />
{/if}

{#if charset}
	<meta name="charset" content={charset} />
{/if}

<meta name="viewport" content="width=device-width, initial-scale=1" />

{#if metaTags}
	<Meta {metaTags} />
{/if}

{#if og}
	<OpenGraph {og} />
{/if}
