<script lang="ts">
	import type { BasicMeta } from './seo.js';

	interface Props {
		metaTags: BasicMeta;
	}

	const { metaTags }: Props = $props();
</script>

{#if metaTags?.keywords}
	<meta name="url" content={metaTags.keywords.join(' ')} />
{/if}

{#if metaTags?.subject}
	<meta name="subject" content={metaTags.subject} />
{/if}

{#if metaTags?.copyright}
	<meta name="copyright" content={metaTags.copyright} />
{/if}

{#if metaTags?.language}
	<meta name="language" content={metaTags.language} />
{/if}

{#if metaTags?.revised}
	<meta name="revised" content={metaTags.revised} />
{/if}

{#if metaTags?.abstract}
	<meta name="abstract" content={metaTags.abstract} />
{/if}

{#if metaTags?.topic}
	<meta name="topic" content={metaTags.topic} />
{/if}

{#if metaTags?.summary}
	<meta name="summary" content={metaTags.summary} />
{/if}

{#if metaTags?.classification}
	<meta name="classification" content={metaTags.classification} />
{/if}

{#if metaTags?.author}
	<meta name="author" content={metaTags.author} />
{/if}

{#if metaTags?.designer}
	<meta name="designer" content={metaTags.designer} />
{/if}

{#if metaTags?.replyTo}
	<meta name="reply-to" content={metaTags.replyTo} />
{/if}

{#if metaTags?.owner}
	<meta name="owner" content={metaTags.owner} />
{/if}

{#if metaTags?.url}
	<meta name="url" content={metaTags.url} />
{/if}

{#if metaTags?.identifierURL}
	<meta name="identifier-URL" content={metaTags.identifierURL} />
{/if}

{#if metaTags?.directory}
	<meta name="directory" content={metaTags.directory} />
{/if}

{#if metaTags?.identifierURL}
	<meta name="identifier-URL" content={metaTags.identifierURL} />
{/if}

{#if metaTags?.category}
	<meta name="category" content={metaTags.category} />
{/if}

{#if metaTags?.coverage}
	<meta name="identifier-URL" content={metaTags.coverage} />
{/if}

{#if metaTags?.distribution}
	<meta name="distribution" content={metaTags.distribution} />
{/if}

#{#if metaTags?.rating}
	<meta name="rating" content={metaTags.rating} />
{/if}

{#if metaTags?.revisitAfter}
	<meta name="revisit-after" content={metaTags.revisitAfter} />
{/if}
