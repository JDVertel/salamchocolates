<template>
  <div class="galeria">
    <div class="Hoteles"><h5>Visualizar clientes</h5></div>
    <div>
      <!-- Tabla de hoteles -->
      <div style="font-size: 12px" class="table-responsive">
        <table class="table table-bordered">
          <thead style="align-items: center; text-align: center">
            <tr>
              <th>Cliente</th>
              <th>Documento</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Tipo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(rclientes, index) in clientes" :key="index">
              <td>{{ rclientes.nreg_cliente }}</td>
              <td>{{ rclientes.cc_cliente }}</td>
              <td>{{ rclientes.telefono }}</td>
              <td>{{ rclientes.correo }}</td>
              <td>{{ rclientes.tipo }}</td>
              <td>
                <div class="btn-container">
                  <!-- boton que abre el modal -->
                  <button
                    type="button"
                    class="btns btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#editarp"
                  >
                    <i class="material-icons">edit</i>
                  </button>
                  <!-- boton que abre el modal -->

                  <button
                    type="button"
                    class="btns btn btn-dark"
                    @click="eliminarCliente(index)"
                  >
                    <i class="material-icons">delete</i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- espacio para el modal -->
      <div
        class="modal fade modal-small"
        id="editarp"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Editar cliente
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="mb-3">
                    <label class="form-label" for="nreg_cliente"
                      ><strong>Cliente *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="nreg_cliente"
                      placeholder="Nombre del cliente"
                      name="nreg_cliente"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="mb-3">
                    <label class="form-label" for="cc_cliente"
                      ><strong>Documento *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="cc_cliente"
                      placeholder="1095298209"
                      name="cc_cliente"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="mb-3">
                    <label class="form-label" for="tel_cliente"
                      ><strong>Teléfono *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="tel_cliente"
                      placeholder="Teléfono de contacto"
                      name="tel_cliente"
                      oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                      pattern="[0-9]{10,}"
                      title="Ingresa al menos 10 números"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="mb-3">
                    <label class="form-label" for="c_cliente"
                      ><strong>Correo *</strong></label
                    ><input
                      class="form-control"
                      type="email"
                      id="c_cliente"
                      placeholder="Ej: ryan@gmail.com"
                      name="c_cliente"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="mb-3">
                    <label class="form-label" for="tipo_cliente"
                      ><strong>Tipo *</strong></label
                    >
                    <select
                      class="form-select"
                      id="tipo_cliente"
                      name="tipo_cliente"
                      required=""
                    >
                      <option selected>Seleccione</option>
                      <option value="1">Proveedor</option>
                      <option value="2">Independiente</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                style="
                  background-color: #343a40;
                  border-style: none;
                  border-radius: 100px;
                "
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                style="
                  background-color: #a07261;
                  border-style: none;
                  border-radius: 100px;
                "
                class="btn btn-primary"
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- espacio para el modal -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const clientes = ref([
      {
        nreg_cliente: "Ryan Castro",
        cc_cliente: 1095298209,
        telefono: 3222431440,
        correo: "ryan@gmail.com",
        tipo: "Independiente",
      },
    ]);

    const eliminarCliente = (index) => {
      clientes.value.splice(index, 1);
    };

    return {
      clientes,
      eliminarCliente,
    };
  },
};
</script>

<style scoped>
/* Estilo para el modal más pequeño */
.modal-small .modal-dialog {
  max-width: 300px; /* Establece el ancho deseado */
  margin: 0 auto; /* Centra horizontalmente el modal */
  top: 50%; /* Coloca el modal en el centro vertical */
  transform: translateY(-50%); /* Alinea verticalmente el modal */
}

.logo {
  position: relative;
  max-width: 30px;
  max-height: 40px;
  margin-top: 5px;
  transition: 1s;
}

.logo:hover {
  position: relative;
  max-width: 30px;
  max-height: 40px;
  margin-top: 5px;
  transform: scale(1.1); /* Cambia el tamaño al pasar el mouse */
}

.logop {
  color: #fff;
  text-align: center;
}

.foto {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.fixed-size-image {
  width: 100px;
  height: 100px;
  overflow: hidden; /* Para manejar el desbordamiento de la imagen */
  object-fit: cover;
  border-radius: 10px;
  border-style: solid;
  border-color: #a072615b;
}

.link {
  text-decoration: none !important;
}
.btn-container {
  display: flex;
  justify-content: center;
  gap: 5px; /* Espacio entre los botones */
}

.btns {
  border-radius: 50%; /* Redondear los botones */
  padding: 5px; /* Agregar espacio interior para separar los iconos */
  display: flex;
  align-items: center;
  justify-content: center;
}

.material-icons {
  font-size: 20px; /* Tamaño del icono */
}

.galeria {
  padding: 16px;
  margin-top: 8px;
}

h5 {
  padding: 5px;
  margin-left: 5px;
  color: #fff;
}

.Hoteles {
  background: linear-gradient(to right, #a07261, transparent);
  align-items: center;
  transition: 1s;
}

@media screen and (max-width: 500px) {
  .Hoteles {
    background-color: #a07261;
    align-items: left;
  }
}

/* Estilos para la tabla */
.table {
  border-collapse: collapse; /* Para eliminar los espacios entre las celdas */
  width: 100%;
}

th,
td {
  text-align: center;
  padding: 10px;
}

th {
  background-color: #f2f2f2; /* Color de fondo para las celdas del encabezado */
}

.btn-container {
  display: flex;
  gap: 5px; /* Espacio entre los botones */
}

/* Botones de acción dentro de la tabla */
.btns {
  border-radius: 50%; /* Redondear los botones */
  padding: 5px; /* Agregar espacio interior para separar los iconos */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #343a40; /* Color de fondo de los botones */
  color: white; /* Color del texto de los botones */
  border: none; /* Eliminar el borde de los botones */
}

.material-icons {
  font-size: 20px; /* Tamaño del icono */
}

/* Estilos para scrollbar */
.table-responsive::-webkit-scrollbar {
  height: 7px;
}

.table-responsive::-webkit-scrollbar-thumb {
  background-color: #a07261;
  border-radius: 20px;
}
</style>
