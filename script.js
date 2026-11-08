const CART_KEY = 'nimboticsBag';
const NIMBOTICS_PUBLIC_URL = 'https://nimbotics.com';

const PRODUCT_CATALOG = {
  'Power Brella': {
    name: 'Power Brella',
    category: 'Commercial Smart Umbrella',
    price: 19999,
    image: 'images/products/power-brella.png',
    description: 'Commercial solar-powered umbrella engineered for restaurants, cafes, shops and premium outdoor spaces.',
    heroText: 'Built for streetside brands, patio dining and high-visibility commercial setups.',
    features: [
      { icon: '☀️', label: 'Solar-powered canopy' },
      { icon: '🔋', label: 'USB charging' },
      { icon: '💡', label: 'LED lighting' },
      { icon: '🏬', label: 'Large commercial canopy' },
      { icon: '⚡', label: 'All-day performance' }
    ],
    highlights: ['Commercial-ready design', 'High visibility canopy', 'Outdoor-ready charging'],
    specifications: [
      ['Use case', 'Restaurants, cafes, shops, external seating zones'],
      ['Power', 'Solar canopy with USB charging output'],
      ['Lighting', 'Integrated LED lighting for visibility'],
      ['Canopy', 'Large coverage profile for commercial spaces']
    ],
    howItWorks: [
      'The solar canopy absorbs daylight and stores power for continuous lighting and charging support.',
      'Integrated LEDs and USB charging make it ideal for evening service and customer-facing hospitality spaces.',
      'The durable structure is designed for outdoor commercial use without compromising aesthetics.'
    ],
    faqs: [
      {
        question: 'Who is Power Brella best suited for?',
        answer: 'It is ideal for commercial environments such as restaurants, cafes, retail shops and outdoor seating areas that need shade, lighting and device charging.'
      },
      {
        question: 'Does it support device charging?',
        answer: 'Yes. The umbrella includes USB charging functionality powered by the solar canopy for practical outdoor usage.'
      },
      {
        question: 'Is it built for weather exposure?',
        answer: 'Yes. It is designed for durable outdoor commercial use and is built to handle regularly exposed environments.'
      }
    ],
    related: ['Smart Bella', 'Glow Brella', 'Cool Brella']
  },
  'Smart Bella': {
    name: 'Smart Bella',
    category: 'Intelligent Personal Umbrella',
    price: 1499,
    image: 'products/smart-bella.png',
    description: 'An intelligent personal umbrella that keeps you informed, protected and connected with real-time weather awareness.',
    heroText: 'Smart safety features, precise weather alerts and personal mobility support in one premium umbrella.',
    features: [
      { icon: '📡', label: 'Weather alerts' },
      { icon: '📍', label: 'GPS tracking' },
      { icon: '🧠', label: 'Smart sensors' },
      { icon: '🛡️', label: 'Safety-focused design' },
      { icon: '🔔', label: 'Real-time notifications' }
    ],
    highlights: ['Personal safety intelligence', 'Smart sensing and notification system', 'Travel-ready tracking'],
    specifications: [
      ['Use case', 'Personal everyday protection and urban mobility'],
      ['Tracking', 'GPS-enabled location support'],
      ['Alerts', 'Weather update notifications'],
      ['Sensors', 'Smart environmental detection']
    ],
    howItWorks: [
      'The umbrella continuously monitors environmental conditions and alerts the user to changing weather conditions.',
      'GPS tracking and safety sensors keep it useful for commuting, travel and on-the-go protection.',
      'Its smart design keeps personal safety and practicality at the core of the product experience.'
    ],
    faqs: [
      {
        question: 'What makes Smart Bella different?',
        answer: 'It combines personal protection with integrated sensors, weather alerts and GPS tracking for daily use and safety awareness.'
      },
      {
        question: 'Can I use it for commuting?',
        answer: 'Yes. It is designed for everyday personal use and is especially useful while commuting or moving through changing conditions.'
      },
      {
        question: 'Is it suitable for everyday travel?',
        answer: 'Yes. Smart Bella is built for practical daily life and quick travel scenarios.'
      }
    ],
    related: ['Glow Brella', 'Cool Brella', 'Custom Bella']
  },
  'Cool Brella': {
    name: 'Cool Brella',
    category: 'Cooling Personal Umbrella',
    price: 1499,
    image: 'products/cool-brella.png',
    description: 'A personal cooling umbrella with built-in fan technology and UV protection for comfortable, everyday use.',
    heroText: 'Stay cooler, protected and comfortable with a fresh green modern design.',
    features: [
      { icon: '❄️', label: 'Built-in fan' },
      { icon: '🛡️', label: 'UV protection' },
      { icon: '🌿', label: 'Fresh green design' },
      { icon: '😌', label: 'All-day comfort' },
      { icon: '💨', label: 'Cooling airflow' }
    ],
    highlights: ['Cooling airflow design', 'UV protection layer', 'Lightweight personal comfort'],
    specifications: [
      ['Use case', 'Personal outdoor comfort and sunny conditions'],
      ['Cooling', 'Integrated fan support'],
      ['Protection', 'UV-protected canopy'],
      ['Style', 'Fresh green premium finish']
    ],
    howItWorks: [
      'The built-in fan circulates airflow while the canopy provides shade and protection from direct sun exposure.',
      'The UV-protected structure keeps the user comfortable without sacrificing premium style.',
      'It is designed for personal comfort during daily outdoor movement and warm conditions.'
    ],
    faqs: [
      {
        question: 'Is Cool Brella good for hot weather?',
        answer: 'Yes. It is designed to help you stay cooler with ventilation and constant shade while outdoors.'
      },
      {
        question: 'Does it have enough shade for daily use?',
        answer: 'Yes. It is built for personal use with practical coverage and comfort-focused design.'
      },
      {
        question: 'Is it portable?',
        answer: 'Yes. It is designed to remain lightweight and comfortable for regular personal use.'
      }
    ],
    related: ['Smart Bella', 'Glow Brella', 'Power Brella']
  },
  'Glow Brella': {
    name: 'Glow Brella',
    category: 'Illuminated Personal Umbrella',
    price: 1499,
    image: 'products/glow-brella.png',
    description: 'A premium illuminated umbrella with LED lighting, emergency visibility and a multifunctional handle utility.',
    heroText: 'Stay visible, connected and prepared for evening travel with smart illumination features.',
    features: [
      { icon: '💡', label: 'LED lighting' },
      { icon: '🔌', label: 'USB Type-C charging' },
      { icon: '🌙', label: 'Night visibility' },
      { icon: '🆘', label: 'SOS button' },
      { icon: '🔦', label: 'Torch in the handle' }
    ],
    highlights: ['Night visibility lighting', 'Emergency SOS support', 'Type-C power access'],
    specifications: [
      ['Use case', 'Personal night-time visibility and safety'],
      ['Charging', 'USB Type-C powered system'],
      ['Lighting', 'Integrated LED glow system'],
      ['Emergency', 'SOS and torch handle function']
    ],
    howItWorks: [
      'The lighting system activates automatically to improve visibility in low-light conditions and nighttime movement.',
      'USB Type-C charging keeps the umbrella ready for regular use, while the SOS and torch features increase safety support.',
      'It is built especially for evening walks, travel and visibility-focused use.'
    ],
    faqs: [
      {
        question: 'Is Glow Brella meant for night use?',
        answer: 'Yes. It is designed to improve visibility and safety in the dark with LED lights and emergency features.'
      },
      {
        question: 'Can it charge devices?',
        answer: 'Yes. Glow Brella includes USB Type-C charging support for everyday convenience.'
      },
      {
        question: 'Does it include an emergency function?',
        answer: 'Yes. It includes an SOS button and a torch built into the handle for added safety.'
      }
    ],
    related: ['Smart Bella', 'Cool Brella', 'Custom Bella']
  },
  'Custom Bella': {
    name: 'Custom Bella',
    category: 'Customisable Personal Umbrella',
    price: 1499,
    image: 'products/custom-bella.png',
    description: 'A personalised umbrella with interchangeable canopy designs and custom branding options for personal or corporate use.',
    heroText: 'Express your style with personalised designs, interchangeable canopy options and branded finishes.',
    features: [
      { icon: '🎨', label: 'Interchangeable canopy designs' },
      { icon: '🧩', label: 'Multiple design options' },
      { icon: '✨', label: 'Custom request support' },
      { icon: '🏢', label: 'Corporate branding' },
      { icon: '💼', label: 'Personalised styling' }
    ],
    highlights: ['Personal or corporate customisation', 'Design-ready canopy system', 'Brand-first experience'],
    specifications: [
      ['Use case', 'Personal styling and brand customization'],
      ['Canopy', 'Interchangeable designs'],
      ['Request support', 'Custom customer design requests'],
      ['Options', 'Corporate and personal branding']
    ],
    howItWorks: [
      'Choose from multiple canopy designs or share your own concept for a fully personalised look.',
      'The structure supports interchangeable styles for both personal expression and branded presentation.',
      'This makes it ideal for gifting, events and company identity experiences.'
    ],
    faqs: [
      {
        question: 'Can I request my own design?',
        answer: 'Yes. Custom Bella allows customers to choose different canopy designs and submit their own custom design requests.'
      },
      {
        question: 'Is it suitable for brands or corporate gifting?',
        answer: 'Yes. It is ideal for personalised and corporate branding applications.'
      },
      {
        question: 'Can I switch the canopy design later?',
        answer: 'Yes. The product supports interchangeable canopy designs depending on your preferred style.'
      }
    ],
    related: ['Smart Bella', 'Glow Brella', 'Power Brella']
  }
};

const PRODUCT_META = PRODUCT_CATALOG;
const DELIVERY_CHARGES = 0;
const DISCOUNT_VALUE = 0;

function formatINR(value) {
  return `₹ ${Number(value || 0).toLocaleString('en-IN')}`;
}

function getCart() {
  const raw = localStorage.getItem(CART_KEY);

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getProductNameFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return decodeURIComponent(params.get('product') || 'Smart Bella');
}

function updateBagCount() {
  const badge = document.getElementById('cart-count');
  const headerItemTotal = document.getElementById('header-item-total');
  const cart = getCart();
  const total = Object.values(cart).reduce((sum, qty) => sum + Number(qty || 0), 0);

  if (badge) {
    badge.textContent = total;
  }

  if (headerItemTotal) {
    headerItemTotal.textContent = total;
  }
}

function syncProductCards() {
  const cart = getCart();

  document.querySelectorAll('.product-option').forEach((card) => {
    const productName = card.dataset.product;
    const valueLabel = card.querySelector('.qty-value');

    if (!valueLabel) return;

    valueLabel.textContent = cart[productName] || 0;
  });
}

function addToBag(productName, quantity = 1) {
  const cart = getCart();
  const amount = Number(quantity) || 1;
  cart[productName] = (Number(cart[productName]) || 0) + amount;
  saveCart(cart);
  updateBagCount();
  syncProductCards();
  if (document.getElementById('bag-items')) {
    renderBagPage();
  }
}

function removeFromBag(productName, quantity = 1) {
  const cart = getCart();

  if (!cart[productName]) {
    return;
  }

  const amount = Number(quantity) || 1;
  cart[productName] = Number(cart[productName]) - amount;

  if (cart[productName] <= 0) {
    delete cart[productName];
  }

  saveCart(cart);
  updateBagCount();
  syncProductCards();
  if (document.getElementById('bag-items')) {
    renderBagPage();
  }
}

function bindProductControls() {
  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('.qty-add');
    if (addButton) {
      const productCard = addButton.closest('.product-option');
      if (productCard) {
        addToBag(productCard.dataset.product);
      }
      return;
    }

    const removeButton = event.target.closest('.qty-remove');
    if (removeButton) {
      const productCard = removeButton.closest('.product-option');
      if (productCard) {
        removeFromBag(productCard.dataset.product);
      }
    }

    const detailAddButton = event.target.closest('.detail-add-to-bag');
    if (detailAddButton) {
      const productName = detailAddButton.dataset.product;
      const qtyInput = document.getElementById('product-qty');
      const qty = Number(qtyInput?.value || 1);
      if (productName) {
        addToBag(productName, qty);
      }
    }

    const detailBuyButton = event.target.closest('.detail-buy-now');
    if (detailBuyButton) {
      const productName = detailBuyButton.dataset.product;
      const qtyInput = document.getElementById('product-qty');
      const qty = Number(qtyInput?.value || 1);
      if (productName) {
        addToBag(productName, qty);
        window.location.href = 'cart.html';
      }
    }
  });
}

function renderBagPage() {
  const bagItems = document.getElementById('bag-items');
  const subtotalEl = document.getElementById('subtotal');
  const deliveryEl = document.getElementById('delivery');
  const discountEl = document.getElementById('discount');
  const totalPriceEl = document.getElementById('total-price');

  if (!bagItems || !subtotalEl || !deliveryEl || !discountEl || !totalPriceEl) {
    return;
  }

  const cart = getCart();
  const entries = Object.entries(cart);
  let subtotal = 0;

  if (!entries.length) {
    bagItems.innerHTML = `
      <div class="empty-cart">
        <h3>Your bag is empty</h3>
        <p>Explore the collection and add your next-generation protection.</p>
        <a class="continue-shopping" href="index.html#collection">Continue Shopping</a>
      </div>
    `;

    subtotalEl.textContent = formatINR(0);
    deliveryEl.textContent = formatINR(DELIVERY_CHARGES);
    discountEl.textContent = `- ${formatINR(DISCOUNT_VALUE)}`;
    totalPriceEl.textContent = formatINR(0);
    updateBagCount();
    return;
  }

  bagItems.innerHTML = entries.map(([productName, qty]) => {
    const product = PRODUCT_META[productName] || { price: 0, image: '', description: '' };
    const safeQty = Number(qty) || 0;
    const itemSubtotal = product.price * safeQty;
    subtotal += itemSubtotal;

    return `
      <article class="bag-item" data-product="${productName}">
        <img class="bag-item-image" src="${product.image}" alt="${productName} umbrella" onerror="this.src='products/smart-bella.png';">
        <div class="bag-item-copy">
          <div class="bag-item-header">
            <h3 class="bag-item-name">${productName}</h3>
            <button class="remove-item" type="button" data-product="${productName}">Remove</button>
          </div>
          <p class="bag-item-meta">${product.description}</p>
          <div class="bag-item-footer">
            <div class="qty-control">
              <button class="qty-btn qty-remove" type="button" aria-label="Remove one ${productName}">−</button>
              <span class="qty-value">${safeQty}</span>
              <button class="qty-btn qty-add" type="button" aria-label="Add one ${productName}">＋</button>
            </div>
            <div class="unit-price">${formatINR(product.price)}</div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  const finalTotal = subtotal + DELIVERY_CHARGES - DISCOUNT_VALUE;

  subtotalEl.textContent = formatINR(subtotal);
  deliveryEl.textContent = formatINR(DELIVERY_CHARGES);
  discountEl.textContent = `- ${formatINR(DISCOUNT_VALUE)}`;
  totalPriceEl.textContent = formatINR(finalTotal);

  document.querySelectorAll('.qty-add').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.bag-item');
      if (item) {
        addToBag(item.dataset.product);
      }
    });
  });

  document.querySelectorAll('.qty-remove').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.bag-item');
      if (item) {
        removeFromBag(item.dataset.product);
      }
    });
  });

  document.querySelectorAll('.remove-item').forEach((button) => {
    button.addEventListener('click', () => {
      const productName = button.dataset.product;
      if (!productName) return;
      const currentCart = getCart();
      delete currentCart[productName];
      saveCart(currentCart);
      updateBagCount();
      syncProductCards();
      renderBagPage();
    });
  });

  updateBagCount();
}

function renderProductDetailPage() {
  const root = document.getElementById('product-detail-root');
  const detailSections = document.getElementById('product-detail-sections');

  if (!root || !detailSections) {
    return;
  }

  const productName = getProductNameFromQuery();
  const product = PRODUCT_CATALOG[productName];

  if (!product) {
    root.innerHTML = '<p class="product-not-found">This product is not available right now.</p>';
    return;
  }

  const breadcrumb = document.getElementById('current-product');
  if (breadcrumb) {
    breadcrumb.textContent = product.name;
  }

  const customControl = product.name === 'Custom Bella'
    ? `
      <div class="customization-panel">
        <label for="custom-design">Choose canopy design</label>
        <select id="custom-design" class="design-select">
          <option value="Signature Neon">Signature Neon</option>
          <option value="Solar Tide">Solar Tide</option>
          <option value="Urban Grid">Urban Grid</option>
          <option value="Monogram Luxe">Monogram Luxe</option>
        </select>
        <label for="custom-request">Custom request</label>
        <textarea id="custom-request" placeholder="Tell us your custom design idea or branding requirement..."></textarea>
      </div>
    `
    : '';

  root.innerHTML = `
    <div class="product-visual-panel">
      <div class="product-main-image-wrap">
        <img id="main-product-image" src="${product.image}" alt="${product.name}" onerror="this.src='products/smart-bella.png';">
      </div>
      <div class="product-thumb-row">
        <button class="product-thumb is-active" type="button" data-image="${product.image}">
          <img src="${product.image}" alt="${product.name} thumbnail" onerror="this.src='products/smart-bella.png';">
        </button>
        <button class="product-thumb" type="button" data-image="${product.image}">
          <img src="${product.image}" alt="${product.name} alternate thumbnail" onerror="this.src='products/smart-bella.png';">
        </button>
        <button class="product-thumb" type="button" data-image="${product.image}">
          <img src="${product.image}" alt="${product.name} alternate thumbnail 2" onerror="this.src='products/smart-bella.png';">
        </button>
      </div>
    </div>

    <div class="product-summary-panel">
      <span class="detail-category">${product.category}</span>
      <h1>${product.name}</h1>
      <p class="detail-description">${product.description}</p>
      <div class="detail-price-row">
        <span class="detail-price-label">Price</span>
        <span class="detail-price">${formatINR(product.price)}</span>
      </div>
      <p class="detail-subtext">${product.heroText}</p>

      <ul class="detail-feature-badges">
        ${product.features.map((item) => `<li><span>${item.icon}</span> ${item.label}</li>`).join('')}
      </ul>

      <div class="purchase-box">
        <div class="quantity-selector">
          <label for="product-qty">Qty</label>
          <div class="qty-stepper">
            <button type="button" class="stepper-btn" data-action="decrease">−</button>
            <input id="product-qty" type="number" min="1" max="9" value="1">
            <button type="button" class="stepper-btn" data-action="increase">＋</button>
          </div>
        </div>

        <div class="purchase-actions">
          <button type="button" class="detail-add-to-bag" data-product="${product.name}">Add to Bag</button>
          <button type="button" class="detail-buy-now" data-product="${product.name}">Buy Now</button>
        </div>
      </div>

      ${customControl}
    </div>
  `;

  detailSections.innerHTML = `
    <div class="detail-section-card">
      <div class="detail-section-heading">
        <span>Key Features</span>
      </div>
      <ul class="detail-points">
        ${product.features.map((item) => `<li><span>${item.icon}</span>${item.label}</li>`).join('')}
      </ul>
    </div>

    <div class="detail-section-card">
      <div class="detail-section-heading">
        <span>Product Specifications</span>
      </div>
      <div class="spec-grid">
        ${product.specifications.map(([label, value]) => `
          <div class="spec-item">
            <span>${label}</span>
            <strong>${value}</strong>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="detail-section-card">
      <div class="detail-section-heading">
        <span>How It Works</span>
      </div>
      <ol class="process-list">
        ${product.howItWorks.map((step) => `<li>${step}</li>`).join('')}
      </ol>
    </div>

    <div class="detail-section-card">
      <div class="detail-section-heading">
        <span>Frequently Asked Questions</span>
      </div>
      <div class="faq-list">
        ${product.faqs.map((faq) => `
          <div class="faq-item">
            <h4>${faq.question}</h4>
            <p>${faq.answer}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="detail-section-card">
      <div class="detail-section-heading">
        <span>You May Also Like</span>
      </div>
      <div class="related-grid">
        ${product.related.map((name) => {
          const item = PRODUCT_CATALOG[name];
          return `
            <a class="related-card" href="product.html?product=${encodeURIComponent(name)}">
              <img src="${item.image}" alt="${name}" onerror="this.src='products/smart-bella.png';">
              <div>
                <h4>${name}</h4>
                <span>${formatINR(item.price)}</span>
              </div>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  `;

  const mainImage = document.getElementById('main-product-image');
  document.querySelectorAll('.product-thumb').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const selectedImage = thumb.dataset.image;
      if (mainImage && selectedImage) {
        mainImage.src = selectedImage;
      }
      document.querySelectorAll('.product-thumb').forEach((item) => item.classList.toggle('is-active', item === thumb));
    });
  });

  const qtyInput = document.getElementById('product-qty');
  document.querySelectorAll('.stepper-btn').forEach((button) => {
    button.addEventListener('click', () => {
      if (!qtyInput) return;
      const currentValue = Number(qtyInput.value) || 1;
      const nextValue = button.dataset.action === 'increase' ? currentValue + 1 : Math.max(1, currentValue - 1);
      qtyInput.value = nextValue;
    });
  });

  if (qtyInput) {
    qtyInput.addEventListener('input', () => {
      const value = Number(qtyInput.value) || 1;
      qtyInput.value = Math.max(1, Math.min(9, value));
    });
  }
}

function renderHeroQrCode() {
  const qrCanvas = document.getElementById('qr-code');
  if (!qrCanvas || typeof QRCode === 'undefined') {
    return;
  }

  QRCode.toCanvas(qrCanvas, NIMBOTICS_PUBLIC_URL, {
    width: 128,
    margin: 1,
    color: {
      dark: '#0a0d13',
      light: '#ffffff'
    }
  }, function(error) {
    if (error) {
      console.error('QR code generation failed:', error);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateBagCount();
  syncProductCards();
  bindProductControls();
  renderProductDetailPage();
  renderBagPage();
  renderHeroQrCode();
});
