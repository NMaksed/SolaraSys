CREATE TABLE morador (
                         id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                         morador bit,
                         morador_vinculado bit,
                         exame bit,
                         pessoa_codigo INT NOT NULL REFERENCES pessoa(id)
)
    ENGINE = InnoDB;

CREATE TABLE funcionario (
                             id INT PRIMARY KEY NOT NULL,
                             funcao VARCHAR(255),
                             salario DOUBLE,
                             pessoa_codigo INT NOT NULL REFERENCES pessoa(id)
)
    ENGINE = InnoDB;

CREATE TABLE pessoa (
                        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                        nome VARCHAR(255) NOT NULL,
                        idade INT NOT NULL,
                        cpf VARCHAR(11) NOT NULL,
                        rg VARCHAR(20) NOT NULL,
                        cep VARCHAR(10) NOT NULL
)
    ENGINE = InnoDB;


CREATE TABLE predio (
                        id INT PRIMARY KEY NOT NULL,
                        numero INT,
                        referencia INT,
                        andar INT,
                        morador_codigo INT REFERENCES morador(id)
)
    ENGINE = InnoDB;

CREATE TABLE empresa (
                         id INT PRIMARY KEY NOT NULL,
                         nomeCondominio VARCHAR(255),
                         endereco VARCHAR(255),
                         numero INT,
                         cidade VARCHAR(255),
                         rua VARCHAR(255),
                         cnpj VARCHAR(255)
)
    ENGINE = InnoDB;

CREATE TABLE condominio (
                            id INT PRIMARY KEY NOT NULL,
                            piscina bit,
                            churrasqueira bit,
                            salao bit,
                            predio_codigo INT NOT NULL REFERENCES predio(id)
)
    ENGINE = InnoDB;

CREATE TABLE `user` (
                        id INT PRIMARY KEY NOT NULL,
                        email VARCHAR(255) NOT NULL,
                        senha VARCHAR(255) NOT NULL,
                        funcionario_id INT NOT NULL REFERENCES funcionario(id)
)
    ENGINE = InnoDB;