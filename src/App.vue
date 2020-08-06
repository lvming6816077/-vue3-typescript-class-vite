<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="tsx" />
  <HelloNewWorld msg="class-component" />
</template>

<script>
import HelloWorld from './components/HelloWorld.tsx'
import HelloNewWorld from './components/HelloNewWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloNewWorld
  }
}
</script>
