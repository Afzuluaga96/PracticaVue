<template>
  <div class="container">

    <!-- -->
    <h1>Carrito</h1>

    <hr>

    <CarritoComp />

    <div class="row">
      <!-- Repetir las cartas por cada producto y su key que contiene el ID-->
      <Card
        v-for="producto of productos" :key="producto.id"
        :producto="producto"
      />
    </div>

  </div>
</template>

<script>
import { useStore } from "vuex"
import { computed, onMounted } from "vue";
import Card from "./components/Card";
import CarritoComp from './components/CarritoComp'
export default {
  name: 'App',
  components: {
    // Componente card que se encuentra en componentes Card.vue
    Card, CarritoComp
  },
  // setup en vue3 tiene incorporado el evento create que se inicia antes que el resto de la página
  setup() {
    const store = useStore()
    // Se ejecuta antes que el template
    onMounted(() => {
      store.dispatch('fetchData')
    })

    const productos = computed(() => store.state.productos)
    // debug const carrito = computed(() => store.state.carrito)

    return {
      productos,
      // debug carrito
    }
  }
}
</script>

