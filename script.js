const products = [
  {
    id: 1,
    category: 'women-tshirts',
    name: 'Camiseta Silletero',
    price: 50.000,
    description: 'Diseño Silletero al frente, algodón suave.',
    image: 'imagenes/camisetas dama/1.jpg'
  },
  {
    id: 2,
    category: 'women-tshirts',
    name: 'Camiseta Medellín',
    price: 50.000,
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
    category: 'men',
    name: 'Camiseta caballero 1',
    price: 90.00,
    description: 'Corte moderno con estampado masculino.',
    image: 'imagenes/camisetas caballero/1.jpeg'
  },
  {
    id: 8,
    category: 'men',
    name: 'Camiseta caballero 2',
    price: 90.00,
    description: 'Tonos sobrios y estilo urbano.',
    image: 'imagenes/camisetas caballero/2.jpeg'
  },
  {
    id: 9,
    category: 'men',
    name: 'Camiseta caballero 3',
    price: 90.00,
    description: 'Look fresco para uso diario.',
    image: 'imagenes/camisetas caballero/3.jpeg'
  },
  {
    id: 10,
    category: 'men',
    name: 'Camiseta caballero 4',
    price: 90.00,
    description: 'Estilo relajado con detalle gráfico.',
    image: 'imagenes/camisetas caballero/4.jpeg'
  },
  {
    id: 11,
    category: 'men',
    name: 'Camiseta caballero 5',
    price: 90.00,
    description: 'Moda urbana con corte cómodo.',
    image: 'imagenes/camisetas caballero/5.jpeg'
  },
  {
    id: 12,
    category: 'men',
    name: 'Camiseta caballero 6',
    price: 90.00,
    description: 'Diseño casual para cualquier ocasión.',
    image: 'imagenes/camisetas caballero/6.jpeg'
  },
  {
    id: 13,
    category: 'men',
    name: 'Camiseta caballero 7',
    price: 90.00,
    description: 'Estilo moderno con estampados frescos.',
    image: 'imagenes/camisetas caballero/7.jpeg'
  },
  {
    id: 14,
    category: 'men',
    name: 'Camiseta caballero 8',
    price: 90.00,
    description: 'Look urbano para tu día a día.',
    image: 'imagenes/camisetas caballero/8.jpeg'
  },
  {
    id: 15,
    category: 'men',
    name: 'Camiseta caballero 9',
    price: 90.00,
    description: 'Estilo básico con un toque moderno.',
    image: 'imagenes/camisetas caballero/9.jpeg'
  },
  {
    id: 16,
    category: 'men',
    name: 'Camiseta caballero 10',
    price: 90.00,
    description: 'Acentos discretos y look diario.',
    image: 'imagenes/camisetas caballero/10.jpeg'
  },
  {
    id: 17,
    category: 'men',
    name: 'Camiseta caballero 11',
    price: 90.00,
    description: 'Diseño minimalista para cualquier ocasión.',
    image: 'imagenes/camisetas caballero/11.jpeg'
  },
  {
    id: 18,
    category: 'men',
    name: 'Camiseta caballero 12',
    price: 90.00,
    description: 'Estilo urbano con acabado suave.',
    image: 'imagenes/camisetas caballero/12.jpeg'
  },
  {
    id: 19,
    category: 'men',
    name: 'Camiseta caballero 13',
    price: 90.00,
    description: 'Look moderno con estampado ligero.',
    image: 'imagenes/camisetas caballero/13.jpeg'
  },
  {
    id: 20,
    category: 'men',
    name: 'Camiseta caballero 14',
    price: 90.00,
    description: 'Color sólido con estilo urbano.',
    image: 'imagenes/camisetas caballero/14.jpeg'
  },
  {
    id: 21,
    category: 'men',
    name: 'Camiseta caballero 15',
    price: 90.00,
    description: 'Diseño fresco y cómodo para el día.',
    image: 'imagenes/camisetas caballero/15.jpeg'
  },
  {
    id: 22,
    category: 'men',
    name: 'Camiseta caballero 16',
    price: 90.00,
    description: 'Estilo relajado con detalles modernos.',
    image: 'imagenes/camisetas caballero/16.jpeg'
  },
  {
    id: 23,
    category: 'men',
    name: 'Camiseta caballero 17',
    price: 90.00,
    description: 'Look urbano con gráfico sutil.',
    image: 'imagenes/camisetas caballero/17.jpeg'
  },
  {
    id: 24,
    category: 'men',
    name: 'Camiseta caballero 18',
    price: 90.00,
    description: 'Corte clásico con toque contemporáneo.',
    image: 'imagenes/camisetas caballero/18.jpeg'
  },
  {
    id: 25,
    category: 'men',
    name: 'Camiseta caballero 19',
    price: 90.00,
    description: 'Estilo versátil para todo el día.',
    image: 'imagenes/camisetas caballero/19.jpeg'
  },
  {
    id: 26,
    category: 'men',
    name: 'Camiseta caballero 20',
    price: 90.00,
    description: 'Diseño urbano con detalles modernos.',
    image: 'imagenes/camisetas caballero/20.jpeg'
  },
  {
    id: 27,
    category: 'men',
    name: 'Camiseta caballero 21',
    price: 90.00,
    description: 'Comodidad y estilo en una sola prenda.',
    image: 'imagenes/camisetas caballero/21.jpeg'
  },
  {
    id: 28,
    category: 'men',
    name: 'Camiseta caballero 22',
    price: 90.00,
    description: 'Look urbano y casual.',
    image: 'imagenes/camisetas caballero/22.jpeg'
  },
  {
    id: 29,
    category: 'men',
    name: 'Camiseta caballero 23',
    price: 90.00,
    description: 'Estilo fresco para tu closet.',
    image: 'imagenes/camisetas caballero/23.jpeg'
  },
  {
    id: 30,
    category: 'men',
    name: 'Camiseta caballero 24',
    price: 90.00,
    description: 'Diseño moderno con acabado suave.',
    image: 'imagenes/camisetas caballero/24.jpeg'
  },
  {
    id: 31,
    category: 'men',
    name: 'Camiseta caballero 25',
    price: 90.00,
    description: 'Look diario con estilo urbano.',
    image: 'imagenes/camisetas caballero/25.jpeg'
  },
  {
    id: 32,
    category: 'men',
    name: 'Camiseta caballero 26',
    price: 90.00,
    description: 'Estilo versátil para el día a día.',
    image: 'imagenes/camisetas caballero/26.jpeg'
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
const whatsappNumber = '3218920417';
let selectedCategory = 'all';

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function renderProducts() {
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  productList.innerHTML = filteredProducts.map((product) => `
    <article class="product-card">
      <img src="${encodeURI(product.image)}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-footer">
        <span class="price">${formatCurrency(product.price)}</span>
        <div class="product-actions">
          <button class="add-to-cart" data-id="${product.id}" type="button">Agregar</button>
          <button class="buy-now" data-id="${product.id}" type="button">Comprar</button>
        </div>
      </div>
    </article>
  `).join('');
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

  if (button.dataset.category === 'women') {
    submenu?.classList.toggle('show');
    setActiveFilter('women');
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
});

cartItemsElement.addEventListener('click', (event) => {
  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) return;

  changeQuantity(actionButton.dataset.id, actionButton.dataset.action);
});

openCartButton.addEventListener('click', openCart);
closeCartButton.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

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
