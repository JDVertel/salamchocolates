<template>
  <div class="galeria">
    <div class="Hoteles"><h5>Registro de clientes</h5></div>
    <!-- Inicio Fromularío-->
    <div class="container" style="margin-top: 20px; margin-bottom: 20px">
      <!--Inicio Card y Tabla -->
      <div class="col-sm-12 col-md-12">
        <form enctype="multipart/form-data" method="post">
          <div class="card shadow mb-3">
            <div class="card-header py-3">
              <p class="text-primary m-0 fw-bold">
                <span style="color: #a07261">Clientes registrados</span>
              </p>
            </div>
            <div class="container mt-3">
              <button
                class="btn-sm btn-custom btn"
                data-bs-toggle="modal"
                data-bs-target="#crearp"
                type="button"
                style="background: #a07261; color: #fff; border-radius: 100px"
              >
                <i class="bi bi-plus-circle"></i>
                Añadir nuevo cliente
              </button>
            </div>

            <div class="card-body">
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
                        <div class="btns btn-group dropstart" role="group">
                          <button
                            type="button"
                            class="btns btn dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="bi bi-gear-fill"></i>
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a
                                class="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#editarclientes"
                                ><i
                                  style="margin-right: 5px"
                                  class="bi bi-pencil-fill"
                                ></i
                                >Editar</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                @click="eliminarCliente(index)"
                                ><i
                                  style="margin-right: 5px"
                                  class="bi bi-trash3-fill"
                                ></i
                                >Eliminar</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </form>
      </div>
      <!--Fin Card y Tabla -->

      <!-- Espacio para el modal de creación -->
      <div
        class="modal fade modal-small modal-transparent"
        id="crearp"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <div class="col-sm-12 col-md-12">
                <form enctype="multipart/form-data" method="post">
                  <div class="card shadow mb-3">
                    <div class="card-header py-3">
                      <p class="text-primary m-0 fw-bold">
                        <span style="color: #a07261"
                          >Rellene los campos obligatorios *</span
                        >
                      </p>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-6">
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
                        <div class="col-6">
                          <div class="mb-3">
                            <label class="form-label" for="cc_cliente"
                              ><strong>Número documento *</strong></label
                            ><input
                              class="form-control"
                              type="text"
                              id="cc_cliente"
                              placeholder="Ej: 1095298209"
                              name="cc_cliente"
                              oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                              pattern="[0-9]{12,}"
                              title="Ingresa al menos 12 números"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="col-6">
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
                        <div class="col-6">
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
                        <div class="col-6">
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
                              <option value="1">Proveedor</option>
                              <option value="2">Independiente</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-end mb-3">
                      <center>
                        <a
                          class="btn-sm btn-outline-danger btn"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          style="margin-right: 5px; border-radius: 100px"
                          >Cancelar</a
                        ><button
                          class="btn-sm btn-outline-dark btn"
                          type="reset"
                          style="margin-right: 5px; border-radius: 100px"
                        >
                          Limpiar</button
                        ><button
                          class="btn-sm btn-custom btn"
                          type="submit"
                          style="
                            background: #a07261;
                            color: #fff;
                            border-radius: 100px;
                          "
                        >
                          <i class="bi bi-floppy-fill"></i>
                          Registrar
                        </button>
                      </center>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Espacio para el modal de creación -->

      <!-- Espacio para el modal de edicion -->
      <div
        class="modal fade modal-small"
        id="editarclientes"
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
                <div class="col-6">
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
                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label" for="cc_cliente"
                      ><strong>Número documento *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="cc_cliente"
                      placeholder="Ej: 1095298209"
                      name="cc_cliente"
                      oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                      pattern="[0-9]{12,}"
                      title="Ingresa al menos 12 números"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-6">
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
                <div class="col-6">
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
                <div class="col-6">
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
      <!-- Espacio para el modal de edicion -->
    </div>
    <!-- Final Fromularío-->
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
.modal-small .modal-dialog {
  max-width: 400px; /* Establece el ancho deseado */
  margin: 0 auto; /* Centra horizontalmente el modal */
  top: 50%; /* Coloca el modal en el centro vertical */
  transform: translateY(-50%); /* Alinea verticalmente el modal */
}

.modal-transparent .modal-content {
  background-color: transparent;
  border: none;
  box-shadow: none;
}

.btns .dropdown-toggle i {
  transition: transform 0.3s ease;
}

.btns .dropdown-toggle:hover i {
  transform: rotate(360deg);
}

.btns {
  border-radius: 10%; /* Redondear los botones */
  padding: 5px; /* Agregar espacio interior para separar los iconos */
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border-style: none;
  background: transparent;
  margin-top: -2px;
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

input {
  font-size: 11px;
}

select {
  font-size: 11px;
}

strong {
  font-size: 12px;
}

@media screen and (max-width: 500px) {
  .Hoteles {
    background-color: #a07261;
    align-items: left;
  }
}

/* Estilos para la tabla */
.table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: center;
  padding: 5px;
}

th {
  background-color: #f2f2f2;
}

.table-responsive::-webkit-scrollbar {
  height: 7px;
}

.table-responsive::-webkit-scrollbar-thumb {
  background-color: #a07261;
  border-radius: 20px;
}

@media screen and (max-width: 500px) {
  .Hoteles {
    background-color: #a07261;
    align-items: left;
  }
}
</style>
