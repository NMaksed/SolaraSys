CREATE TABLE `pessoa`. (
    `id` INT NOT NULL ,
     `nome` VARCHAR NOT NULL ,
     `idade` INT NOT NULL ,
     `cpf` VARCHAR NOT NULL ,
      `rg` VARCHAR NOT NULL ,
      `cep` VARCHAR NOT NULL )
        ENGINE = InnoDB;

CREATE TABLE `morador`. (
      morador_id INT NOT NULL ,
      morador bit,
      morador_vinculado bit,
      exame bit
 )
    ENGINE = InnoDB;

CREATE TABLE `predio` (
      predio_id INT NOT NULL,
      numeroApartamento INT,
      nome VARCHAR(255),
      moradorCodigo INT
)
    ENGINE = InnoDB;

CREATE TABLE `empresa` (
      identificador INT NOT NULL,
      nomeCondominio VARCHAR(255),
      endereco VARCHAR(255),
      numero INT,
      cidade VARCHAR(255),
      rua VARCHAR(255),
      cnpj VARCHAR(255)
)
    ENGINE = InnoDB;

CREATE TABLE `condominio` (
      identificador INT NOT NULL,
      piscina bit,
      churrasqueira bit,
      salao bit
)
    ENGINE = InnoDB;