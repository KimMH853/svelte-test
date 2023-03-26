<script>
  export let data;

  const { testData } = data;
  console.log(data);
</script>

<svelte:head>
  <title>Board</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  {#each testData as item}
    <p>{item.id}</p>
    <p>{item.title}</p>
    <p>{item.create_date}</p>
  {/each}
</div>

<style>
  .text-column {
    width: 80%;
    display: flex;
  }
</style>
