<template>
  <main>
    <div class="galeria">
      <div class="Hoteles"><h5>Registro de gastos</h5></div>
      <!-- Start: Ludens - Create-Edit Form -->
      <div class="container" style="margin-top: 20px; margin-bottom: 20px">
        <div class="row">
          <!-- Primer Formulario -->
          <div class="col-sm-12 col-md-6">
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
                        <label class="form-label" for="g_tipo">
                          <strong>Tipo *</strong>
                          <i
                            class="bi bi-plus-circle-fill"
                            data-bs-toggle="modal"
                            data-bs-target="#añadir-gasto"
                            style="cursor: pointer; margin-left: 5px"
                          ></i>
                        </label>
                        <div class="input">
                          <select
                            class="form-select"
                            id="g_tipo"
                            name="g_tipo"
                            required=""
                          >
                            <option value="1">Servicios públicos</option>
                            <option value="2">Papelería</option>
                            <option value="3">Transportes</option>
                            <option value="4">Arriendo</option>
                            <option value="5">Comunicaciones</option>
                            <option value="6">Empaques</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="g_detalles"
                          ><strong>Detalles *</strong></label
                        ><input
                          class="form-control"
                          type="text"
                          id="g_detalles"
                          placeholder="Recibo del agua"
                          name="g_detalles"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="g_valor"
                          ><strong>Valor *</strong></label
                        ><input
                          class="form-control"
                          type="number"
                          id="g_valor"
                          placeholder="$"
                          name="g_valor"
                          required=""
                        />
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="g_fecha"
                          ><strong>Fecha *</strong></label
                        ><input
                          v-model="fecha"
                          class="form-control dataPicker"
                          type="text"
                          id="g_fecha"
                          placeholder="0"
                          name="g_fecha"
                          required=""
                        />
                      </div>
                    </div>

                    <div class="col-sm-12 col-md-12 col-lg-12">
                      <div class="mb-3">
                        <label class="form-label" for="g_descripcion"
                          ><strong>Descripción *</strong></label
                        ><input
                          class="form-control"
                          type="text"
                          id="g_descripcion"
                          placeholder="Recibo del mes de mayo"
                          name="g_descripcion"
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
                      role="button"
                      href="#PanelAdmin"
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

          <!-- Segundo Formulario -->
          <div class="col-sm-12 col-md-6">
            <form enctype="multipart/form-data" method="post">
              <div class="card shadow mb-3">
                <div class="card-header py-3">
                  <p class="text-primary m-0 fw-bold">
                    <span style="color: #a07261">Gastos recientes</span>
                  </p>
                </div>
                <div class="card-body">
                  <div style="font-size: 12px" class="table-responsive">
                    <table class="table table-bordered">
                      <thead style="align-items: center; text-align: center">
                        <tr>
                          <th>Fecha</th>
                          <th>Tipo</th>
                          <th>Valor</th>
                          <th>Detalles</th>
                          <th>Descripción</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="venta in ventas">
                          <td>{{ venta.fecha }}</td>
                          <td>{{ venta.tipo }}</td>
                          <td>{{ venta.costo }}</td>
                          <td>{{ venta.detalles }}</td>
                          <td>{{ venta.descripcion }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade modal-small modal-transparent"
      id="añadir-gasto"
      tabindex="-1"
    >
      <div class="modal-dialog modal-lg modal-right">
        <div class="modal-content">
          <div
            style="padding-bottom: 0px"
            class="modal-body text-center justify-content-center"
          >
            <div class="row">
              <div class="col-12">
                <div class="mb-3 d-flex justify-content-center">
                  <div class="input-group">
                    <input
                      class="form-control"
                      type="text"
                      id="añadir_g"
                      placeholder="Nombre del gasto"
                      name="añadir_g"
                      required=""
                    />
                    <button class="btn btn-custom btn-sm">
                      <i class="bi bi-plus-circle"></i>
                      Añadir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
  </main>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const ventas = ref([
      {
        fecha: "2023-11-01",
        tipo: "Servicios públicos",
        costo: 80000,
        detalles: "Detalles",
        descripcion: "Descripción",
      },
      {
        fecha: "2023-11-01",
        tipo: "Arriendo",
        costo: 400000,
        detalles: "Detalles",
        descripcion: "Descripción",
      },
      {
        fecha: "2023-11-01",
        tipo: "Empaques",
        costo: 200000,
        detalles: "Detalles",
        descripcion: "Descripción",
      },
    ]);

    const fecha = ref("");

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
      ventas,
      fecha,
    };
  },
};
</script>

<style scoped>
.modal-small .modal-dialog {
  max-width: 300px; /* Establece el ancho deseado */
  margin: 0 auto; /* Centra horizontalmente el modal */
  top: 50%; /* Coloca el modal en el centro vertical */
  transform: translateY(-50%); /* Alinea verticalmente el modal */
}

.modal-transparent .modal-content {
  background-color: #ffffff;
  border: none;
  box-shadow: none;
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

.btn.btn-custom {
  background-color: #a07261;
  border-radius: 10px;
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

input {
  font-size: 11px;
}

select {
  font-size: 11px;
}

strong {
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

@media screen and (max-width: 100px) {
  .row .col-6 {
    flex: 0 0 20%; /* Establece un ancho del 25% para cada columna en pantallas de 1000px o más */
    max-width: 25%;
  }
}
</style>
