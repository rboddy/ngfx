<script>
    // If you are using JavaScript/ECMAScript modules:
    import Dropzone from "dropzone";
import { onMount } from "svelte";

    onMount(() => {
        let myDropzone = new Dropzone("#my-form");
        myDropzone.on("addedfile", upload => {
        console.log(upload);
    });
    });
</script>

<!-- Example of a form that Dropzone can take over -->
<form action="/target" class="dropzone" id="my-form"></form>

<style>
    .dropzone {
        border: 2px dashed black;
    }
</style>