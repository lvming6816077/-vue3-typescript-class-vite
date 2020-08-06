<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="addCount">count is: {{ count }}</button>

  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';


class HelloNewWorld extends Vue {
  private count:number = 0;

  private addCount():void{
    this.count++
  }
}

export default Options({
  name: 'HelloNewWorld',
  props:{
    msg:String
  },
  inheritAttrs: false,
})(HelloNewWorld)

</script>
