<template>
	<div class="wrap" v-if="showWrap" :class="showContent ?'fadein':'fadeout'">{{text}}</div>
</template>

<style scoped>
.wrap{
	text-align: center;
	line-height: 50px;
	width:30%;
	height: 50px;
    position: fixed;
    left: 82%;
    top:4%;
    background: green;
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%,-50%);
    color:#fff;
  }
  .fadein {
    animation: animate_in 0.25s;
  }
  .fadeout {
    animation: animate_out 0.25s;
    opacity: 0;
  }
  @keyframes animate_in {
    0% {
      opacity: 0.3;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes animate_out {
    0% {
      opacity: 0.3;
    }
    100%{
      opacity: 0;
    }
  }
</style>