<template>
  <div class="galeria">
    <div class="Hoteles"><h5>Informe general</h5></div>
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
              id="filtro_general"
              name="filtro_general"
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
          <thead>
            <tr>
              <th></th>
              <th colspan="2">Ventas</th>
              <th colspan="2">Gastos</th>
            </tr>
            <tr>
              <th scope="col">Fecha</th>
              <th>Nombre</th>
              <th>Valor</th>
              <th>Nombre</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <th>{{ item.fecha }}</th>
              <td>{{ item.venta.nombre }}</td>
              <td>{{ item.venta.valor }}</td>
              <td>{{ item.gasto.nombre }}</td>
              <td>{{ item.gasto.valor }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Balance</th>
              <td colspan="2">{{ totalVentas }}</td>
              <td colspan="2">{{ totalGastos }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p style="font-size: 12px; background-color: #a07261; color: #fff; margin-left: 26%; padding: 10px;" class="text-center">
        Ganancia: {{ totalVentas - totalGastos }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      items: [
        {
          fecha: "2023-11-01",
          venta: { nombre: "Chocolate", valor: "$500" },
          gasto: { nombre: "Empaques", valor: "$0" },
        },
        {
          fecha: "2023-11-02",
          venta: { nombre: "Chocolate", valor: "$100" },
          gasto: { nombre: "Empaques", valor: "$200" },
        },
        {
          fecha: "2023-11-03",
          venta: { nombre: "Chocolate", valor: "$200" },
          gasto: { nombre: "Empaques", valor: "$0" },
        },
        {
          fecha: "2023-11-04",
          venta: { nombre: "Chocolate", valor: "$100" },
          gasto: { nombre: "Empaques", valor: "$200" },
        },
        {
          fecha: "2023-11-05",
          venta: { nombre: "Chocolate", valor: "$100" },
          gasto: { nombre: "Empaques", valor: "$400" },
        },
      ],
    };
  },
  computed: {
    totalVentas() {
      return this.items.reduce(
        (total, item) =>
          total +
          parseFloat(item.venta.valor.replace("$", "").replace(",", ".")),
        0
      );
    },
    totalGastos() {
      return this.items.reduce(
        (total, item) =>
          total +
          parseFloat(item.gasto.valor.replace("$", "").replace(",", ".")),
        0
      );
    },
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
