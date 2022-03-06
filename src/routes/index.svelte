<script>
  import FileDeck from "$lib/components/content/filedeck.svelte";

  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { goto } from "$app/navigation";

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
      goto("/login");
    }
  });
</script>

<FileDeck />
