<script lang="ts">
	import NestedOpengraph from './NestedOpengraph.svelte';
	import type { OGSettings } from './seo.js';

	interface Props {
		og: OGSettings;
	}

	const { og }: Props = $props();

	const keys = <T extends Record<string, unknown>>(obj: T) => {
		return (Object.keys(obj) as Array<keyof T>).map((key) => obj[key]);
	};
</script>

{#each Object.entries(og) as entry}
	{#if typeof entry[1] === 'object'}
		<NestedOpengraph tag={entry} />
	{:else}
		<meta name={`og:${entry[0]}`} content={entry[1]} />
	{/if}
{/each}
