/* ------------- PESSOA --------------- */
CREATE TABLE pessoa (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
idade INT NOT NULL,
cpf VARCHAR(12) NOT NULL,
rg VARCHAR(22) NOT NULL,
cep VARCHAR(12),
apartamento_visitante_codigo INT(11),
condominio_pessoa_codigo INT NOT NULL,
empresa_pessoa_codigo INT NOT NULL
)
    ENGINE = InnoDB;
/* ------------- PESSOA ---------------*/


/*------------- MORADOR ---------------*/
CREATE TABLE morador (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 representante bit,
 atribuido bit,
 exame bit,
 data_registro DATE NOT NULL,
 pessoa_morador_codigo INT(11) NOT NULL,
 predio_morador_codigo INT(11) NOT NULL,
 apartamento_morador_codigo INT(11) NOT NULL,
 condominio_morador_codigo INT(11) NOT NULL,
 empresa_morador_codigo INT(11) NOT NULL
)
    ENGINE = InnoDB;
/*------------- MORADOR ---------------*/


/* ------------- FUNCIONARIO ---------------*/
CREATE TABLE funcionario (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 funcao VARCHAR(255) NOT NULL,
 salario DOUBLE NOT NULL DEFAULT 0,
 hora_entrada TIME NOT NULL,
 hora_saida TIME NOT NULL,
 data_registro DATE NOT NULL,
 pessoa_funcionario_codigo INT(11) NOT NULL,
 usuario_funcionario_codigo INT(11) NOT NULL,
 empresa_funcionario_codigo INT(11) NOT NULL,
 condominio_funcionario_codigo INT(11) NOT NULL
)
    ENGINE = InnoDB;

/* ------------- PREDIO ---------------*/
CREATE TABLE predio (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
numero INT(11) NOT NULL,
andar INT(11) NOT NULL,
numero_apartamento INT(11) NOT NULL,
referencia VARCHAR(255),
data_registro DATE NOT NULL,
condominio_predio_codigo INT(11) NOT NULL,
empresa_predio_codigo INT(11) NOT NULL
)
    ENGINE = InnoDB;
/*------------- PREDIO ---------------*/


/*------------- EMPRESA ---------------*/
CREATE TABLE empresa (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 nome VARCHAR(255) NOT NULL,
 numero INT NOT NULL,
 cidade VARCHAR(255) NOT NULL,
 rua VARCHAR(255) NOT NULL,
 cnpj VARCHAR(22) NOT NULL,
 uf VARCHAR(255) NOT NULL,
 cep VARCHAR(12) NOT NULL,
 data_registro DATE NOT NULL
)
    ENGINE = InnoDB;
/* ------------- EMPRESA ---------------*/


/*------------- CONDOMINIO ---------------*/
CREATE TABLE condominio (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
piscina bit,
churrasqueira bit,
salao bit,
avisos VARCHAR(255),
empresa_condominio_codigo INT(11) NOT NULL,
data_registro DATE NOT NULL
)
    ENGINE = InnoDB;
/*------------- CONDOMINIO ---------------*/

/*------------- APARTAMENTO ---------------*/
CREATE TABLE apartamento (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
numero INT(11) NOT NULL,
predio_apartamento_codigo INT(11) NOT NULL,
condominio_apartamento_codigo INT(11) NOT NULL,
empresa_apartamento_codigo INT(11) NOT NULL
)
    ENGINE = InnoDB;
/*------------- USUARIO ---------------*/
CREATE TABLE `usuario` (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
email VARCHAR(255) NOT NULL,
senha VARCHAR(255) NOT NULL,
data_registro DATE NOT NULL,
funcionario_usuario_codigo INT(11) NOT NULL,
empresa_usuario_codigo INT(11) NOT NULL,
condominio_usuario_codigo INT(11) NOT NULL
)
    ENGINE = InnoDB;
/* ------------- USUARIO ---------------*/

/*----------------- ALTER TABLE ---------------------*/
ALTER TABLE morador ADD CONSTRAINT pessoa_morador_codigo
    FOREIGN KEY(pessoa_morador_codigo) REFERENCES pessoa(id);
ALTER TABLE morador ADD CONSTRAINT predio_morador_codigo
    FOREIGN KEY(predio_morador_codigo) REFERENCES predio(id);
ALTER TABLE morador ADD CONSTRAINT apartamento_morador_codigo
FOREIGN KEY(apartamento_morador_codigo) REFERENCES apartamento(id);
ALTER TABLE morador ADD CONSTRAINT empresa_morador_codigo
FOREIGN KEY (empresa_morador_codigo) REFERENCES empresa(id);
ALTER TABLE morador ADD CONSTRAINT condominio_morador_codigo
FOREIGN KEY (condominio_morador_codigo) REFERENCES condominio(id);
/*----------------------------------------------------------*/
ALTER TABLE condominio ADD CONSTRAINT empresa_condominio_codigo
    FOREIGN KEY(empresa_condominio_codigo) REFERENCES empresa(id);
/*----------------------------------------------------------*/
ALTER TABLE usuario ADD CONSTRAINT funcionario_usuario_codigo
    FOREIGN KEY(funcionario_usuario_codigo) REFERENCES funcionario(id);
ALTER TABLE usuario ADD CONSTRAINT empresa_usuario_codigo
    FOREIGN KEY(empresa_usuario_codigo) REFERENCES empresa(id);
ALTER TABLE usuario ADD CONSTRAINT condominio_usuario_codigo
FOREIGN KEY(condominio_usuario_codigo) REFERENCES condominio(id);
/*----------------------------------------------------------*/
ALTER TABLE funcionario ADD CONSTRAINT pessoa_funcionario_codigo
FOREIGN KEY (pessoa_funcionario_codigo) REFERENCES pessoa(id);
ALTER TABLE funcionario ADD CONSTRAINT usuario_funcionario_codigo
FOREIGN KEY (usuario_funcionario_codigo) REFERENCES usuario(id);
ALTER TABLE funcionario ADD CONSTRAINT empresa_funcionario_codigo
FOREIGN KEY (empresa_funcionario_codigo) REFERENCES empresa(id);
ALTER TABLE funcionario ADD CONSTRAINT condominio_funcionario_codigo
FOREIGN KEY (condominio_funcionario_codigo) REFERENCES condominio(id);
/*----------------------------------------------------------*/
ALTER TABLE predio ADD CONSTRAINT condominio_predio_codigo
FOREIGN KEY (condominio_predio_codigo) REFERENCES condominio(id);
ALTER TABLE predio ADD CONSTRAINT empresa_predio_codigo
FOREIGN KEY (empresa_predio_codigo) REFERENCES empresa(id);
/*----------------------------------------------------------*/
ALTER TABLE apartamento ADD CONSTRAINT predio_apartamento_codigo
FOREIGN KEY (predio_apartamento_codigo) REFERENCES predio(id);
ALTER TABLE apartamento ADD CONSTRAINT condominio_apartamento_codigo
FOREIGN KEY (condominio_apartamento_codigo) REFERENCES condominio(id);
ALTER TABLE apartamento ADD CONSTRAINT empresa_apartamento_codigo
FOREIGN KEY (empresa_apartamento_codigo) REFERENCES empresa(id);
/*----------------------------------------------------------*/
ALTER TABLE pessoa ADD CONSTRAINT apartamento_visitante_codigo
FOREIGN KEY (apartamento_visitante_codigo) REFERENCES pessoa(id);
ALTER TABLE pessoa ADD CONSTRAINT empresa_pessoa_codigo
FOREIGN KEY (empresa_pessoa_codigo) REFERENCES empresa(id);
ALTER TABLE pessoa ADD CONSTRAINT condominio_pessoa_codigo
FOREIGN KEY (condominio_pessoa_codigo) REFERENCES condominio(id);