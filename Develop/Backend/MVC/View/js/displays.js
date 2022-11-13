//#region DISPLAYS
const accordion_Inicio = document.getElementById("flush-headingOne")
const accordion_Clientes = document.getElementById("flush-headingTwo")
const accordion_Agenda = document.getElementById("flush-headingThree")
const accordion_MarketingVip = document.getElementById("flush-headingFour")
const accordion_Ayuda = document.getElementById("flush-headingFive")
const panel_Zone = document.getElementById("panelZone")

const showPanel = (show) => {
    panel_Zone.innerHTML = show
}

//#region INNER PANELES
panel_Inicio_Contabilidad = `
<div class="container-fluid" id="panelInicio">

<div class="row">
  <div class="col">
    <div class="card text-center">
      <div class="card-header text-start">
        INICIO
      </div>
      <div class="card-body">
        <h4 class="card-title text-start">Nombre del administrador</h4>
        <h2 class="card-text">$00.00 Facturado en el mes   -   0 ocupadas / 0 disponibles /0 reservadas  </h2>
      </div>
      <div class="card-footer text-muted text-end">
        Próximos 7 días de actividad
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col">
    <div class="card mt-2">
      <div class="card-body">
        <h5 class="card-title text-center">Reportes</h5>
        <p class="card-text text-center">Elija el periodo que desea visualizar</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Desde</li>
        <li class="list-group-item">Hasta</li>
        <li class="list-group-item">Cabañas</li>
      </ul>
      <div class="card-body text-center">
        <button type="button" class="btn btn-primary">Consulta</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card mt-2">
      <div class="card-body">
        <h5 class="card-title text-center">Egresos</h5>
        <p class="card-text text-center">Añadir un nuevo egreso</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Importe</li>
        <li class="list-group-item">Tipo de egreso</li>
        <li class="list-group-item">Fecha</li>
        <li class="list-group-item">Origen</li>
      </ul>
      <div class="card-body text-center">
        <button type="button" class="btn btn-primary">Añadir</button>
      </div>
    </div>
  </div>
</div>
</div>
`
panel_Inicio_Agenda = `
<div class="container-fluid" id="panelInicio">

<div class="row">
  <div class="col">
    <div class="card text-center">
      <div class="card-header text-start">
        INICIO
      </div>
      <div class="card-body">
        <h4 class="card-title text-start">Nombre del administrador</h4>
        <h2 class="card-text">$00.00 Facturado en el mes - 0 ocupadas / 0 disponibles /0 reservadas </h2>
      </div>
      <div class="card-footer text-muted text-end">
        Próximos 7 días de actividad
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-lg">
    <div class="card mt-2">
      <div class="card-body">
        <h5 class="card-title text-center">Reserva</h5>
        <p class="card-text text-center">Elija el periodo que desea chequear para una nueva reserva</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="idNumPersonas">Complejo
          <select id="ciudadReserva" style="margin-left:7%; width: 80%; height: 30px;">
            <option value="0">Seleccionar opcion...</option>
            <option value="1">Merlo</option>
            <option value="2">Mendoza</option>
            <option value="3">Rosario</option>
          </select>
        </li>
        <li class="list-group-item" id="idNumPersonas">Cabaña
          <select id="ciudadReserva" style="margin-left:9%; width: 80%; height: 30px;">
            <option value="0">Seleccionar opcion...</option>
            <option value="1">Merlo</option>
            <option value="2">Mendoza</option>
            <option value="3">Rosario</option>
          </select>
        </li>
        <li class="list-group-item" id="liFechaIngreso">Desde<input type="date" id="fechaIngreso"
          style="margin-left:11%; width: 80%; height: 30px;"></li>
      <li class="list-group-item" id="liFechaEgreso">Hasta<input type="date" id="fechaEgreso"
          style="margin-left:12%; width: 80%; height: 30px;"></li>
      <li class="list-group-item" id="liNumPersonas">N° Personas
        <select name="NPersonas" id="numPersonas" style="margin-left:4%; width: 80%; height: 30px;">
          <option value="0">Seleccionar opcion...</option>
          <option value="1">1-2</option>
          <option value="2">3-4</option>
          <option value="3">5-6</option>
          <option value="4">7 o más</option>
        </select>
      </li>
      </ul>
      <div class="card-body text-center">
        <!-- Momentaneamente lleva a reserva, luego con back consultará y luego reserva.-->
        <button type="button" class="btn btn-primary" onclick="validarConsultaReserva()">Reserva</button>
        <!-- Función para redireccionar al form reserva. -->

      </div>
    </div>
  </div>
  <div class="col-lg">
    <div class="card mt-2">
      <div class="card-body">
        <h5 class="card-title text-center">Clientes</h5>
        <p class="card-text text-center">Elija el modo de presentación de la tabla</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Antiguedad<select name="Antiguedad"
            style="margin-left:5%; width: 80%; height: 30px;">
            <option>Del mas antiguo al mas nuevo</option>
            <option>Del mas nuevo al mas antiguo</option>
          </select>

        </li>
        <li class="list-group-item">Aportes<select name="Aportes"
            style="margin-left:9%; width: 80%; height: 30px;">
            <option>Del cliente con mas reservas al menor</option>
            <option>Del cliente con menos reservas al mayor</option>
          </select>

        </li>
        <li class="list-group-item">numero de tablas<select name="CantidadTablas"
            style="margin-left:8%; width: 70%; height: 30px;">
            <option>0 - 25</option>
            <option>26 - 50</option>
            <option>51 - 75</option>
          </select>

        </li>
      </ul>
      <div class="card-body text-center">
        <button type="button" class="btn btn-primary">Consulta</button>
      </div>
    </div>
  </div>
</div>
</div>

</div>
</div>
</div>`
panel_Clientes = `
<div class="container" id="panelEgresos">
<div class="row">
  <div class="col">
    <div class="card text-center">
      <div class="card-header text-start">
        AGREGAR NUEVO CLIENTE:
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col">
            <label for="enabledSelect" class="form-label"><h1>INFLO CLI 1</h1></label>
            <select id="ensabledSelect" class="form-select">
              <option>Todas</option>
            </select>
          </div>
          <div class="col">
            <label for="enabledSelect" class="form-label"><h1>INFLO CLI 2</h1></label>
            <select id="ensabledSelect" class="form-select">
              <option>Todas</option>
            </select>
          </div>
          <div class="col">
            <label for="enabledSelect" class="form-label"><h1>INFO CLI 3</h1></label>
            <select id="ensabledSelect" class="form-select">
              <option>Todas</option>
            </select>
          </div>
          <div class="col">
            <h1>Agregar</h1>
            <button type="button" class="btn btn-primary">Confirmar</button>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted text-end">

      </div>
    </div>
  </div>
</div>
</div>
`
panel_Egresos = `
<div class="container" id="panelEgresos">
<div class="row">
  <div class="col">
    <div class="card text-center">
      <div class="card-header text-start">
        FILTRO DE EGRESOS POR:
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col">
            <label for="enabledSelect" class="form-label"><h1>Tipo de egreso</h1></label>
            <select id="ensabledSelect" class="form-select">
              <option>Todas</option>
            </select>
          </div>
          <div class="col">
            <label for="enabledSelect" class="form-label"><h1>Desde</h1></label>
            <select id="ensabledSelect" class="form-select">
              <option>Todas</option>
            </select>
          </div>
          <div class="col">
            <label for="enabledSelect" class="form-label"><h1>Hasta</h1></label>
            <select id="ensabledSelect" class="form-select">
              <option>Todas</option>
            </select>
          </div>
          <div class="col">
            <h1>Reporte</h1>
            <button type="button" class="btn btn-primary">Generar reporte</button>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted text-end">

      </div>
    </div>
  </div>
</div>
</div>
`
panel_Reportes = `
<div class="container" id="panelReportes">
<div class="row">
  <div class="col">
    <div class="card text-center">
      <div class="card-header text-start">
        FILTRO DE REPORTES POR:
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col">
            <label for="enabledSelect" class="form-label"><h1>Cabaña</h1></label>
            <select id="ensabledSelect" class="form-select">
              <option>Todas</option>
            </select>
          </div>
          <div class="col">
            <label for="enabledSelect" class="form-label"><h1>Desde</h1></label>
            <select id="ensabledSelect" class="form-select">
              <option>Todas</option>
            </select>
          </div>
          <div class="col">
            <label for="enabledSelect" class="form-label"><h1>Hasta</h1></label>
            <select id="ensabledSelect" class="form-select">
              <option>Todas</option>
            </select>
          </div>
          <div class="col">
            <h1>Reporte</h1>
            <button type="button" class="btn btn-primary">Generar reporte</button>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted text-end">

      </div>
    </div>
  </div>
</div>
</div>
`
panel_Agenda = `
<div class="container-fluid" id="panelAgenda">
<div class="row">
  <div class="col">

    <div class="row">
      <div class="col-3">
        <div class="card" style="width: 15rem;">
          <img src="../img/carpetaPrueba/cabañaPrueba1.jpg" class="card-img-top" 
          alt="..."style="height:15rem">
          <div class="card-body text-center">
            <h5 class="card-title">Cabaña 1</h5>
            <p class="card-text">Merlo - San Luis</p>
            <p class="card-text">3 habitaciones</p>
            <a href="#" class="btn btn-primary">Disponible Ahora</a>
          </div>
        </div>
      </div>
      <div class="col">
        
      </div>
      <div class="col-6">
        10 / 2022
        <ol style="text-align: center; list-style: none; display: grid; grid-template-columns: repeat(7, 1fr); padding: 0px;">
          <li class="day-name">Dom</li>
          <li class="day-name">Lun</li>
          <li class="day-name">Mar</li>
          <li class="day-name">Mie</li>
          <li class="day-name">Jue</li>
          <li class="day-name">Vie</li>
          <li class="day-name">Sab</li>
          <li style="grid-column-start: 7;">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
        </ol>
        <hr>
        <div class="text-end">
          <button type="button" class="btn btn-primary">Nuevo Alquiler</button>
          <button type="button" class="btn btn-success">modifcar fecha</button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <div class="card" style="width: 15rem;">
          <img src="../img/carpetaPrueba/cabañaPrueba2.jpg" class="card-img-top" 
          alt="..."style="height:15rem">
          <div class="card-body text-center">
            <h5 class="card-title">Cabaña 2</h5>
            <p class="card-text">Rosario - Santa Fe</p>
            <p class="card-text">3 habitaciones</p>
            <a href="#" class="btn btn-success">Ocupada 3 días mas</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 15rem;">
          <img src="../img/carpetaPrueba/fotoFamilia1.jpg" class="card-img-top" 
          alt="..."style="height:15rem">
          <div class="card-body text-center">
            <h5 class="card-title">Familia Messi</h5>
            <p class="card-text">clientes frecuentes</p>
            <p class="card-text">Tel: 3413 751398</p>
            <a href="#" class="btn btn-dark">Ver en Clientes</a>
          </div>
        </div>
      </div>
      <div class="col-6">
        10 / 2022
        <ol style="text-align: center; list-style: none; display: grid; grid-template-columns: repeat(7, 1fr); padding: 0px;">
          <li class="day-name">Dom</li>
          <li class="day-name">Lun</li>
          <li class="day-name">Mar</li>
          <li class="day-name">Mie</li>
          <li class="day-name">Jue</li>
          <li class="day-name">Vie</li>
          <li class="day-name">Sab</li>
          <li style="grid-column-start: 7;">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
        </ol>
        <hr>
        <div class="text-end">
          <button type="button" class="btn btn-primary">Nuevo Alquiler</button>
          <button type="button" class="btn btn-success">modifcar fecha</button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <div class="card" style="width: 15rem;">
          <img src="../img/carpetaPrueba/cabañaPrueba3.jpg" class="card-img-top" 
          alt="..."style="height:15rem">
          <div class="card-body text-center">
            <h5 class="card-title">Cabaña 3</h5>
            <p class="card-text">Rio Cuarto - Córdoba</p>
            <p class="card-text">3 habitaciones</p>
            <a href="#" class="btn btn-warning">Se ocupa en 5 días</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 15rem;">
          <img src="../img/carpetaPrueba/fotoFamilia2.jpg" class="card-img-top" 
          alt="..."style="height:15rem">
          <div class="card-body text-center">
            <h5 class="card-title">Familia Corleone</h5>
            <p class="card-text">primera vez</p>
            <p class="card-text">Tel: 3413 751398</p>
            <a href="#" class="btn btn-dark">Ver en Clientes</a>
          </div>
        </div>
      </div>
      <div class="col-6">
        10 / 2022
        <ol style="text-align: center; list-style: none; display: grid; grid-template-columns: repeat(7, 1fr); padding: 0px;">
          <li class="day-name">Dom</li>
          <li class="day-name">Lun</li>
          <li class="day-name">Mar</li>
          <li class="day-name">Mie</li>
          <li class="day-name">Jue</li>
          <li class="day-name">Vie</li>
          <li class="day-name">Sab</li>
          <li style="grid-column-start: 7;">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
        </ol>
        <hr>
        <div class="text-end">
          <button type="button" class="btn btn-primary">Nuevo Alquiler</button>
          <button type="button" class="btn btn-success">modifcar fecha</button>
        </div>
      </div>
    </div>

  </div>

</div>
</div>
`
panel_Marketing = `
<div class="container-fluid" id="panelMarketing">
<h1> panel Marketing </h1>
</div>
`
panel_Ayuda = `
<div class="container-fluid" id="panelAyuda">
<h1> panel Ayuda </h1>
</div>
`
//#endregion
//#endregion     