/*LLeno la tabla de category_user*/
INSERT INTO category_user ( id, name)
VALUES (default, 'admin');

INSERT INTO category_user ( id, name)
VALUES (default, 'user');

INSERT INTO category_user ( id, name)
VALUES (default, 'visitor');

/*LLeno la tabla de users*/
INSERT INTO users ( id, name, email, avatar, password, id_category)
VALUES (default, 'Santiago', 'santiago_mori-93@hotmail.com', '1673206189416_img.jpg', '$2a$10$2sIx.gla5LcSruRd13LsZuCeOnE7wDsVmJw9QaiHsKOqEv.D/tZzG', 1);

INSERT INTO users ( id, name, email, avatar, password, id_category)
VALUES (default, 'Agustin', 'santi@gmail.com', '1673296965238_img.jpg', '$2a$10$rRqkL5lmaabs1g9NF2HA/OoBbp8LVSKvjf4iEkCCZsylwdzDBYdnq', 2);

INSERT INTO users ( id, name, email, avatar, password, id_category)
VALUES (default, 'Gianna', 'gbeardsell1@disqus.com', 'xxxx', 'MzG9d0d', 2);

INSERT INTO users ( id, name, email, avatar, password, id_category)
VALUES (default, 'Lutero', 'jbohlmann5@google.co.jp', 'xxxx', 'uQOgDqp', 2);

INSERT INTO users ( id, name, email, avatar, password, id_category)
VALUES (default, 'Lucho', 'lorpen7@senate.gov', 'xxxx', 'uQOgDqp', 2);