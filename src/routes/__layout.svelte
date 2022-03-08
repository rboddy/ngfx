<script>
  import Navbar from "$lib/components/layout/navbar.svelte";
  import Header from "$lib/components/layout/header.svelte";
  import { initializeApp } from "firebase/app";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCk_G2jEhyeZrIqdX7L2U8oUfq7S2januM",
    authDomain: "ngfx-dd48b.firebaseapp.com",
    projectId: "ngfx-dd48b",
    storageBucket: "ngfx-dd48b.appspot.com",
    messagingSenderId: "599552784740",
    appId: "1:599552784740:web:7caf3d8e940d6a124b6271",
  };

  initializeApp(firebaseConfig);
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
