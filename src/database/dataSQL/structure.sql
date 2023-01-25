
CREATE SCHEMA IF NOT EXISTS `dhproyect` DEFAULT CHARACTER SET utf8 ;
USE `dhproyect` ;

/*==========creacion de type Product=========*/
CREATE TABLE IF NOT EXISTS `dhproyect`.`type_product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

/*==========creacion de categoryUser=========*/
CREATE TABLE IF NOT EXISTS `dhproyect`.`category_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));

/*==========creacion de lot product=========*/
CREATE TABLE IF NOT EXISTS `dhproyect`.`lot_product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));

/*==========creacion de medio de pago=========*/
CREATE TABLE IF NOT EXISTS `dhproyect`.`payment_methods` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));

/*==========creacion de user e implementando FK=========*/
CREATE TABLE IF NOT EXISTS `dhproyect`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `avatar` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `id_category` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_category_idx` (`id_category` ASC),
  CONSTRAINT `FK_category`
    FOREIGN KEY (`id_category`)
    REFERENCES `dhproyect`.`category_user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
ALTER TABLE `dhproyect`.`users` 
CHANGE COLUMN `password` `password` VARCHAR(200) NOT NULL ;

/*==========creacion de product=========*/
CREATE TABLE IF NOT EXISTS `dhproyect`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `description` TEXT(200) NOT NULL,
  `price` DECIMAL(10) NOT NULL,
  `img` VARCHAR(50) NOT NULL,
  `id_type` INT NOT NULL,
  `id_lot` INT NOT NULL,
  PRIMARY KEY (`id`));

/*===========implementando FK para product===================*/
ALTER TABLE `dhproyect`.`product` 
ADD INDEX `FK_lot_idx` (`id_lot` ASC),
ADD INDEX `FK_type_idx` (`id_type` ASC);
;
ALTER TABLE `dhproyect`.`product` 
ADD CONSTRAINT `FK_lot`
  FOREIGN KEY (`id_lot`)
  REFERENCES `dhproyect`.`lot_product` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `FK_type`
  FOREIGN KEY (`id_type`)
  REFERENCES `dhproyect`.`type_product` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

/*==========creacion de compra implementando FK=========*/
CREATE TABLE IF NOT EXISTS `dhproyect`.`compra` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `total` DECIMAL NOT NULL,
  `id_user` INT NOT NULL,
  `id_pago` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_medio_idx` (`id_pago` ASC),
  INDEX `FK_user_idx` (`id_user` ASC),
  CONSTRAINT `FK_medio`
    FOREIGN KEY (`id_pago`)
    REFERENCES `dhproyect`.`payment_methods` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_user`
    FOREIGN KEY (`id_user`)
    REFERENCES `dhproyect`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

/*==========creacion de carrito implementando FK=========*/
CREATE TABLE IF NOT EXISTS `dhproyect`.`carrito` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `id_compra` INT NOT NULL,
  `id_product` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_product_idx` (`id_product` ASC),
  INDEX `FK_compra_idx` (`id_compra` ASC),
  CONSTRAINT `FK_product`
    FOREIGN KEY (`id_product`)
    REFERENCES `dhproyect`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_compra`
    FOREIGN KEY (`id_compra`)
    REFERENCES `dhproyect`.`compra` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);