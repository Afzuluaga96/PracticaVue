<template>
<tr>
	<!-- MOSTRAR PROPIEDADES EN LA TABLA -->
	<th scope="row">{{item.id}}</th>
	<td>{{item.title}}</td>
	<td>{{item.cantidad}}</td>
	<td>

		<!-- BOTONES AGREGAR O QUITAR -->
			<!-- BOTÓN AGREGAR -->
		<button class="btn btn-info btn-sm">
			+
		</button>
			<!-- BOTÓN QUITAR -->
		<button class="btn btn-danger btn-sm">
			-
		</button>
	</td>

	<!-- Se debería usar una propiedad computada pero para este caso no hace mucha falta por ser algo simple-->
	<td>${{item.precio * item.cantidad}}</td>
</tr>
</template>

<script>
export default {
	props:['item']

}
</script>
