<script>
  import SvelteSeo from "svelte-seo";
  import Time from "svelte-time";
  import "dayjs/esm/locale/uk";
  import dayjs from "dayjs/esm";
  import 'highlight.js/styles/github.css';

  export let data, request; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;

  // Set locale for svelte-time
  dayjs.locale("uk");
</script>

<style>
  h1 {
    margin-bottom: 10px;
  }

  .title {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ddd;
  }

  :global(h2) {
    margin-top: 2rem;
  }

  :global(pre) {
    background: #eee;
    padding: 1rem;
    border-radius: 1rem;
  }

  :global(blockquote) {
    margin: 0;
    background: #ddd;
    padding: 3px 1.5rem 3px 3rem;
    position: relative;
    border-radius: 1rem;
  }
  :global(blockquote:after) {
    content: '>';
    color: #aaa;
    font-size: 30px;
    position: absolute;
    top: 33%;
    left: 1rem;
  }

  :global(blockquote p) {
    padding: 0;
  }
</style>

<!-- See
  https://github.com/artiebits/svelte-seo
  https://developers.google.com/search/docs/advanced/appearance/overview
  https://developers.google.com/search/docs/data-types/article
  https://search.google.com/test/rich-results
  https://ogp.me/
-->
<svelte:head>
<meta property="og:locale" content="uk_UA" />
</svelte:head>
<SvelteSeo
  title="Блог Володимира Лісівки: {frontmatter.title}"
  description={frontmatter.excerpt}
  canonical="{request.permalink}"

  openGraph={{
    type: "article",
    title: "Блог Володимира Лісівки: " + frontmatter.title,
    description: frontmatter.excerpt,
    url: "https://vlisivka.github.io" + request.permalink,
    images: [
      { url: frontmatter.image, alt: 'Ілюстрація до статті' }
    ],
    article: {
      publishedTime: frontmatter.date,
      authors: [ frontmatter.author ],
      //TODO: tags: ["Tag A", "Tag B", "Tag C"],
    },
  }}

  twitter={{
    //TODO: site: "@username",
    title: "Блог Володимира Лісівки: " + frontmatter.title,
    description: frontmatter.excerpt,
    image: frontmatter.image,
    imageAlt: "Ілюстрація до статті"
  }}

  jsonLd={{
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://vlisivka.github.io" + request.permalink,
      },
      "headline": "Блог Володимира Лісівки: " + frontmatter.title,
      "image": [ frontmatter.image ],
      "datePublished": frontmatter.date,
      "author": {
        "@type": "Person",
        "name": frontmatter.author
      },
      "publisher": {
        "@type": "Person",
        "name": "Володимир М. Лісівка",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vlisivka.github.io/public/images/thumbs/vlisivka-photo_t.png"
        }
      }
  }}
/>

<a href="/">&LeftArrow; На головну</a>

<div class="title">
  <h1>{frontmatter.title}</h1>
  {#if frontmatter.author}<small>Автор: {frontmatter.author}</small> <br/>{/if}
  {#if frontmatter.date}<small>Опубліковано: <Time timestamp={frontmatter.date} format="dddd, D MMMM YYYY H:mm Z" /></small> <br/>{/if}
</div>

{#if html}
  {@html html}
{:else}
  <h1>Oops!! Markdown not found!</h1>
{/if}
