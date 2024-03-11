<template>
    <div>
        <div class="gradient-background center-container">
           
          <login-component-vue></login-component-vue>
    </div>
    
    </div>
</template>

<script>
import LoginComponentVue from '@/components/LoginComponent.vue';
import Permisos from '@/components/Permisos.vue'
    export default{
        name: 'Login',
        components:{
            LoginComponentVue,Permisos
        },
    }

</script>
<style scoped>
.gradient-background {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to left, #ffffff 0%, #ffb8b8 25%, #db5252 100%);
  overflow: hidden;
  position: relative;
}
.center-container {
    margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
</style>
