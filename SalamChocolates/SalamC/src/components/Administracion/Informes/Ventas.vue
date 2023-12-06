<template>
  <div class="galeria">
    <div class="Hoteles"><h5>Informe de ventas</h5></div>
    <div>
      <!-- Fechas -->
      <div style="text-align: center; margin-top: 20px">
        <div style="margin-bottom: 20px; display: inline-block">
          <div style="margin-right: 10px" class="input-group-sm">
            <span
              style="background-color: #a07261; color: #fff; font-size: 12px"
              class="input-group-text"
              id="addon-wrapping"
              >Inicio</span
            >
            <input
              style="width: 105px; font-size: 12px"
              type="date"
              class="form-control"
              v-model="fechaInicio"
            />
          </div>
        </div>

        <div style="display: inline-block">
          <div style="margin-right: 10px" class="input-group-sm">
            <span
              style="background-color: #a07261; color: #fff; font-size: 12px"
              class="input-group-text"
              id="addon-wrapping"
              >Final</span
            >
            <input
              style="width: 105px; font-size: 12px"
              type="date"
              class="form-control"
              v-model="fechaFin"
            />
          </div>
        </div>
      </div>

      <!-- Tabla -->
      <div style="font-size: 12px" class="table-responsive">
        <table class="table table-bordered">
          <thead style="align-items: center; text-align: center">
            <tr>
              <th>Fecha</th>
              <th>Código</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
              <th>Vendedor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(venta, index) in ventasFiltradas" :key="index">
              <td>{{ venta.fecha }}</td>
              <td>{{ venta.codigo }}</td>
              <td>{{ venta.producto }}</td>
              <td>{{ venta.cantidad }}</td>
              <td>{{ venta.precioUnitario }}</td>
              <td>{{ venta.total }}</td>
              <td>{{ venta.vendedor }}</td>
              <td>
                <div class="btn-container">
                  <button
                    type="button"
                    class="btns btn btn-dark"
                    @click="eliminarVenta(index)"
                  >
                    <i class="material-icons">delete</i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const ventas = ref([
      {
        fecha: "2023-11-01",
        codigo: "102",
        producto: "Chocolate negro",
        cantidad: 10,
        precioUnitario: 50000,
        total: 500000,
        vendedor: "Sigifredo Naranjo",
      },
      {
        fecha: "2023-11-03",
        codigo: "103",
        producto: "Chocolate con leche",
        cantidad: 8,
        precioUnitario: 50000,
        total: 400000,
        vendedor: "Adriana Marín",
      },
    ]);

    const fechaInicio = ref("");
    const fechaFin = ref("");

    const ventasFiltradas = computed(() => {
      return ventas.value.filter((venta) => {
        if (fechaInicio.value && fechaFin.value) {
          return (
            venta.fecha >= fechaInicio.value && venta.fecha <= fechaFin.value
          );
        }
        return true; // Si no se seleccionan fechas, muestra todas las ventas
      });
    });

    const eliminarVenta = (index) => {
      ventas.value.splice(index, 1);
    };

    // Agrega tus métodos aquí

    return {
      ventas,
      fechaInicio,
      fechaFin,
      ventasFiltradas,
      eliminarVenta,
    };
  },
};
</script>

<style scoped>
/* Estilo para el modal más pequeño */
.modal-small .modal-dialog {
  max-width: 400px; /* Establece el ancho deseado */
  margin: 0 auto; /* Centra horizontalmente el modal */
  top: 50%; /* Coloca el modal en el centro vertical */
  transform: translateY(-50%); /* Alinea verticalmente el modal */
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
  padding: 5px;
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
