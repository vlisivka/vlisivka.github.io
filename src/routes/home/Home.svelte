<script>
  import BlogTeaser from '../../components/BlogTeaser.svelte';
  import SvelteSeo from "svelte-seo";
  export let data, helpers;
</script>

<style>
  .banner {
    padding: 1rem 2rem;
    background: #eee;
    border-radius: 2rem;
    margin-bottom: 1rem;
    align: center;
  }
  .entries {
    display: grid;
    grid-template-columns: 1fr;
    margin: 3rem 0;
    align-items: stretch;
  }

  @media (min-width: 768px) {
    .entries {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 3rem 0;
    }
    :global(.entries .entry) {
      margin-right: 1rem;
    }
  }

  :global(.entry) {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    margin-bottom: 1rem;
    background: white;
  }
  .about {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .hydrate {
      display: grid;
      grid-template-columns: 80% 20%;
    }
  }

  .hooks {
    display: grid;
    grid-template-columns: 100%;
  }

  @media (min-width: 768px) {
    .hooks {
      grid-template-columns: 50% 50%;
    }
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
  title="Блог Володимира Лісівки"
  description="Персональний блог Володимира Лісівки"
  keywords="лісівка блог"
  canonical="/"
  openGraph={{
    type:"website",
    title:"Блог Володимира Лісівки",
    description:"Персональний блог Володимира Лісівки",
    url:"https://vlisivka.github.io/",
    images: [
      { url: 'https://vlisivka.github.io/public/images/vlisivka-photo.png', alt: 'Фотографія Володимира Лісівки' }
    ]
  }}
  twitter={{
    //site: "@username",
    title: "Блог Володимира Лісівки",
    description: "Персональний блог Володимира Лісівки",
    image: "https://vlisivka.github.io/public/images/vlisivka-photo.jpg",
    imageAlt: "Фотографія Володимира Лісівки"
  }}
/>

<div class="banner">
  <h1>Блог Володимира Лісівки</h1>
</div>

<div class="blog">
  <div class="entries">
    {#each data.markdown.blog as blog}
      <BlogTeaser {blog} {helpers} />
    {/each}
  </div>
</div>
