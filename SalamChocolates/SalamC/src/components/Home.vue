<template>
  <!-- Logo -->
  <div style="position: relative" class="logo">
    <img src="https://i.ibb.co/f0znsbL/LOGO-3.png" alt="" />
  </div>

  <div class="galeria-titulo">
    <div class="Hoteles-titulo"><h5 class="titulo">Bienvenidos</h5></div>
    <div class="container-info animate__animated animate__fadeInLeft">
      <div class="row list-unstyled d-flex">
        <!-- Columna 1 -->
        <div class="col-sm-4">
          <div class="text">
            <p
              style="
                padding: 10px;
                background-color: #a0726114;
                box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.352);
                display: flex; /* Alinea horizontalmente los elementos internos */
                align-items: center; /* Centra verticalmente los elementos internos */
              "
            >
              <i
                class="bi bi-patch-check-fill"
                style="font-size: 2rem; margin-right: 10px; color: #408d51"
              ></i>
              Elaborado con productos naturales para cuidar su salud.
            </p>
          </div>
        </div>

        <!-- Columna 2 -->
        <div class="col-sm-4">
          <div class="text">
            <p
              style="
                padding: 10px;
                background-color: #a0726114;
                box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.352);
                display: flex; /* Alinea horizontalmente los elementos internos */
                align-items: center; /* Centra verticalmente los elementos internos */
              "
            >
              <i
                class="bi bi-patch-check-fill"
                style="font-size: 2rem; margin-right: 10px; color: #408d51"
              ></i>
              Sin aditivos, sin conservantes, sin sabores artificiales.
            </p>
          </div>
        </div>

        <!-- Columna 3 -->
        <div class="col-sm-4">
          <div class="text">
            <p
              style="
                padding: 10px;
                background-color: #a0726114;
                box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.352);
                display: flex; /* Alinea horizontalmente los elementos internos */
                align-items: center; /* Centra verticalmente los elementos internos */
              "
            >
              <i
                class="bi bi-patch-check-fill"
                style="font-size: 2rem; margin-right: 10px; color: #408d51"
              ></i>
              En Salam Chocolates, solo Productos 100% artesanales.
            </p>
          </div>
        </div>
      </div>
    </div>

    <center>
      <div class="animate__animated animate__fadeInLeft">
        <router-link class="link" to="/Vitrina">
          <button
            style="margin: 0px 0px 15px 0px"
            type="button"
            class="btn btn-customubi"
          >
            <i class="bi bi-basket2"></i>
            Ver vitrina de productos Salam
          </button>
        </router-link>
      </div>
    </center>
    <section class="showcase animate__animated animate__fadeInLeft">
      <div
        style="
          box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.352);
          background-color: #a0726114;
        "
        class="container-fluid p-0"
      >
        <div class="row g-0">
          <!-- Mapa en la columna izquierda (orden 1) -->
          <div class="col-lg-6 text-white order-lg-1 showcase-img">
            <span></span>
            <iframe
              allowfullscreen=""
              frameborder="0"
              loading="lazy"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDPrljMtKwVsUS1UOXBQoW-VUEshYYpqHc&amp;q=Charal%C3%A1%2C+Santander&amp;zoom=13"
              width="100%"
              height="400"
            ></iframe>
          </div>

          <!-- Datos en la columna derecha (orden 2) -->
          <div class="col-lg-6 my-auto order-lg-2 showcase-text">
            <div
              class="d-flex flex-column justify-content-center align-items-start h-100"
            >
              <!-- Datos -->
              <div class="d-flex align-items-center p-3">
                <!-- Teléfono -->
                <div
                  class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"
                >
                  <i
                    class="bi bi-telephone"
                    style="font-size: 2rem; margin-right: 10px"
                  ></i>
                </div>
                <div class="px-2">
                  <h6 class="mb-0">Teléfono</h6>
                  <p
                    style="
                      background-color: #000000;
                      padding: 0px 10px 0px 10px;
                      color: #fff;
                      font-weight: bolder;
                    "
                    class="mb-0"
                  >
                    3166163979
                  </p>
                </div>
              </div>
              <!-- Horario -->
              <div class="d-flex align-items-center p-3">
                <!-- Icono -->
                <div
                  class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"
                >
                  <i
                    class="bi bi-clock"
                    style="font-size: 2rem; margin-right: 10px"
                  ></i>
                </div>
                <div class="px-2">
                  <h6 class="mb-0">Horario</h6>
                  <p
                    style="
                      background-color: #000000;
                      padding: 0px 10px 0px 10px;
                      color: #fff;
                      font-weight: bolder;
                    "
                    class="mb-0"
                  >
                    Lunes - Viernes 8:00-18:00
                  </p>
                </div>
              </div>
              <!-- Ubicación -->
              <div class="d-flex align-items-center p-3">
                <!-- Icono -->
                <div
                  class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"
                >
                  <i
                    class="bi bi-geo-alt"
                    style="font-size: 2rem; margin-right: 10px"
                  ></i>
                </div>
                <div class="px-2">
                  <h6 class="mb-0">Ubicación</h6>
                  <p
                    style="
                      background-color: #000000;
                      padding: 0px 10px 0px 10px;
                      color: #fff;
                      font-weight: bolder;
                    "
                    class="mb-0"
                  >
                    Charalá Carrera 15 #20-30
                  </p>
                </div>
              </div>

              <!-- Como llegar -->
              <div class="d-flex align-items-center p-3">
                <!-- Icono -->
                <div
                  class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"
                >
                  <i
                    class="bi bi-compass"
                    style="font-size: 2rem; margin-right: 10px"
                  ></i>
                </div>
                <div class="px-2">
                  <h6 class="mb-0">Indicaciones</h6>
                  <p
                    style="
                      background-color: #000000;
                      padding: 0px 10px 0px 10px;
                      color: #fff;
                      font-weight: bolder;
                    "
                    class="mb-0"
                  >
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Charal%C3%A1,%20Santander,%20Colombia"
                      style="color: #fff; text-decoration: none"
                      >Buscar ruta más rápida</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div style="margin-top: 30px" class="Hoteles-titulo">
      <h5 class="titulo">Nosotros</h5>
    </div>
    <div class="row animate__animated animate__fadeInLeft">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div
          style="
            border-radius: 0px;
            background-color: #a0726114;
            box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.352);
          "
          class="card"
        >
          <div class="card-body">
            <h5 class="card-title">Sigifredo Naranjo Toloza</h5>
            <h6
              style="
                font-size: 15px;
                margin-top: -10px;
                font-weight: bold;
                color: #a07261;
              "
            >
              <i class="bi bi-quote" style="font-size: 1rem"></i>
              Socio propietario
            </h6>
            <hr />
            <p class="card-text">
              Debido a mis problemas de salud causados por el consumo de
              chocolates industriales, creé un chocolate artesanal que mejora mi
              salud. Decidí compartir los beneficios con mi familia y amigos, y
              juntos comenzamos a comercializar nuestros productos. Ahora
              ofrecemos un chocolate delicioso y saludable para todos.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div
          style="
            border-radius: 0px;
            background-color: #a0726114;
            box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.352);
          "
          class="card"
        >
          <div class="card-body">
            <h5 class="card-title">Adriana Marín Solano</h5>
            <h6
              style="
                font-size: 15px;
                margin-top: -10px;
                font-weight: bold;
                color: #a07261;
              "
            >
              <i class="bi bi-quote" style="font-size: 1rem"></i>
              Socia propietaria
            </h6>
            <hr />
            <p class="card-text">
              El chocolate siempre ha sido mi debilidad, desde muy pequeña. Sin
              embargo, debido al alto contenido de azúcar que tienen los
              chocolates industrializados, desarrollé alergia al chocolate. Por
              esto, con mi esposo, empezamos a desarrollar un chocolate
              delicioso, nutritivo y saludable para toda la familia.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 30px" class="Hoteles-titulo">
      <h5 class="titulo">Contactenos</h5>
    </div>
    <center>
      <div class="animate__animated animate__fadeInLeft">
        <a href="https://wa.me/3166163979">
          <button
            style="margin-top: 15px; margin-right: 10px"
            type="button"
            class="btn btn-customubi"
          >
            <i class="bi bi-whatsapp"></i>
            Via Whatsapp
          </button></a
        >

        <a href="https://www.instagram.com/salamchocolates/">
          <button style="margin-top: 15px" type="button" class="btn btn-custom">
            <i class="bi bi-instagram"></i>
            Via Instagram
          </button></a
        >
      </div>
    </center>
  </div>
</template>

<script></script>

<style scoped>
/* Estilos para datos de ubicación */
.d-flex.p-3 {
  transition: transform 0.3s, background-color 0.3s;
  color: #000; /* Color de texto inicial */
}

/* Estilos al pasar el mouse */
.d-flex.p-3:hover {
  transform: scale(1.1);
  background-color: #a07261;
  color: #fff; /* Cambio de color de texto a blanco */
}

/* Estilos para inicio (Bienvenidos) */
.container-info .col-sm-4 {
  transition: transform 0.3s; /* Transición para la propiedad "transform" */
}

/* Estilos para el hover */
.container-info .col-sm-4:hover {
  transform: scale(1.05);
}

/* Estilos para el ícono en el estado normal (sin hover) */
.container-info .col-sm-4 i {
  transition: transform 0.3s; /* Transición para el ícono en el estado normal */
  color: #000;
}

/* Estilos para el ícono en el hover */
.container-info .col-sm-4:hover i {
  transform: scale(1.5);
  color: #a07261 !important;
}

/* Botones*/
.btn.btn-custom {
  background-color: #a07261;
  border-radius: 20px;
  color: #fff;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
}

.btn.btn-custom:hover {
  color: #fff;
  transform: scale(1.1);
}

.btn.btn-customubi {
  background-color: #408d51;
  border-radius: 20px;
  color: #fff;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
}

.btn.btn-customubi:hover {
  background-color: #2a6238;
  color: #fff;
  transform: scale(1.1);
}

.modal-small .modal-dialog {
  transform: translateY(0%); /* Alinea verticalmente el modal */
}

.custom-hr {
  border: none; /* Elimina la línea predeterminada */
  height: 2px; /* Ajusta el grosor de la línea */
  background-color: #a07261; /* Cambia el color de fondo de la línea */
  margin-top: 30px; /* Establece el margen superior */
}

/* Estilos para el logotipo */
.logo {
  text-align: center; /* Centra la imagen horizontalmente */
  margin-bottom: -60px;
}

.logo img {
  object-fit: cover; /* Ajusta la imagen para llenar el espacio sin deformación */
  height: 180px;
}

body {
  margin: 0;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.contenedor-imagenes {
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: space-around;
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 20px;
}

.contenedor-imagenes .imagen {
  width: 32%;
  position: relative;
  height: 250px;
  margin-bottom: 5px;
  border-style: solid;
  border-color: #a0726114;
  box-shadow: 0px 0px 3px 0px rgb(0, 0, 0, 0.75);
}

.contenedor-imagenes-Modal {
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: space-around;
  flex-wrap: wrap;

  padding: 20px;
}

.contenedor-imagenes-Modal .imagen {
  width: 32%;
  position: relative;
  height: 250px;
  margin-bottom: 5px;
  border-style: solid;
  border-color: #a0726114;
  box-shadow: 0px 0px 3px 0px rgb(0, 0, 0, 0.75);
}

.imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #a0726172;
  width: 100%;
  height: 0%;
  transition: 0.5s ease;
  overflow: hidden;
  border-radius: 0px;
}

.overlay .round-btn2 {
  color: #fff;
  font-weight: 30;
  font-size: 20px;
  position: absolute;
  top: 50%;
  right: -5px;
  text-align: center;
  transform: translate(-50%, -50%);
}

.round-btn2 {
  border-radius: 50%; /* Hace que el botón sea redondo */
  width: 25px; /* Define el ancho del botón */
  height: 25px; /* Define la altura del botón */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px; /* Tamaño del icono */
  background-color: #a07261;
  border-style: none;
}

.overlay h3 {
  color: #fff;
  font-weight: 30;
  font-size: 20px;
  position: absolute;
  top: 10%;
  left: 50%;
  text-align: center;
  border-radius: 0px;
  transform: translate(-50%, -50%);
}

.imagen:hover .overlay {
  height: 15%;
  cursor: pointer;
}

h2 {
  display: inline-flex;
  align-items: center;
  background-color: #a07261b1;
  border-radius: 10px;
  padding: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

h3 {
  display: inline-flex;
  align-items: center;
  background-color: #a07261b1;
  background: linear-gradient(to left, #a07261, transparent);
  border-radius: 10px;
  padding: 2px;
}

.Hoteles-titulo {
  background: linear-gradient(to right, #a07261, transparent);
  align-items: center;
  transition: 1s;
}

.titulo {
  padding: 5px;
  margin-left: 5px;
  color: #fff;
}

.galeria-titulo {
  padding: 25px;
  margin-top: 20px;
}

@media screen and (max-width: 500px) {
  .Hoteles-titulo {
    background-color: #a07261;
    align-items: left;
  }
}

@media screen and (max-width: 2000px) {
  .contenedor-imagenes-Modal {
    width: 100%;
  }
  .contenedor-imagenes-Modal .imagen {
    width: 80%;
  }

  .contenedor-imagenes-Modal .imagen {
    width: calc(50% - 10px); /* Dividir en filas de 4 con espaciado */
  }

  .contenedor-imagenes {
    width: 90%;
  }

  .contenedor-imagenes .imagen {
    width: calc(25% - 10px); /* Dividir en filas de 4 con espaciado */
  }
}

@media screen and (max-width: 800px) {
  .contenedor-imagenes-Modal {
    width: 100%;
  }
  .contenedor-imagenes-Modal .imagen {
    width: 80%;
  }

  .contenedor-imagenes-Modal .imagen {
    width: calc(50% - 10px);
    /* width: calc(50% - 10px); Dividir en filas de 2 con espaciado */
  }

  .contenedor-imagenes {
    width: 90%;
  }
  .contenedor-imagenes .imagen {
    width: 48%;
  }

  .contenedor-imagenes .imagen {
    width: calc(33.333% - 10px);
    /* width: calc(50% - 10px); Dividir en filas de 2 con espaciado */
  }
}

@media screen and (max-width: 600px) {
  .contenedor-imagenes-Modal {
    width: 100%;
  }
  .contenedor-imagenes-Modal .imagen {
    width: 80%;
  }

  .contenedor-imagenes-Modal .imagen {
    /* width: calc(33.333% - 10px); Dividir en filas de 3 con espaciado */
    width: calc(50% - 10px); /* Dividir en filas de 2 con espaciado */
  }

  /* .overlay {
      height: 100%;
      background-color: #dc773300;
    } */

  .contenedor-imagenes {
    width: 100%;
  }
  .contenedor-imagenes .imagen {
    width: 80%;
  }

  .contenedor-imagenes .imagen {
    /* width: calc(33.333% - 10px); Dividir en filas de 3 con espaciado */
    width: calc(50% - 10px); /* Dividir en filas de 2 con espaciado */
  }
}
</style>
