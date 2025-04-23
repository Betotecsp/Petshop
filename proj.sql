CREATE DATABASE IF NOT EXISTS `banco_petshop`;
USE `banco_petshop`;

CREATE TABLE clientes (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

-- Tabela de pets com imagem
CREATE TABLE pets (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  especie VARCHAR(50) NOT NULL, -- Ex: Cachorro, Gato
  raca VARCHAR(100),
  cliente_id INT NOT NULL,
  imagem VARCHAR(255), -- Nome do arquivo da imagem
  PRIMARY KEY (id),
  FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
);

-- Tabela de agendamentos
CREATE TABLE agendamentos (
  id INT NOT NULL AUTO_INCREMENT,
  data DATETIME NOT NULL,
  pet_id INT NOT NULL,
  servico VARCHAR(255) NOT NULL,
  status ENUM('agendado', 'concluido', 'cancelado') DEFAULT 'agendado',
  PRIMARY KEY (id),
  FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE
);

-- Tabela de usuários do sistema (funcionários)
CREATE TABLE usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100),
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  cargo VARCHAR(50),
  PRIMARY KEY (id)
);