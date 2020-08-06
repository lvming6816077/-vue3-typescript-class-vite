

import { defineComponent } from 'vue';


export default defineComponent({

  name: 'HelloWorld',
  props:['msg'],
  data(){
    return {
      count: 1
    }
  },
  methods:{
    addCount():void{
      this.count++
    }
  },
  render(){
    return (
      <>
        <h1>{ this.msg }</h1>
        <button onClick={this.addCount}>count is: { this.count }</button>

      </>
    )
  }
});

