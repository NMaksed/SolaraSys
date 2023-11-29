CREATE DATABASE IF NOT EXISTS condominio;
USE condominio;

/* ------------- PESSOA --------------- */
CREATE TABLE pessoa (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
idade INT NOT NULL,
cpf VARCHAR(20) NOT NULL,
rg VARCHAR(22) NOT NULL,
cep VARCHAR(12)
)
    ENGINE = InnoDB;
/* ------------- PESSOA ---------------*/


/*------------- MORADOR ---------------*/
CREATE TABLE morador (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 representante bit,
 email VARCHAR(255) NOT NULL,
 atribuido bit,
 exame bit,
 visitante bit,
 data_registro DATE NOT NULL,
 pessoa_morador_codigo INT(11) NOT NULL,
 apartamento_morador_codigo INT(11) NOT NULL,
 empresa_morador_codigo INT(11) NOT NULL
)
    ENGINE = InnoDB;
/*------------- MORADOR ---------------*/


/* ------------- FUNCIONARIO ---------------*/
CREATE TABLE funcionario (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 funcao VARCHAR(255) NOT NULL,
 salario DOUBLE NOT NULL DEFAULT 0,
 hora_entrada VARCHAR(25) NOT NULL,
 hora_saida VARCHAR(25) NOT NULL,
 data_registro DATE NOT NULL,
 pessoa_funcionario_codigo INT(11) NOT NULL,
 empresa_funcionario_codigo INT(11) NOT NULL,
 condominio_funcionario_codigo INT(11) NOT NULL
)
    ENGINE = InnoDB;

/* ------------- PREDIO ---------------*/
CREATE TABLE predio (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
numero INT(11) NOT NULL,
andar INT(11) NOT NULL,
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
empresa_apartamento_codigo INT(11) NOT NULL
)
    ENGINE = InnoDB;
/*------------- USUARIO ---------------*/
CREATE TABLE `usuario` (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
email VARCHAR(255) NOT NULL,
senha VARCHAR(255) NOT NULL,
administrador BIT NOT NULL,
data_registro DATE NOT NULL,
funcionario_usuario_codigo INT(11) NOT NULL,
empresa_usuario_codigo INT(11) NOT NULL
)
    ENGINE = InnoDB;
/* ------------- USUARIO ---------------*/

/* ------------- EVENTO ---------------*/
CREATE TABLE `evento`(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
emailmorador varchar(255) NOT NULL,
evento varchar(45) NOT NULL,
espaco varchar(45) NOT NULL,
date datetime NOT NULL,
evento_condominio_codigo INT(11) NOT NULL,
evento_empresa_codigo INT(11) NOT NULL,
data_registro DATE NOT NULL
)
    ENGINE = InnoDB;
/* ------------- EVENTO ---------------*/

/*----------------- ALTER TABLE ---------------------*/
ALTER TABLE morador ADD CONSTRAINT pessoa_morador_codigo
FOREIGN KEY(pessoa_morador_codigo) REFERENCES pessoa(id);
ALTER TABLE morador ADD CONSTRAINT apartamento_morador_codigo
FOREIGN KEY(apartamento_morador_codigo) REFERENCES apartamento(id);
ALTER TABLE morador ADD CONSTRAINT empresa_morador_codigo
FOREIGN KEY (empresa_morador_codigo) REFERENCES empresa(id);
ALTER TABLE morador ADD INDEX email_index (email);
/*----------------------------------------------------------*/
ALTER TABLE condominio ADD CONSTRAINT empresa_condominio_codigo
    FOREIGN KEY(empresa_condominio_codigo) REFERENCES empresa(id);
/*----------------------------------------------------------*/
ALTER TABLE usuario ADD CONSTRAINT funcionario_usuario_codigo
    FOREIGN KEY(funcionario_usuario_codigo) REFERENCES funcionario(id);
ALTER TABLE usuario ADD CONSTRAINT empresa_usuario_codigo
FOREIGN KEY (empresa_usuario_codigo) REFERENCES empresa(id);
/*----------------------------------------------------------*/
ALTER TABLE funcionario ADD CONSTRAINT pessoa_funcionario_codigo
FOREIGN KEY (pessoa_funcionario_codigo) REFERENCES pessoa(id);
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
ALTER TABLE apartamento ADD CONSTRAINT empresa_apartamento_codigo
FOREIGN KEY (empresa_apartamento_codigo) REFERENCES empresa(id);
/*----------------------------------------------------------*/
ALTER TABLE evento ADD CONSTRAINT emailmorador
FOREIGN KEY (emailmorador) REFERENCES morador(email);
ALTER TABLE evento ADD CONSTRAINT evento_condominio_codigo
FOREIGN KEY (evento_condominio_codigo) REFERENCES condominio(id);
ALTER TABLE evento ADD CONSTRAINT evento_empresa_codigo
FOREIGN KEY (evento_empresa_codigo) REFERENCES empresa(id);
/*----------------------------------------------------------*/



/* Insert para teste */
/*================ EMPRESA ======================*/
INSERT INTO `empresa` (`nome`, `numero`, `cidade`, `rua`, `cnpj`, `uf`, `cep`, `data_registro`)
VALUES ('Empresa A', '123', 'São Paulo', 'Rua da Empresa A', '12.345.678/0001-90', 'SP', '12345-678', '2023-11-27');
INSERT INTO `empresa` (`nome`, `numero`, `cidade`, `rua`, `cnpj`, `uf`, `cep`, `data_registro`)
VALUES ('Empresa B', '456', 'Rio de Janeiro', 'Avenida da Empresa B', '98.765.432/0001-10', 'RJ', '54321-098', '2023-11-28');
INSERT INTO `empresa` (`nome`, `numero`, `cidade`, `rua`, `cnpj`, `uf`, `cep`, `data_registro`)
VALUES ('Empresa C', '789', 'Curitiba', 'Praça da Empresa C', '23.456.789/0001-76', 'PR', '98765-432', '2023-11-29');
INSERT INTO `empresa` (`nome`, `numero`, `cidade`, `rua`, `cnpj`, `uf`, `cep`, `data_registro`)
VALUES ('Empresa D', '321', 'Salvador', 'Estrada da Empresa D', '54.321.098/0001-32', 'BA', '23456-789', '2023-11-30');
INSERT INTO `empresa` (`nome`, `numero`, `cidade`, `rua`, `cnpj`, `uf`, `cep`, `data_registro`)
VALUES ('Empresa E', '654', 'Fortaleza', 'Avenida Principal da Empresa E', '67.890.123/0001-54', 'CE', '34567-890', '2023-12-01');
INSERT INTO `empresa` (`nome`, `numero`, `cidade`, `rua`, `cnpj`, `uf`, `cep`, `data_registro`)
VALUES ('Empresa F', '987', 'Brasília', 'Rua dos Exemplos da Empresa F', '21.345.678/0001-21', 'DF', '45678-901', '2023-12-02');
INSERT INTO `empresa` (`nome`, `numero`, `cidade`, `rua`, `cnpj`, `uf`, `cep`, `data_registro`)
VALUES ('Empresa G', '111', 'Porto Alegre', 'Avenida dos Testes da Empresa G', '43.210.987/0001-89', 'RS', '56789-012', '2023-12-03');
INSERT INTO `empresa` (`nome`, `numero`, `cidade`, `rua`, `cnpj`, `uf`, `cep`, `data_registro`)
VALUES ('Empresa H', '222', 'Manaus', 'Rua Exemplo da Empresa H', '87.654.321/0001-76', 'AM', '67890-123', '2023-12-04');
INSERT INTO `empresa` (`nome`, `numero`, `cidade`, `rua`, `cnpj`, `uf`, `cep`, `data_registro`)
VALUES ('Empresa I', '333', 'Recife', 'Avenida Exemplo da Empresa I', '12.345.678/0001-34', 'PE', '78901-234', '2023-12-05');
INSERT INTO `empresa` (`nome`, `numero`, `cidade`, `rua`, `cnpj`, `uf`, `cep`, `data_registro`)
VALUES ('Empresa J', '444', 'Belém', 'Praça dos Testes da Empresa J', '56.789.012/0001-45', 'PA', '89012-345', '2023-12-06');

/*=========================== CONDOMINIO ======================*/
INSERT INTO `condominio` (`nome`, `piscina`, `churrasqueira`, `salao`, `avisos`, `empresa_condominio_codigo`, `data_registro`)
VALUES ('Condomínio A', b'1', b'1', b'1', 'Aviso 1', '1', '2023-11-27');
INSERT INTO `condominio` (`nome`, `piscina`, `churrasqueira`, `salao`, `avisos`, `empresa_condominio_codigo`, `data_registro`)
VALUES ('Condomínio B', b'1', b'0', b'1', 'Aviso 2', '1', '2023-11-28');
INSERT INTO `condominio` (`nome`, `piscina`, `churrasqueira`, `salao`, `avisos`, `empresa_condominio_codigo`, `data_registro`)
VALUES ('Condomínio C', b'0', b'1', b'0', 'Aviso 3', '1', '2023-11-29');
INSERT INTO `condominio` (`nome`, `piscina`, `churrasqueira`, `salao`, `avisos`, `empresa_condominio_codigo`, `data_registro`)
VALUES ('Condomínio D', b'1', b'1', b'1', 'Aviso 4', '1', '2023-11-30');
INSERT INTO `condominio` (`nome`, `piscina`, `churrasqueira`, `salao`, `avisos`, `empresa_condominio_codigo`, `data_registro`)
VALUES ('Condomínio E', b'0', b'0', b'1', 'Aviso 5', '1', '2023-12-01');
INSERT INTO `condominio` (`nome`, `piscina`, `churrasqueira`, `salao`, `avisos`, `empresa_condominio_codigo`, `data_registro`)
VALUES ('Condomínio F', b'1', b'1', b'0', 'Aviso 6', '1', '2023-12-02');
INSERT INTO `condominio` (`nome`, `piscina`, `churrasqueira`, `salao`, `avisos`, `empresa_condominio_codigo`, `data_registro`)
VALUES ('Condomínio G', b'1', b'0', b'1', 'Aviso 7', '1', '2023-12-03');
INSERT INTO `condominio` (`nome`, `piscina`, `churrasqueira`, `salao`, `avisos`, `empresa_condominio_codigo`, `data_registro`)
VALUES ('Condomínio H', b'0', b'1', b'0', 'Aviso 8', '1', '2023-12-04');
INSERT INTO `condominio` (`nome`, `piscina`, `churrasqueira`, `salao`, `avisos`, `empresa_condominio_codigo`, `data_registro`)
VALUES ('Condomínio I', b'1', b'0', b'1', 'Aviso 9', '1', '2023-12-05');
INSERT INTO `condominio` (`nome`, `piscina`, `churrasqueira`, `salao`, `avisos`, `empresa_condominio_codigo`, `data_registro`)
VALUES ('Condomínio J', b'1', b'1', b'1', 'Aviso 10', '1', '2023-12-06');
/* ============================= PREDIO ============================ */
INSERT INTO `predio` (`numero`, `andar`, `referencia`, `data_registro`, `condominio_predio_codigo`, `empresa_predio_codigo`)
VALUES ('120', '25', 'Bloco A', '2023-11-27', '1', '1');
INSERT INTO `predio` (`numero`, `andar`, `referencia`, `data_registro`, `condominio_predio_codigo`, `empresa_predio_codigo`)
VALUES ('150', '20', 'Edifício Central', '2023-11-28', '2', '1');
INSERT INTO `predio` (`numero`, `andar`, `referencia`, `data_registro`, `condominio_predio_codigo`, `empresa_predio_codigo`)
VALUES ('110', '35', 'Torre 1', '2023-11-29', '3', '1');
INSERT INTO `predio` (`numero`, `andar`, `referencia`, `data_registro`, `condominio_predio_codigo`, `empresa_predio_codigo`)
VALUES ('130', '15', 'Prédio 2', '2023-11-30', '4', '1');
INSERT INTO `predio` (`numero`, `andar`, `referencia`, `data_registro`, `condominio_predio_codigo`, `empresa_predio_codigo`)
VALUES ('160', '28', 'Torre Norte', '2023-12-01', '5', '1');
INSERT INTO `predio` (`numero`, `andar`, `referencia`, `data_registro`, `condominio_predio_codigo`, `empresa_predio_codigo`)
VALUES ('118', '22', 'Bloco 4', '2023-12-02', '6', '1');
INSERT INTO `predio` (`numero`, `andar`, `referencia`, `data_registro`, `condominio_predio_codigo`, `empresa_predio_codigo`)
VALUES ('145', '18', 'Edifício Sul', '2023-12-03', '7', '1');
INSERT INTO `predio` (`numero`, `andar`, `referencia`, `data_registro`, `condominio_predio_codigo`, `empresa_predio_codigo`)
VALUES ('125', '31', 'Bloco 5', '2023-12-04', '8', '1');
INSERT INTO `predio` (`numero`, `andar`, `referencia`, `data_registro`, `condominio_predio_codigo`, `empresa_predio_codigo`)
VALUES ('170', '12', 'Torre Oeste', '2023-12-05', '9', '1');
INSERT INTO `predio` (`numero`, `andar`, `referencia`, `data_registro`, `condominio_predio_codigo`, `empresa_predio_codigo`)
VALUES ('155', '21', 'Prédio Leste', '2023-12-06', '10', '1');
/* =========================== apartamento ========================= */
INSERT INTO `apartamento` (`numero`, `predio_apartamento_codigo`, `empresa_apartamento_codigo`)
VALUES ('20', '2', '1');
INSERT INTO `apartamento` (`numero`, `predio_apartamento_codigo`, `empresa_apartamento_codigo`)
VALUES ('18', '3', '1');
INSERT INTO `apartamento` (`numero`, `predio_apartamento_codigo`, `empresa_apartamento_codigo`)
VALUES ('25', '4', '1');
INSERT INTO `apartamento` (`numero`, `predio_apartamento_codigo`, `empresa_apartamento_codigo`)
VALUES ('22', '5', '1');
INSERT INTO `apartamento` (`numero`, `predio_apartamento_codigo`, `empresa_apartamento_codigo`)
VALUES ('28', '6', '1');
INSERT INTO `apartamento` (`numero`, `predio_apartamento_codigo`, `empresa_apartamento_codigo`)
VALUES ('30', '7', '1');
INSERT INTO `apartamento` (`numero`, `predio_apartamento_codigo`, `empresa_apartamento_codigo`)
VALUES ('32', '8', '1');
INSERT INTO `apartamento` (`numero`, `predio_apartamento_codigo`, `empresa_apartamento_codigo`)
VALUES ('35', '9', '1');
INSERT INTO `apartamento` (`numero`, `predio_apartamento_codigo`, `empresa_apartamento_codigo`)
VALUES ('38', '10', '1');
/* =========================== PESSOA ==============================*/
INSERT INTO `pessoa` (`nome`, `idade`, `cpf`, `rg`, `cep`) VALUES ('Maria', '30', '58473829011', '702533344', '08550-120');
INSERT INTO `pessoa` (`nome`, `idade`, `cpf`, `rg`, `cep`) VALUES ('João', '28', '39485010255', '82198977', '08765-210');
INSERT INTO `pessoa` (`nome`, `idade`, `cpf`, `rg`, `cep`) VALUES ('Ana', '35', '65482300921', '93563117', '08470-310');
INSERT INTO `pessoa` (`nome`, `idade`, `cpf`, `rg`, `cep`) VALUES ('Pedro', '22', '20391844930', '320591229', '08120-190');
INSERT INTO `pessoa` (`nome`, `idade`, `cpf`, `rg`, `cep`) VALUES ('Carla', '27', '87401956203', '571935641', '08451-340');
INSERT INTO `pessoa` (`nome`, `idade`, `cpf`, `rg`, `cep`) VALUES ('Rafael', '32', '15763028940', '814223879', '08330-450');
/* ========================== funcionarios =============================*/
INSERT INTO `funcionario` (`funcao`, `salario`, `hora_entrada`, `hora_saida`, `data_registro`, `pessoa_funcionario_codigo`, `empresa_funcionario_codigo`, `condominio_funcionario_codigo`)
VALUES ('Assistente', '2000', '09:00', '18:00', '2023-11-26', '2', '1', '1');
INSERT INTO `funcionario` (`funcao`, `salario`, `hora_entrada`, `hora_saida`, `data_registro`, `pessoa_funcionario_codigo`, `empresa_funcionario_codigo`, `condominio_funcionario_codigo`)
VALUES ('Analista', '2500', '08:00', '17:00', '2023-11-26', '3', '1', '1');
INSERT INTO `funcionario` (`funcao`, `salario`, `hora_entrada`, `hora_saida`, `data_registro`, `pessoa_funcionario_codigo`, `empresa_funcionario_codigo`, `condominio_funcionario_codigo`)
VALUES ('Coordenador', '3500', '10:00', '19:00', '2023-11-26', '4', '1', '1');
INSERT INTO `funcionario` (`funcao`, `salario`, `hora_entrada`, `hora_saida`, `data_registro`, `pessoa_funcionario_codigo`, `empresa_funcionario_codigo`, `condominio_funcionario_codigo`)
VALUES ('Técnico', '1800', '07:00', '16:00', '2023-11-26', '5', '1', '1');
INSERT INTO `funcionario` (`funcao`, `salario`, `hora_entrada`, `hora_saida`, `data_registro`, `pessoa_funcionario_codigo`, `empresa_funcionario_codigo`, `condominio_funcionario_codigo`)
VALUES ('Supervisor', '3200', '11:00', '20:00', '2023-11-26', '6', '1', '1');
/* =================== usuario ===================*/
INSERT INTO `usuario` (`id`, `email`, `senha`, `administrador`, `data_registro`, `funcionario_usuario_codigo`, `empresa_usuario_codigo`)
VALUES ('1', 'suporte@teste.com', 'admin', b'1', '2023-11-26', '1', '1');
/* =============================== Morador ============*/
INSERT INTO `morador`(`representante`, `email`, `atribuido`, `exame`, `visitante`, `data_registro`, `pessoa_morador_codigo`, `apartamento_morador_codigo`, `empresa_morador_codigo`) VALUES ('1','suporte@teste.com','0','1','0','2023-11-26','2','1','1');
INSERT INTO `morador`(`representante`, `email`, `atribuido`, `exame`, `visitante`, `data_registro`, `pessoa_morador_codigo`, `apartamento_morador_codigo`, `empresa_morador_codigo`) VALUES ('1','suporte2@teste.com','0','1','0','2023-11-26','3','1','1');
INSERT INTO `morador`(`representante`, `email`, `atribuido`, `exame`, `visitante`, `data_registro`, `pessoa_morador_codigo`, `apartamento_morador_codigo`, `empresa_morador_codigo`) VALUES ('1','suporte3@teste.com','0','1','0','2023-11-26','4','1','1');
INSERT INTO `morador`(`representante`, `email`, `atribuido`, `exame`, `visitante`, `data_registro`, `pessoa_morador_codigo`, `apartamento_morador_codigo`, `empresa_morador_codigo`) VALUES ('1','suporte4@teste.com','0','1','0','2023-11-26','5','1','1');
INSERT INTO `morador`(`representante`, `email`, `atribuido`, `exame`, `visitante`, `data_registro`, `pessoa_morador_codigo`, `apartamento_morador_codigo`, `empresa_morador_codigo`) VALUES ('1','suporte@teste.com','0','1','0','2023-11-26','6','1','1');
/* ================== Eventos =================== */

    INSERT INTO `evento` (`emailmorador`, `evento`, `espaco`, `date`, `evento_condominio_codigo`, `evento_empresa_codigo`, `data_registro`)
    VALUES ('suporte@teste.com', 'Festa Do Joaquin', 'Salão - B', '2023-11-29 23:34:43.000000', '1', '1', '2023-06-11');

