<template>
    <div>
        <h1 style="text-align: center;">Logo</h1>
        <div>
            <v-col>
          <v-icon>mdi-account</v-icon>
          <span>Username</span>
        </v-col>
            <v-col>
          <v-text-field
            label="Username"
            outlined
            rounded
          ></v-text-field>
        </v-col>
        <v-col>
          <v-icon>mdi-lock</v-icon>
          <span>Password</span>
        </v-col>
        <v-col>
          <v-text-field
            label="Password"
            outlined
            rounded
          ></v-text-field>
        </v-col>

            <v-col>
              <v-btn block rounded="xl" size="x-large" color="primary">Registrar</v-btn>
            </v-col>
            <v-col>
                <v-btn block rounded="xl" size="x-large" color="primary">Iniciar Sesión</v-btn>
            </v-col>
            
        </div>
        <footer>
            <div class="footer-image-container">
            <v-img
                class="full-width-image"
                :src="imageSrc"
                cover
            ></v-img>
        </div>
        </footer>
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