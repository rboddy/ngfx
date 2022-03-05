<script>
  export let text;
</script>

<div class="header">
  <h1>{text}</h1>
</div>

<style>
  .header {
    height: 150px;
    width: 100%;
    display: flex;
    align-items: center;
    background-image: linear-gradient(
      45deg,
      hsl(188deg 85% 35%) 0%,
      hsl(194deg 100% 36%) 11%,
      hsl(199deg 100% 40%) 22%,
      hsl(209deg 70% 52%) 33%,
      hsl(232deg 63% 64%) 44%,
      hsl(269deg 56% 62%) 56%,
      hsl(305deg 52% 55%) 67%,
      hsl(324deg 80% 55%) 78%,
      hsl(332deg 100% 49%) 89%,
      hsl(344deg 100% 50%) 100%
    );
  }
  .header > h1 {
    text-align: center;
    width: 100%;
    font-family: "Bebas Neue", cursive;
    font-size: 50px;
  }
</style>
