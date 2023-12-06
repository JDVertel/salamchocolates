<template>
  <div class="galeria">
    <div class="Hoteles"><h5>Inventario</h5></div>
    <!-- Inicio Fromularío-->
    <div class="container" style="margin-top: 20px; margin-bottom: 20px">
      <!-- Inicio Card y Tabla -->
      <div class="col-sm-12 col-md-12">
        <form enctype="multipart/form-data" method="post">
          <div class="card shadow mb-3">
            <div class="card-header py-3">
              <p class="text-primary m-0 fw-bold">
                <span style="color: #a07261">Productos en inventario</span>
              </p>
            </div>
            <div class="container mt-3">
              <button
                class="btn-sm btn-custom btn"
                type="button"
                style="background: #a07261; color: #fff; border-radius: 100px"
              >
                <i class="bi bi-check-circle"></i>
                Finalizar cambios
              </button>
            </div>

            <div class="card-body">
              <div style="font-size: 12px" class="table-responsive">
                <table class="table table-bordered">
                  <thead style="align-items: center; text-align: center">
                    <tr>
                      <th>Código</th>
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
                          v-model="cantidadStock"
                          class="cantidad"
                          type="number"
                          id="stock"
                          name="stock"
                          required=""
                        />
                      </td>

                      <td>
                        <div class="btns btn-group" role="group">
                          <button
                            type="button"
                            class="btns btn"
                            @click="eliminarProducto(index)"
                          >
                            <i class="bi bi-trash3-fill"></i>
                          </button>
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
      <!-- Final Card y Tabla -->
    </div>
    <!-- Final Fromularío-->
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const productos = ref([
      {
        codigo: 101,
        producto: "Chocolate sin azúcar",
        precio: 50000,
      },
      {
        codigo: 101,
        producto: "Chocolate sin azúcar",
        precio: 50000,
      },
    ]);

    const cantidadStock = ref(1);

    const eliminarProducto = (index) => {
      productos.value.splice(index, 1);
    };

    return {
      productos,
      eliminarProducto,
      cantidadStock,
    };
  },
};
</script>

<style scoped>
.btns.btn-group button {
  transition: transform 0.3s ease-in-out;
}

.btns.btn-group button:hover i {
  transform: rotate(45deg);
}

.button-search {
  position: relative;
}

.button-search i {
  transition: transform 0.3s;
}

.button-search:hover i {
  transform: scale(1.2);
  animation: searching 1s infinite;
}

@keyframes searching {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: scaleX(1);
  }
  40% {
    transform: scaleX(0);
  }
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

.cantidad {
  border-style: none;
  max-width: 100px;
  font-size: 12px;
  text-align: center;
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
