require('dotenv').config();

const remarkFrontmatter = require('remark-frontmatter');
const remarkExtractFrontmatter = require('remark-extract-frontmatter');
const yaml = require('yaml');
const remarkSlug = require('remark-slug');
const remarkHtml = require('remark-html');
const rawHtml = require('rehype-raw');
const remarkMath = require('remark-math');
const remarkMermaid = require('remark-mermaid-dataurl');
const remarkGfm = require('remark-gfm');
const remarkFootnotes = require('remark-footnotes');
const remarkHighlight = require('remark-highlight.js');
const { default: remarkEmbedder } = require('@remark-embedder/core');
const { default: remarkEmbedderOembedTransformer } = require('@remark-embedder/transformer-oembed');
const { default: remarkEmbedderCache } = require('@remark-embedder/cache');
const remark2rehype = require('remark-rehype');
const rehypeMathJax = require('rehype-mathjax');
const rehypeToc = require("@jsdevtools/rehype-toc");
const rehypeStringify = require('rehype-stringify');
const escapeHtml = require('escape-html')

function handleTransformerError({error, url, transformer}) {
  console.log('Error in transformer:', transformer.name, url, error);

  const escaped_error = escapeHtml(error.toString());
  const escaped_url = escapeHtml(url);

  return `<p style="color:red">Не можу вбудувати URL <a href="${escaped_url}">${escaped_url}</a>. <br/>Помилка в трансформері <code>${transformer.name}</code>: <code>${escaped_error}</code></p>`;
}


module.exports = {
  origin: 'https://vlisivka.github.io/', // TODO: update this.
  lang: 'uk',
  srcDir: 'src',
  distDir: 'docs',
  rootDir: process.cwd(),
  build: {},
  prefix: '', // If you want your site to be built within a sub folder within your `distDir` you can use this.
  server: {},
  props: {
    hydration: 'hybrid',
    compress: false,
  },
  debug: {
    stacks: false, // output details of the stack consolidation process.
    hooks: false, // outputs the details of each hook as they are run.
    performance: false, // outputs a full performance report of how long it took to run each page.
    build: false, // gives additional details about the build process.
    automagic: false,
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncomment this hook to disabled writing your files during build.
  },
  plugins: {
    '@elderjs/plugin-markdown': {
      routes: ['blog'],
      useTableOfContents: true,
      remarkPlugins: [
        remarkFrontmatter,
        [remarkExtractFrontmatter, { name: 'frontmatter', yaml: yaml.parse }],
        remarkMermaid,
        remarkHighlight,
        remarkGfm,
        remarkFootnotes,
        [remarkEmbedder, {
          remarkEmbedderCache,
          transformers: [
            [ remarkEmbedderOembedTransformer, { params: {maxwidth: 640, maxheight: 480} } ],
          ],
          handleError: handleTransformerError,
          }
        ],
        remarkSlug,
        [remarkHtml, {sanitize: false}],
        remarkMath,
        [remark2rehype, {allowDangerousHtml: true}],
        rawHtml,
        rehypeMathJax,
        rehypeToc,
        rehypeStringify,
      ],
    },
    '@elderjs/plugin-browser-reload': {
      // this reloads your browser when nodemon restarts your server.
      port: 3080,
      reload: false, // if you are having issues with reloading not working, change to true.
    },
    '@elderjs/plugin-seo-check': {
      display: ['errors']//, 'warnings'], // If the errors are too verbose remove 'warnings'
      //writeLocation: './report.json', // if you want to write a report of errors
    },
    '@elderjs/plugin-sitemap': {
      origin: 'https://failfast.org.ua', // the https://yourdomain.com
      exclude: [], // an array of permalinks or permalink prefixes. So you can do ['500'] and it will match /500**
      routeDetails: {
        home: {
          priority: 0.8,
          changefreq: 'monthly',
        },
        blog: {
          priority: 1.0,
          changefreq: 'monthly',
        }
      }, // set custom priority and change freq if not it falls back to default
      lastUpdate: {}, // configurable last update for each route type.
    },
  },
  shortcodes: { closePattern: '}}', openPattern: '{{' },
};
