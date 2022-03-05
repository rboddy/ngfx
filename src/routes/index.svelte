<script>
  import Header from "$lib/components/layout/header.svelte";
  import FileDeck from "$lib/components/content/filedeck.svelte";
  import Navbar from "$lib/components/layout/navbar.svelte";
</script>

<Navbar />
<Header text="Next Gen File Explorer" />
<FileDeck />

<style>
  :global(body) {
    font-family: "Open Sans", sans-serif;
    width: 75%;
    margin: 0 auto;
    background-color: #f7f7f7;
  }
</style>
