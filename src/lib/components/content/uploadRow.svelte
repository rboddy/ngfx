<script>
    // If you are using JavaScript/ECMAScript modules:
    import Dropzone from "dropzone";
import { onMount } from "svelte";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { userId } from "../../../stores/authStore"
import { get } from "svelte/store";

const storage = getStorage();

export let folder;

    onMount(() => {

        const path = `${get(userId)}/${folder}`;

        let myDropzone = new Dropzone(`#my-form-${folder}`);
        myDropzone.on("addedfile", upload => {
            let storageRef = ref(storage, `${path}/${upload.name}`);
            uploadBytes(storageRef, upload).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    });
    });
</script>

<!-- Example of a form that Dropzone can take over -->
<form action="/target" class="dropzone" id='my-form-{folder}'></form>

<style>
    .dropzone {
        border: 2px dashed black;
    }
</style>