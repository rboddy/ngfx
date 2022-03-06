<script>
  import { goto } from "$app/navigation";
  import { getAuth, signOut } from "firebase/auth";

  const auth = getAuth();

  function logout() {
    signOut(auth)
      .then(() => {
        goto("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  }
</script>

<ul class="nav justify-content-end bg-dark">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" target="_blank" href="https://ryanboddy.net"
      >My Website</a
    >
  </li>

  <li class="nav-item">
    <a
      class="nav-link"
      on:click|preventDefault={logout}
      target="_blank"
      href="/">Sign Out</a
    >
  </li>
</ul>
