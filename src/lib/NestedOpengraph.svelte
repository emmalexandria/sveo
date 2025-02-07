<script lang="ts">
	interface Props {
		tag: { [key: string]: any };
	}

	const { tag }: Props = $props();
	const name = tag[0];
	const val = tag[1];
</script>

{#if tag[0]}
	<meta name={`og:${name}`} content={val[0]} />
{/if}
{#each Object.entries(val) as entry}
	<meta name={`og:${name}:${entry[0]}`} content={entry[1] as string} />
{/each}
