/*
 Navicat Premium Data Transfer

 Source Server         : LOCALHOST
 Source Server Type    : MySQL
 Source Server Version : 100416
 Source Host           : localhost:3306
 Source Schema         : servicio

 Target Server Type    : MySQL
 Target Server Version : 100416
 File Encoding         : 65001

 Date: 11/05/2022 04:38:47
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for lugaresdeocio
-- ----------------------------
DROP TABLE IF EXISTS `lugaresdeocio`;
CREATE TABLE `lugaresdeocio`  (
  `IdLugarOcio` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Nombre` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Direccion` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Precio` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Apertura` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Cierre` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `TipoDeLugar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `IdPuebloMagico` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Descripcion` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of lugaresdeocio
-- ----------------------------
INSERT INTO `lugaresdeocio` VALUES ('1', 'Videojuegos El Real', 'José María Morelos 21, 20715 Real de Asientos, Ags.', 'Renta x hora: $25', '10:00', '19:00', '1', '1', 'Disfruta de un lugar para retar a tus amigos en un FIFA o capturar la bandera en Halo');
INSERT INTO `lugaresdeocio` VALUES ('2', 'Casa del árbol', 'C. Jose Guadalupe Victoria 2, 20714 Real de Asientos, Ags.', 'Entrada: $30', '11:00', '16:00', '2', '1', 'Museo con una excelente esposición sobre la biodiversidad en Aguascalientes.');
INSERT INTO `lugaresdeocio` VALUES ('3', 'Museo del Minero', 'Calle Vicente Guerrero 7, 20710 Real de Asientos, Ags.', 'Entrada: $30', '11:00', '16:00', '2', '1', 'Buen lugar para conocer parte de la historia de las minas y sus leyendas.');
INSERT INTO `lugaresdeocio` VALUES ('4', 'La Cueva del Fraile', 'C. Ignacio López Rayon 106, Ejidal, 20804 Calvillo, Ags.', 'Entrada: $20', '10:00', '17:00', '3', '2', 'Lugar historico dentro del pueblo.');
INSERT INTO `lugaresdeocio` VALUES ('5', 'Chuy Bombas', 'C. Guanajuato 306, Emiliano Zapata, 20805 Calvillo, Ags.', 'Por consumo', '14:00', '22:00', '4', '2', 'Muy buen lugar,para pasar un rato relax con una excelente compañía.');
INSERT INTO `lugaresdeocio` VALUES ('6', 'Andador Matamoros', 'C. Matamoros 504, Zona Centro, 20800 Calvillo, Ags.', 'Gratuito', '00:00', '23:59', '3', '2', 'Excelente lugar para observar desde lo alto un poco de la ciudad y para tomar unas fotos increíbles.');
INSERT INTO `lugaresdeocio` VALUES ('7', 'Cortina de la Presa Calles', 'Calle Domingo de la Cruz 509, 20500 San José de Gracia, Ags.', 'Tour en tren: $30', '10:00', '17:00', '5', '3', 'Excelente lugar turístico para pasar un buen rato con la familia.');
INSERT INTO `lugaresdeocio` VALUES ('8', 'Pesca deportiva San Jose de Gracia', 'Prof Edmundo Gámez Orozco 401, Col. las Canadas, San José de Gracia, 20500, Ags.', 'Renta de lancha x hora: $60', '08:00', '20:00', '5', '3', '¿Te gusta la pesca deportiva pero no tienes lancha? Esta es tu mejor opción.');
INSERT INTO `lugaresdeocio` VALUES ('9', 'Restaurante Bar Playas 2', 'Juan Domínguez 517, San José de Gracia, 20500 San José de Gracia, Ags.', 'Por consumo', '11:00', '19:00', '4', '3', 'Buenos precios, porciones bien servidas y un ambiente tranquilo y familiar. Bonita vista hacia la presa.');
INSERT INTO `lugaresdeocio` VALUES ('10', 'Rancho La Puerta', 'Carretera Mexicali-Tijuana K.M, 136.5, Rancho la Puerta, 21520 Tecate, B.C.', 'Habitación doble: $1000', '00:00', '23:59', '6', '4', 'Sus centros de salud y belleza serán su experiencia equilibrada de mente/cuerpo/espíritu durante la semana, cada uno atendido por esteticistas y terapeutas calificados.');
INSERT INTO `lugaresdeocio` VALUES ('11', 'Museo Comunitario de Tecate', 'Tlaloc num. 400, dentro del area de CECUTEC, Cuauhtemoc, 21470 Tecate, B.C.', 'Entrada: $30', '10:00', '16:00', '2', '4', 'Para los que gustan de la historia y se inquietan al preguntarse cómo surgió un pueblo como Tecate aquí pueden encontrar la respuesta.');
INSERT INTO `lugaresdeocio` VALUES ('12', 'Parque Miguel Hidalgo', 'Calle Ortiz Rubio y Callejon Libertad s/n, centro, 21400 Tecate, B.C.', 'Gratuito', '00:00', '23:59', '7', '4', 'Pintoresco parque de la ciudad conocido por su entorno relajado, árboles, bancos y estatuas icónicas.');
INSERT INTO `lugaresdeocio` VALUES ('13', 'Tortugueros Las Playitas AC', 'Bocana entre Calle los Mangos y Camino Internacional, 23300 Todos Santos, B.C.S.', 'Entrada: $25', '17:00', '19:00', '5', '5', 'Programa de recuperación de la población de tortugas marinas, vista a la playa y tortugas.');
INSERT INTO `lugaresdeocio` VALUES ('14', 'Grupo Tortuguero Todos Santos', 'Playa \"La Maquina, 23300 Todos Santos, B.C.S.', 'Liberación x tortuga: $100', '16:00', '19:00', '5', '5', 'Lugar para liberar tortugas al oceano pacifico y ver el atardecer.');
INSERT INTO `lugaresdeocio` VALUES ('15', 'Playa Los Mangos', 'Calle Mangos esq, De los Cocos, Todos Santos, B.C.S.', 'Gratuito', '00:00', '23:59:', '8', '5', 'Excelente playa para comer y ver el atardecer, no apta para nadar.');
INSERT INTO `lugaresdeocio` VALUES ('16', 'Loreto Coastal Expeditions', 'Loreto Marina, Obrera, 23880 Loreto, B.C.S.', 'Por persona: 95 dolares', '09:00', '16:00', '9', '6', 'Disfrute de la belleza del Mar de Cortés en una económica aventura de medio día con todo incluido, perfecta para todas las edades.');
INSERT INTO `lugaresdeocio` VALUES ('17', 'Dolphin Dive & Vive Loreto Tours', 'Calle Benito Juarez, Centro, 23880 Loreto, B.C.S.', 'Por persona: 50 dolares', '09:00', '19:00', '9', '6', 'BUCEA EN EL MAR DE CORTÉS, ¡EL ACUARIO DEL MUNDO!');
INSERT INTO `lugaresdeocio` VALUES ('18', 'Malecon Loreto', 'Centro, 23880 Loreto, B.C.S.', 'Gratuito', '00:00', '23:59', '3', '6', 'Un pueblo hermoso, con mágicas playas y sobre todo con exquisita gastronomía!');
INSERT INTO `lugaresdeocio` VALUES ('19', 'Palizada', 'Centro, 24200 Palizada, Camp.', 'Por consumo', '09:00', '20:00', '4', '7', 'Restaurante Bar que ofrece la comida mas tipica de Campeche.');
INSERT INTO `lugaresdeocio` VALUES ('20', 'Parque de la Estatua de la libertad', 'Miguel Hidalgo 191, Centro, 24200 Ejido del Centro, Camp.', 'Gratuito', '00:00', '23:59', '7', '7', 'Parque local que en su centro posee una replica de la famosa estatua de la libertad.');
INSERT INTO `lugaresdeocio` VALUES ('21', 'Malecon Palizada', 'Miguel Hidalgo, Centro, 24200 Palizada, Camp.', 'Gratuito', '00:00', '23:59', '3', '7', 'Lugar muy agradable, la vista es hermosa, se puede pasar un rato muy agradable con la familia y amigos.');
INSERT INTO `lugaresdeocio` VALUES ('22', 'Museo Faro Antiguo', 'Revolución, 24327 Isla Aguada, Camp.', 'Entrada: $25', '09:00', '18:00', '2', '8', 'Pequeño museo montado en el faro antiguo, se tiene acceso a una buena vista de isla aguada.');
INSERT INTO `lugaresdeocio` VALUES ('23', 'Playa Isla Aguada', 'Agrarista, 24327 Isla Aguada, Camp.', 'Gratuito', '00:00', '23:59', '8', '8', 'El malecón muy bonita playa y buenos restaurantes de mariscos');
INSERT INTO `lugaresdeocio` VALUES ('24', 'El Rey de los Delfines', 'Revolución, 24327 Isla Aguada, Camp.', 'Tour: $250 x persona', '07:00:00.000', '18:00:00.000', '9', '8', 'El mejor recorrido por la playa y nado con delfines.');
INSERT INTO `lugaresdeocio` VALUES ('25', 'Ex Convento de Tepoztlán', 'No Reelección S/N, Centro, 62520 Tepoztlán, Mor.', 'Entrada: $25', '10:00:00.000', '17:00:00.000', '2', '9', 'Un paraíso poco conocido, disfruta este espacio tan precioso , recorre sus jardines y sus bellas exposiciones');
INSERT INTO `lugaresdeocio` VALUES ('26', 'Uitetl nantli tlali, spa y temazcal', 'C. Netzahualcóyotl 1 bis, Santisima Trinidad, 62520 Tepoztlán, Mor.', 'Acceso: $150 por persona.', '10:00:00.000', '16:00:00.000', '6', '9', 'Vive una experiencia relajante y espiritual en este lugar de relajación.');
INSERT INTO `lugaresdeocio` VALUES ('27', 'Cascada de los Venaditos', 'Valle de Atongo, 62520 Tepoztlán, Mor.', 'Acceso: $40 por persona.', '09:00:00.000', '16:00:00.000', '10', '9', 'Lugar muy limpio y verde, un mirador con buena vista, puedes interactuar con los venados.');
INSERT INTO `lugaresdeocio` VALUES ('28', 'La Cereria', 'Corregidora, Centro, 62540 Tlayacapan, Mor.', 'Entrada: $25', '09:00:00.000', '16:00:00.000', '2', '10', 'ANTIGUAMENTE FUE UNA CASONA DEL SIGLO XVI QUE PASO DE SER UNA CASA A FABRICA DE VELAS, EN 1991 ES TRANSFORMADA EN MUSEO Y CENTRO CULTURAL');
INSERT INTO `lugaresdeocio` VALUES ('29', 'Oxpango', 'Calle de Oxpango No. 2, Barrio de Texcalpan, 62540 Tlayacapan, Mor.', 'Acceso: $160', '08:00:00.000', '20:00:00.000', '9', '10', 'Lugar perfecto para acampar con amigos y disfrutar de su increible alberca.');
INSERT INTO `lugaresdeocio` VALUES ('30', 'La Tlahuanca', '5 de Mayo 11-3, Centro, 62540 Tlayacapan, Mor.', 'Por consumo', '11:30:00.000', '20:30:00.000', '4', '10', 'Disfruta de los mejores mojitos de la región acompañados de comida tipica mexicana.');

-- ----------------------------
-- Table structure for pueblos_magicos
-- ----------------------------
DROP TABLE IF EXISTS `pueblos_magicos`;
CREATE TABLE `pueblos_magicos`  (
  `idPueblos_Magicos` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `estado` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`idPueblos_Magicos`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pueblos_magicos
-- ----------------------------
INSERT INTO `pueblos_magicos` VALUES (1, 'Real de Asientos', 'Aguascalientes');
INSERT INTO `pueblos_magicos` VALUES (2, 'Calvillo', 'Aguascalientes');
INSERT INTO `pueblos_magicos` VALUES (3, 'San Jose de Gracia', 'Aguascalientes');
INSERT INTO `pueblos_magicos` VALUES (4, 'Tecate', 'Baja California\r\n');
INSERT INTO `pueblos_magicos` VALUES (5, 'Todos Santos\r\n', 'Baja California Sur\r\n');
INSERT INTO `pueblos_magicos` VALUES (6, 'Loreto\r\n', 'Baja California Sur\r\n');
INSERT INTO `pueblos_magicos` VALUES (7, 'Palizada', 'Campeche\r\n');
INSERT INTO `pueblos_magicos` VALUES (8, 'Isla Aguada\r\n', 'Campeche\r\n');
INSERT INTO `pueblos_magicos` VALUES (9, 'Tepoztlan\r\n', 'Morelos\r\n');
INSERT INTO `pueblos_magicos` VALUES (10, 'Tlayacapan\r\n', 'Morelos\r\n');

-- ----------------------------
-- Table structure for tipo
-- ----------------------------
DROP TABLE IF EXISTS `tipo`;
CREATE TABLE `tipo`  (
  `idtipo` int NOT NULL,
  `nombre` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `comentarios` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`idtipo`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tipo
-- ----------------------------
INSERT INTO `tipo` VALUES (1, 'Videojuego', 'Renta de Videojuegos');
INSERT INTO `tipo` VALUES (2, 'Museo', 'Exposicion ');
INSERT INTO `tipo` VALUES (3, 'Lugar Historico', 'Lunto de interes historico');
INSERT INTO `tipo` VALUES (4, 'Restaurante Bar', 'Lugar dedicado a la venta de bebidas alcoholi');
INSERT INTO `tipo` VALUES (5, 'Sitio de interes publico\r\n', 'Lugar relevante por su labor tan significativ');
INSERT INTO `tipo` VALUES (6, 'Hotel SPA\r\n', 'Lugar para hospedaje y actividades de relajac');
INSERT INTO `tipo` VALUES (7, 'Parque\r\n', 'Centro de esparcimiento, zona verde.\r\n');
INSERT INTO `tipo` VALUES (8, 'Playa\r\n', 'Zona cerca del mar, con actividades maritimas');
INSERT INTO `tipo` VALUES (9, 'Empresa de tour turistico\r\n', 'Empresa dedicada a ofrecer tour turisticos de');
INSERT INTO `tipo` VALUES (10, 'Reserva de la biosfera\r\n', 'Zona reservada para la protección y cuidado d');

SET FOREIGN_KEY_CHECKS = 1;
