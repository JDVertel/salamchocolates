<template>
  <div class="galeria">
    <div class="Hoteles"><h5>Registro de productos</h5></div>
    <!-- Inicio Fromularío-->
    <div class="container" style="margin-top: 20px; margin-bottom: 20px">
      <!--Inicio Card y Tabla -->
      <div class="col-sm-12 col-md-12">
        <form enctype="multipart/form-data" method="post">
          <div class="card shadow mb-3">
            <div class="card-header py-3">
              <p class="text-primary m-0 fw-bold">
                <span style="color: #a07261">Productos registrados</span>
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
                Añadir nuevo producto
              </button>
            </div>

            <div class="card-body">
              <div style="font-size: 12px" class="table-responsive">
                <table class="table table-bordered">
                  <thead style="align-items: center; text-align: center">
                    <tr>
                      <th>Código</th>
                      <th>Estado</th>
                      <th>Producto</th>
                      <th>Precio Venta</th>
                      <th>Precio Distribuidor</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(rproductos, index) in productos" :key="index">
                      <td>{{ rproductos.codigo }}</td>
                      <td>{{ rproductos.estado }}</td>
                      <td>{{ rproductos.producto }}</td>
                      <td>{{ rproductos.precio }}</td>
                      <td>{{ rproductos.preciodis }}</td>
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
                            <li>
                              <a
                                class="dropdown-item"
                                @click="eliminarProducto(index)"
                                ><i
                                  style="margin-right: 5px"
                                  class="bi bi-eye-slash-fill"
                                ></i
                                >Ocultar</a
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
                            ><input
                              class="form-control"
                              type="text"
                              id="n_producto"
                              placeholder="Nombre"
                              name="n_producto"
                              required=""
                            />
                          </div>
                        </div>

                        <div class="col-6">
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
                        <div class="col-6">
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

                        <div class="col-15">
                          <div class="mb-3">
                            <strong>Imágenes *</strong>
                            <p style="font-size: 11px">
                              {{ imagesSelected }} imágenes seleccionadas
                              (Máximo 4)
                            </p>
                            <div style="margin-top: -15px" class="logo">
                              <p class="logop">
                                <i
                                  style="
                                    color: #a07261;
                                    font-size: 20px;
                                    margin-left: -10px;
                                  "
                                  class="bi bi-file-earmark-arrow-up-fill"
                                ></i>
                              </p>
                              <br />
                              <input
                                class="foto"
                                :required="imagesSelected !== 4"
                                type="file"
                                ref="fileInput"
                                accept="image/*"
                                multiple
                                @change="handleFileUpload"
                              />
                            </div>
                            <!-- Contenedor de las imágenes con margen -->
                            <div
                              style="display: flex"
                              class="d-flex flex-wrap gap-1"
                            >
                              <div
                                v-for="(image, index) in uploadedImages"
                                :key="index"
                                class="image-preview"
                              >
                                <img
                                  class="fixed-size-image"
                                  :src="image.src"
                                  :alt="image.alt"
                                />
                              </div>
                              <i
                                class="eliminar-img bi bi-trash3-fill"
                                @click="clearImages"
                                v-if="uploadedImages.length > 0"
                                style="
                                  color: #a07261;
                                  cursor: pointer;
                                  margin-left: 5px;
                                  font-size: 20px;
                                "
                              ></i>
                            </div>
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
                    ><input
                      class="form-control"
                      type="text"
                      id="n_producto"
                      placeholder="Nombre"
                      name="n_producto"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-6">
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
                <div class="col-6">
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
      <!-- Espacio para el modal de edicion -->
    </div>
    <!-- Final Fromularío-->
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // Definir el estado del componente
    const uploadedImages = ref([]); // Almacenar las imágenes cargadas
    const imagesSelected = ref(0); // Contador de imágenes seleccionadas

    const productos = ref([
      {
        codigo: 101,
        estado: "Activo",
        producto: "Chocolate sin azúcar",
        precio: 50000,
        preciodis: 40000,
      },
      {
        codigo: 101,
        estado: "Activo",
        producto: "Chocolate sin azúcar",
        precio: 50000,
        preciodis: 40000,
      },
    ]);

    // Métodos del componente
    const handleFileUpload = (event) => {
      if (imagesSelected.value >= 4) {
        // Límite de 4 imágenes alcanzado, no permitir más
        return;
      }

      const fileInput = event.target;
      const files = fileInput.files;

      // Recorrer los archivos seleccionados
      for (let i = 0; i < files.length; i++) {
        if (imagesSelected.value >= 4) {
          // Límite de 4 imágenes alcanzado, no permitir más
          break;
        }

        const file = files[i];
        const imageURL = URL.createObjectURL(file);

        uploadedImages.value.push({ src: imageURL, alt: "Imagen" });
        imagesSelected.value++;
      }

      // Limpiar el campo de entrada de archivos si es necesario
      fileInput.value = "";
    };

    const clearImages = () => {
      // Restablecer el array de imágenes cargadas y el contador
      uploadedImages.value = [];
      imagesSelected.value = 0;
    };

    const eliminarProducto = (index) => {
      productos.value.splice(index, 1);
    };

    // Retorna los datos y métodos que serán utilizados en el componente
    return {
      uploadedImages,
      imagesSelected,
      productos,
      handleFileUpload,
      clearImages,
      eliminarProducto,
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
  transform: scale(1.3); /* Cambia el tamaño al pasar el mouse */
}

.eliminar-img {
  position: relative;
  margin-top: 20px;
  transition: 1s;
}

.eliminar-img:hover {
  position: relative;
  margin-top: 20px;
  transform: scale(1.3); /* Cambia el tamaño al pasar el mouse */
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
  width: 70px;
  height: 70px;
  overflow: hidden; /* Para manejar el desbordamiento de la imagen */
  object-fit: cover;
  border-style: solid;
  border-color: #a0726114;
  box-shadow: 0px 0px 3px 0px rgb(0, 0, 0, 0.75);
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
