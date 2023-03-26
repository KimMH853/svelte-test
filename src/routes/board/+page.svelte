<script>
  import { onMount } from "svelte";
  export let data;
  console.log(data);
  let { testData, size } = data.testData;

  //let totalPages = parseInt(testData.length / 15);
  let totalPages = Math.ceil(size / 15);
  let currentPage = 1;
  let pages = [];

  const createPagesArray = (total) => {
    let arr = [];
    for (let i = 1; i <= total; i++) {
      arr.push(i);
    }

    return arr;
  };

  const changePage = async (page) => {
    const pageRes = await fetch(
      `http://localhost:3000/board/list?page=${page}`
    );
    data = await pageRes.json();
    testData = data.testData;
    currentPage = page;
  };
  pages = createPagesArray(totalPages);
  console.log(totalPages);
  console.log(pages);
</script>

<svelte:head>
  <title>Board</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  <div class="category">
    <p class="number">번호</p>
    <p class="title">제목</p>
    <p class="date">등록일자</p>
  </div>
  {#each testData as item}
    <div class="container">
      <p>{item.id}</p>
      <p>{item.title}</p>
      <p>{item.create_date}</p>
    </div>
  {/each}
</div>

<ul class="pagination">
  {#each pages as page}
    <li>
      <button
        class={page === currentPage ? "active" : ""}
        on:click={() => changePage(page)}>{page}</button
      >
    </li>
  {/each}
</ul>

<style>
  .text-column {
    width: 80%;
  }

  .category {
    display: flex;
    justify-content: space-between;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }

  .pagination {
    list-style: none;
    display: flex;
    justify-content: center;
  }
  .active {
    background: black;
    color: white;
  }
</style>
