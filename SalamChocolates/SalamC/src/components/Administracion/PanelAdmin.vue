<template>
  <!-- Inicio de scroll de hoteles y sitios -->
  <main>
    <div class="galeria">
      <div class="Hoteles"><h5>Administrar</h5></div>

      <div
        class="accordion animate__animated animate__fadeInLeft"
        id="miAcordeon"
      >
        <!-- Acordeón para Registrar Venta y Registro de Ventas -->
        <div style="border-radius: 0px" class="accordion-item">
          <h2 class="accordion-header" id="ventaRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#ventaRegistroCollapse"
              aria-expanded="true"
              aria-controls="ventaRegistroCollapse"
            >
              <i
                style="color: black; font-size: 1.5em; margin-right: 10px"
                class="bi bi-bag-check"
              ></i>
              Ventas
            </button>
          </h2>
          <div
            id="ventaRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="ventaRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body">
              <div class="contenedor">
                <center>
                  <div class="contenedor-conciertos">
                    <router-link class="lg4" to="/RegistroVentas">
                      <div class="card" style="background-color: #ffffff">
                        <div class="textos">
                          <center><h6>Registro de Ventas</h6></center>

                          <i
                            style="color: black; font-size: 4.5em"
                            class="bi bi-bag-plus-fill"
                          ></i>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>

        <!-- Acordeón para registro y visualizacioón de GASTOS -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="gastosRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#gastosRegistroCollapse"
              aria-expanded="false"
              aria-controls="gastosRegistroCollapse"
            >
              <i
                style="color: black; font-size: 1.5em; margin-right: 10px"
                class="bi bi-cart-check"
              ></i>
              Gastos
            </button>
          </h2>
          <div
            id="gastosRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="gastosRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body">
              <div class="contenedor">
                <center>
                  <div class="contenedor-conciertos">
                    <router-link class="lg4" to="/RegistroGastos">
                      <div class="card" style="background-color: #ffffff">
                        <div class="textos">
                          <center><h6>Registro de Gastos</h6></center>

                          <i
                            style="color: black; font-size: 4.5em"
                            class="bi bi-cart-plus-fill"
                          ></i>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>

        <!-- Acordeón para Registro de Clientes -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="clientesRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#clientesRegistroCollapse"
              aria-expanded="false"
              aria-controls="clientesRegistroCollapse"
            >
              <i
                style="color: black; font-size: 1.5em; margin-right: 10px"
                class="bi bi-person-check"
              ></i>
              Clientes
            </button>
          </h2>
          <div
            id="clientesRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="clientesRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body">
              <div class="contenedor">
                <center>
                  <div class="contenedor-conciertos">
                    <router-link class="lg4" to="/RegistroClientes">
                      <div class="card" style="background-color: #ffffff">
                        <div class="textos">
                          <center><h6>Registro de Clientes</h6></center>

                          <i class="material-icons">group_add</i>
                        </div>
                      </div>
                    </router-link>

                    <router-link class="lg4" to="/VisualizarClientes">
                      <div class="card" style="background-color: #ffffff">
                        <div class="textos">
                          <center><h6>Visualizar Clientes</h6></center>

                          <i class="material-icons">group</i>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>

        <!-- Acordeón para Registro de Inventario/Productos -->
        <div style="border-radius: 0px" class="accordion-item">
          <h2 class="accordion-header" id="InventarioRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#InventarioRegistroCollapse"
              aria-expanded="false"
              aria-controls="InventarioRegistroCollapse"
            >
              <i
                style="color: black; font-size: 1.5em; margin-right: 10px"
                class="bi bi-clipboard-check"
              ></i>
              Inventario
            </button>
          </h2>
          <div
            id="InventarioRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="InventarioRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body">
              <div class="contenedor">
                <center>
                  <div class="contenedor-conciertos">
                    <router-link class="lg4" to="/RegistroProductos">
                      <div class="card" style="background-color: #ffffff">
                        <div class="textos">
                          <center><h6>Registro de Productos</h6></center>

                          <i
                            style="color: black; font-size: 4.5em"
                            class="bi bi-clipboard-plus-fill"
                          ></i>
                        </div>
                      </div>
                    </router-link>

                    <router-link class="lg4" to="/VisualizarProductos">
                      <div class="card" style="background-color: #ffffff">
                        <div class="textos">
                          <center><h6>Inventario</h6></center>

                          <i
                            style="color: black; font-size: 4.5em"
                            class="bi bi-clipboard-fill"
                          ></i>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>

        <!-- Acordeón para Informe de Ventas -->
        <div style="border-radius: 0px" class="accordion-item">
          <h2 class="accordion-header" id="InfomesRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#InfomesRegistroCollapse"
              aria-expanded="false"
              aria-controls="InfomesRegistroCollapse"
            >
              <i
                style="color: black; font-size: 1.5em; margin-right: 10px"
                class="bi bi-clipboard-data"
              ></i>
              Informes
            </button>
          </h2>
          <div
            id="InfomesRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="InfomesRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body">
              <div class="contenedor">
                <center>
                  <div class="contenedor-conciertos">
                    <router-link class="lg4" to="/Ventas">
                      <div class="card" style="background-color: #ffffff">
                        <div class="textos">
                          <center><h6>Informe de Ventas</h6></center>

                          <i
                            style="color: black; font-size: 4.5em"
                            class="bi bi-clipboard-data-fill"
                          ></i>
                        </div>
                      </div>
                    </router-link>

                    <router-link class="lg4" to="/Gastos">
                      <div class="card" style="background-color: #ffffff">
                        <div class="textos">
                          <center><h6>Informe de Gastos</h6></center>

                          <i
                            style="color: black; font-size: 4.5em"
                            class="bi bi-clipboard-data-fill"
                          ></i>
                        </div>
                      </div>
                    </router-link>

                    <router-link class="lg4" to="/General">
                      <div class="card" style="background-color: #ffffff">
                        <div class="textos">
                          <center><h6>Informe General</h6></center>

                          <i
                            style="color: black; font-size: 4.5em"
                            class="bi bi-clipboard-data-fill"
                          ></i>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script></script>

<style scoped>
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

.lg4 {
  text-decoration: none;
  color: white;
}
.material-icons {
  font-size: 5em;
  margin-top: 5%;
  /* color: teal; */
}
.contenedor {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 40px 0;

  /* Flexbox */
  /* display: flex;
      gap: 20px; */

  /* Grid */
  display: grid;
  grid-template-columns: 3fr;
  gap: 20px;
}

.contenedor-conciertos {
  /* Flexbox */
  /* width: 70%;
      display: flex;
      flex-wrap: wrap;
      gap: 20px; */

  /* Grid */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: -30px;
  margin-top: -30px;
}

.card {
  border-radius: 0px;
  min-height: 200px;
  font-weight: bold;
  padding: 20px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center center;

  border-color: #a072615b;
  border-width: 5px;
  border-style: solid;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  /* Flexbox */
  /* width: calc(33.33% - 20px); */
}

.card:hover {
  transform: scale(1.05);
}

.card .textos {
  height: 100%;
  color: #000000;

  /* Flebox */
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  /* Grid */
  /* display: grid;
      grid-template-rows: 1fr auto; */
}

@media screen and (max-width: 900px) {
  .contenedor-conciertos {
    /* Flexbox */
    /* width: 70%;
      display: flex;
      flex-wrap: wrap;
      gap: 20px; */

    /* Grid */
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}

@media screen and (max-width: 700px) {
  .contenedor-conciertos {
    /* Flexbox */
    /* width: 70%;
      display: flex;
      flex-wrap: wrap;
      gap: 20px; */

    /* Grid */
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}

@media screen and (max-width: 600px) {
  .contenedor-conciertos {
    /* Flexbox */
    /* width: 70%;
      display: flex;
      flex-wrap: wrap;
      gap: 20px; */

    /* Grid */
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }

  .material-icons {
    font-size: 4.5em;
    margin-top: 7%;
    /* color: teal; */
  }
}
</style>
