<script>
  import FileDeck from "$lib/components/content/filedeck.svelte";
  import { onMount } from "svelte";
  import { userId, isLoggedIn } from "../stores/authStore";

  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { goto } from "$app/navigation";

  const auth = getAuth();
  onMount(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        userId.update(() => uid);
        isLoggedIn.update(() => true);
      } else {
        userId.update(() => "");
        isLoggedIn.update(() => false);
        goto("/login");
      }
    });
  });
</script>

<FileDeck />
