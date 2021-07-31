<script>
    import {getEventsAction} from './utils';
    const events = getEventsAction();
</script>

<div class:card={1} use:events {...$$restProps} style="height:100%">
{#if $$slots.header}
  <div>
    <slot name="thumb"></slot>
  </div>
{/if}
{#if $$slots.thumb}
  <header>
    <slot name="header"></slot>
  </header>
{/if}
    <slot></slot>
{#if $$slots.footer}
  <footer>
    <slot name="footer"></slot>
  </footer>
{/if}
</div>