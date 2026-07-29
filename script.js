const products = [
  {
    id: 1,
    category: 'women-tshirts',
    name: 'Camiseta Silletero',
    price: 50.0000000,
    description: 'Diseño Silletero al frente, algodón suave.',
    image: 'imagenes/camisetas dama/1.jpg'
  },
  {
    id: 2,
    category: 'women-tshirts',
    name: 'Camiseta Medellín',
    price: 50.0000,
    description: 'Estampa Medellín, corte clásico femenino.',
    image: 'imagenes/camisetas dama/2.jpg'
  },
  {
    id: 3,
    category: 'women-tshirts',
    name: 'Camiseta Silletero (espalda)',
    price: 50.000,
    description: 'Diseño en la espalda con ilustración tradicional.',
    image: 'imagenes/camisetas dama/3.jpg'
  },
  {
    id: 4,
    category: 'women-tshirts',
    name: 'Camiseta Colorida',
    price: 50.000,
    description: 'Letras y flores, look fresco.',
    image: 'imagenes/camisetas dama/4.jpg'
  },
  {
    id: 5,
    category: 'women-tshirts',
    name: 'Camiseta Floral',
    price: 50.000,
    description: 'Ilustración floral en tonos cálidos.',
    image: 'imagenes/camisetas dama/5.jpg'
  },
  {
    id: 6,
    category: 'women-tshirts',
    name: 'Camiseta Silletero (detalle)',
    price: 50.000,
    description: 'Detalle posterior con flores y paisaje.',
    image: 'imagenes/camisetas dama/6.jpg'
  },
  {
    id: 7,
    category: 'women-tennis',
    name: 'Tenis Dama 1',
    price: 120.000,
    description: 'Tenis cómodo con diseño moderno para mujer.',
    image: 'imagenes/tenis_dama/tenis1.jpeg'
  },
  {
    id: 8,
    category: 'women-tennis',
    name: 'Tenis Dama 2',
    price: 120.000,
    description: 'Tenis deportivo con estilo femenino y suave amortiguación.',
    image: 'imagenes/tenis_dama/tenis(2).jpeg'
  },
  {
    id: 9,
    category: 'women-tennis',
    name: 'Tenis Dama 3',
    price: 120.000,
    description: 'Tenis ligero ideal para paseos y uso diario.',
    image: 'imagenes/tenis_dama/tenis(3).jpeg'
  },
  {
    id: 10,
    category: 'women-tennis',
    name: 'Tenis Dama 4',
    price: 120.000,
    description: 'Tenis con detalle de colores y suela cómoda.',
    image: 'imagenes/tenis_dama/tenis(4).jpeg'
  },
  {
    id: 11,
    category: 'women-tennis',
    name: 'Tenis Dama 5',
    price: 120.000,
    description: 'Tenis moderno con texturas suaves y ajuste perfecto.',
    image: 'imagenes/tenis_dama/tenis(5).jpeg'
  },
  {
    id: 12,
    category: 'women-tennis',
    name: 'Tenis Dama 6',
    price: 120.000,
    description: 'Tenis urbano con un look fresco para mujer.',
    image: 'imagenes/tenis_dama/tenis(6).jpeg'
  },
  {
    id: 13,
    category: 'women-tennis',
    name: 'Tenis Dama 7',
    price: 120.000,
    description: 'Tenis femenino con estilo deportivo y cómodo.',
    image: 'imagenes/tenis_dama/tenis(7).jpeg'
  },
  {
    id: 51,
    category: 'women-ruanas',
    name: 'Ruana (1)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'imagenes/Ruanas/ruanas1.jpeg'
  },
  {
    id: 52,
    category: 'women-ruanas',
    name: 'Ruana (2)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'imagenes/Ruanas/ruana2 (2).jpeg'
  },
  {
    id: 53,
    category: 'women-ruanas',
    name: 'Ruana (3)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'imagenes/Ruanas/ruana3.jpeg'
  },
  {
    id: 54,
    category: 'women-ruanas',
    name: 'Ruana (4)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'imagenes/Ruanas/ruana4.jpeg'
  },
  {
    id: 55,
    category: 'women-ruanas',
    name: 'Ruana (5)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'imagenes/Ruanas/ruana5.jpeg'
  },
  {
    id: 56,
    category: 'women-ruanas',
    name: 'Ruana (6)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'imagenes/Ruanas/ruana6.jpeg'
  },
  {
    id: 57,
    category: 'women-ruanas',
    name: 'Ruana (7)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'imagenes/Ruanas/ruana7.jpeg'
  },
  {
    id: 58,
    category: 'women-ruanas',
    name: 'Ruana (8)',
    price: 100.000,
    description: 'talla unica, tela hilo nacional.',
    image: 'imagenes/Ruanas/ruana8.jpeg'
  },
  {
    id: 14,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (1)',
    price: 90.000,
    description: 'Corte moderno con estampado masculino.',
    image: 'imagenes/camisetas caballero/1.jpeg'
  },
  {
    id: 8,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (2)',
    price: 90.000,
    description: 'Tonos sobrios y estilo urbano.',
    image: 'imagenes/camisetas caballero/2.jpeg'
  },
  {
    id: 9,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (3)',
    price: 90.000,
    description: 'Look fresco para uso diario.',
    image: 'imagenes/camisetas caballero/3.jpeg'
  },
  {
    id: 10,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (4)',
    price: 90.00,
    description: 'Estilo relajado con detalle gráfico.',
    image: 'imagenes/camisetas caballero/4.jpeg'
  },
  {
    id: 11,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (5)',
    price: 90.000,
    description: 'Moda urbana con corte cómodo.',
    image: 'imagenes/camisetas caballero/5.jpeg'
  },
  {
    id: 12,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (6)',
    price: 90.000,
    description: 'Diseño casual para cualquier ocasión.',
    image: 'imagenes/camisetas caballero/6.jpeg'
  },
  {
    id: 13,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (7)',
    price: 90.000,
    description: 'Estilo moderno con estampados frescos.',
    image: 'imagenes/camisetas caballero/7.jpeg'
  },
  {
    id: 14,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (8)',
    price: 90.000,
    description: 'Look urbano para tu día a día.',
    image: 'imagenes/camisetas caballero/8.jpeg'
  },
  {
    id: 15,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (9)',
    price: 90.000,
    description: 'Estilo básico con un toque moderno.',
    image: 'imagenes/camisetas caballero/9.jpeg'
  },
  {
    id: 16,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (10)',
    price: 90.000,
    description: 'Acentos discretos y look diario.',
    image: 'imagenes/camisetas caballero/10.jpeg'
  },
  {
    id: 17,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (11)',
    price: 90.000,
    description: 'Diseño minimalista para cualquier ocasión.',
    image: 'imagenes/camisetas caballero/11.jpeg'
  },
  {
    id: 18,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (12)',
    price: 90.000,
    description: 'Estilo urbano con acabado suave.',
    image: 'imagenes/camisetas caballero/12.jpeg'
  },
  {
    id: 19,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (13)',
    price: 90.000,
    description: 'Look moderno con estampado ligero.',
    image: 'imagenes/camisetas caballero/13.jpeg'
  },
  {
    id: 20,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (14)',
    price: 90.000,
    description: 'Color sólido con estilo urbano.',
    image: 'imagenes/camisetas caballero/14.jpeg'
  },
  {
    id: 21,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (15)',
    price: 90.000,
    description: 'Diseño fresco y cómodo para el día.',
    image: 'imagenes/camisetas caballero/15.jpeg'
  },
  {
    id: 22,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (16)',
    price: 90.000,
    description: 'Estilo relajado con detalles modernos.',
    image: 'imagenes/camisetas caballero/16.jpeg'
  },
  {
    id: 23,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (17)',
    price: 90.000,
    description: 'Look urbano con gráfico sutil.',
    image: 'imagenes/camisetas caballero/17.jpeg'
  },
  {
    id: 24,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (18)',
    price: 90.000,
    description: 'Corte clásico con toque contemporáneo.',
    image: 'imagenes/camisetas caballero/18.jpeg'
  },
  {
    id: 25,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (19)',
    price: 90.000,
    description: 'Estilo versátil para todo el día.',
    image: 'imagenes/camisetas caballero/19.jpeg'
  },
  {
    id: 26,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (20)',
    price: 90.000,
    description: 'Diseño urbano con detalles modernos.',
    image: 'imagenes/camisetas caballero/20.jpeg'
  },
  {
    id: 27,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (21)',
    price: 90.000,
    description: 'Comodidad y estilo en una sola prenda.',
    image: 'imagenes/camisetas caballero/21.jpeg'
  },
  {
    id: 28,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (22)',
    price: 90.000,
    description: 'Look urbano y casual.',
    image: 'imagenes/camisetas caballero/22.jpeg'
  },
  {
    id: 29,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (23)',
    price: 90.000,
    description: 'Estilo fresco para tu closet.',
    image: 'imagenes/camisetas caballero/23.jpeg'
  },
  {
    id: 30,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (24)',
    price: 90.000,
    description: 'Diseño moderno con acabado suave.',
    image: 'imagenes/camisetas caballero/24.jpeg'
  },
  {
    id: 31,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (25)',
    price: 90.000,
    description: 'Look diario con estilo urbano.',
    image: 'imagenes/camisetas caballero/25.jpeg'
  },
  {
    id: 32,
    category: 'men-tshirts',
    name: 'Camiseta 1.1 tela fria (26)',
    price: 90.000,
    description: 'Estilo versátil para el día a día.',
    image: 'imagenes/camisetas caballero/26.jpeg'
  },
  {
    id: 33,
    category: 'men-sets',
    name: 'Conjunto deportivo (1)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero_(1) PM.jpeg'
  },
  {
    id: 34,
    category: 'men-sets',
    name: 'Conjunto deportivo (2)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(2).jpeg'
  },
  {
    id: 35,
    category: 'men-sets',
    name: 'Conjunto deportivo (3)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(3).jpeg'
  },
  {
    id: 36,
    category: 'men-sets',
    name: 'Conjunto deportivo (4)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(4).jpeg'
  },
  {
    id: 37,
    category: 'men-sets',
    name: 'Conjunto deportivo (5)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(5).jpeg'
  },
  {
    id: 38,
    category: 'men-sets',
    name: 'Conjunto deportivo (6)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(6).jpeg'
  },
  {
    id: 39,
    category: 'men-sets',
    name: 'Conjunto deportivo (7)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(7).jpeg'
  },
  {
    id: 40,
    category: 'men-sets',
    name: 'Conjunto deportivo (8)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(8).jpeg'
  },
  {
    id: 41,
    category: 'men-sets',
    name: 'Conjunto deportivo (9)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(9).jpeg'
  },
  {
    id: 42,
    category: 'men-sets',
    name: 'Conjunto deportivo (10)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(10).jpeg'
  },
  {
    id: 43,
    category: 'men-sets',
    name: 'Conjunto deportivo (11)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(11).jpeg'
  },

  {
    id: 45,
    category: 'men-sets',
    name: 'Conjunto deportivo (13)',
    price: 160.000,
    description: 'Algodón perchado  .',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(13).jpeg'
  },
  {
    id: 46,
    category: 'men-sets',
    name: 'Conjunto deportivo (14)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(14).jpeg'
  },
  {
    id: 47,
    category: 'men-sets',
    name: 'Conjunto deportivo (15)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(15).jpeg'
  },
  {
    id: 48,
    category: 'men-sets',
    name: 'Conjunto deportivo (16)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(16).jpeg'
  },

  {
    id: 50,
    category: 'men-sets',
    name: 'Conjunto deportivo (18)',
    price: 160.000,
    description: 'Algodón perchado.',
    image: 'imagenes/conjuntos_caballeros/conjunto_caballero(18).jpeg'
  },
  {
    id: 60,
    category: 'men-hats',
    name: 'gorra beisbolera (1)',
    price: 35.000,
    description: 'Gorra casual con estilo urbano para hombres.',
    image: 'imagenes/gorras_caballeros/gorra(1).jpeg'
  },
  {
    id: 61,
    category: 'men-hats',
    name: 'gorra beisbolera (2)',
    price: 35.000,
    description: 'Gorra casual con estilo urbano para hombres.',
    image: 'imagenes/gorras_caballeros/gorra(2).jpeg'
  },
  {
    id: 62,
    category: 'men-hats',
    name: 'gorra beisbolera (3)',
    price: 35.000,
    description: 'Look moderno con acabado resistente.',
    image: 'imagenes/gorras_caballeros/gorra(3).jpeg'
  },
  {
    id: 63,
    category: 'men-hats',
    name: 'gorra beisbolera (4)',
    price: 35.000,
    description: 'Prenda versátil para el día a día.',
    image: 'imagenes/gorras_caballeros/gorra(4).jpeg'
  },
  {
    id: 64,
    category: 'men-hats',
    name: 'gorra beisbolera (5)',
    price: 35.000,
    description: 'Diseño cómodo y fresco para el sol.',
    image: 'imagenes/gorras_caballeros/gorra(5).jpeg'
  },
  {
    id: 65,
    category: 'men-hats',
    name: 'Gorra mexicana (1)',
    price: 40.000,
    description: 'Estilo tradicional con toque urbano.',
    image: 'imagenes/gorras_caballeros/gorramexicancaos(2).jpeg'
  },
  {
    id: 66,
    category: 'men-hats',
    name: 'Gorra mexicana (2)',
    price: 40.000,
    description: 'Modelo llamativo y muy cómodo.',
    image: 'imagenes/gorras_caballeros/gorramexicancaps(1).jpeg'
  },
  {
    id: 67,
    category: 'men-hats',
    name: 'Gorra 1.1 (1)',
    price: 38.000,
    description: 'Estilo casual con detalle moderno.',
    image: 'imagenes/gorras_caballeros/gorras1.1(1).jpeg'
  },
  {
    id: 68,
    category: 'men-hats',
    name: 'Gorra 1.1 (2)',
    price: 38.000,
    description: 'Diseño fresco para complementar tu look.',
    image: 'imagenes/gorras_caballeros/gorras1.1(2).jpeg'
  },
  {
    id: 69,
    category: 'men-hats',
    name: 'Gorra 1.1 (3)',
    price: 38.000,
    description: 'Modelo moderno con excelente acabado.',
    image: 'imagenes/gorras_caballeros/gorras1.1(3).jpeg'
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
const imageModalImg = document.getElementById('image-modal-img');
const imageModalCaption = document.getElementById('image-modal-caption');
const whatsappNumber = '3218920417';
let selectedCategory = 'all';
let currentGallery = [];
let currentModalIndex = 0;

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

  productList.innerHTML = filteredProducts.map((product, index) => `
    <article class="product-card">
      <img src="${encodeURI(product.image)}" alt="${product.name}" data-index="${index}" data-name="${product.name}" data-description="${product.description}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-footer">
        <span class="price">${formatCurrency(product.price)}</span>
        <div class="product-actions">
          <button class="add-to-cart" data-id="${product.id}" type="button">Agregar</button>
          <button class="buy-now" data-id="${product.id}" type="button">Comprar</button>
          <button class="info-btn" data-id="${product.id}" type="button">Más información</button>
        </div>
      </div>
    </article>
  `).join('');
}

function showModalImage(index) {
  const product = currentGallery[index];
  if (!product) return;

  currentModalIndex = index;
  imageModalImg.src = encodeURI(product.image);
  imageModalImg.alt = product.name;
  imageModalCaption.textContent = product.description || product.name;
  imageModal.classList.add('open');
  imageModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
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

  if (cartItems.length === 0) {
    cartItemsElement.innerHTML = '<div class="empty-cart">Tu carrito está vacío.</div>';
    return;
  }

  cartItemsElement.innerHTML = cartItems.map((item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <span class="cart-item-title">${item.name}</span>
        <span class="cart-item-price">${formatCurrency(item.price)}</span>
        <div class="quantity-controls">
          <button data-action="decrease" data-id="${item.id}" type="button">−</button>
          <span>${item.quantity}</span>
          <button data-action="increase" data-id="${item.id}" type="button">+</button>
        </div>
        <button class="remove-item" data-action="remove" data-id="${item.id}" type="button">Eliminar</button>
      </div>
    </div>
  `).join('');
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
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    return;
  }

  const infoBtn = event.target.closest('.info-btn');
  if (infoBtn) {
    const product = products.find((p) => p.id === Number(infoBtn.dataset.id));
    if (!product) return;
    const message = `Hola, necesito más información sobre la prenda ${product.name}. ¿Me puedes ayudar?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
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

  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  cartItems.length = 0;
  updateCart();
  cartItemsElement.innerHTML = '<div class="empty-cart">¡Gracias por tu compra! Te redirigimos a WhatsApp.</div>';
});

renderProducts();
updateCart();
