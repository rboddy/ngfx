<script>
  import Navbar from "$lib/components/layout/navbar.svelte";
  import Header from "$lib/components/layout/header.svelte";
  import { isLoggedIn } from "../stores/authStore";
  import App from "./fb";

  import { onMount } from "svelte";

  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { goto } from "$app/navigation";

  onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Welcome to NGFX");
        isLoggedIn.update(() => true);
      } else {
        isLoggedIn.update(() => false);
        goto("/login");
      }
    });
  });
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
