<template>
  <tr>
    <!-- MOSTRAR PROPIEDADES EN LA TABLA -->
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.title }}</td>
    <td>{{ item.cantidad }}</td>
    <td>
      <!-- BOTONES AGREGAR O QUITAR -->
      <!-- BOTÓN AGREGAR -->
      <button class="btn btn-info btn-sm" @click="aumentar(item.id)">+</button>
      <!-- BOTÓN QUITAR -->
      <button class="btn btn-danger btn-sm" @click="disminuir(item.id)">-</button>
    </td>

    <!-- Se debería usar una propiedad computada pero para este caso no hace mucha falta por ser algo simple-->
    <td>${{ item.precio * item.cantidad }}</td>
  </tr>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["item"],
  setup() {
    const store = useStore();
    // Aumentar y disminuir cantidad de items en el botón "+" y "-"
    const aumentar = (id) => {
      store.commit("aumentar", id);
    };
    const disminuir = (id) => {
      store.commit("disminuir", id);
    };

    return {
      aumentar,
      disminuir,
    };
  },
};
</script>
