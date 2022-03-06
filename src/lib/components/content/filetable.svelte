<script>
    export let data;

    function bytesToSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        if (bytes === 0) return 'n/a'
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
        if (i === 0) return `${bytes} ${sizes[i]})`
        return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
    }
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
        <td>Download</td>
      </tr>
      {/each}
    </tbody>
</table>