<script>
  import A from "$lib/components/A.svelte";
</script>

<div class="inner my-0 flex flex-col items-center justify-center">
  <A />

  <a
    href="gallery"
    class="bg-white px-4 py-1 rounded shadow-lg
    hover:bg-blue-200 hover:scale-110 transition-all duration-500"
  >
    Go!
  </a>
</div>

<style>
  .inner {
    height: 100dvh;
  }
</style>
