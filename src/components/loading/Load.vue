<template>
  <div class="load-container" v-show="showFlag">
    <div class="mask"></div>
    <img src="./box.png" alt="">
    <img class="spin" src="./loading.png">
  </div>
</template>

<script>
export default{
  data() {
    return {
      showFlag: false,
    };
  },
  methods: {
    show() {
      this.showFlag = true;
    },
    hide() {
      this.showFlag = false;
    },
  },
};

</script>

<style scoped lang="scss">

  .load-container{

  .mask{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:300;
  }

    img{
      display:inline-block;
      width:0.36rem;
      height:0.36rem;
      position:fixed;
      top:50%;
      left:50%;
      margin-top:-0.18rem;
      margin-left:-0.18rem;
      z-index:400;
    }

    .spin {
      animation:load 0.8s linear infinite;
    }

  }

  @keyframes load{
    0%{
      transform:rotate(0deg);
    }
    100%{
      transform:rotate(360deg);
    }
  }

</style>
