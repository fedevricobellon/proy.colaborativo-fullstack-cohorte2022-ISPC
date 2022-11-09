CREATE database CabaniApp;
use CabaniApp;

/*Tabla Registro - Usuario*/
CREATE table Usuario (
idUsuario int auto_increment primary key,
emailUsuario varchar(50),
claveUsuario varchar(10),
tipoUsuario varchar(15)
);

/* Tabla Administrador*/
CREATE table Administrador (
idAdmin int auto_increment primary key,
nombreAdmin varchar(50),
apellidoAdmin varchar(50),
dniAdmin int(10),
fechaNacAdmin Date,
telAdmin bigint,
idUsuario2 int,
constraint fk_idUsuario2 foreign key(idUsuario2) references Usuario(idUsuario)
);

/*Tabla de Complejos*/
CREATE table Complejo (
idComplejo int auto_increment primary key,
nombreComplejo varchar(50),
cantCabanias int,
direccionComplejo varchar(50),
numeracionComplejo varchar(20),
ciudadComplejo varchar(20),
provinciaComplejo varchar(20),
formaPagosComplejo varchar(100),
idAdmin1 int,
imagenComplejo varchar(100),
constraint fk_idAdmin1 foreign key(idAdmin1) references Administrador(idAdmin)
);

/*Tabla de Servicios Adicionales del Complejo*/
CREATE table ServicioComplejo (
idServComplejo int auto_increment primary key,
cocheraComplejo varchar (50),
piletaComplejo varchar (50),
barComplejo varchar (50),
ropaBlancaComplejo varchar (50),
excursionComplejo varchar(50),
trasladosComplejo varchar(50),
otrosServComplejo varchar (50),
idComplejo1 int,
constraint fk_idComplejo1 foreign key(idComplejo1) references Complejo(idComplejo)
);

/*Tabla de Cabañas*/
CREATE table Cabania (
idCabania int auto_increment primary key,
nombreCabania varchar(50),
habitacionCab int,
ambienteCab varchar(50),
cantPersonasCab int,
camaCab1 int,
camaCab2 int,
imagenCab varchar(100),
idComplejo2 int,
constraint fk_idComplejo foreign key(idComplejo2) references Complejo(idComplejo)
);

/* Tabla de Servicios Adicionales de Cabañas */
CREATE table ServicioCab (
idServCab int auto_increment primary key,
digitalesCab varchar(50),
cocinaCab varchar(50),
climatizacionCab varchar(50),
higieneCab varchar(50),
idCabania1 int,
constraint fk_idCabania1 foreign key(idCabania1) references Cabania(idCabania)
);

/*Tabla Reserva de Administrador*/
CREATE table ReservaAdmin (
idReservaAdmin int auto_increment primary key,
fechaIngreso Date,
fechaSalida Date,
cantPersonas int,
seniaReserva float,
pagoTotalReserva float,
formaPagoReserva varchar(100),
nombreReserva varchar(50),
apellidoReserva varchar(50),
dniReserva int(10),
mailReserva varchar(30),
telefonoReserva varchar(20),
idCabania2 int,
fk_idAdmin2 int,
constraint fk_idAdmin2 foreign key (fk_idADmin2) references Administrador(idAdmin),
constraint fk_idCabania foreign key(idCabania2) references Cabania(idCabania)
);

/* Tabla Informes */
CREATE table Informes (
idInformes int auto_increment primary key,
pagosInformes float,
alquilerMesInforme int, 
alquilerAnualInforme int,
idReserva int,
constraint fk_idReserva foreign key(idReserva) references ReservaAdmin(idReservaAdmin) 
);

/*Tabla de Perdidas*/
CREATE table Perdidas (
idPerdidas int auto_increment primary key,
ediliciaPerdidas varchar(100), /* Roturas edilicias: vidrios, paredes, puertas, techo, plomeria, electricidad */
mobiliarioPerdida varchar(100), /* Sillas, mesas, camas, comodas, placares, roperos, mesada, barra */
electroPerdida varchar(100), /* tv, cocina, horno, anafe, microondas, heladera, pava electrica */ 
vajillaPerdida varchar(100),
ropaBlancaPerdida varchar(100),
exteriorPerdida varchar(100), /* manguera, asadores, reposeras, sombrillas */
idInformes int,
constraint fk_idInformes foreign key(idInformes) references Informes(idInformes)
);

/* Tabla Compras */
CREATE table Compras (
idCompras int auto_increment primary key,
limpiezaCompras varchar(100), /* Palo de piso, escobas, rejilla, esponja, virulana, detergente, perfumina, lavandina */
higieneCompras varchar(100), /* Papel higienico, rollo de cocina, Shampoo, Jabones, Dentrifico */
vajillaCompras varchar(100), /* platos, cubiertos, vasos, tazas, ollas, coladores, bolw, fuentes, pizzeras, sarten, cucharones, abrelatas, repasadores, cuchillas, tablas de cortar */
ropaBlancaCompras varchar(100), /* Sabanas, cubrecama, acolchados, frazadas, almohadas, toallas */
exteriorCompras varchar(100), /* parrilla, pala, rastrillo, maquina de cortar pasto, reposeras, sombrillas, mesas, sillas */
electrodomesticoCompras varchar(100), /* Tv, pava electrica, microondas, horno, anafe, cocina, cafetera, heladera termotanque, decos, antenas, routers */
otrasCompras varchar(100),
idInformes1 int,
constraint fk_idInformes1 foreign key(idInformes1) references Informes(idInformes)
);

/*Tabla de Ingresos */
CREATE table Ingresos (
idIngresos int auto_increment primary key,
idReservaAdmin2 int,
idInformes2 int,
constraint fk_idReservaAdmin2 foreign key(idReservaAdmin2) references ReservaAdmin(idReservaAdmin),
constraint fk_idInformes2 foreign key(idInformes2) references Informes(idInformes)
);

/* Tabla Cliente */
CREATE table Cliente (
idCliente int auto_increment primary key,
nombreCliente varchar(50),
apellidoCliente varchar(50),
dniCliente int(10),
fechaNacCliente date,
generoCliente varchar (10),
nacionalidadCliente varchar (50),
ciudadCliente varchar(20),
provinciaCliente varchar(20),
codigoPostal int (10),
telefonoCliente varchar (20),
mailCliente varchar(50),
idUsuario1 int,
constraint fk_idUsuario1 foreign key (idUsuario1) references Usuario(idUsuario)
);

/* Tabla seguridadCliente */
CREATE table seguridadCliente (
idSeguridadCliente int auto_increment primary key,
restablecerContraseña varchar(20),
sesionesActivas int,
eliminarCuenta varchar(20),
idCliente2 int,
constraint fk_idCliente foreign key (idCliente2) references Cliente(idCliente)
);

/* Tabla Reserva de Clientes de la página web. */
CREATE table reservaCliente (
idReservaCliente int primary key,
cantidadPersonas int,
fechaIngreso date,
fechaSalida date,
pagoContadoCliente float,
pagoTarjetaCliente float,
idCliente3 int,
fk_idIngreso1 int,
fk_idAdmin3 int,
constraint fk_idAdmin3 foreign key (fk_idADmin3) references Administrador(idAdmin),
constraint fk_idIngreso1 foreign key (fk_idIngreso1) references Ingresos(idIngresos),
constraint fk_idCliente1 foreign key(idCliente3) references Cliente(idCliente)
);

/* Tabla de Pagos con Tarjeta */
CREATE table pagoConTarjeta(
idPagoTarjeta int auto_increment primary key,
nombreTitularTarjeta varchar (50),
pagoTarjetaCliente float,
numeroTarjeta int,
fechaDeCaducidad date,
codigoDeSeguridad int (4),
idReservaCliente1 int,
constraint fk_idReservaCliente foreign key (idReservaCliente1) references reservaCliente(idReservaCliente)
);
