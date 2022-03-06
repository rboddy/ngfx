<script>
    // If you are using JavaScript/ECMAScript modules:
    import Dropzone from "dropzone";
import { onMount } from "svelte";

export let folder;

    onMount(() => {
        let myDropzone = new Dropzone(`#my-form-${folder}`);
        myDropzone.on("addedfile", upload => {
        console.log(upload);
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