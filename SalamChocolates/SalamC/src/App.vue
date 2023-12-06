<template>
  <!-- Start: Navbar With Button -->
  <nav
    class="navbar navbar-expand-md py-3"
    style="
      background: linear-gradient(
        to left,
        rgb(246, 246, 246),
        rgb(219, 219, 219)
      );
    "
  >
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#"
        ><span
          class="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"
          style="background: #a07261"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            class="bi bi-cup-hot-fill"
          >
            <path
              fill-rule="evenodd"
              d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"
            />
            <path
              d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"
            ></path></svg></span
        ><span>Salam Chocolates</span></a
      ><button
        data-bs-toggle="collapse"
        class="navbar-toggler"
        data-bs-target="#navcol-1"
      >
        <span class="visually-hidden">Toggle navigation</span
        ><span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navcol-1">
        <ul class="navbar-nav me-auto">
          <router-link class="link" to="/"
            ><li class="nav-item">
              <a class="nav-link"
                ><i style="color: black" class="bi bi-house-fill"></i> Inicio</a
              >
            </li></router-link
          >

          <router-link class="link" to="/Vitrina"
            ><li class="nav-item">
              <a class="nav-link"
                ><i style="color: black" class="bi bi-basket2"></i> Vitrina</a
              >
            </li></router-link
          >

          <router-link class="link" to="/PanelAdmin"
            ><li class="nav-item">
              <a class="nav-link"
                ><i style="color: black" class="bi bi-gem"></i> Admin</a
              >
            </li></router-link
          >

          <router-link class="link" to="/PanelAdmin"
            ><li class="nav-item">
              <a
                class="nav-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#carrito"
                ><i style="color: black" class="bi bi-cart-fill"></i> Carrito</a
              >
            </li></router-link
          >
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#login"
              ><i style="color: black" class="bi bi-person-plus-fill"></i>
              Entrar</a
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- Modal que hace de Carrito -->
    <div class="modal fade modal-small" id="carrito" tabindex="-1">
      <div class="modal-dialog modal-lg modal-right">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i
                style="color: black; margin-right: 5px"
                class="bi bi-cart-fill"
              ></i
              >Por comprar
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <center>
              <ul id="carrito-lista" class="list-group">
                <div
                  style="padding: 10px 0px 0px; border-radius: 5px"
                  id="habitaciones"
                  class="mb-3"
                >
                  <!-- Item 1 -->
                  <div
                    style="margin-bottom: 10px"
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p style="width: 120px" class="mb-0 limit-text">
                      Chocolate para taza
                    </p>
                    <span
                      class="badge custom-badge badge-pill"
                      style="background-color: #a0726114; color: rgb(0, 0, 0)"
                      >2</span
                    >
                    <span
                      class="badge custom-badge badge-pill"
                      style="
                        background-color: #a0726114;
                        color: rgb(0, 0, 0);
                        width: 70px;
                      "
                      >$100.000
                    </span>

                    <span
                      class="badge custom-badge badge-pill"
                      style="
                        background-color: #a07261;
                        color: rgb(255, 255, 255);
                      "
                      ><i class="bi bi-trash"></i
                    ></span>
                  </div>

                  <!-- Item 2 -->
                  <div
                    style="margin-bottom: 0px"
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p style="width: 120px" class="mb-0 limit-text">
                      Chocolate sin azucar
                    </p>
                    <span
                      class="badge custom-badge badge-pill"
                      style="background-color: #a0726114; color: rgb(0, 0, 0)"
                      >1</span
                    >
                    <span
                      class="badge custom-badge badge-pill"
                      style="
                        background-color: #a0726114;
                        color: rgb(0, 0, 0);
                        width: 70px;
                      "
                      >$50.000</span
                    >

                    <span
                      class="badge custom-badge badge-pill"
                      style="
                        background-color: #a07261;
                        color: rgb(255, 255, 255);
                      "
                      ><i class="bi bi-trash"></i
                    ></span>
                  </div>

                  <!-- Item 3 -->
                  <div
                    style="margin-top: 10px"
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p style="width: 120px" class="mb-0 limit-text">
                      Chocolate en polvo
                    </p>
                    <span
                      class="badge custom-badge badge-pill"
                      style="background-color: #a0726114; color: rgb(0, 0, 0)"
                      >1</span
                    >
                    <span
                      class="badge custom-badge badge-pill"
                      style="
                        background-color: #a0726114;
                        color: rgb(0, 0, 0);
                        width: 70px;
                      "
                      >$50.000</span
                    >

                    <span
                      class="badge custom-badge badge-pill"
                      style="
                        background-color: #a07261;
                        color: rgb(255, 255, 255);
                      "
                      ><i class="bi bi-trash"></i
                    ></span>
                  </div>
                </div>
              </ul>
            </center>

            <hr />

            <div style="margin-bottom: -10px" class="text-center">
              <p
                id="precioTotalModal"
                style="
                  font-size: 12px;
                  font-weight: bold;
                  background-color: #a0726114;
                  color: rgb(0, 0, 0);
                  padding: 6px;
                  border-radius: 5px;
                  display: inline-block;
                  height: 31px;
                  margin-right: 10px;
                "
                class="text-center"
              >
                Total: $200.000
              </p>
              <button
                style="border-radius: 5px"
                type="button"
                class="btn btn-custom btn-sm"
                id="pagarReservas"
              >
                <i class="bi bi-cart"></i>
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal que hace de carrito de compras -->

    <!-- Modal que hace de login -->
    <div
      class="modal fade modal-small modal-transparent"
      id="login"
      tabindex="-1"
    >
      <div class="modal-dialog modal-lg modal-right">
        <div class="modal-content">
          <div class="modal-body">
            <!-- Start: Login Form Basic -->
            <section class="position-relative py-1 py-xl-1">
              <div class="container">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="card mb-5">
                    <div
                      class="card-body d-flex flex-column align-items-center"
                    >
                      <center>
                        <a
                          ><span class="titulos-sidebar fs-2"
                            >Salam <i class="bi bi-cup-hot-fill"></i>
                            <h6 class="lema-sidebar">
                              Chocolate 100% natural
                            </h6></span
                          ></a
                        >
                        <hr class="custom-hr-login" />
                      </center>
                      <br />
                      <form class="text-center" method="post">
                        <div class="mb-3">
                          <input
                            class="form-control"
                            type="email"
                            name="email"
                            placeholder="Tu correo"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            class="form-control"
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            required
                            minlength="8"
                            maxlength="10"
                          />
                        </div>
                        <center>
                          <div class="mb-3">
                            <button class="btn btn-custom d-block">
                              <i
                                style="margin-right: 5px"
                                class="iconos-botones bi bi-person-add"
                              ></i
                              >Iniciar sesión
                            </button>
                          </div>
                        </center>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal que hace de login -->
  </nav>
  <!-- End: Navbar With Button -->
  <router-view></router-view>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "App",
  props: {
    msg: String,
  },
  components: { RouterLink },
};
</script>

<style scoped>
.modal-transparent .modal-content {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
.titulos-sidebar {
  color: #a07261;
}

.lema-sidebar {
  color: rgba(0, 0, 0, 0.645);
}

input {
  border-color: #e9e9e9b3;
}

.card {
  border-style: none;
}

button {
  border-radius: 20px;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #a0726114;
  text-align: center;
}

.btn.btn-custom {
  background-color: #a07261;
  border-radius: 10px;
  color: #fff;
}

.btn.btn-customwhat {
  background-color: #10bd10;
  border-radius: 20px;
  color: #fff;
}

.limit-text {
  max-width: 150px; /* Define el ancho máximo */
  word-wrap: break-word; /* Permite saltos de línea en palabras largas */
  line-height: 1.2; /* Ajusta el espaciado entre líneas */
  font-size: 12px;
  font-weight: bold;
  text-align: start;
}

/* Estilo para el modal más pequeño */
.modal-small .modal-dialog {
  max-width: 300px; /* Establece el ancho deseado */
  margin: 0 auto; /* Centra horizontalmente el modal */
  top: 50%; /* Coloca el modal en el centro vertical */
  transform: translateY(-50%); /* Alinea verticalmente el modal */
}
.link {
  text-decoration: none !important;
}
.bs-icon {
  --bs-icon-size: 0.75rem;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: var(--bs-icon-size);
  width: calc(var(--bs-icon-size) * 2);
  height: calc(var(--bs-icon-size) * 2);
  color: var(--bs-primary);
}

.bs-icon-sm {
  --bs-icon-size: 1rem;
}

.bs-icon.bs-icon-primary {
  color: var(--bs-white);
  background: var(--bs-primary);
}

.bs-icon.bs-icon-primary-light {
  color: var(--bs-primary);
  background: rgba(var(--bs-primary-rgb), 0.2);
}

.bs-icon.bs-icon-semi-white {
  color: var(--bs-primary);
  background: rgba(255, 255, 255, 0.5);
}

.bs-icon.bs-icon-rounded {
  border-radius: 0.5rem;
}

.bs-icon.bs-icon-circle {
  border-radius: 50%;
}

hr {
  border: none; /* Quita el borde predeterminado */
  background-color: #a07261; /* Cambia el color de fondo a azul (puedes usar cualquier color que desees) */
  height: 2px; /* Define el grosor de la línea horizontal */
  margin-top: 10px;
}

.custom-hr-login {
  border: none; /* Quita el borde predeterminado */
  background-color: #a07261; /* Cambia el color de fondo a azul (puedes usar cualquier color que desees) */
  height: 2px; /* Define el grosor de la línea horizontal */
  margin-bottom: -5px;
  margin-top: 15px;
}
</style>
