CREATE database CabaniApp;
use CabaniApp;

/*Tabla Registro - Usuario*/
CREATE table Usuario (
idUsuario int primary key,
emailUsuario varchar(50),
claveUsuario varchar(10),
tipoUsuario varchar(15)
);

/* Tabla Cliente */
CREATE table Cliente (
idCliente int auto_increment primary key,
nombreCliente varchar(50),
apellidoCliente varchar(50),
dniCliente int(10),
fechaNacCliente date,
telefonoCliente varchar (20),
mailCliente varchar(50),
ciudadCliente varchar(20),
provinciaCliente varchar(20),
paisCliente varchar(30),
idUsuario1 int,
constraint pk_idCliente1 primary key(idCliente),
constraint fk_idUsuario1 foreign key(idUsuario1) references Usuario(idUsuario)
);

/* Tabla Administrador*/
CREATE table Administrador (
idAdmin int auto_increment primary key,
nombreAdmin varchar(50),
apellidoAdmin varchar(50),
dniAdmin int(10),
fechaNacAdmin Date,
idUsuario2 int,
constraint pk_idAdmin1 primary key(idAdmin),
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
idAdmin1 int,
imagenComplejo varchar(100), /* BLOB: Es un tipo de datos de MySQL que puede almacenar datos binarios como los de archivos de imagen, multimedia y PDF */
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
idComplejo1 int,
constraint fk_idComplejo1 foreign key(idComplejo1) references Complejo(idComplejo)
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

/*Tabla Reserva*/
CREATE table ReservaAdmin (
idReservaAdmin int auto_increment primary key,
fechaIngreso Date,
fechaSalida Date,
cantPersonas int,
seniaReserva float,
pagoTotalReserva float,
nombreReserva varchar(50),
apellidoReserva varchar(50),
dniReserva int(10),
mailReserva varchar(30),
telefonoReserva varchar(20),
idAdmin1 int,
idCabania1 int,
constraint pk_idReserva1 primary key(idReserva),
constraint fk_idAdmin1 foreign key(idAdmin1) references Administrador(idAdmin),
constraint fk_idCabania1 foreign key(idCabania1) references Cabania(idCabania)
);

/* Tabla Informes */
CREATE table Informes (
idInformes int auto_increment primary key,
pagosInformes float(100),
gastosInformes float(100)
)

