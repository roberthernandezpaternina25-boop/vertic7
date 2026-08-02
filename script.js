const products = [
  {
    id: 1,
    category: 'women-tshirts',
    name: 'Camiseta Silletero',
    price: 50.000,
    description: 'Diseño Silletero al frente, algodón suave.',
    image: 'https://i.ibb.co/ZzxLYJPG/5.jpg'
  },
  {
    id: 2,
    category: 'women-tshirts',
    name: 'Camiseta Medellín',
    price: 50.000,
    description: 'Estampa Medellín, corte clásico femenino.',
    image: 'https://i.ibb.co/DgCxQmgY/2.jpg'
  },
  {
    id: 3,
    category: 'women-tshirts',
    name: 'Camiseta Silletero (espalda)',
    price: 50.000,
    description: 'Diseño en la espalda con ilustración tradicional.',
    image: 'https://i.ibb.co/dwTT3p8Y/1.jpg'
  },
  {
    id: 4,
    category: 'women-tshirts',
    name: 'Camiseta Colorida',
    price: 50.000,
    description: 'Letras y flores, look fresco.',
    image: 'https://i.ibb.co/KcMJ1rY6/4.jpg'
  },
  {
    id: 5,
    category: 'women-tshirts',
    name: 'Camiseta Floral',
    price: 50.000,
    description: 'estampado tradicional.',
    image: 'https://i.ibb.co/TM4r7TMj/3.jpg'
  },
  {
    id: 6,
    category: 'women-tshirts',
    name: 'Camiseta Silletero (detalle)',
    price: 50.000,
    description: 'básico en tela pesada .',
    talla: 'S,M, L, XL',
    image: 'https://i.ibb.co/RTZPFdk1/Whats-App-Image-2026-07-27-at-11-03-25-AM.jpg'
  },
  {
    id: 7,
    category: 'women-tennis',
    name: 'Tenis Dama 1',
    price: 120.000,
    description: 'Tenis cómodo con diseño moderno para mujer.',
    image: 'https://i.ibb.co/mV36M1DS/tenis1.jpg'
  },
  {
    id: 8,
    category: 'women-tennis',
    name: 'Tenis Dama 2',
    price: 120.000,
    description: 'básico en tela pesada .',
    talla: 'S,M, L, XL',
    image: 'https://i.ibb.co/Gf2V8dJf/tenis-2.jpg'
  },
  {
    id: 9,
    category: 'women-tennis',
    name: 'Tenis Dama 3',
    price: 120.000,
    description: 'Tenis ligero ideal para paseos y uso diario.',
    image: 'https://i.ibb.co/Fq6Cgbpd/tenis-3.jpg'
  },
  {
    id: 10,
    category: 'women-tennis',
    name: 'Tenis Dama 4',
    price: 120.000,
    description: 'Tenis con detalle de colores y suela cómoda.',
    image: 'https://i.ibb.co/TDqQf8C0/tenis-4.jpg'
  },
  {
    id: 11,
    category: 'women-tennis',
    name: 'Tenis Dama 5',
    price: 120.000,
    description: 'Tenis moderno con texturas suaves y ajuste perfecto.',
    image: 'https://i.ibb.co/DgTnshDx/tenis-5.jpg'
  },
  {
    id: 12,
    category: 'women-tennis',
    name: 'Tenis Dama 6',
    price: 120.000,
    description: 'Tenis urbano con un look fresco para mujer.',
    image: 'https://i.ibb.co/xq3RS8Bc/tenis-6.jpg'
  },
  {
    id: 13,
    category: 'women-tennis',
    name: 'Tenis Dama 7',
    price: 120.000,
    description: 'Tenis femenino con estilo deportivo y cómodo.',
    image: 'https://i.ibb.co/vtRNNbq/tenis-7.jpg'
  },
  {
    id: 70,
    category: 'women-jeans',
    name: 'Jeans Dama 1',
    price: 70.000,
    description: 'Jeans dama estilo clásico y cómodo.',
    image: 'https://i.ibb.co/FbVgtLjj/jean1.jpg'
  },
  {
    id: 71,
    category: 'women-jeans',
    name: 'Jeans Dama 2',
    price: 98.000,
    description: 'Jeans dama con estilo moderno y ajuste cómodo.',
    image: 'https://i.ibb.co/PGyN2ZLt/jeans2.jpg'
  },
  {
    id: 72,
    category: 'women-jeans',
    name: 'Jeans Dama 3',
    price: 98.000,
    description: 'Jeans dama con diseño urbano y corte femenino.',
    image: 'https://i.ibb.co/7J3YtYks/jeans3.jpg'
  },
  {
    id: 73,
    category: 'women-jeans',
    name: 'Jeans Dama 4',
    price: 98.000,
    description: 'Jeans dama con detalle moderno y look casual.',
    image: 'https://i.ibb.co/XrVq0vvh/jeans4.jpg'
  },
  {
    id: 74,
    category: 'women-jeans',
    name: 'Jeans Dama 5',
    price: 98.000,
    description: 'Jeans dama con acabado cómodo y versátil.',
    image: 'https://i.ibb.co/twYbX6hr/jeans5.jpg'
  },
  {
    id: 75,
    category: 'women-jeans',
    name: 'Jeans Dama 6',
    price: 98.000,
    description: 'Jeans dama con estilo fresco para el día a día.',
    image: 'https://i.ibb.co/bjv48yR0/jeans6.jpg'
  },
  {
    id: 76,
    category: 'women-jeans',
    name: 'Jeans Dama 7',
    price: 98.000,
    description: 'Jeans dama con silueta moderna y tendencia.',
    image: 'https://i.ibb.co/shZhwh9/jeans7.jpg'
  },
  {
    id: 77,
    category: 'women-jeans',
    name: 'Jeans Dama 8',
    price: 98.000,
    description: 'Jeans dama con diseño chic y comodidad.',
    image: 'https://i.ibb.co/d4gdnd5g/8.jpg'
  },
  {
    id: 78,
    category: 'women-jeans',
    name: 'Jeans Dama 9',
    price: 98.000,
    description: 'Jeans dama con toque urbano y elegante.',
    image: 'https://i.ibb.co/M5DjFkzz/9.jpg'
  },
  {
    id: 79,
    category: 'women-jeans',
    name: 'Jeans Dama 10',
    price: 98.000,
    description: 'Jeans dama con corte cómodo y estilo actual.',
    image: 'https://i.ibb.co/m5b4vQz4/10.jpg'
  },
  {
    id: 80,
    category: 'women-jeans',
    name: 'Jeans Dama 11',
    price: 98.000,
    description: 'Jeans dama con personalidad y muy versátil.',
    image: 'https://i.ibb.co/zMZVpmn/11.jpg'
  },
  {
    id: 81,
    category: 'women-jeans',
    name: 'Jeans Dama 12',
    price: 98.000,
    description: 'Jeans dama con acabado premium y moderno.',
    image: 'https://i.ibb.co/NnGBz8cG/12.jpg'
  },
  {
    id: 51,
    category: 'women-ruanas',
    name: 'Ruana (1)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'https://i.ibb.co/606WdjkC/ruanas1.jpg'
  },
  {
    id: 52,
    category: 'women-ruanas',
    name: 'Ruana (2)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'https://i.ibb.co/Pz09BVks/ruana2-2.jpg'
  },
  {
    id: 53,
    category: 'women-ruanas',
    name: 'Ruana (3)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'https://i.ibb.co/5xWL4FL7/ruana3.jpg'
  },
  {
    id: 54,
    category: 'women-ruanas',
    name: 'Ruana (4)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'https://i.ibb.co/TC1m3p9/ruana4.jpg'
  },
  {
    id: 55,
    category: 'women-ruanas',
    name: 'Ruana (5)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'https://i.ibb.co/WNRMxPWk/ruana5.jpg'
  },
  {
    id: 56,
    category: 'women-ruanas',
    name: 'Ruana (6)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'https://i.ibb.co/PZ9nQWp5/ruana6.jpg'
  },
  {
    id: 57,
    category: 'women-ruanas',
    name: 'Ruana (7)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'https://i.ibb.co/qFM2DDFB/ruana7.jpg'
  },
  {
    id: 58,
    category: 'women-ruanas',
    name: 'Ruana (8)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'https://i.ibb.co/NdyGrRd3/ruana8.jpg'
  },
  {
    id: 14,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (1)',
    price: 90.000,
    description: 'Corte moderno con estampado masculino.',
    image: 'https://i.ibb.co/vxGgXdjZ/14.jpg'
  },
  {
    id: 8,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (2)',
    price: 90.000,
    description: 'Tonos sobrios y estilo urbano.',
    image: 'https://i.ibb.co/whxwtkZC/8.jpg'
  },
  {
    id: 9,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (3)',
    price: 90.000,
    description: 'Look fresco para uso diario.',
    image: 'https://i.ibb.co/53gD1NJ/9.jpg'
  },
  {
    id: 10,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (4)',
    price: 90.00,
    description: 'Estilo relajado con detalle gráfico.',
    image: 'https://i.ibb.co/rRbWnGKX/10.jpg'
  },
  {
    id: 11,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (5)',
    price: 90.000,
    description: 'Moda urbana con corte cómodo.',
    image: 'https://i.ibb.co/yFR0X8JQ/11.jpg'
  },
  {
    id: 12,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (6)',
    price: 90.000,
    description: 'Diseño casual para cualquier ocasión.',
    image: 'https://i.ibb.co/nMxK6j6R/12.jpg'
  },
  {
    id: 13,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (7)',
    price: 90.000,
    description: 'Estilo moderno con estampados frescos.',
    image: 'https://i.ibb.co/tMCzHrmJ/13.jpg'
  },
  {
    id: 14,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (8)',
    price: 90.000,
    description: 'Look urbano para tu día a día.',
    image: 'https://i.ibb.co/vxGgXdjZ/14.jpg'
  },
  {
    id: 15,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (9)',
    price: 90.000,
    description: 'Estilo básico con un toque moderno.',
    image: 'https://i.ibb.co/Z1czZYYf/15.jpg'
  },
  {
    id: 16,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (10)',
    price: 90.000,
    description: 'Acentos discretos y look diario.',
    image: 'https://i.ibb.co/YFsxcrMg/16.jpg'
  },
  {
    id: 17,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (11)',
    price: 90.000,
    description: 'Diseño minimalista para cualquier ocasión.',
    image: 'https://i.ibb.co/dJzbPgbY/17.jpg'
  },
  {
    id: 18,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (12)',
    price: 90.000,
    description: 'Estilo urbano con acabado suave.',
    image: 'https://i.ibb.co/20s5d4nh/18.jpg'
  },
  {
    id: 19,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (13)',
    price: 90.000,
    description: 'Look moderno con estampado ligero.',
    image: 'https://i.ibb.co/QzKFWHk/19.jpg'
  },
  {
    id: 20,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (14)',
    price: 90.000,
    description: 'Color sólido con estilo urbano.',
    image: 'https://i.ibb.co/cXhvRhrq/20.jpg'
  },
  {
    id: 21,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (15)',
    price: 90.000,
    description: 'Diseño fresco y cómodo para el día.',
    image: 'https://i.ibb.co/7NkrtNNV/21.jpg'
  },
  {
    id: 22,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (16)',
    price: 90.000,
    description: 'Estilo relajado con detalles modernos.',
    image: 'https://i.ibb.co/G41LyrhD/22.jpg'
  },
  {
    id: 23,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (17)',
    price: 90.000,
    description: 'Look urbano con gráfico sutil.',
    image: 'https://i.ibb.co/p6mtYS5S/23.jpg'
  },
  {
    id: 24,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (18)',
    price: 90.000,
    description: 'Corte clásico con toque contemporáneo.',
    image: 'https://i.ibb.co/bjcMyqXR/24.jpg'
  },
  {
    id: 25,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (19)',
    price: 90.000,
    description: 'Estilo versátil para todo el día.',
    image: 'https://i.ibb.co/RGX2kt4r/25.jpg'
  },
  {
    id: 26,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (20)',
    price: 90.000,
    description: 'Diseño urbano con detalles modernos.',
    image: 'https://i.ibb.co/KpHy4Gz6/26.jpg'
  },
  {
    id: 27,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (21)',
    price: 90.000,
    description: 'Comodidad y estilo en una sola prenda.',
    image: 'https://i.ibb.co/5hZvvcJk/1.jpg'
  },
  {
    id: 28,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (22)',
    price: 90.000,
    description: 'Look urbano y casual.',
    image: 'https://i.ibb.co/SDV4Ywwt/2.jpg'
  },
  {
    id: 29,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (23)',
    price: 90.000,
    description: 'Estilo fresco para tu closet.',
    image: 'https://i.ibb.co/KzVPB3Z1/3.jpg'
  },
  {
    id: 30,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (24)',
    price: 90.000,
    description: 'Diseño moderno con acabado suave.',
    image: 'https://i.ibb.co/PsxL058K/4.jpg'
  },
  {
    id: 31,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (25)',
    price: 90.000,
    description: 'Look diario con estilo urbano.',
    image: 'https://i.ibb.co/CGnMT1Y/5.jpg'
  },
  {
    id: 32,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (26)',
    price: 90.000,
    description: 'Estilo versátil para el día a día.',
    image: 'https://i.ibb.co/rKTQ8yk3/6.jpg'
  },
  {
    id: 33,
    category: 'men-sets',
    name: 'Conjunto deportivo (1)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/35VhdMJL/conjunto-caballero-1-PM.jpg'
  },
  {
    id: 34,
    category: 'men-sets',
    name: 'Conjunto deportivo (2)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/8nPy4zpk/conjunto-caballero-2.jpg'
  },
  {
    id: 35,
    category: 'men-sets',
    name: 'Conjunto deportivo (3)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/WvTQ5XJY/conjunto-caballero-3.jpg'
  },
  {
    id: 36,
    category: 'men-sets',
    name: 'Conjunto deportivo (4)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/v4phfrrM/conjunto-caballero-4.jpg'
  },
  {
    id: 37,
    category: 'men-sets',
    name: 'Conjunto deportivo (5)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/svRwQFLr/conjunto-caballero-5.jpg'
  },
  {
    id: 38,
    category: 'men-sets',
    name: 'Conjunto deportivo (6)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/pj8q2Kn6/conjunto-caballero-6.jpg'
  },
  {
    id: 39,
    category: 'men-sets',
    name: 'Conjunto deportivo (7)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/rfMChQQ8/conjunto-caballero-7.jpg'
  },
  {
    id: 40,
    category: 'men-sets',
    name: 'Conjunto deportivo (8)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/PGK451W2/conjunto-caballero-8.jpg'
  },
  {
    id: 41,
    category: 'men-sets',
    name: 'Conjunto deportivo (9)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/bYxD3hb/conjunto-caballero-9.jpg'
  },
  {
    id: 42,
    category: 'men-sets',
    name: 'Conjunto deportivo (10)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/twzRTKYJ/conjunto-caballero-10.jpg'
  },
  {
    id: 43,
    category: 'men-sets',
    name: 'Conjunto deportivo (11)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/yc3DXjR6/conjunto-caballero-11.jpg'
  },

  {
    id: 45,
    category: 'men-sets',
    name: 'Conjunto deportivo (13)',
    price: 160.000,
    description: 'Algodón perchado  .',
    image: 'https://i.ibb.co/Sw2VCT4m/conjunto-caballero-13.jpg'
  },
  {
    id: 46,
    category: 'men-sets',
    name: 'Conjunto deportivo (14)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/d0y5P6RY/conjunto-caballero-14.jpg'
  },
  {
    id: 47,
    category: 'men-sets',
    name: 'Conjunto deportivo (15)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/5ggKhPK1/conjunto-caballero-15.jpg'
  },
  {
    id: 48,
    category: 'men-sets',
    name: 'Conjunto deportivo (16)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/gL4vR73L/conjunto-caballero-16.jpg'
  },

  {
    id: 50,
    category: 'men-sets',
    name: 'Conjunto deportivo (18)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'https://i.ibb.co/zhtk5FxM/conjunto-caballero-18.jpg'
  },
  {
    id: 60,
    category: 'men-hats',
    name: 'gorra beisbolera (1)',
    price: 35.000,
    description: 'Gorra casual con estilo urbano para hombres.',
    image: 'https://i.ibb.co/yn0PpqsD/gorra-1.jpg'
  },
  {
    id: 61,
    category: 'men-hats',
    name: 'gorra beisbolera (2)',
    price: 35.000,
    description: 'Gorra casual con estilo urbano para hombres.',
    image: 'https://i.ibb.co/HfGrMYRj/gorra-2.jpg'
  },
  {
    id: 62,
    category: 'men-hats',
    name: 'gorra beisbolera (3)',
    price: 35.000,
    description: 'Look moderno con acabado resistente.',
    image: 'https://i.ibb.co/9mP3CqjB/gorra-3.jpg'
  },
  {
    id: 63,
    category: 'men-hats',
    name: 'gorra beisbolera (4)',
    price: 35.000,
    description: 'Prenda versátil para el día a día.',
    image: 'https://i.ibb.co/GvNwkz2s/gorra-4.jpg|'
  },
  {
    id: 64,
    category: 'men-hats',
    name: 'gorra beisbolera (5)',
    price: 35.000,
    description: 'Diseño cómodo y fresco para el sol.',
    image: 'https://i.ibb.co/99MSQstF/gorra-5.jpg'
  },
  {
    id: 65,
    category: 'men-hats',
    name: 'Gorra mexicana (1)',
    price: 40.000,
    description: 'Estilo tradicional con toque urbano.',
    image: 'https://i.ibb.co/FbjmzZgK/gorramexicancaps-1.jpg'
  },
  {
    id: 66,
    category: 'men-hats',
    name: 'Gorra mexicana (2)',
    price: 40.000,
    description: 'Modelo llamativo y muy cómodo.',
    image: 'https://i.ibb.co/ZptmyW9X/gorramexicancaos-2.jpg'
  },
  {
    id: 67,
    category: 'men-hats',
    name: 'Gorra 1.1 (1)',
    price: 38.000,
    description: 'Estilo casual con detalle moderno.',
    image: 'https://i.ibb.co/zVQhstmG/gorras1-1-1.jpg'
  },
  {
    id: 68,
    category: 'men-hats',
    name: 'Gorra 1.1 (2)',
    price: 38.000,
    description: 'Diseño fresco para complementar tu look.',
    image: 'https://i.ibb.co/Z6g4zJzQ/gorras1-1-2.jpg'
  },
  {
    id: 69,
    category: 'men-hats',
    name: 'Gorra 1.1 (3)',
    price: 38.000,
    description: 'Modelo moderno con excelente acabado.',
    image: 'https://i.ibb.co/Zp5jBmsG/gorras1-1-3.jpg'
  },
  {
    id: 82,
    category: 'men-specials',
    name: 'Prenda especial caballero',
    price: 120.000,
    description: 'Nueva prenda especial para hombres con estilo urbano.',
    image: 'https://i.ibb.co/V0pLwf63/1.jpg'
  },
  {
    id: 83,
    category: 'men-specials',
    name: 'Prenda especial caballero (2)',
    price: 120.000,
    description: 'tela jeans semilicrado <br> Es bota ancha tipo baggy.',
    talla: '30,32,34,36,',
    image: 'https://i.ibb.co/RGYYyyvw/2.jpg'
  }
];

const cartItems = [];

const productList = document.getElementById('product-list');
const categoryFilters = document.getElementById('category-filters');
const cartCountElement = document.getElementById('cart-count');
const cartItemsElement = document.getElementById('cart-items');
const cartSubtotalElement = document.getElementById('cart-subtotal');
const openCartButton = document.getElementById('open-cart');
const closeCartButton = document.getElementById('close-cart');
const cartOverlay = document.getElementById('cart-overlay');
const cartPanel = document.getElementById('cart-panel');
const checkoutButton = document.getElementById('checkout-btn');
const menuToggleButton = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const imageModal = document.getElementById('image-modal');
const imageModalClose = document.getElementById('image-modal-close');
const imageModalPrev = document.getElementById('image-modal-prev');
const imageModalNext = document.getElementById('image-modal-next');
const imageModalBack = document.getElementById('image-modal-back');
const imageModalImg = document.getElementById('image-modal-img');
const imageModalCaption = document.getElementById('image-modal-caption');
const whatsappNumber = '3218920417';
let selectedCategory = 'all';
let currentGallery = [];
let currentModalIndex = 0;

function safeUrl(url) {
  if (!url) return '';
  const s = String(url).trim();
  const lower = s.toLowerCase();
  if (lower.startsWith('javascript:')) return '';
  if (/^(https?:|\/|\.\/|\.\.\/|data:image)/i.test(s)) return s;
  return '';
}

function formatCurrency(value) {
  const num = Number(value) || 0;
  return num.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 3, maximumFractionDigits: 3 });
}

function renderProducts() {
  const filteredProducts = selectedCategory === 'all'
    ? products
    : selectedCategory === 'women' || selectedCategory === 'men'
      ? products.filter((product) => product.category.startsWith(selectedCategory))
      : products.filter((product) => product.category === selectedCategory);

  currentGallery = filteredProducts;

  // Render products using safe DOM methods to avoid HTML injection
  productList.innerHTML = '';
  filteredProducts.forEach((product, index) => {
    const article = document.createElement('article');
    article.className = 'product-card';

    const img = document.createElement('img');
    img.src = safeUrl(product.image);
    img.alt = product.name || '';
    img.dataset.index = index;
    img.dataset.name = product.name || '';
    img.dataset.description = product.description || '';
    article.appendChild(img);

    const h3 = document.createElement('h3');
    h3.textContent = product.name || '';
    article.appendChild(h3);

    const p = document.createElement('p');
    // preserve simple <br> as newlines but render as text to avoid injection
    const safeDescription = (product.description || '').replace(/<br\s*\/?/gi, '\n');
    p.textContent = safeDescription;
    article.appendChild(p);

    const footer = document.createElement('div');
    footer.className = 'product-footer';

    const priceSpan = document.createElement('span');
    priceSpan.className = 'price';
    priceSpan.textContent = formatCurrency(product.price);
    footer.appendChild(priceSpan);

    const actions = document.createElement('div');
    actions.className = 'product-actions';

    const btnAdd = document.createElement('button');
    btnAdd.className = 'add-to-cart';
    btnAdd.type = 'button';
    btnAdd.dataset.id = product.id;
    btnAdd.textContent = 'Agregar';

    const btnBuy = document.createElement('button');
    btnBuy.className = 'buy-now';
    btnBuy.type = 'button';
    btnBuy.dataset.id = product.id;
    btnBuy.textContent = 'Comprar';

    const btnInfo = document.createElement('button');
    btnInfo.className = 'info-btn';
    btnInfo.type = 'button';
    btnInfo.dataset.id = product.id;
    btnInfo.textContent = 'Más información';

    actions.appendChild(btnAdd);
    actions.appendChild(btnBuy);
    actions.appendChild(btnInfo);

    footer.appendChild(actions);
    article.appendChild(footer);

    productList.appendChild(article);
  });
}

function showModalImage(index) {
  const product = currentGallery[index];
  if (!product) return;

  currentModalIndex = index;
  imageModalImg.src = safeUrl(product.image);
  imageModalImg.alt = product.name;
  imageModalCaption.textContent = product.description || product.name;
  imageModal.classList.add('open');
  imageModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function scrollToMainImage() {
  const imageElement = productList.querySelector(`img[data-index="${currentModalIndex}"]`);
  if (!imageElement) return;
  imageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  closeImageModal();
}

function openImageModal(index) {
  if (currentGallery.length === 0) {
    currentGallery = products;
  }
  showModalImage(index);
}

function closeImageModal() {
  imageModal.classList.remove('open');
  imageModal.setAttribute('aria-hidden', 'true');
  imageModalImg.src = '';
  document.body.classList.remove('no-scroll');
}

function setActiveFilter(category) {
  selectedCategory = category;
  const buttons = categoryFilters.querySelectorAll('.filter-btn');
  buttons.forEach((button) => {
    button.classList.toggle('active', button.dataset.category === category);
  });
  renderProducts();
}

categoryFilters.addEventListener('click', (event) => {
  const button = event.target.closest('.filter-btn');
  if (!button) return;

  const submenu = button.closest('.filter-group')?.querySelector('.submenu');

  if (button.dataset.category === 'women' || button.dataset.category === 'men') {
    submenu?.classList.toggle('show');
    setActiveFilter(button.dataset.category);
    return;
  }

  if (button.classList.contains('subfilter-btn')) {
    submenu?.classList.remove('show');
    setActiveFilter(button.dataset.category);
    return;
  }

  submenu?.classList.remove('show');
  setActiveFilter(button.dataset.category);
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.filter-group')) {
    document.querySelectorAll('.submenu').forEach((menu) => menu.classList.remove('show'));
  }
});

function updateCart() {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCountElement.textContent = totalItems;
  cartSubtotalElement.textContent = formatCurrency(subtotal);

  // Render cart items safely using DOM APIs
  cartItemsElement.innerHTML = '';
  if (cartItems.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-cart';
    empty.textContent = 'Tu carrito está vacío.';
    cartItemsElement.appendChild(empty);
    return;
  }

  cartItems.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';

    const img = document.createElement('img');
    img.src = safeUrl(item.image);
    img.alt = item.name || '';
    itemDiv.appendChild(img);

    const info = document.createElement('div');
    info.className = 'cart-item-info';

    const title = document.createElement('span');
    title.className = 'cart-item-title';
    title.textContent = item.name || '';
    info.appendChild(title);

    const priceEl = document.createElement('span');
    priceEl.className = 'cart-item-price';
    priceEl.textContent = formatCurrency(item.price);
    info.appendChild(priceEl);

    const qtyControls = document.createElement('div');
    qtyControls.className = 'quantity-controls';

    const decBtn = document.createElement('button');
    decBtn.type = 'button';
    decBtn.dataset.action = 'decrease';
    decBtn.dataset.id = item.id;
    decBtn.textContent = '−';

    const qtySpan = document.createElement('span');
    qtySpan.textContent = String(item.quantity);

    const incBtn = document.createElement('button');
    incBtn.type = 'button';
    incBtn.dataset.action = 'increase';
    incBtn.dataset.id = item.id;
    incBtn.textContent = '+';

    qtyControls.appendChild(decBtn);
    qtyControls.appendChild(qtySpan);
    qtyControls.appendChild(incBtn);
    info.appendChild(qtyControls);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-item';
    removeBtn.type = 'button';
    removeBtn.dataset.action = 'remove';
    removeBtn.dataset.id = item.id;
    removeBtn.textContent = 'Eliminar';
    info.appendChild(removeBtn);

    itemDiv.appendChild(info);
    cartItemsElement.appendChild(itemDiv);
  });
}

function openCart() {
  cartOverlay.classList.add('active');
  cartPanel.classList.add('open');
  document.body.classList.add('no-scroll');
}

function closeCart() {
  cartOverlay.classList.remove('active');
  cartPanel.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

function closeMobileMenu() {
  if (!navLinks) return;
  navLinks.classList.remove('open');
  menuToggleButton?.setAttribute('aria-expanded', 'false');
}

function toggleMobileMenu(event) {
  if (!navLinks || !menuToggleButton) return;
  if (event) event.stopPropagation();
  const isOpen = navLinks.classList.toggle('open');
  menuToggleButton.setAttribute('aria-expanded', String(isOpen));
}

function addToCart(productId) {
  const product = products.find((item) => item.id === Number(productId));
  if (!product) return;

  const existingItem = cartItems.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }

  updateCart();
  openCart();
}

function changeQuantity(productId, action) {
  const item = cartItems.find((entry) => entry.id === Number(productId));
  if (!item) return;

  if (action === 'increase') {
    item.quantity += 1;
  } else if (action === 'decrease') {
    item.quantity -= 1;
  } else if (action === 'remove') {
    const index = cartItems.findIndex((entry) => entry.id === Number(productId));
    if (index >= 0) cartItems.splice(index, 1);
  }

  if (item && item.quantity <= 0) {
    const index = cartItems.findIndex((entry) => entry.id === Number(productId));
    if (index >= 0) cartItems.splice(index, 1);
  }

  updateCart();
}

productList.addEventListener('click', (event) => {
  const image = event.target.closest('.product-card img');
  if (image) {
    openImageModal(Number(image.dataset.index));
    return;
  }

  const addBtn = event.target.closest('.add-to-cart');
  if (addBtn) {
    addToCart(addBtn.dataset.id);
    return;
  }

  const buyBtn = event.target.closest('.buy-now');
  if (buyBtn) {
    const product = products.find((p) => p.id === Number(buyBtn.dataset.id));
    if (!product) return;
    const message = `Hola, quiero comprar 1x ${product.name} - ${formatCurrency(product.price)}`;
    const newWin = window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    if (newWin) newWin.opener = null;
    return;
  }

  const infoBtn = event.target.closest('.info-btn');
  if (infoBtn) {
    const product = products.find((p) => p.id === Number(infoBtn.dataset.id));
    if (!product) return;
    const message = `Hola, necesito más información sobre la prenda ${product.name}. ¿Me puedes ayudar?`;
    const newWin = window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    if (newWin) newWin.opener = null;
    return;
  }
});

imageModalClose.addEventListener('click', closeImageModal);
imageModalPrev.addEventListener('click', () => {
  if (!currentGallery.length) return;
  const prevIndex = (currentModalIndex - 1 + currentGallery.length) % currentGallery.length;
  showModalImage(prevIndex);
});
imageModalNext.addEventListener('click', () => {
  if (!currentGallery.length) return;
  const nextIndex = (currentModalIndex + 1) % currentGallery.length;
  showModalImage(nextIndex);
});
imageModalBack.addEventListener('click', scrollToMainImage);
imageModal.addEventListener('click', (event) => {
  if (event.target === imageModal) closeImageModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && imageModal.classList.contains('open')) {
    closeImageModal();
  }
});

cartItemsElement.addEventListener('click', (event) => {
  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) return;

  changeQuantity(actionButton.dataset.id, actionButton.dataset.action);
});

openCartButton.addEventListener('click', openCart);
closeCartButton.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
menuToggleButton?.addEventListener('click', toggleMobileMenu);
document.addEventListener('click', (event) => {
  if (!event.target.closest('.navbar')) {
    closeMobileMenu();
  }
});
navLinks?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    closeMobileMenu();
  }
});

checkoutButton.addEventListener('click', () => {
  if (cartItems.length === 0) return;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const message = encodeURIComponent(
    `Hola, quiero hacer este pedido:\n${cartItems
      .map((item) => `• ${item.quantity}x ${item.name} - ${formatCurrency(item.price * item.quantity)}`)
      .join('\n')}\n\nSubtotal: ${formatCurrency(subtotal)}\nEnvío: Gratis`
  );

  const newWin = window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  if (newWin) newWin.opener = null;
  cartItems.length = 0;
  updateCart();
  const thanks = document.createElement('div');
  thanks.className = 'empty-cart';
  thanks.textContent = '¡Gracias por tu compra! Te redirigimos a WhatsApp.';
  cartItemsElement.innerHTML = '';
  cartItemsElement.appendChild(thanks);
});

renderProducts();
updateCart();
