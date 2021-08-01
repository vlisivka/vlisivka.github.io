<script>
    import {getEventsAction} from './utils';
    const events = getEventsAction();
</script>

<div class:card={1} use:events {...$$restProps}>
{#if $$slots.thumb}
  <div style="text-align: center;">
    <slot name="thumb"></slot>
  </div>
{/if}
{#if $$slots.header}
  <header style="text-align: center;">
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