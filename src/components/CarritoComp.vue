<template>
<!-- CONTENIDO TEMPLATE -->
<div class="my-5">

  <!-- TITULO -->
  <h4>Carrito de compras</h4>

  <!-- TABLA LISTA COMPRAS -->
  <table class="table">

    <!-- HILERA TABLA CON LOS DATOS -->
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Item</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Acción</th>
        <th scope="col">Total</th>
      </tr>
    </thead>

    <!-- COMPONENTE ITEMS -->
    <tbody id="items">
      <!-- Hacer un ciclo for para mostrar en la tabla cada item de la lista -->
        <!-- con la key se puede acceder a la propiedad del objeto más especificamente ya que id es una variable que no se repite -->
      <Item
        v-for="item in items" :key="item.id"
        :item="item"
      />
    </tbody>

    <!-- PIE DE LA TABLA -->
    <tfoot>
      <tr id="footer-carrito">
        <th scope="row" colspan="5" v-if="Object.keys(items).length === 0">Carrito vacío - comience a comprar!</th>
        <!-- En el caso de que lo de arriba no se cumpla se va a mostrar el Footer que tiene el precio y el botón reiniciar-->
        <Footer v-else />
      </tr>
    </tfoot>
  </table>
</div>
</template>


<!-- ITEMS DE LA LISTA DE COMPRAS (CARTAS) (NO SE PARA QUE ERA ESTO PERO LO DEJO POR SI ACASO)
      // <h4>Cards</h4>
      // <div class="row" id="cards"></div> -->

<!-- SCRIPTS -->
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

// Importar el componentes para poder acceder a sus datos (en la carpeta componentes)
import Item from './Item'
import Footer from './Footer'

export default {
  // COMPONENTS permite acceder a los otros componentes, en este caso Items
  components: {
    Item,
    Footer
  },
  setup() {
    // Importar datos
    const store = useStore()
    const items = computed(() => store.state.carrito)

    // Retornar items
    return {items}
  }
}
</script>
>