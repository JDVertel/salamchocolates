<template>
  <div class="galeria">
    <div class="Hoteles"><h5>Administrar productos</h5></div>
    <div>
      <!-- Tabla de hoteles -->
      <div style="font-size: 12px" class="table-responsive">
        <table class="table table-bordered">
          <thead style="align-items: center; text-align: center">
            <tr>
              <th>Código Producto</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(rproductos, index) in productos" :key="index">
              <td>{{ rproductos.codigo }}</td>
              <td>{{ rproductos.producto }}</td>
              <td>
                <input
                  class="form-control"
                  type="number"
                  id="g_valor"
                  placeholder="0"
                  name="g_valor"
                  required=""
                />
              </td>
              <td>
                <div class="btn-container">
                  <button
                    type="button"
                    class="btns btn btn-dark"
                    @click="eliminarProducto(index)"
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
                Editar producto
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

                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="mb-3">
                    <label class="form-label" for="n_producto"
                      ><strong>Producto *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="n_producto"
                      placeholder="Nombre del producto"
                      name="n_producto"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="mb-3">
                    <label class="form-label" for="c_producto"
                      ><strong>Cantidad *</strong></label
                    ><input
                      class="form-control"
                      type="number"
                      id="c_producto"
                      placeholder="0"
                      name="c_producto"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="mb-3">
                    <label class="form-label" for="pre_producto"
                      ><strong>Precio Venta *</strong></label
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
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="mb-3">
                    <label class="form-label" for="pred_producto"
                      ><strong>Precio Distribuidor *</strong></label
                    ><input
                      class="form-control"
                      type="number"
                      id="pred_producto"
                      placeholder="$"
                      name="pred_producto"
                      required=""
                    />
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
    const productos = ref([
      {
        codigo: 101,
        producto: "Chocolate sin azucar",
        cantidad: 10,
      },
    ]);

    const eliminarProducto = (index) => {
      productos.value.splice(index, 1);
    };

    return {
      productos,
      eliminarProducto,
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
