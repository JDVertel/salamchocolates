<template>
  <main>
    <div class="galeria">
      <div class="Hoteles"><h5>Registro de ventas</h5></div>
      <div class="container" style="margin-top: 20px; margin-bottom: 20px">
        <div class="row">
          <div class="col-12">
            <form enctype="multipart/form-data" method="post">
              <div class="card shadow mb-3">
                <div class="card-header py-3">
                  <p class="text-primary m-0 fw-bold">
                    <span style="color: #a07261">Vista previa de factura</span>
                  </p>
                </div>
                <div class="card-body">
                  <div class="invoice-header">
                    <p>
                      <strong>Nombre de la Empresa:</strong> Salam Chocolates
                    </p>
                    <p><strong>Dirección:</strong> Charalá Carrera 15 #20-30</p>
                    <p><strong>Teléfono:</strong> 3166163979</p>
                  </div>

                  <hr />

                  <div class="invoice-details">
                    <div class="datos-factura">
                      <p>
                        <strong>Nombre cliente:</strong>
                        <input
                          class="factura"
                          type="text"
                          v-model="nombreCliente"
                        />
                      </p>
                      <p>
                        <strong>Documento cliente:</strong>
                        <input
                          class="factura"
                          type="number"
                          v-model="documentoCliente"
                        />
                      </p>
                    </div>
                    <div>
                      <p><strong>Nro Factura:</strong> 00123</p>
                      <p>
                        <strong>Fecha:</strong>
                        <input
                          v-model="fecha"
                          type="text"
                          class="factura datePicker"
                        />
                      </p>
                    </div>
                  </div>

                  <div class="button-container">
                    <button
                      class="btns btn-custom btn"
                      data-bs-toggle="modal"
                      data-bs-target="#añadirpventa"
                      type="button"
                    >
                      <i class="bi bi-plus-circle-fill"></i>
                    </button>

                    <button class="btns btn-primary" type="button">
                      <i class="material-icons">print</i>
                    </button>
                  </div>
                  <table class="table invoice-items">
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(prfactura, index) in vistafactura"
                        key="index"
                      >
                        <td>{{ prfactura.codigo }}</td>
                        <td>{{ prfactura.producto }}</td>
                        <td>{{ prfactura.cantidad }}</td>
                        <td>{{ prfactura.precio }}</td>
                        <td>{{ prfactura.total }}</td>
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
                                  data-bs-target="#editarp"
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
                                  @click="eliminarProducto(index)"
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

                  <div class="invoice-total">
                    <p><strong>Total:</strong> $150.000</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!-- Espacio para el modal para añadir producto -->
          <div
            class="modal fade modal-small modal-transparent"
            id="añadirpventa"
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
                                <label class="form-label" for="id_producto"
                                  ><strong>Código *</strong></label
                                ><input
                                  class="form-control"
                                  type="number"
                                  id="id_producto"
                                  placeholder="Del producto"
                                  name="id_producto"
                                  required=""
                                />
                              </div>
                            </div>

                            <div class="col-6">
                              <div class="mb-3">
                                <label class="form-label" for="n_producto"
                                  ><strong>Producto *</strong></label
                                ><select
                                  class="form-select"
                                  id="g_tipo"
                                  name="g_tipo"
                                  required=""
                                >
                                  <option value="1">
                                    Chocolate sin azucar
                                  </option>
                                  <option value="2">Chocolate para taza</option>
                                  <option value="3">Chocolate en polvo</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-6">
                              <div class="mb-3">
                                <label class="form-label" for="ca_producto"
                                  ><strong>Cantidad*</strong></label
                                ><input
                                  class="form-control"
                                  type="number"
                                  id="ca_producto"
                                  placeholder="$"
                                  name="ca_producto"
                                  required=""
                                />
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="mb-3">
                                <label class="form-label" for="pre_producto"
                                  ><strong>Precio *</strong></label
                                ><input
                                  class="form-control"
                                  type="number"
                                  id="pre_producto"
                                  placeholder="$"
                                  name="pre_producto"
                                  required=""
                                />
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
          <!-- Espacio para el modal para añadir producto  -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const vistafactura = ref([
      {
        codigo: "001",
        producto: "Chocolate sin azucar",
        cantidad: 1,
        precio: 50000,
        total: 50000,
      },
      {
        codigo: "002",
        producto: "Chocolate para taza",
        cantidad: 1,
        precio: 50000,
        total: 50000,
      },
      {
        codigo: "003",
        producto: "Chocolate en polvo",
        cantidad: 1,
        precio: 50000,
        total: 50000,
      },
    ]);

    const nombreCliente = ref("Ryan Castro");
    const documentoCliente = ref(109298209);

    const fecha = ref("");

    const eliminarProducto = (index) => {
      vistafactura.value.splice(index, 1);
    };

    onMounted(() => {
      init_date();
    });

    function init_date() {
      const now = new Date();
      const day = now.getDate();
      const month = now.getMonth() + 1;
      const formattedMonth = month < 10 ? `0${month}` : month;
      const formattedDay = day < 10 ? `0${day}` : day;

      fecha.value = `${formattedDay}-${formattedMonth}-${now
        .getFullYear()
        .toString()
        .substr(2, 2)}`;
    }

    return {
      vistafactura,
      fecha,
      nombreCliente,
      documentoCliente,
      eliminarProducto,
    };
  },
};
</script>

<style scoped>
/* Estilos para factura */
.button-container {
  display: flex;
}

.material-icons {
  font-size: 20px;
}

.invoice-header {
  text-align: start;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 12px;
}

.invoice-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 12px;
}

.datos-factura {
  flex: 1;
  font-size: 12px;
}

.invoice-items {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 12px;
}

.invoice-total {
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
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
/* Estilos para factura */

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
  font-size: 12px;
}

select {
  font-size: 11px;
}

strong {
  font-size: 12px;
}

.factura {
  border-style: none;
  max-width: 100px;
  font-size: 12px;
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

@media screen and (max-width: 100px) {
  .row .col-6 {
    flex: 0 0 20%; /* Establece un ancho del 25% para cada columna en pantallas de 1000px o más */
    max-width: 25%;
  }
}
</style>
