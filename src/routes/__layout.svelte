<script>
  import Navbar from "$lib/components/layout/navbar.svelte";
  import Header from "$lib/components/layout/header.svelte";
  import App from "./fb";
</script>

<Navbar />
<Header text="Next Gen File Explorer" />
<slot />

<style>
  :global(body) {
    font-family: "Open Sans", sans-serif;
    width: 75%;
    margin: 0 auto;
    background-color: #f7f7f7;
    border: 1px solid black;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    :global(body) {
      width: 100%;
    }
  }
</style>
