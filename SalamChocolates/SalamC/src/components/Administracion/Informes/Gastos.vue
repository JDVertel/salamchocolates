<template>
  <div class="galeria">
    <div class="Hoteles"><h5>Informe de gastos</h5></div>
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
        <!-- <div style="display: inline-block">
          <div class="input-group-sm">
            <span
              style="background-color: #a07261; color: #fff; font-size: 12px"
              class="input-group-text"
              id="addon-wrapping"
              >Filtrar por</span
            >

            <select
              style="width: 110px; font-size: 12px"
              class="form-select"
              id="filtro_ventas"
              name="filtro_ventas"
            >
              <option value="2">Vendedor</option>
              <option value="3">Precio</option>
              <option value="4">Cantidad</option>
            </select>
          </div>
        </div> -->
      </div>

      <!-- Tabla -->
      <div style="font-size: 12px" class="table-responsive">
        <table class="table table-bordered">
          <thead style="align-items: center; text-align: center">
            <tr>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Detalles</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(venta, index) in ventasFiltradas" :key="index">
              <td>{{ venta.fecha }}</td>
              <td>{{ venta.tipo }}</td>
              <td>{{ venta.costo }}</td>
              <td>{{ venta.detalles }}</td>
              <td>{{ venta.descripcion }}</td>
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
        tipo: "Servicio de agua",
        costo: 80000,
        detalles: "aaaaaaaaaaaaaaaaaa",
        descripcion: "aaaaaaaaaaaaaaaaaa",
      },
      {
        fecha: "2023-11-01",
        tipo: "Arriendo",
        costo: 400000,
        detalles: "aaaaaaaaaaaaaaaaaa",
        descripcion: "aaaaaaaaaaaaaaaaaa",
      },
      {
        fecha: "2023-11-01",
        tipo: "Empaques",
        costo: 200000,
        detalles: "aaaaaaaaaaaaaaaaaa",
        descripcion: "aaaaaaaaaaaaaaaaaa",
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
      // Agrega tus métodos al retorno
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
