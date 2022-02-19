import { createStore } from 'vuex'

export default createStore({
  state: {
    // Productos recibe los valores del producto para ser leidos con respecto a la api.json
    productos: [],
    // Carrito contiene los objetos (Sería la lista de compras del usuario)
    carrito: {}
  },
  mutations: {
    // las mutaciones sirven para modificar el state
      // Las mutaciones se llaman a travez de commit

    // Permite leer los datos de los productos con el api.json
    setProducto(state, payload) {
      state.productos = payload
      console.log(state.productos)
    },
    // Añade al carrito nuevos objetos o items de la tienda cuando se da click en el botón
    setCarrito(state, payload) {
      state.carrito[payload.id] = payload
    }
  },
  actions: {
    async fetchData({commit}) {
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProducto', data)
      } catch (error) {
        console.log(error)
      }
    },
    agregarAlCarro({commit, state}, producto ) {
      state.carrito.hasOwnProperty(producto.id)
        // Usar Operadores ternarios que equivalen a un if y un else ? :
        ? producto.cantidad = state.carrito[producto.id].cantidad + 1
        : producto.cantidad = 1
      commit('setCarrito', producto)
    }
  },
  modules: {
  }
})
