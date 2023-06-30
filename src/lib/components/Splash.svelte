<script>
    import { fade } from "svelte/transition";
    import { visible, image } from "$lib/store";

    function close() {
        $visible = false;
    }
</script>

<div
    class="splash
    flex justify-center items-center
    fixed top-0 left-0"
    on:click|capture|self={close}
    on:keypress|capture|self={close}
    transition:fade
>
    {#if $image !== "null"}
        <img
            class="rounded-md"
            src={$image.replace("thumb", "img")}
            alt="bro"
        />
    {/if}
</div>

<style>
    div.splash {
        height: 100dvh;
        width: 100dvw;
        background-color: #0000009f;
    }
    @media (max-width: 768px) {
        img {
            width: 85%;
        }
    }
    @media (min-width: 768px) {
        img {
            height: 60%;
        }
    }
</style>
