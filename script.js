const CART_KEY = 'nimboticsBag';

const PRODUCT_CATALOG = {
  'Power Brella': {
    name: 'Power Brella',
    category: 'Solar-Powered',
    price: 9000,
    image: 'images/products/power-brella.png',
    description: 'A large solar-powered umbrella designed for stalls, cafes, restaurants and commercial outdoor spaces.',
    heroText: 'Electric blue canopy, generous coverage and solar-powered USB charging for outdoor business use.',
    features: [
      { icon: '☀️', label: 'Solar canopy' },
      { icon: '🔌', label: 'USB charging' },
      { icon: '🔵', label: 'Electric blue' },
      { icon: '🏪', label: 'Big size for stall' }
    ],
    highlights: ['Large commercial coverage', 'Solar-powered design', 'Made for outdoor business use'],
    specifications: [
      ['Use case', 'Stalls, cafes, restaurants and commercial spaces'],
      ['Power', 'Solar canopy with USB charging'],
      ['Colour', 'Electric blue'],
      ['Size', 'Large canopy for stall and business use']
    ],
    howItWorks: [
      'The canopy is designed to collect solar energy during the day.',
      'Stored energy can support the umbrella’s USB charging feature.',
      'The larger canopy gives customers and outdoor setups practical shade.'
    ],
    faqs: [
      {
        question: 'Who is Power Brella designed for?',
        answer: 'It is designed for stalls, cafes, restaurants and other businesses with outdoor spaces.'
      },
      {
        question: 'Does it include USB charging?',
        answer: 'Yes. USB charging is one of the proposed features of the solar-powered Power Brella.'
      }
    ],
    related: ['Smart Bella', 'Glow Brella', 'Cool Brella']
  },

  'Smart Bella': {
    name: 'Smart Bella',
    category: 'Smart Technology',
    price: 6000,
    image: 'images/products/smart-bella.png',
    description: 'A smart personal umbrella designed to provide weather information, GPS tracking and sensor-based support.',
    heroText: 'Stay informed about changing weather and keep useful smart features close at hand.',
    features: [
      { icon: '🌦️', label: 'Weather alerts' },
      { icon: '📍', label: 'GPS tracking' },
      { icon: '🧠', label: 'Smart sensors' },
      { icon: '🛡️', label: 'Everyday safety support' }
    ],
    highlights: ['Weather alerts', 'GPS tracking', 'Smart sensors'],
    specifications: [
      ['Use case', 'Personal everyday use and commuting'],
      ['Tracking', 'GPS tracking feature'],
      ['Alerts', 'Weather alerts'],
      ['Sensors', 'Smart sensors']
    ],
    howItWorks: [
      'Weather alerts are designed to help keep you aware of changing conditions.',
      'GPS tracking is included as a proposed feature for added convenience.',
      'Smart sensors support the umbrella’s connected product concept.'
    ],
    faqs: [
      {
        question: 'What are Smart Bella’s main features?',
        answer: 'The concept includes weather alerts, GPS tracking and smart sensors.'
      },
      {
        question: 'Is Smart Bella designed for daily use?',
        answer: 'Yes. It is designed as a personal umbrella for everyday use and commuting.'
      }
    ],
    related: ['Glow Brella', 'Cool Brella', 'Style Bella']
  },

  'Cool Brella': {
    name: 'Cool Brella',
    category: 'Cooling & Protection',
    price: 3000,
    image: 'images/products/cool-brella.png',
    description: 'A personal cooling umbrella with a built-in fan located underneath the canopy, plus shade and UV protection.',
    heroText: 'Enjoy cooling airflow from the fan under the umbrella while staying shaded outdoors.',
    features: [
      { icon: '❄️', label: 'Fan under the umbrella' },
      { icon: '🛡️', label: 'UV protection' },
      { icon: '🌿', label: 'Fresh green design' },
      { icon: '💨', label: 'Cooling airflow' }
    ],
    highlights: ['Fan positioned under the canopy', 'UV protection', 'Cooling airflow'],
    specifications: [
      ['Use case', 'Personal outdoor comfort in warm weather'],
      ['Fan location', 'Under the umbrella canopy'],
      ['Protection', 'UV protection'],
      ['Colour', 'Fresh green']
    ],
    howItWorks: [
      'The built-in fan is positioned underneath the umbrella canopy.',
      'The fan circulates air around the user while the canopy provides shade.',
      'UV protection adds another layer of comfort for outdoor use.'
    ],
    faqs: [
      {
        question: 'Where is the fan located?',
        answer: 'The fan is underneath the umbrella canopy, not on the handle.'
      },
      {
        question: 'What else does Cool Brella include?',
        answer: 'The concept includes UV protection and a fresh green design.'
      }
    ],
    related: ['Smart Bella', 'Glow Brella', 'Power Brella']
  },

  'Glow Brella': {
    name: 'Glow Brella',
    category: 'LED Visibility',
    price: 3000,
    image: 'images/products/glow-brella.png',
    description: 'A night-visibility umbrella with exactly 15 LED strips, USB charging, a torch in the handle and an SOS button.',
    heroText: 'Be seen after dark with a neon orange canopy and illuminated LED strips.',
    features: [
      { icon: '💡', label: 'Exactly 15 LED strips' },
      { icon: '🔌', label: 'USB charging for LED strips' },
      { icon: '🌙', label: 'Night visibility' },
      { icon: '🟠', label: 'Neon orange' },
      { icon: '🔦', label: 'Small torch on handle' },
      { icon: '🆘', label: 'SOS button' }
    ],
    highlights: ['15 LED strips', 'USB charging', 'Torch and SOS button on the handle'],
    specifications: [
      ['Use case', 'Night-time visibility and personal safety'],
      ['Lighting', 'Exactly 15 LED strips'],
      ['Charging', 'USB charging for the LED lighting'],
      ['Colour', 'Neon orange'],
      ['Handle features', 'Small torch and SOS button']
    ],
    howItWorks: [
      'The 15 LED strips illuminate the canopy to improve visibility at night.',
      'USB charging powers the LED lighting system.',
      'A small torch and an SOS button are included on the handle.'
    ],
    faqs: [
      {
        question: 'How many LED strips does Glow Brella have?',
        answer: 'Glow Brella is specified with exactly 15 LED strips.'
      },
      {
        question: 'How are the LED strips charged?',
        answer: 'The concept includes USB charging for the LED strips.'
      },
      {
        question: 'What safety features are on the handle?',
        answer: 'The handle includes a small torch and an SOS button.'
      }
    ],
    related: ['Smart Bella', 'Cool Brella', 'Style Bella']
  },

  'Style Bella': {
    name: 'Style Bella',
    category: 'Fashion & Customization',
    price: 2500,
    image: 'images/products/custom-bella.png',
    description: 'A personalized umbrella with interchangeable canopies, custom designs and branding options.',
    heroText: 'Choose a look that feels like yours, with options for personal designs and business branding.',
    features: [
      { icon: '🎨', label: 'Custom designs' },
      { icon: '🔄', label: 'Interchangeable canopy' },
      { icon: '🏢', label: 'Branding options' },
      { icon: '🌈', label: 'Choice of colours and patterns' }
    ],
    highlights: ['Personal customization', 'Interchangeable canopies', 'Corporate branding options'],
    specifications: [
      ['Use case', 'Personal style, events and business branding'],
      ['Canopy', 'Interchangeable designs'],
      ['Customization', 'Custom colours, patterns and prints'],
      ['Branding', 'Personal and corporate options']
    ],
    howItWorks: [
      'Choose a canopy colour, pattern or custom design.',
      'Select an interchangeable canopy style to suit the occasion.',
      'Add branding options for business, events or gifting.'
    ],
    faqs: [
      {
        question: 'Can I customize Style Bella?',
        answer: 'Yes. The concept includes custom designs, colours, patterns and branding options.'
      },
      {
        question: 'Can the canopy be changed?',
        answer: 'Yes. Style Bella is designed with interchangeable canopy options.'
      }
    ],
    related: ['Smart Bella', 'Glow Brella', 'Power Brella']
  }
};

const DELIVERY_CHARGES = 0;
const DISCOUNT_VALUE = 0;

function formatINR(value) {
  return `₹ ${Number(value || 0).toLocaleString('en-IN')}`;
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getProductNameFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get('product') || 'Smart Bella';
}

function updateBagCount() {
  const cart = getCart();
  const total = Object.values(cart).reduce(
    (sum, quantity) => sum + Number(quantity || 0),
    0
  );

  const badge = document.getElementById('cart-count');
  const headerTotal = document.getElementById('header-item-total');

  if (badge) badge.textContent = total;
  if (headerTotal) headerTotal.textContent = total;
}

function addToBag(productName, quantity = 1) {
  if (!PRODUCT_CATALOG[productName]) return;

  const cart = getCart();
  cart[productName] = (Number(cart[productName]) || 0) + (Number(quantity) || 1);
  saveCart(cart);
  updateBagCount();

  if (document.getElementById('bag-items')) renderBagPage();
}

function removeFromBag(productName, quantity = 1) {
  const cart = getCart();
  if (!cart[productName]) return;

  cart[productName] -= Number(quantity) || 1;
  if (cart[productName] <= 0) delete cart[productName];

  saveCart(cart);
  updateBagCount();

  if (document.getElementById('bag-items')) renderBagPage();
}

function bindProductControls() {
  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('.detail-add-to-bag');
    if (addButton) {
      const quantity = Number(document.getElementById('product-qty')?.value || 1);
      addToBag(addButton.dataset.product, quantity);
      return;
    }

    const buyButton = event.target.closest('.detail-buy-now');
    if (buyButton) {
      const quantity = Number(document.getElementById('product-qty')?.value || 1);
      addToBag(buyButton.dataset.product, quantity);
      window.location.href = 'cart.html';
      return;
    }

    const removeButton = event.target.closest('.qty-remove');
    const addQuantityButton = event.target.closest('.qty-add');

    if (removeButton || addQuantityButton) {
      const item = event.target.closest('.bag-item');
      if (!item) return;

      if (addQuantityButton) addToBag(item.dataset.product);
      else removeFromBag(item.dataset.product);
      return;
    }

    const deleteButton = event.target.closest('.remove-item');
    if (deleteButton) {
      const cart = getCart();
      delete cart[deleteButton.dataset.product];
      saveCart(cart);
      renderBagPage();
    }
  });
}

function renderBagPage() {
  const bagItems = document.getElementById('bag-items');
  const subtotalElement = document.getElementById('subtotal');
  const deliveryElement = document.getElementById('delivery');
  const discountElement = document.getElementById('discount');
  const totalElement = document.getElementById('total-price');

  if (!bagItems || !subtotalElement || !deliveryElement || !discountElement || !totalElement) {
    return;
  }

  const cart = getCart();
  const entries = Object.entries(cart);
  let subtotal = 0;

  if (entries.length === 0) {
    bagItems.innerHTML = `
      <div class="empty-cart">
        <h3>Your bag is empty</h3>
        <p>Explore the collection and add your next-generation protection.</p>
        <a class="continue-shopping" href="index.html#collection">Continue Shopping</a>
      </div>
    `;

    subtotalElement.textContent = formatINR(0);
    deliveryElement.textContent = formatINR(DELIVERY_CHARGES);
    discountElement.textContent = `- ${formatINR(DISCOUNT_VALUE)}`;
    totalElement.textContent = formatINR(0);
    updateBagCount();
    return;
  }

  bagItems.innerHTML = entries.map(([productName, quantity]) => {
    const product = PRODUCT_CATALOG[productName];
    if (!product) return '';

    const safeQuantity = Number(quantity) || 0;
    const itemSubtotal = product.price * safeQuantity;
    subtotal += itemSubtotal;

    return `
      <article class="bag-item" data-product="${product.name}">
        <img class="bag-item-image"
             src="${product.image}"
             alt="${product.name} umbrella"
             onerror="this.src='images/products/smart-bella.png';">
        <div class="bag-item-copy">
          <div class="bag-item-header">
            <h3 class="bag-item-name">${product.name}</h3>
            <button class="remove-item"
                    type="button"
                    data-product="${product.name}">Remove</button>
          </div>
          <p class="bag-item-meta">${product.description}</p>
          <div class="bag-item-footer">
            <div class="qty-control">
              <button class="qty-btn qty-remove"
                      type="button"
                      aria-label="Remove one ${product.name}">−</button>
              <span class="qty-value">${safeQuantity}</span>
              <button class="qty-btn qty-add"
                      type="button"
                      aria-label="Add one ${product.name}">＋</button>
            </div>
            <div class="unit-price">${formatINR(product.price)}</div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  const total = subtotal + DELIVERY_CHARGES - DISCOUNT_VALUE;

  subtotalElement.textContent = formatINR(subtotal);
  deliveryElement.textContent = formatINR(DELIVERY_CHARGES);
  discountElement.textContent = `- ${formatINR(DISCOUNT_VALUE)}`;
  totalElement.textContent = formatINR(total);
  updateBagCount();
}

function renderProductDetailPage() {
  const root = document.getElementById('product-detail-root');
  const sections = document.getElementById('product-detail-sections');
  if (!root || !sections) return;

  const productName = getProductNameFromQuery();
  const product = PRODUCT_CATALOG[productName];

  if (!product) {
    root.innerHTML = '<p class="product-not-found">This product is not available right now.</p>';
    return;
  }

  const breadcrumb = document.getElementById('current-product');
  if (breadcrumb) breadcrumb.textContent = product.name;

  const styleCustomization = product.name === 'Style Bella'
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
        <textarea id="custom-request"
                  placeholder="Describe your custom design or branding idea"></textarea>
      </div>
    `
    : '';

  root.innerHTML = `
    <div class="product-visual-panel">
      <div class="product-main-image-wrap">
        <img id="main-product-image"
             src="${product.image}"
             alt="${product.name}"
             onerror="this.src='images/products/smart-bella.png';">
      </div>
      <div class="product-thumb-row">
        ${[1, 2, 3].map((number, index) => `
          <button class="product-thumb ${index === 0 ? 'is-active' : ''}"
                  type="button"
                  data-image="${product.image}"
                  aria-label="View ${product.name} image ${number}">
            <img src="${product.image}"
                 alt="${product.name} thumbnail ${number}"
                 onerror="this.src='images/products/smart-bella.png';">
          </button>
        `).join('')}
      </div>
    </div>

    <div class="product-summary-panel">
      <span class="detail-category">${product.category}</span>
      <h1>${product.name}</h1>
      <p class="detail-description">${product.description}</p>

      <div class="detail-price-row">
        <span class="detail-price-label">Proposed price</span>
        <span class="detail-price">${formatINR(product.price)}</span>
      </div>

      <p class="detail-subtext">${product.heroText}</p>

      <ul class="detail-feature-badges">
        ${product.features.map((feature) => `
          <li><span>${feature.icon}</span> ${feature.label}</li>
        `).join('')}
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
          <button type="button"
                  class="detail-add-to-bag"
                  data-product="${product.name}">Add to Bag</button>
          <button type="button"
                  class="detail-buy-now"
                  data-product="${product.name}">Buy Now</button>
        </div>
      </div>

      ${styleCustomization}
    </div>
  `;

  sections.innerHTML = `
    <div class="detail-section-card">
      <div class="detail-section-heading"><span>Key Features</span></div>
      <ul class="detail-points">
        ${product.features.map((feature) => `
          <li><span>${feature.icon}</span>${feature.label}</li>
        `).join('')}
      </ul>
    </div>

    <div class="detail-section-card">
      <div class="detail-section-heading"><span>Product Specifications</span></div>
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
      <div class="detail-section-heading"><span>How It Works</span></div>
      <ol class="process-list">
        ${product.howItWorks.map((step) => `<li>${step}</li>`).join('')}
      </ol>
    </div>

    <div class="detail-section-card">
      <div class="detail-section-heading"><span>Frequently Asked Questions</span></div>
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
      <div class="detail-section-heading"><span>You May Also Like</span></div>
      <div class="related-grid">
        ${product.related.map((name) => {
          const relatedProduct = PRODUCT_CATALOG[name];
          return `
            <a class="related-card"
               href="product.html?product=${encodeURIComponent(name)}">
              <img src="${relatedProduct.image}"
                   alt="${name}"
                   onerror="this.src='images/products/smart-bella.png';">
              <div>
                <h4>${name}</h4>
                <span>${formatINR(relatedProduct.price)}</span>
              </div>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  `;

  const mainImage = document.getElementById('main-product-image');

  document.querySelectorAll('.product-thumb').forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      if (mainImage) mainImage.src = thumbnail.dataset.image;
      document.querySelectorAll('.product-thumb').forEach((item) => {
        item.classList.toggle('is-active', item === thumbnail);
      });
    });
  });

  const quantityInput = document.getElementById('product-qty');

  document.querySelectorAll('.stepper-btn').forEach((button) => {
    button.addEventListener('click', () => {
      if (!quantityInput) return;

      const current = Number(quantityInput.value) || 1;
      const next = button.dataset.action === 'increase'
        ? Math.min(9, current + 1)
        : Math.max(1, current - 1);

      quantityInput.value = next;
    });
  });

  if (quantityInput) {
    quantityInput.addEventListener('change', () => {
      const value = Number(quantityInput.value) || 1;
      quantityInput.value = Math.max(1, Math.min(9, value));
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateBagCount();
  bindProductControls();
  renderProductDetailPage();
  renderBagPage();
});
