import axios from 'axios'

export default {
    data() {
      return {
        enEdicion: false,
        validacion: "",
        marcador: {
            url: "",
            nombre: "",
            descripcion: "",
            acciones: true
          },
        lista_marcadores: [
            
          ]
      };
    },
    created() {
        this.listarMarcadores();
    },
    computed: {
      validacionUrl() {
        return this.condicion(this.marcador.url.length > 0)
      },
      validacionNombre() {
        return this.condicion(this.marcador.nombre.length > 0)
      }
    },
    methods:{
      condicion(bool) {
        if (bool == false) {
            this.validacion = false;
            return false;
        } else {
            this.validacion = true;
            return true;
        }
    },
        listarMarcadores() {
            axios
                    .get("http://127.0.0.1:3000/marcadores")
                    .then(response => {
                        console.log(response);
                        this.lista_marcadores = response.data.info;
                        
                        console.log(lista_marcadores);
                        this.enEdicion = true;
                    })
                    .catch(error => {
                        console.log(error);
                    });
    },
    guardarMarcador(){
      if (this.validacion == true) {
        axios
        .post("http://127.0.0.1:3000/nuevo-marcador", this.marcador)
        .then(response => {
            this.lista_marcadores.push(response.data.info);
            this.marcador = {
              url: "",
              nombre: "",
              descripcion: "",
              acciones: true
          };
        })
        .catch(error => {
            console.log(error);
        });
  
      } else {
        alert("LLene todos los campos correctamente")
    }
        
      },
      actualizarMarcador(){
        if (this.validacion == true) {
          axios
        .put(`http://127.0.0.1:3000/marcadores/${this.marcador.id}`, this.marcador)
        .then(response => {
            console.log(response);
            let posicion = this.lista_marcadores.findIndex(
              marcador => marcador.id == this.marcador.id
            );
            this.lista_marcadores.splice(posicion, 1, this.marcador);
            this.marcador = {
              url: "",
              nombre: "",
              descripcion: "",
              acciones: true
          };
        })
        .catch(error => {
            console.log(error);
        });
        } else {
          alert("LLene todos los campos correctamente")
        }
        
      },
      eliminarMarcador({item}){
        axios
        .delete(`http://127.0.0.1:3000/marcadores/${item.id}`)
        .then(response => {

          let posicion = this.lista_marcadores.findIndex(
            marcador => marcador.id == item.id
          );
          this.lista_marcadores.splice(posicion, 1);

          console.log(response.data.info);
          console.log(item.id);
          
        })
        .catch(error => {
            console.log(error);
        });
      },
      cargarMarcador({item}){
        axios
        .get(`http://127.0.0.1:3000/marcadores/${item.id}`)
        .then(response => {
          var array = response.data.info;
 
          this.enEdicion = true
          this.marcador.id = array[0].id;
          this.marcador.url = array[0].url;
          this.marcador.nombre = array[0].nombre;
          this.marcador.descripcion = array[0].descripcion;
          this.marcador.acciones = true;
        })
        .catch(error => {
            console.log(error);
        });
      }
  } 
}