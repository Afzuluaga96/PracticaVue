<template>
  <!-- Contenedor del card -->
  <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
    <div class="card">

      <!-- Imagen del producto -->
      <img :src="producto.thumbainUrl" :alt="`imagen -${producto.title}`" class="card-img-top" />

      <!-- Botón -->
      <div class="card-body">
        <!-- producto.title viene de la api.json que contiene los productos -->
        <h5 class="card-title">{{producto.title}}</h5>
        <!-- Precio -->
        <p class="card-text">$ <span>{{producto.Precio}}</span></p>
        <!-- Contenido del botón y color -->
        <button class="btn btn-dark" @click="agregar(producto)">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
// Llamar a useStore de vuex para importar en el setup agregarAlCarro
import { useStore } from 'vuex'
export default {

  //Exportar los props en un array para que la página pueda interpretarlos
  props: ['producto'],
  setup() {
    // Llamar a una acción de index.js
    const store = useStore()
    const agregar = (producto) => {
      // Producto va a viajar a agregarAlCarro
      store.dispatch('agregarAlCarro', producto)
    }

    // Retornar todos los elementos para que puedan ser usados en la vista
    return {agregar}
  }
}
</script>

