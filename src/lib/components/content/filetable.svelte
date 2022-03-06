<script>
    import { getStorage, ref, getDownloadURL } from "firebase/storage";

    function bytesToSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        if (bytes === 0) return 'n/a'
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
        if (i === 0) return `${bytes} ${sizes[i]})`
        return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
    }

    const storage = getStorage();

    function downloadFile(path) {
        getDownloadURL(ref(storage, path))
            .then((url) => {
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();
            })
            .catch((error) => {
                console.error(error)
            });
    }

  export let data;
  export let folder;
</script>

<table class="table">
    <thead>
      <tr>
        <th style="width: 25%">File Name</th>
        <th style="width: 25%">Uploaded</th>
        <th style="width: 25%">File Size</th>
        <th style="width: 25%">Actions</th>
      </tr>
    </thead>
    <tbody>
        {#each data as { name, timeCreated, size }}
      <tr>
        <th scope="row">{name}</th>
        <td>{timeCreated}</td>
        <td>{bytesToSize(size)}</td>
        <td><button class="btn btn-primary" on:click={() => downloadFile(`${folder}/${name}`)}>Download</button></td>
      </tr>
      {/each}
    </tbody>
</table>