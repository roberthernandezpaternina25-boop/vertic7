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
    name: 'Sudadera para hombre',
    price: 50.000,
    description: 'Diseño cómodo y caliente con estilo streetwear.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 8,
    category: 'men',
    name: 'Chamarra ligera',
    price: 54.99,
    description: 'Perfecta para capas urbanas con toque moderno.',
    image: 'https://images.unsplash.com/photo-1495121605193-bb2f8a3fa479?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 9,
    category: 'men',
    name: 'Playera básica',
    price: 24.99,
    description: 'Clásico esencial con un ajuste cómodo.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
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
