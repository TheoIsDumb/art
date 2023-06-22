<script>
  import "$lib/styles/app.css";
  import "@fontsource/inter-tight";

  import Splash from "$lib/components/Splash.svelte";
  import { visible } from '$lib/store';

  import { fade } from "svelte/transition";
  export let data;
</script>

{#key data}
  <div in:fade={{ duration: 500 }} out:fade>
    <slot />
  </div>
{/key}

{#if $visible}
  <Splash/>
{/if}