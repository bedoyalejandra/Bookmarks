<template>
<div>
    <b-container>
      <!-- Content here --> 
      <div class="containerTitle">
      SIMULADOR DE BOOKMARKS
      </div>

      <b-form action="javascript:void(0)" @submit="guardarMarcador()">
        <b-form-group @submit.stop.prevent label="Url" label-for="url">
          <b-form-input
            class="form-control"
            v-model="marcador.url"
            placeholder="www.example.com"
            id="id"
          />
        <b-form-invalid-feedback :state="validacionUrl">Campo obligatorio</b-form-invalid-feedback>

        </b-form-group>
        <b-form-group @submit.stop.prevent label="Nombre" label-for="nombre">
          <b-form-input
            class="form-control"
            v-model="marcador.nombre"
            id="nombre"
          />
                  <b-form-invalid-feedback :state="validacionNombre">Campo obligatorio</b-form-invalid-feedback>

        </b-form-group>
        <b-form-group label="Descripción" label-for="descripcion">
          <b-form-textarea
            id="descripcion"
            v-model="marcador.descripcion"
            rows="3"
            max-rows="6"
            ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" block variant="danger" v-if="!enEdicion">Crear marcador</b-button>
        <b-button @click="actualizarMarcador()" variant="primary" v-else>Actualizar marcador</b-button>
      </b-form>

      <div class="containerTitle">
      LISTA
      </div>

      <b-table striped hover :items="lista_marcadores">
        <template v-slot:cell(acciones)="row">
          <b-button size="sm" @click="cargarMarcador(row)" class="mr-2" variant="danger">Modificar</b-button>
          <b-button size="sm" @click="eliminarMarcador(row)" class="mr-2">Eliminar</b-button>
        </template>
      </b-table>
    </b-container>
  </div>
    
</template>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="../assets/menu.js"></script>

<style scoped>

.containerTitle {
  display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-content: stretch;
  color: #ed0034;
    font-family: "Anton", sans-serif;
  font-size: 30px;
    padding: 10px;
}

</style>