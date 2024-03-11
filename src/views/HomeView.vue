<template>
  <div>
      <hello-world></hello-world>
      <tabla></tabla>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import Tabla from '../components/Tabla.vue'
  export default {
    name: 'Home',

    components: {
      HelloWorld,Tabla
    },
  }
</script>
