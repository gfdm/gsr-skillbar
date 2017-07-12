<template>
  <div class="gsr-skillbar">
    <div class="gsr-skillbar__container" :class="{ active: animation }">
      <div
        class="gsr-skillbar__item"
        v-for="(item, key) in items"
        :key="key"
        :style="handleStyle(item.color)"
      >
        <span class="gsr-skillbar__item__text">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gsr-skillbar',
    props: {
      items: {
        type: Array,
        default: () => []
      },
      animation: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleStyle (item) {
        const color = item.toString()
        const style = {
          background: [
            `-webkit-linear-gradient(-45deg, ${color})`,
            `linear-gradient(-45deg, ${color})`
          ]
        }

        return style
      }
    }
  }
</script>

<style>
  @component-namespace gsr {
    @c skillbar {
      width: 100%;

      @d container {
        position: relative;
        size: 100% 10px;
        border: 1px solid #DDD;
        display: flex;
        &.active {
          &::after {
            content: "";
            position: absolute;
            size: 100%;
            background-image: linear-gradient(45deg,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0) 25%,
              rgba(0, 0, 0, .2) 25%,
              rgba(0, 0, 0, .2) 50%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0) 75%,
              rgba(0, 0, 0, .2) 75%);
            background-size: 10px 10px;
            animation: movestripe 1.2s linear infinite;
          }
        }
      }

      @d item {
        size: 100%;

        @d text {
          font-size: 12px 10px;
          color: inherit;
          text-align: center;
          text-shadow: 1px 1px 0 #FFF;
          display: block;
        }
      }
    }
  }

  @keyframes movestripe {
    0% {
    background-position: 0px 0px;
    }
    100% {
      background-position: 20px 0px;
    }
  }
</style>
