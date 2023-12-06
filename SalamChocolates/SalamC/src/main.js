import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
// import './style.css'

//componentes

// Navbar (Elementos que se muestran siempre)
import App from "./App.vue";

// Pagina principal o home
import Home from "../src/components/Home.vue";

// Vitrina
import Vitrina from "../src/components/Vitrina.vue";

// Panel Admin
import PanelAdmin from "../src/components/Administracion/PanelAdmin.vue";

// Ventas
import RegistroVentas from "../src/components/Administracion/Ventas/RegistroVentas.vue";

// Gastos
import RegistroGastos from "../src/components/Administracion/Gastos/RegistroGastos.vue";

// Clientes
import RegistroClientes from "../src/components/Administracion/Clientes/RegistroClientes.vue";
import VisualizarClientes from "../src/components/Administracion/Clientes/VisualizarClientes.vue";

// Inventario
import RegistroProductos from "../src/components/Administracion/Inventario/RegistroProductos.vue";
import VisualizarProductos from "../src/components/Administracion/Inventario/VisualizarProductos.vue";

// Informes
import Ventas from "../src/components/Administracion/Informes/Ventas.vue";
import Gastos from "../src/components/Administracion/Informes/Gastos.vue";
import General from "../src/components/Administracion/Informes/General.vue";

// Definir rutas
const routes = [
  {
    path: "/",
    component: Home,
  },

  // Vitrina
  { path: "/Vitrina", component: Vitrina },

  // Panel Admin
  { path: "/PanelAdmin", component: PanelAdmin },

  // Ventas
  { path: "/RegistroVentas", component: RegistroVentas },

  // Gastos
  { path: "/RegistroGastos", component: RegistroGastos },

  // Clientes
  { path: "/RegistroClientes", component: RegistroClientes },
  { path: "/VisualizarClientes", component: VisualizarClientes },

  // Inventario
  { path: "/RegistroProductos", component: RegistroProductos },
  { path: "/VisualizarProductos", component: VisualizarProductos },

  // Informes
  { path: "/Ventas", component: Ventas },
  { path: "/Gastos", component: Gastos },
  { path: "/General", component: General },
];

//objeto rutas - vue router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//instancia de vue
const app = createApp(App);

app.use(router);

app.mount("#app");
