<script>
  import Image from "$lib/components/Image.svelte";
  import Footer from "$lib/components/Footer.svelte";
  let thumbs = import.meta.glob("/static/thumb/*.webp", { eager: true });
</script>

<h1 class="text-2xl font-bold text-center my-4">welcome.</h1>

<div class="inner my-1 grid gap-2 grid-cols-2 md:grid-cols-4">
  {#each Object.keys(thumbs) as thumb}
    <Image {thumb}/>
  {/each}
</div>

<Footer/>