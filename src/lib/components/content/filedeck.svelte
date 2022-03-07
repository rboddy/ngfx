<script>
  import Filetable from "./filetable.svelte";
  import UploadRow from "./uploadRow.svelte";
  import { getStorage, ref, getMetadata, listAll } from "firebase/storage";
  import { userId } from "../../../stores/authStore";
  import { onMount } from "svelte";

  const storage = getStorage();
  const refs = ["work", "clients", "pictures", "misc"];
  let files = {
    work: [],
    clients: [],
    pictures: [],
    misc: [],
  };

  onMount(() => {
    let user = "";
    userId.subscribe((value) => {
      user = value;
      refs.forEach((folder) => {
        let reference = ref(storage, `${user}/${folder}`);
        listAll(reference)
          .then((res) => {
            res.items.forEach((itemRef) => {
              getMetadata(itemRef).then((metaData) => {
                files[folder] = [...files[folder], metaData];
              });
            });
          })
          .catch((error) => {});
      });
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
      data-bs-parent="#fileAccordion"
    >
      <div class="accordion-body">
        <UploadRow folder="work" />
        {#if files.work.length > 0}
          <Filetable data={files.work} folder="work" />
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
      data-bs-parent="#fileAccordion"
    >
      <div class="accordion-body">
        <UploadRow folder="clients" />
        {#if files.clients.length > 0}
          <Filetable data={files.clients} folder="clients" />
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
      data-bs-parent="#fileAccordion"
    >
      <div class="accordion-body">
        <UploadRow folder="pictures" />
        {#if files.pictures.length > 0}
          <Filetable data={files.pictures} folder="pictures" />
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
      data-bs-parent="#fileAccordion"
    >
      <div class="accordion-body">
        <UploadRow folder="misc" />
        {#if files.misc.length > 0}
          <Filetable data={files.misc} folder="misc" />
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
