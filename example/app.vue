<template>
  <div class="example-container">
    <div class="example-item">
      <label>XG~GD</label>
      <gsr-skillbar :items="itemsA" />
    </div>
    <div class="example-item">
      <label>V</label>
      <gsr-skillbar :items="itemsB" />
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        itemsA: [
          ['#FFFFFF', '#FFFFFF'],
          ['#FFFF99', '#FFFF99'],
          ['#FFFF99', '#FFFFFF'],
          ['#FFFF00', '#FFFF00'],
          ['#FFFF00', '#FFFFFF'],
          ['#33FF00', '#33FF00'],
          ['#33FF00', '#FFFFFF'],
          ['#3366FF', '#3366FF'],
          ['#3366FF', '#FFFFFF'],
          ['#FF00FF', '#FF00FF'],
          ['#FF00FF', '#FFFFFF'],
          ['#FF0000', '#FF0000'],
          ['#FF0000', '#FFFFFF'],
          ['#DD8844', '#DD8844'],
          ['silver', 'silver'],
          ['#FFD700', '#FFD700']
        ],
        itemsB: [
          ['#808080', '#808080'],
          ['#FF8080', '#FF8080'],
          ['#FF00FF', '#FF00FF'],
          ['#80C0FF', '#80C0FF'],
          ['#00FFFF', '#00FFFF'],
          ['#00FF00', '#00FF00'],
          ['#FFFF00', '#FFFF00'],
          ['#FFC000', '#FFC000'],
          ['#FF0000', '#FF0000'],
          ['#C0C0C0', '#C0C0C0'],
          ['#FF8000', '#FF8000']
        ]
      }
    }
  }
</script>

<style>
  @reset-global pc;

  html, body {
    size: 100%;
    display: flex;
    align-items: center;
  }
  
  @component-namespace example {
    @c container {
      size: 100% 120px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    @c item {
      size: 50% 64px;
      margin: auto;
      display: flex;
      align-items: center;

      & label {
        width: 5rem;
        display: block;
      }
    }
  }
</style>
