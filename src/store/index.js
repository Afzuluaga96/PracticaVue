import { createStore } from 'vuex'

export default createStore({
  // el state puede ser modificado con el mutations
  state: {
    // Productos recibe los valores del producto para ser leidos con respecto a la api.json
    productos: [],
    // Carrito contiene los objetos (Sería la lista de compras del usuario)
    carrito: {}
  },

  // las mutaciones sirven para modificar el STATE
      // Las mutaciones se llaman a travez de commit
      // Las mutaciones son Set o establecer para cambiar el STATE
  mutations: {
    // Permite leer los datos de los productos con el api.json
    setProducto(state, payload) {
      state.productos = payload
      console.log(state.productos)
    },
    // Añade al carrito nuevos objetos o items de la tienda cuando se da click en el botón
    setCarrito(state, payload) {
      state.carrito[payload.id] = payload
      console.log(payload)
    },
    vaciarCarrito(state) {
      state.carrito = {}
    }
  },

  // ACCIONES realiza algúna acción más relacionada con eventos
    // Pueden ser llamadas con el metodo dispatch("nombreFuncAccion", producto) como en Card.vue que se usa para agregar al carrito el producto indicado
  actions: {
    // Función ASINCRONA que usa el api.json que se encuentra en la carpetas public
    async fetchData({commit}) {
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProducto', data)
      } catch (error) {
        console.log(error)
      }
    },

    // Agregar un objeto al carrito, si ya existe, se le añade a la cantidad +1
    agregarAlCarro({commit, state}, producto ) {
      state.carrito.hasOwnProperty(producto.id)
        // Usar Operadores ternarios que equivalen a un if y un else ? :
        ? producto.cantidad = state.carrito[producto.id].cantidad + 1
        : producto.cantidad = 1
      commit('setCarrito', producto)
    }
  },

  // Los getters toman un valor del STATE y lo transforma o hace calculos, como obtener un id o convertir el dato a otro (no modifica nada del STATE)
  getters: {
    totalCantidad(state) {
      return Object.values(state.carrito).reduce((acumulador,{cantidad}) => acumulador + cantidad, 0)
    },
    totalPrecio(state) {
      return Object.values(state.carrito).reduce((acumulador, {cantidad, precio}) => acumulador + cantidad * precio, 0)
    }
  },

  modules: {
  }
})
