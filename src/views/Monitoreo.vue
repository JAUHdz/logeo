<template>
    <div class="container">
      <h1 class="titulo">¡HOLA BIENVENIDO!</h1>
      <div class="botones-container">
        <button @click="generarConsumo" class="boton-azul">Generar Consumo</button>
        <button @click="visualizarGrafico" class="boton-azul">Visualizar Gráfico</button>
        <button @click="accionConImagen" class="boton-imagen">
            <h2 class="ver-capacidad">Ver capacidad tinaco</h2>
          <img src="@/assets/tinaco.jpeg" alt="Botón con Imagen" class="imagen-tinaco" />
        </button>
        <h3  class="Tip">Tip del dia:</h3>
        <h4 class="consejo-agua">Reutiliza el agua que sale después de lavar la ropa para regar tus plantas</h4>
        <img src="@/assets/plantas.jpeg" alt="Botón con Imagen" class="plantas" />
      
      </div>
     
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      generarConsumo() {
        console.log('Se generó un consumo');
      },
      visualizarGrafico() {
        console.log('Visualizando el gráfico');
      },
      accionConImagen() {
        console.log('Realizando acción con imagen');
        
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 75vh;
  }
  
  .titulo {
    margin-top: 0;
  }
  
  .botones-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .boton-azul {
    background-color: #046b97;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    border-radius: 10px;
  }
  
  .boton-imagen {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  .imagen-tinaco {
    max-width: 50px;
    height: auto; 
  }
  
  .ver-capacidad {
    color: #717171; 
    font-size: small; 
  }
  .consejo-agua {
  color: #333; 
  font-size: 16px; 
  text-align: center; 
  margin-top: 20px;
  max-width: 80%; 
  font-style: italic; 
  
}
.Tip{
    color: #333; 
  font-size: 16px; 
  text-align: center; 
  margin-top: 20px;
  max-width: 80%; 
  font-style: italic; 
}
.plantas {
  max-width: 30%; 
  height: auto; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  
}
  </style>