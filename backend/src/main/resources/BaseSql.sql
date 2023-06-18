/*CREATE TABLE `morador`. (
    morador_id INT NOT NULL ,
    morador bit,
    morador_vinculado bit,
    exame bit
)
    ENGINE = InnoDB;

*/
CREATE TABLE pessoa (
id INT NOT NULL,
nome VARCHAR(255) NOT NULL,
idade INT NOT NULL,
cpf VARCHAR(11) NOT NULL,
rg VARCHAR(20) NOT NULL,
cep VARCHAR(10) NOT NULL
)
    ENGINE = InnoDB;


CREATE TABLE predio (
predio_id INT NOT NULL,
numeroApartamento INT,
nome VARCHAR(255),
moradorCodigo INT
)
ENGINE = InnoDB;

CREATE TABLE empresa (
identificador INT NOT NULL,
nomeCondominio VARCHAR(255),
endereco VARCHAR(255),
numero INT,
cidade VARCHAR(255),
rua VARCHAR(255),
cnpj VARCHAR(255)
)
    ENGINE = InnoDB;

CREATE TABLE condominio (
identificador INT NOT NULL,
piscina bit,
churrasqueira bit,
salao bit
)
    ENGINE = InnoDB;

CREATE TABLE user (
    user_id INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
)
    ENGINE = InnoDB;