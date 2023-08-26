/* ------------- PESSOA --------------- */
CREATE TABLE pessoa (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
idade INT NOT NULL,
cpf VARCHAR(11) NOT NULL,
rg VARCHAR(20) NOT NULL,
cep VARCHAR(10)
)
    ENGINE = InnoDB;
/* ------------- PESSOA ---------------*/


/*------------- MORADOR ---------------*/
CREATE TABLE morador (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 morador bit,
 morador_vinculado bit,
 exame bit,
 pessoa_morador_codigo INT(11) NOT NULL,
 predio_morador_codigo INT(11) NOT NULL
)
    ENGINE = InnoDB;
/*------------- MORADOR ---------------*/


/* ------------- FUNCIONARIO ---------------*/
CREATE TABLE funcionario (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 funcao VARCHAR(255) NOT NULL,
 salario DOUBLE NOT NULL DEFAULT 0,
 pessoa_funcionario_codigo INT(11) NOT NULL,
 usuario_funcionario_codigo INT(11) NOT NULL
)
    ENGINE = InnoDB;

/* ------------- PREDIO ---------------*/
CREATE TABLE predio (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
numero INT(11) NOT NULL,
andar INT(11) NOT NULL,
condominio_predio_codigo INT(11) NOT NULL
)
    ENGINE = InnoDB;
/*------------- PREDIO ---------------*/


/*------------- EMPRESA ---------------*/
CREATE TABLE empresa (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 endereco VARCHAR(255) NOT NULL,
 numero INT NOT NULL,
 cidade VARCHAR(255) NOT NULL,
 rua VARCHAR(255) NOT NULL,
 cnpj VARCHAR(255) NOT NULL
)
    ENGINE = InnoDB;
/* ------------- EMPRESA ---------------*/


/*------------- CONDOMINIO ---------------*/
CREATE TABLE condominio (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
piscina bit,
churrasqueira bit,
salao bit,
avisos VARCHAR(255),
empresa_condominio_codigo INT(11) NOT NULL
)
    ENGINE = InnoDB;
/*------------- CONDOMINIO ---------------*/


/*------------- USUARIO ---------------*/
CREATE TABLE `usuario` (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
email VARCHAR(255) NOT NULL,
senha VARCHAR(255) NOT NULL,
funcionario_usuario_codigo INT(11) NOT NULL,
empresa_usuario_codigo INT(11) NOT NULL
)
    ENGINE = InnoDB;
/* ------------- USUARIO ---------------*/

/*----------------- ALTER TABLE ---------------------*/
ALTER TABLE morador ADD CONSTRAINT pessoa_morador_codigo
    FOREIGN KEY(pessoa_morador_codigo) REFERENCES pessoa(id);
ALTER TABLE morador ADD CONSTRAINT predio_morador_codigo
    FOREIGN KEY(predio_morador_codigo) REFERENCES predio(id);
/*----------------------------------------------------------*/
ALTER TABLE condominio ADD CONSTRAINT empresa_condominio_codigo
    FOREIGN KEY(empresa_condominio_codigo) REFERENCES empresa(id);
/*----------------------------------------------------------*/
ALTER TABLE usuario ADD CONSTRAINT funcionario_usuario_codigo
    FOREIGN KEY(funcionario_usuario_codigo) REFERENCES funcionario(id);
ALTER TABLE usuario ADD CONSTRAINT empresa_usuario_codigo
    FOREIGN KEY(empresa_usuario_codigo) REFERENCES empresa(id);
/*----------------------------------------------------------*/
ALTER TABLE funcionario ADD CONSTRAINT pessoa_funcionario_codigo
FOREIGN KEY (pessoa_funcionario_codigo) REFERENCES pessoa(id);
ALTER TABLE funcionario ADD CONSTRAINT usuario_funcionario_codigo
FOREIGN KEY (usuario_funcionario_codigo) REFERENCES usuario(id);
/*----------------------------------------------------------*/
ALTER TABLE predio ADD CONSTRAINT condominio_predio_codigo
FOREIGN KEY (condominio_predio_codigo) REFERENCES condominio(id);