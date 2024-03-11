<template>
    <div class="phone-container">
      <div class="phone-frame">
        <!-- Contenedor de botones arriba -->
        <div class="button-container-top">
          <!-- Botón Cerrar -->
          <button class="button" @click="handleClose">Abrir</button>
          <!-- Botón Abrir -->
          <button class="button" @click="handleClick">Cerrar</button>
        </div>
  
        <!-- Botón de regresar -->
        <div class="content" style="position: absolute; top: 10px; left: 10px;">
          <div class="image-container">
            <img src="@/assets/flecha2.jpeg" alt="boton-regresar" class="regresar">
          </div>
        </div>
        
        <!-- Contenido dentro del teléfono -->
        <div class="content">
          <!-- Imagen de Regadera -->
          <div class="image-container">
            <img src="@/assets/regadera.jpeg" alt="regadera" class="regadera">
          </div>
        </div>
        
        <!-- Imagen de Tinaco -->
        <div class="content logo-container">
          <div class="image-container">
            <img src="@/assets/tinaco.jpeg" alt="logo" class="logo">
          </div>
        </div>
  
        <!-- Imagen de la Llave -->
        <div class="content llave-container">
          <div class="image-container">
            <img src="@/assets/llave.jpeg" alt="llave" class="llave">
          </div>
        </div>
  
        <!-- Contenedor de botones abajo -->
        <div class="button-container-bottom">
          <!-- Botón Abrir -->
          <button class="button" @click="handleClick">Abrir</button>
          <!-- Botón Cerrar -->
          <button class="button" @click="handleClose">Cerrar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleClick() {
        // Lógica que se ejecutará cuando se haga clic en el botón Abrir
        console.log('¡Se hizo clic en el botón Abrir!');
      },
      handleClose() {
        // Lógica que se ejecutará cuando se haga clic en el botón Cerrar
        console.log('¡Se hizo clic en el botón Cerrar!');
      }
    }
  }
  </script>
  
  <style scoped>
  .phone-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 900px; /* Altura específica del teléfono */
  }
  
  .phone-frame {
    position: relative;
    border-radius: 20px;
    padding: 20px;
    background-color: #ffffff; /* Color de fondo modificado */
    width: 500px; /* Ancho específico del teléfono */
    height: 110;
    box-shadow: 0px 0px 20px 10px #eae1e1; /* Sombra blanca */
    display: flex;
    flex-direction: column; /* Alinear elementos verticalmente */
  }
  
  .button-container-top {
    display: flex;
    justify-content: flex-end; /* Alinear los botones a la derecha */
    align-items: center; /* Alinear los botones verticalmente */
    margin-bottom: 10px; /* Margen inferior para separar los botones de la imagen */
  }
  
  .button-container-bottom {
    display: flex;
    justify-content: flex-end; /* Alinear los botones a la derecha */
    align-items: center; /* Alinear los botones verticalmente */
    margin-top: 5px; /* Margen superior para separar los botones del borde superior */
  }
  
  .button {
    background-color: #007AA5; /* Color de fondo azul */
    width: 70px; /* Ancho del botón */
    height: 40px; /* Altura del botón */
    border-radius: 10px; /* Borde redondeado */
    border: none; /* Sin borde */
    color: white; /* Color del texto */
    cursor: pointer; /* Cursor al pasar el ratón */
    margin: 0 5px; /* Separación entre los botones */
  }
  
  .content {
    display: flex;
    flex-direction: row; /* Alinear elementos en una fila */
    justify-content: center;
    align-items: center;
  }
  
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 4; /* Hacer que el contenedor de imagen ocupe el espacio disponible */
  }
  
  .regadera {
    max-width: 55%; /* Permitir que la imagen de la regadera sea redimensionable en términos de longitud */
    max-height: 50%;
    margin-right: auto; /* Mover la imagen de la regadera hacia la izquierda */
  }
  
  .logo {
    max-width: 65%;
    max-height: 50%;
  }
  
  .regresar {
    max-width: 60px; /* Tamaño máximo del botón de regresar */
    max-height: 60px;
  }
  
  .llave-container {
    position: absolute;
    top: 80%;
    right: 10px;
    transform: translateY(-50%);
  }
  
  .llave {
    max-width: 50%; /* Ajusta el tamaño máximo de la imagen de la llave */
    max-height: 50%;
  }
  </style>