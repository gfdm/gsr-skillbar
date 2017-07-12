<template>
  <div class="example-container">
    <div class="example-item">
      <label>XG~GD</label>
      <gsr-skillbar :items="itemsA" />
    </div>
    <div class="example-item">
      <label>V</label>
      <gsr-skillbar :items="itemsB" :animation="false" />
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        itemsA: [
          { name: 'XG', color: ['#3366FF', '#FFFFFF'] },
          { name: 'XG2', color: ['#FF0000', '#FFFFFF'] },
          { name: 'XG3', color: ['#FFFFFF', '#FFFFFF'] },
          { name: 'GD', color: ['#FF0000', '#FFFFFF'] },
          { name: 'GDOD', color: ['#DD8844', '#DD8844'] }
        ],
        itemsB: [
          { name: 'V5', color: ['#80C0FF', '#80C0FF'] },
          { name: 'V6', color: ['#FFFF00', '#FFFF00'] },
          { name: 'V7', color: ['#00FF00', '#00FF00'] },
          { name: 'V8', color: ['#FF0000', '#FF0000'] }
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
