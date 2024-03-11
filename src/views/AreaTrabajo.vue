<template>
    <div>
      <div class="gradient-backgroundAT">
        <v-app-bar
      app
      color="red lighten-1"
      dark
    >
      <v-menu v-model="menu" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link @click="cerrarS">Cerrar Sesión</v-list-item>
        </v-list>
      </v-menu>
      
    </v-app-bar>
          <div class="textcen">
            <h1 class="text-h1 white--text">¡Hola!</h1>
            <h1 class="text-h3 white--text">Bienvenido {{ $store.state.usuario }}</h1>
            <h1 class="text-h3 white--text">Su contraseña es: {{ $store.state.contraseña }} </h1>
          </div>
         

      </div>
    </div>
</template>

<script>
import Tabla from '../components/Tabla.vue'
    export default{
        name:'AreaT',
        methods: {
            cerrarS(){
                this.$router.push('/login');
            }
        },
        components:{
          Tabla,
        }
    }
</script>

<style scoped>
  .gradient-backgroundAT {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top, #ffffff 0%, #ffb8b8 15%, #db5252 100%);
  overflow: hidden;
  position: relative;
}
  .textcen{
    text-align: center;
  }

  .centradobtn{
    margin: 70px;
  display: flex;
  justify-content: center;
  height: 100vh;
}

.espaciado {
  margin-right: 10px; /* Ajusta según sea necesario */
  width: 200px;
}

.espaciado :hover{
        background-color:rgb(158, 30, 30) !important;
        width: 200px;
        height: 40px;
        color: white;
    }

    .margent{
      margin: 20px;
    }
</style>