/* ------------- PESSOA --------------- */
CREATE TABLE pessoa (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
idade INT NOT NULL,
cpf VARCHAR(11) NOT NULL,
rg VARCHAR(20) NOT NULL,
cep VARCHAR(10) NOT NULL
)
    ENGINE = InnoDB;
/* ------------- PESSOA ---------------*/


/*------------- MORADOR ---------------*/
CREATE TABLE morador (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 morador bit,
 morador_vinculado bit,
 exame bit,
 pessoa_codigo INT NOT NULL,
 FOREIGN KEY(pessoa_codigo) REFERENCES pessoa(id)
)
    ENGINE = InnoDB;
/*------------- MORADOR ---------------*/


/* ------------- FUNCIONARIO ---------------*/
CREATE TABLE funcionario (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 funcao VARCHAR(255),
 salario DOUBLE,
 pessoa_codigo INT NOT NULL,
 FOREIGN KEY(pessoa_codigo) REFERENCES pessoa(id)
)
    ENGINE = InnoDB;
/* ------------- PREDIO ---------------*/
CREATE TABLE predio (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
numero INT,
referencia INT,
andar INT,
morador_codigo INT NOT NULL,
FOREIGN KEY(morador_codigo) REFERENCES morador(id)
)
    ENGINE = InnoDB;
/*------------- PREDIO ---------------*/


/*------------- EMPRESA ---------------*/
CREATE TABLE empresa (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 nomeCondominio VARCHAR(255),
 endereco VARCHAR(255),
 numero INT,
 cidade VARCHAR(255),
 rua VARCHAR(255),
 cnpj VARCHAR(255)
)
    ENGINE = InnoDB;
/* ------------- EMPRESA ---------------*/


/*------------- CONDOMINIO ---------------*/
CREATE TABLE condominio (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
piscina bit,
churrasqueira bit,
salao bit,
predio_codigo INT NOT NULL,
FOREIGN KEY(predio_codigo) REFERENCES predio(id)
)
    ENGINE = InnoDB;
/*------------- CONDOMINIO ---------------*/


/*------------- USER ---------------*/
CREATE TABLE `user` (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
email VARCHAR(255) NOT NULL,
senha VARCHAR(255) NOT NULL,
funcionario_id INT NOT NULL,
FOREIGN KEY(funcionario_id) REFERENCES funcionario(id)
)
    ENGINE = InnoDB;
/* ------------- USER ---------------*/