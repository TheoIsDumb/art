<script>
  export let thumb;

  import { visible, image } from '$lib/store'

  function handleClick(thumb) {
    $visible = true;
    $image = thumb.replace("/static", "");
  }
</script>

<img
    class="h-full w-full
    aspect-square object-cover rounded
    transition-all duration-500 shadow
    hover:scale-110"
    src={thumb.replace("/static", "")}
    alt="gallery_image"
    loading="lazy"
    on:click={() => handleClick(thumb)}
    on:keypress={() => handleClick(thumb)}
/>

<style>
  img:hover {
    box-shadow: 0 0 1rem #131313;
  }
</style>