/*LLeno la tabla type_product*/
INSERT INTO type_product ( id, name)
VALUES (default, 'panaderia');

INSERT INTO type_product ( id, name)
VALUES (default, 'pasteleria');

INSERT INTO type_product ( id, name)
VALUES (default, 'evento');

/*LLeno la tabla lot_product*/
INSERT INTO lot_product ( id, name)
VALUES (default, 'el Kg');

INSERT INTO lot_product ( id, name)
VALUES (default, 'combo');

INSERT INTO lot_product ( id, name)
VALUES (default, 'c/u');

/*LLeno la tabla de product*/
INSERT INTO product ( id, name, description, img, price, id_lot, id_type)
VALUES (DEFAULT, "Chipa (pan de queso)", "Elaborados con fecula de mandioca y quesos reggienito y pategras, apto para celiacos", "chipa.webp", 30, 3, 1);

INSERT INTO product ( id, name, description, img, price, id_lot, id_type)
VALUES (DEFAULT, "Medialuna de manteca", "La clasica factura elaborada con un hojaldre 100% manteca", "medialuna.webp", 45, 3, 1);

INSERT INTO product ( id, name, description, img, price, id_lot, id_type)
VALUES (DEFAULT, "Muffin de zanahoria", "Esponjos y humedos muffins de zanahoria cubiertos de un delicioso glaseado", "muffinZanahoria.jpg", 55, 3, 2);

INSERT INTO product ( id, name, description, img, price, id_lot, id_type)
VALUES (DEFAULT, "Pan trenzado", "Exquisito pan de tres piesas trenzadas y adornadas con sesamo", "pan.webp", 100, 3, 1);

INSERT INTO product ( id, name, description, img, price, id_lot, id_type)
VALUES (DEFAULT, "Cañon Relleno de Dulce de Leche", "Cañoncitos rellenos de Dulce de Leche, con masa casera de hojaldre simple y rápida", "CañonRellenoDDL.jpg", 120, 3, 2);

INSERT INTO product ( id, name, description, img, price, id_lot, id_type)
VALUES (DEFAULT, "Lemonpie", "Tarta de masa sucre de equilibrado contraste entre una acida crema de limon y un dulce merengue italiano", "lemon-pie.jpg", 420, 3, 2);

INSERT INTO product ( id, name, description, img, price, id_lot, id_type)
VALUES (DEFAULT, "Baguette", "Pan clasico frances de crocante corteza ideal para sandwich", "baguette-1.jpg", 90, 3, 1);

INSERT INTO product ( id, name, description, img, price, id_lot, id_type)
VALUES (DEFAULT, "Sanwich de miga", "Triples de miga. Jamón y Queso, Jamón y Tomate, Jamón y Huevo, Queso y Aceitunas y Queso y choclo.", "Sandwich-de-miga.jpg", 45, 3, 1);

INSERT INTO product ( id, name, description, img, price, id_lot, id_type)
VALUES (DEFAULT, "Mesa dulce", "10 Mini tortas y tartas (Húmedo de Limón, de Chocolate, Brownie, Coco y dulce, Pasta Frola).", "mini-tortas.jpg", 2500, 2, 3);

INSERT INTO product ( id, name, description, img, price, id_lot, id_type)
VALUES (DEFAULT, "Lunch", "6 empanaditas de pollo, 6 empanaditas de carne, 6 triángulos de hojaldre y pollo, 8 vienitas con queso (salchichas envueltas en queso y masa), 6 bastones de muzzarella, 4 pizzetas de tomate y muzarella, 12 canastitas soufflé surtidas (mini tartas saladas).", "lunch.jpg", 3200, 2, 3);