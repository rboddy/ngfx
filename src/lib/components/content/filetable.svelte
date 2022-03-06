<script>
    export let data;
</script>

<table class="table">
    <thead>
      <tr>
        <th scope="col">File Name</th>
        <th scope="col">Uploaded</th>
        <th scope="col">Handle</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
        {#each data as { name, timeCreated, size }}
      <tr>
        <th scope="row">{name}</th>
        <td>{timeCreated}</td>
        <td>{size}</td>
        <td>Download</td>
      </tr>
      {/each}
    </tbody>
</table>