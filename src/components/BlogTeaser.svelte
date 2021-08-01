<script>
  import Card from './Card.svelte';

  export let blog;
  export let helpers;
</script>

<div style="width: 30rem; padding: 1rem; max-width: 30rem;">
<Card style="height: 100%; border-radius: 1rem;">
  <div slot="thumb"><img src={blog.frontmatter.thumb} alt="Thumbnail for blog post" style="width: 100%"/></div>
  <div slot="header"><h4><a href={helpers.permalinks.blog({ slug: blog.slug })}>{blog.frontmatter.title}</a></h4></div>
  <p>{blog.frontmatter.excerpt}</p>
</Card>
</div>
