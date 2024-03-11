<template>
    <div>
        <v-img
                class="full-width-image"
                :src="imageSrc"
                cover
            >
            <h1 style="margin-top: 50px; color: white;">INGRESA TUS DATOS</h1>
        </v-img>
        <div>
            <v-col>
          <span>Nombre</span>
        </v-col>
            <v-col>
          <v-text-field
            label="Nombre"
            outlined
            rounded
          ></v-text-field>
        </v-col>
        <v-col>
          <span>Apellido Paterno</span>
        </v-col>
        <v-col>
          <v-text-field
            label="Apellido Paterno"
            outlined
            rounded
          ></v-text-field>
        </v-col>

        <v-col>
          <span>Apellido Materno</span>
        </v-col>
            <v-col>
          <v-text-field
            label="Apellido Materno"
            outlined
            rounded
          ></v-text-field>
        </v-col>
        <v-col>
          <span>Correo Electronico</span>
        </v-col>
        <v-col>
          <v-text-field
            label="Correo Electronico"
            outlined
            rounded
          ></v-text-field>
        </v-col>

        <v-col>
          <span>Contraseña</span>
        </v-col>
        <v-col>
          <v-text-field
            label="Contraseña"
            outlined
            rounded
          ></v-text-field>
        </v-col>

            <v-col>
              <v-btn block rounded="xl" size="x-large" color="primary">Guardar</v-btn>
            </v-col>
            
        </div>

        
      
    </div>
</template>

<script>
    export default{
        data() {
            return {
            imageSrc: "https://ciencia.unam.mx/uploads/textos/especial_agua_042014.jpg",
            };
        },
    }
</script>

<style>
    .full-width-image {
        width: 100%;
        height: 10vh; /* Esto establecerá la altura de la imagen como el 100% de la altura visible */
    }
    .footer-image-container {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }
</style>