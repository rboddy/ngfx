<script>
    // If you are using JavaScript/ECMAScript modules:
    import Dropzone from "dropzone";
import { onMount } from "svelte";
import { userId } from "../../../stores/authStore"
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

export let folder;

    onMount(() => {

        let path = '';
        userId.subscribe((value) => {
            path = `${value}/${folder}/`
        })

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