CREATE DATABASE CabaniApp;

use CabaniApp;

-- tabla CrearCuenta

CREATE table crearCuentaUsuario(
idCuentaUsuario int auto_increment,
nombreCuentaUsuario varchar (100),
emailCuentaUsuario varchar (50),
claveCuentaUsuario varchar (20),
constraint pk_idCuentaUsuario1 PRIMARY KEY (idCuentaUsuario)
);

-- Tabla Cliente

CREATE table Cliente (
idCliente int auto_increment, 
idCuentaUsuario1 int,
dniCliente int (10),
fechaNacimCliente date,
nombreCliente1 varchar (100),
nombreParaMostrar varchar (50),
apellidoCliente varchar (100),
generoCliente varchar (10),
nacionalidadCliente varchar (50),
ciudadCliente varchar (50),
provinciaCliente varchar (50),
codigoPostal int (10),
telefonoCliente int (20),
direccionCliente varchar (50),
emailCliente1 varchar(50),
constraint fk_idCuentaUsuario1 foreign key(idCuentaUsuario1) references crearCuentaUsuario(idCuentaUsuario),
constraint pk_idCliente1 PRIMARY KEY(idCliente)
);

-- Tabla seguridadCliente

CREATE table seguridadCliente(
idCliente1 int,
idSeguridadCliente int auto_increment,
restablecerContraseña varchar(20),
sesionesActivas int,
eliminarCuenta varchar(20),
constraint fk_idCliente2 foreign key (idCliente1) references Cliente (idCliente),
constraint pk_idSeguridadCliente1 PRIMARY KEY (idSeguridadCliente)
);

-- Tabla reservaCliente

CREATE table reservaCliente (
idReservaCliente int,
idCliente1 int,
cantidadPersonas int,
fechaIngreso date,
fechaSalida date,
pagoContadoCliente float,
pagoTarjetaCliente float,
lugarFavorito varchar(50),
constraint fk_idCliente1 foreign key(idCliente1) references Cliente (idCliente),
constraint pk_idReservaCliente1 PRIMARY KEY (idReservaCliente)
);

-- Tabla pagoConTarjetas

CREATE table pagoConTarjeta(
idPagoTarjeta int auto_increment,
idReservaCliente1 int,
nombreTitularTarjeta varchar (50),
pagoTarjetaCliente1 float,
numeroTarjeta int,
fechaDeCaducidad date,
codigoDeSeguridad int (4),
constraint fk_idReservaCliente2 foreign key (idReservaCliente1) references reservaCliente (idReservaCliente),
constraint pk_idPagoTarjeta PRIMARY KEY (idPagoTarjeta)
);


