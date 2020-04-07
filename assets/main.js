export default {
    data() {
      return {
        mensaje: "Administración de estudiantes",
        enEdicion: false,
        marcador: {
          id: "",
          url: "",
          nombre: "",
          descripcion: "",
          acciones: true
        },
        lista_marcadores: [
          {
            id: "1",
            url: "facebook.com",
            nombre: "Facebook",
            descripcion: "Redes sociales",
            acciones: true
          }
        ]
      };
    },
    created(){
        this.listarMarcadores();
    },
    methods: {
        listarMarcadores(){
            axios.get('http://localhost:3000/marcadores')
            .then(res => console.log(res))
            .catch(e => console.log(e))
        },
     
    }
  };