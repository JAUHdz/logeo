<template>
    <div>
        <v-row justify="start" class="fill-height m">
    <v-col cols="12" sm="8" md="7">
        <v-toolbar>
            <v-tabs
            dark
            background-color="red lighten-1"
            class="text-h6 white--text"
            grow
            v-model="selectedTab" @change="cambiarTab"
            >
            <v-tab :key="1">
                Super Administrador
            </v-tab>
            <v-tab-item>
                <v-card>
                <v-card-text>
                    <v-card-title>Permisos para el SA</v-card-title>
                   <h5>PERMISO DE CONSULTA</h5> <br>
                   <h5>PERMISO DE INSERCION</h5> <br>
                   <h5>PERMISO DE EDICIÓN</h5> <br>
                   <h5>PERMISO DE ELIMINACION</h5> <br>
                   <h5>PERMISO DE IMPRESION</h5> <br>
                </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab :key="2">
                Producción A
            </v-tab>
            <v-tab-item>
                <v-card>
                <v-card-text>
                    <v-card-title>Permisos para Producción A</v-card-title>
                    <!-- Contenido de la descripción de permisos para Item Two -->
                    <h5>PERMISO DE CONSULTA</h5> <br>
                   <h5>PERMISO DE INSERCION</h5> <br>
                   <h5>PERMISO DE IMPRESION</h5> <br>
                </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab :key="3">
                Producción B
            </v-tab>
            <v-tab-item>
                <v-card>
                <v-card-text>
                    <v-card-title>Permisos para Producción B</v-card-title>
                    <!-- Contenido de la descripción de permisos para Item Three -->
                    <h5>PERMISO DE CONSULTA</h5> <br>
                   <h5>PERMISO DE INSERCION</h5> <br>
                </v-card-text>
                </v-card>
            </v-tab-item>

            <v-tab :key="4">
                Producción C
            </v-tab>
            <v-tab-item>
                <v-card>
                <v-card-text>
                    <v-card-title>Permisos para Producción C</v-card-title>
                    <!-- Contenido de la descripción de permisos para Item Four -->
                    <h5>PERMISO DE CONSULTA</h5> <br>
                </v-card-text>
                </v-card>
            </v-tab-item>

            </v-tabs>
        </v-toolbar>
    </v-col>
  </v-row>
    </div>
</template>

<script>
    export default{
        data:{
            selectedTab: null,
            tu1:null,
        },
        name:'Permisos',
        methods:{
            cambiarTab() {
      // Lógica que se ejecutará al cambiar la pestaña
      // Puedes asignar valores diferentes a 'tu1', 'tu2', 'tu3', 'tu4' aquí
      if (this.selectedTab === 0) {
        this.tu1 = 'SA';
      } else if (this.selectedTab === 1) {
        this.tu1 = 'PA';
      }else if (this.selectedTab === 2) {
        this.tu1 = 'PB';
      }else if (this.selectedTab === 3) {
        this.tu1 = 'PC';
      }
      console.log(this.tu1);
      this.$store.state.tipouser = this.tu1
      console.log("Usuario"+this.$store.state.tipouser);
      
      // Agrega más condiciones según sea necesario para otros tabs
    },
        }
    }
</script>

<style>
    .m{
        margin-left: 30px;
        text-align: center;
      line-height: 200px;
    }
</style>