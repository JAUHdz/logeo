<template>
    <div>
        <v-row justify="end" class="fill-height margen">
    <v-col cols="12" sm="8" md="4">
      <v-card elevation="24" color="red lighten-1"> 
        <v-card-title class="text-h6 white--text">Login</v-card-title>

        <v-card style="padding: 16px;">
            <v-text-field v-model="usuario" label="Nombre de Usuario"></v-text-field>
            <v-text-field v-model="password" label="Contraseña" type="password"></v-text-field>
            <v-btn @click.prevent="login" class="IS">Iniciar Sesión</v-btn>
        </v-card>

      </v-card>
    </v-col>
  </v-row>
    </div>
</template>

<script>
    export default{
        name:'LoginComponent',
        data:{
            usuario:null,
            password:null
        },
        methods: {
            login(){
                if(this.password==null || this.usuario==null && this.usuario==null || this.password==null  ){
                    alert("TIENE QUE INGRESAR UN USUARIO Y CONTRASEÑA")
                }else{
                    this.$router.push('/area-trabajo');
                this.$store.state.usuario = this.usuario;
                this.$store.state.contraseña = this.password;
                this.$store.dispatch('administracionPermisos');
                console.log(this.$store.state.mostrariconos)
                }
            }
        },
    }
</script>
<style>
    .margen{
        margin: 3px;
        margin-right: 50px;
        text-align: center;
    }
   .IS:hover{
        background-color:rgb(143, 17, 17) !important;
        color: white;
    }
</style>