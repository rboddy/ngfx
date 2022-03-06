<script>
  import Filetable from "./filetable.svelte";
  import { getStorage, ref, getMetadata, listAll } from "firebase/storage";

  const storage = getStorage();
  // const workFilesRef = ref(storage, 'work')
  const refs = ['work', 'clients', 'pictures', 'misc'];
  let files = {
    work: [],
    clients: [],
    pictures: [],
    misc: []
  };

  refs.forEach((folder) => {
    let reference = ref(storage, folder);
    listAll(reference)
    .then((res) => {
      res.items.forEach((itemRef) => {
        getMetadata(itemRef).then(metaData => {
        files[folder] = [...files[folder], metaData]
      })
    });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
  })

</script>

<div class="accordion accordion-flush" id="fileAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
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
    </h2>
    <div
      id="flush-collapseOne"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
    >
      <div class="accordion-body">
        <Filetable data={files.work}/>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
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
    </h2>
    <div
      id="flush-collapseTwo"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingTwo"
    >
      <div class="accordion-body">
        <Filetable data={files.clients}/>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
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
    </h2>
    <div
      id="flush-collapseThree"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
    >
      <div class="accordion-body">
        <Filetable data={files.pictures}/>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
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
    </h2>
    <div
      id="flush-collapseFour"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingThree"
    >
      <div class="accordion-body">
        <Filetable data={files.misc}/>
      </div>
    </div>
  </div>
</div>
