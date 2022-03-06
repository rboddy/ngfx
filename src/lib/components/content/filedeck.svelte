<script>
  import Filetable from "./filetable.svelte";
  import { getStorage, ref, getMetadata, listAll } from "firebase/storage";

  const storage = getStorage();
  // const workFilesRef = ref(storage, 'work')
  const refs = ["work", "clients", "pictures", "misc"];
  let files = {
    work: [],
    clients: [],
    pictures: [],
    misc: [],
  };

  refs.forEach((folder) => {
    let reference = ref(storage, folder);
    listAll(reference)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getMetadata(itemRef).then((metaData) => {
            files[folder] = [...files[folder], metaData];
          });
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  });
</script>

<div class="accordion accordion-flush" id="fileAccordion">
  <div class="accordion-item">
    <h5 class="accordion-header" id="flush-headingOne">
      <button
        class="accordion-button collapsed fw-bold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
        Work Files
      </button>
    </h5>
    <div
      id="flush-collapseOne"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
    >
      <div class="accordion-body">
        {#if files.work.length > 0}
          <Filetable data={files.work} folder="work" />
        {:else}
          <h5>Nothing here yet!</h5>
        {/if}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h5 class="accordion-header" id="flush-headingTwo">
      <button
        class="accordion-button collapsed fw-bold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTwo"
        aria-expanded="false"
        aria-controls="flush-collapseTwo"
      >
        Client Files
      </button>
    </h5>
    <div
      id="flush-collapseTwo"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingTwo"
    >
      <div class="accordion-body">
        {#if files.clients.length > 0}
          <Filetable data={files.clients} folder="clients" />
        {:else}
          <h5>Nothing here yet!</h5>
        {/if}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h5 class="accordion-header" id="flush-headingOne">
      <button
        class="accordion-button collapsed fw-bold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree"
      >
        Pictures
      </button>
    </h5>
    <div
      id="flush-collapseThree"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
    >
      <div class="accordion-body">
        {#if files.pictures.length > 0}
          <Filetable data={files.pictures} folder="pictures" />
        {:else}
          <h5>Nothing here yet!</h5>
        {/if}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h5 class="accordion-header" id="flush-headingThree">
      <button
        class="accordion-button collapsed fw-bold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseFour"
        aria-expanded="false"
        aria-controls="flush-collapseFour"
      >
        Misc Files
      </button>
    </h5>
    <div
      id="flush-collapseFour"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingThree"
    >
      <div class="accordion-body">
        {#if files.misc.length > 0}
          <Filetable data={files.misc} folder="misc" />
        {:else}
          <h5>Nothing here yet!</h5>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .accordion-button:focus {
    box-shadow: none;
    border-color: rgba(0, 0, 0, 0.125);
  }
</style>
