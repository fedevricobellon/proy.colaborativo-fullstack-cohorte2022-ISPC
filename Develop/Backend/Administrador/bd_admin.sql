CREATE database CabaniApp;
use CabaniApp;

/*Tabla Registro*/
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
dniCliente varchar(10),
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
dniAdmin int(8),
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
imagenComplejo blob, /* BLOB: Es un tipo de datos de MySQL que puede almacenar datos binarios como los de archivos de imagen, multimedia y PDF */
constraint fk_idAdmin1 foreign key(idAdmin1) references Administrador(idAdmin)
);

/*Tabla de Servicios Adicionales del Complejo*/
CREATE table ServicioComplejo (
idServComplejo int auto_increment primary key,
cocheraComplejo varchar (50),
piletaComplejo varchar (50),
barComplejo varchar (50),
ropaBlancaComplejo varchar (50),
otrosServComplejo varchar (50),
idComplejo1 int,
constraint fk_idComplejo1 foreign key(idComplejo1) references Complejo(idComplejo)
);

/*Tabla de Cabañas*/
CREATE table Cabania (
idCabania int auto_increment primary key,
nombreCabania varchar (50),
habitacionCab int,
cantPersonasCab int,
camaCab1 int,
camaCab2 int,
imagenCab blob,
idComplejo1 int,
constraint fk_idComplejo1 foreign key(idComplejo1) references Complejo(idComplejo)
);

/*Tabla Reserva*/
CREATE table Reserva (
idReserva int auto_increment primary key,
fechaIngreso Date,
fechaSalida Date,
constraint pk_idReserva1 primary key(idReserva)
);

/* Tabla Informes */
CREATE table Informes (
idInformes int auto_increment primary key,
pagos_Informes float(100),

)

