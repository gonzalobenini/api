CREATE DATABASE IF NOT EXISTS trjdb; //(--) CREATE DATABASE projectdb;

use trjdb;

CREATE TABLE tarjeta(
    dni INT(9),
    nombreCompleto VARCHAR(45) DEFAULT NULL,
    anioNacimiento INT(4) DEFAULT NULL,
    PRIMARY KEY (dni)
)

DESCRIBE trjdb;

INSERT INTO tarjeta VALUES
    (1,'juan',2000),
    (2,'juan',2000),
    (3,'juan',2000),
    (4,'juan',2000)
