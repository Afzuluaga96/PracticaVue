<template>
  <th scope="row" colspan="2">Total productos</th>
    <!-- TOTAL DE PRECIO A PAGAR EN LA LISTA DE COMPRAS -->
    <td>{{totalCantidad}}</td>

    <!-- botón vaciar todo -->
    <td>
      <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="vaciar">
        Vaciar todo
      </button>
    </td>

    <!-- El error es porq ue el template no se supone que contenga varias etiquetas pero al final todas van a estar dentro de una -->
    <td class="font-weigth-bold">$ <span>{{totalPrecio}}</span></td>

</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    // Obtener el getter de el index.js con una propiedad computada
    const totalCantidad = computed(() => store.getters.totalCantidad)
    const totalPrecio = computed(() => store.getters.totalPrecio)

    // Guardar el setter vaciarCarrito para reiniciar la lista de compras
    const vaciar = () => {store.commit('vaciarCarrito')}

    return {
      totalCantidad,
      totalPrecio,
      vaciar
      }
  }
}
</script>
