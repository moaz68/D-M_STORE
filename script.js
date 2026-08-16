// script.js

// Initialize Lucide icons
lucide.createIcons();

// Products Array with relative paths from subfolders based on product IDs
const products = [
    {
        id: 1,
        name: "Calvin Klein",
        price: "LE 2,900.00 EGP",
        inStock: true,
        descriptionFeatures: [
            "Material (fiber)",
            "عجلات مزدوجة ٣٦٠ درجة",
            "قفل رقمي 🔐",
            "متوفر سوستة توسيع 🔄"
        ],
        sizes: [
            { name: "طقم شنط سفر 3ق", price: "LE 2,900.00 EGP" },
            { name: "الشنطة الصغيرة مقاس 20", price: "LE 750.00 EGP" },
            { name: "الشنطة الوسط مقاس 24", price: "LE 1,100.00 EGP" },
            { name: "الشنطة الكبيرة مقاس 28", price: "LE 1,300.00 EGP" }
        ],
        variants: [
            { colorName: "Gold", hex: "#C49A6C", image: "Calvin klein/fee6033b-04bf-44f2-a664-8b250bfe83c8.webp" },
            { colorName: "Black", hex: "#000000", image: "Calvin klein/276cbaf4-df78-4d84-b04e-eccf312ad69a.webp" },
            { colorName: "Mauve", hex: "#B8737D", image: "Calvin klein/d5350ab7-8431-4fcd-9961-3f8e7fcafcdb.webp" },
            { colorName: "Blue", hex: "#1E1B93", image: "Calvin klein/d4090aad-7223-491b-a0a7-7343c1bc7aa8.webp" },
            { colorName: "Pink", hex: "#FCAEBB", image: "Calvin klein/7c2e76b3-bdf2-4b97-bae2-fd34230b27a8.webp" }
        ],
        mainImage: "Calvin klein/276cbaf4-df78-4d84-b04e-eccf312ad69a.webp"
    },
    {
        id: 2,
        name: "Milano Silicon - Anti-break",
        price: "LE 3,300.00 EGP",
        inStock: true,
        descriptionFeatures: [
            "خامة مستوردة🙏(سيليكون ضد الكسر )",
            "عجلات مزدوجة ٣٦٠ درجة",
            "قفل رقمي 🔐",
            "متوفر سوستة توسيع 🔄"
        ],
        sizes: [
            { name: "طقم شنط سفر 3ق", price: "LE 3,300.00 EGP" },
            { name: "الشنطة الصغيرة مقاس 22", price: "LE 900.00 EGP" },
            { name: "الشنطة الوسط مقاس 26", price: "LE 1,350.00 EGP" },
            { name: "الشنطة الكبيرة مقاس 30", price: "LE 1,650.00 EGP" }
        ],
        variants: [
            { colorName: "Champagne", hex: "#D5C7B4", image: "2/IMG_0896.webp" },
            { colorName: "Black", hex: "#000000", image: "2/IMG_0897.webp" },
            { colorName: "Dark Blue", hex: "#1E1B93", image: "2/IMG_0898.webp" },
            { colorName: "Gray", hex: "#B0B0B0", image: "2/IMG_0899.webp" },
            { colorName: "Sky Blue", hex: "#8CC8FF", image: "2/IMG_0900.webp" },
            { colorName: "Mint Green", hex: "#A2D3C2", image: "2/IMG_0901.webp" },
            { colorName: "Purple", hex: "#B38FEE", image: "2/IMG_0902.webp" },
            { colorName: "Rose Pink", hex: "#FFC5D3", image: "2/IMG_0903.webp" },
            { colorName: "Burgundy", hex: "#8A004F", image: "2/IMG_0904.webp" }
        ],
        mainImage: "2/IMG_0896.webp"
    },
    {
        id: 3,
        name: "Milano Silicon - Shockproof",
        price: "LE 3,200.00 EGP",
        inStock: true,
        descriptionFeatures: [
            "خامة مستوردة🙏(سيليكون ضد الصدمات )",
            "عجلات مزدوجة ٣٦٠ درجة",
            "قفل رقمي 🔐",
            "متوفر سوستة توسيع 🔄"
        ],
        sizes: [
            { name: "طقم شنط سفر 3ق", price: "LE 3,200.00 EGP" },
            { name: "الشنطة الصغيرة مقاس 22", price: "LE 750.00 EGP" },
            { name: "الشنطة الوسط مقاس 26", price: "LE 1,300.00 EGP" },
            { name: "الشنطة الكبيرة مقاس 30", price: "LE 1,550.00 EGP" }
        ],
        variants: [
            { colorName: "Pink", hex: "#FCAEBB", image: "3/187a1537-2903-4b35-805c-af07b7d1a391.webp" },
            { colorName: "Mauve", hex: "#B8737D", image: "3/1c975954-307e-4556-880f-ba379d726c04.webp" },
            { colorName: "Black", hex: "#000000", image: "3/21357eae-a485-4ac3-a30f-1be2ba991468.webp" },
            { colorName: "Blue", hex: "#1E1B93", image: "3/8351050a-8548-41d6-b6ca-1b33b11cfc70.webp" },
            { colorName: "Silver", hex: "#C0C0C0", image: "3/8d935988-a15e-42a2-a2b7-a6aab033ec09.webp" }
        ],
        mainImage: "3/8d935988-a15e-42a2-a2b7-a6aab033ec09.webp"
    },
    {
        id: 4,
        name: "Milano Travel Set",
        price: "LE 2,900.00 EGP",
        inStock: true,
        descriptionFeatures: [
            "⚡ Fast shipping",
            "📞 24/7 Support",
            "🔄 14 Days return",
            "طقم سفر milano ✈️",
            "الماتريال(fiber high quality)",
            "عجلات مزدوجة ٣٦٠ درجة",
            "قفل رقمي 🔐",
            "متوفر سوستة توسيع 🔄"
        ],
        sizes: [
            { name: "طقم شنط سفر 3ق", price: "LE 2,900.00 EGP" },
            { name: "الشنطة الصغيرة مقاس 22", price: "LE 750.00 EGP" },
            { name: "الشنطة الوسط مقاس 26", price: "LE 1,100.00 EGP" },
            { name: "الشنطة الكبيرة مقاس 30", price: "LE 1,300.00 EGP" }
        ],
        variants: [
            { colorName: "Navy", hex: "#444f68", image: "Milano/02692d72-df95-4064-a3a0-f8e6a904184c.webp" },
            { colorName: "Mauve", hex: "#B7668D", image: "Milano/2c13b9e3-ccb3-47db-94b3-dbf5132038dc.webp" },
            { colorName: "Pink", hex: "#EE8AB6", image: "Milano/43b52a2f-ebc6-4133-b502-172dbaf3dac2.webp" },
            { colorName: "Blue", hex: "#213d76", image: "Milano/6a3aa901-d30e-47be-a900-3670403d4589.webp" },
            { colorName: "Black", hex: "#111111", image: "Milano/abc6b195-a372-43fa-b707-30f7effa1c2c.webp" },
            { colorName: "Silver", hex: "#CDD3DA", image: "Milano/6efec55a-2a49-4c99-b8d3-01b5ee055485.webp" }
        ],
        mainImage: "Milano/02692d72-df95-4064-a3a0-f8e6a904184c.webp"
    },
    {
        id: 5,
        name: "Turkey Travel Set",
        price: "LE 3,700.00 EGP",
        inStock: true,
        descriptionFeatures: [
            "Fast shipping",
            "📞 24/7 Support",
            "🔄 14 Days return",
            "طقم سفر turkey ✈️",
            "Material (fiber high quality )",
            "عجلات مزدوجة ٣٦٠ درجة",
            "قفل رقمي 🔐",
            "متوفر سوستة توسيع 🔄"
        ],
        sizes: [
            { name: "طقم شنط سفر 3ق", price: "LE 3,700.00 EGP" }
        ],
        variants: [
            { colorName: "Black", hex: "#111111", image: "Turkey/5b9e7734-9104-4d9f-a5ca-dd98f04f7d06.webp" },
            { colorName: "Beige", hex: "#CBB69A", image: "Turkey/6dbd5ffb-6e11-48c5-9053-ea764e173a8e.webp" },
            { colorName: "Pink", hex: "#F0A3C3", image: "Turkey/a6e9c56e-55b6-4957-af3d-3f9282bc5a53.webp" },
            { colorName: "Blue", hex: "#1E3A8A", image: "Turkey/bc6bda37-bb0e-4e3c-9cc8-2599a2f6f5b5.webp" },
            { colorName: "Gray", hex: "#b97a85", image: "Turkey/dafd4a7a-6375-4aa0-aaf2-9f4cb34cc948.webp" },
            { colorName: "Light Gray", hex: "#D7D7D7", image: "Turkey/de32fd83-fc6f-4985-ad38-39b570b4b7a2.webp" }
        ],
        mainImage: "Turkey/5b9e7734-9104-4d9f-a5ca-dd98f04f7d06.webp"
    },
    {
        id: 6,
        name: "Milano",
        price: "LE 4,600.00 EGP",
        inStock: true,
        descriptionFeatures: [
            "⚡ Fast shipping",
            "📞 24/7 Support",
            "🔄 14 Days return",
            "طقم سفر milano ✈️",
            "خامة مستوردة🙏(silicone )",
            "عجلات مزدوجة ٣٦٠ درجة",
            "قفل رقمي 🔐",
            "متوفر سوستة توسيع 🔄"
        ],
        sizes: [
            { name: "طقم شنط سفر 4ق", price: "LE 4,600.00 EGP" },
            { name: "الشنطة مقاس 20", price: "LE 800.00 EGP" },
            { name: "الشنطة مقاس 22", price: "LE 1,250.00 EGP" },
            { name: "الشنطة مقاس 26", price: "LE 1,500.00 EGP" },
            { name: "الشنطة مقاس 30", price: "LE 1,750.00 EGP" }
        ],
        variants: [
            { colorName: "Pink", hex: "#f38bb5", image: "milano2/WhatsApp Image 2026-08-01 at 10.12.15 PM.webp" },
            { colorName: "Soft Pink", hex: "#f4a3be", image: "milano2/WhatsApp Image 2026-08-01 at 10.12.16 PM (1).webp" },
            { colorName: "Magenta", hex: "#bc1f79", image: "milano2/WhatsApp Image 2026-08-01 at 10.12.16 PM (2).webp" },
            { colorName: "Royal Blue", hex: "#232fc0", image: "milano2/WhatsApp Image 2026-08-01 at 10.12.16 PM (3).webp" },
            { colorName: "Purple", hex: "#a25fd6", image: "milano2/WhatsApp Image 2026-08-01 at 10.12.16 PM.webp" },
            { colorName: "Sky Blue", hex: "#357edd", image: "milano2/WhatsApp Image 2026-08-01 at 10.12.17 PM (1).webp" },
            { colorName: "Grey", hex: "#9ea3a8", image: "milano2/WhatsApp Image 2026-08-01 at 10.12.17 PM.webp" }
        ],
        mainImage: "milano2/WhatsApp Image 2026-08-01 at 10.12.15 PM.webp"
    },
    {
        id: 7,
        name: "Milano Silicone 5 Pieces",
        price: "LE 4,200.00 EGP",
        inStock: true,
        descriptionFeatures: [
            "Silicone ضد الكسر",
            "عجلات مزدوجة 360 درجة",
            "متوفر سوستة توسيع 🔄",
            "قفل رقمي 🔐"
        ],
        sizes: [
            { name: "طقم شنط سفر 5ق", price: "LE 4,200.00 EGP" },
            { name: "طقم شنط سفر 3ق", price: "LE 3,300.00 EGP" },
            { name: "الشنطة الصغيرة", price: "LE 750.00 EGP" },
            { name: "الشنطة الوسط", price: "LE 1,250.00 EGP" },
            { name: "الشنطة الكبيرة", price: "LE 1,550.00 EGP" }
        ],
        variants: [
            { colorName: "Pink", hex: "#f793b8", image: "milano3/WhatsApp Image 2026-08-16 at 4.02.07 PM (1).webp" },
            { colorName: "Burgundy", hex: "#8b3e4f", image: "milano3/WhatsApp Image 2026-08-16 at 4.02.07 PM (2).webp" },
            { colorName: "Dark Grey", hex: "#6c7178", image: "milano3/WhatsApp Image 2026-08-16 at 4.02.07 PM (3).webp" },
            { colorName: "Black", hex: "#222222", image: "milano3/WhatsApp Image 2026-08-16 at 4.02.07 PM (4).webp" },
            { colorName: "Silver", hex: "#b5b9c0", image: "milano3/WhatsApp Image 2026-08-16 at 4.02.07 PM.webp" },
            { colorName: "Lilac", hex: "#a47be4", image: "milano3/WhatsApp Image 2026-08-16 at 4.02.08 PM (1).webp" },
            { colorName: "Navy", hex: "#32446a", image: "milano3/WhatsApp Image 2026-08-16 at 4.02.08 PM (2).webp" },
            { colorName: "Mint Green", hex: "#82c28b", image: "milano3/WhatsApp Image 2026-08-16 at 4.02.08 PM.webp" }
        ],
        mainImage: "milano3/WhatsApp Image 2026-08-16 at 4.02.08 PM (1).webp"
    }
];

// Active filters state
const activeFilters = {
    availability: [], // 'in-stock', 'out-of-stock'
    priceMin: null,
    priceMax: null
};

// Search query state
let searchQuery = '';

// Cart state
const cartState = {
    items: []
};

const CART_STORAGE_KEY = 'dm_cart_items';

const WHATSAPP_NUMBER = '201110227483';

function loadCartState() {
    try {
        const storedItems = localStorage.getItem(CART_STORAGE_KEY);
        if (!storedItems) return;

        const parsedItems = JSON.parse(storedItems);
        if (Array.isArray(parsedItems)) {
            cartState.items = parsedItems;
        }
    } catch (error) {
        console.error('Failed to load cart state:', error);
    }
}

function saveCartState() {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState.items));
    } catch (error) {
        console.error('Failed to save cart state:', error);
    }
}

function formatPrice(priceText) {
    const numeric = parseFloat(String(priceText).replace(/[^0-9.]/g, '')) || 0;
    return `LE ${numeric.toFixed(2)} EGP`;
}

function getCartItemPrice(item) {
    const numeric = parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
    return numeric * item.quantity;
}

function updateCartBadge() {
    const badge = document.querySelector('.cart-btn .cart-badge');
    if (badge) {
        const count = cartState.items.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = count;
    }
}

function removeFromCart(itemKey) {
    cartState.items = cartState.items.filter(item => `${item.id}-${item.size}-${item.color}` !== itemKey);
    saveCartState();
    renderCart();
}

function renderCart() {
    const list = document.getElementById('cart-items-list');
    const totalPrice = document.getElementById('cart-total-price');
    const floatBtn = document.getElementById('wa-float-btn');

    if (!list) return;

    if (cartState.items.length === 0) {
        list.innerHTML = '<div class="cart-empty-state">Your cart is empty.</div>';
        if (totalPrice) totalPrice.textContent = 'LE 0.00 EGP';
        if (floatBtn) floatBtn.style.display = 'none';
        updateCartBadge();
        return;
    }

    const total = cartState.items.reduce((sum, item) => sum + getCartItemPrice(item), 0);

    list.innerHTML = cartState.items.map(item => {
        const itemKey = `${item.id}-${item.size}-${item.color}`;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-meta">${item.size} • ${item.color}</div>
                    <div class="cart-item-meta">Qty: ${item.quantity}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                </div>
                <button class="cart-remove-btn" data-item-key="${itemKey}" aria-label="Remove item">×</button>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.cart-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(btn.getAttribute('data-item-key')));
    });

    if (totalPrice) totalPrice.textContent = formatPrice(total.toString());
    if (floatBtn) floatBtn.style.display = 'flex';
    updateCartBadge();
}

function toggleCart(open) {
    const overlay = document.getElementById('cart-overlay');
    const panel = document.getElementById('cart-panel');
    if (!overlay || !panel) return;

    if (open) {
        overlay.classList.add('active');
        panel.classList.add('active');
        renderCart();
    } else {
        overlay.classList.remove('active');
        panel.classList.remove('active');
    }
}

function addToCart(product, size, color, quantity = 1, price = null) {
    const normalizeValue = (value) => String(value || '').trim().toLowerCase();
    const existingItem = cartState.items.find(item => {
        const sameProduct = item.id === product.id || normalizeValue(item.name) === normalizeValue(product.name);
        return sameProduct && normalizeValue(item.size) === normalizeValue(size) && normalizeValue(item.color) === normalizeValue(color);
    });

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartState.items.push({
            id: product.id,
            name: product.name,
            price: price || product.price,
            image: product.mainImage,
            size,
            color,
            quantity
        });
    }

    saveCartState();
    renderCart();
}

function buildWhatsAppMessage() {
    if (cartState.items.length === 0) return '';

    const lines = cartState.items.map((item, index) => {
        const itemPrice = getCartItemPrice(item);
        const linkUrl = new URL(item.image, window.location.href).href;
        
        let messageLines = [
            `${index + 1}. ${item.name}`
        ];

        if (item.size && item.size !== 'Default') {
            messageLines.push(`Size: ${item.size}`);
        }
        if (item.color && item.color !== 'Default') {
            messageLines.push(`Color: ${item.color}`);
        }

        messageLines.push(
            `Quantity: ${item.quantity}`,
            `Price: EGP ${itemPrice.toLocaleString('en-EG')}`,
            `Link: ${linkUrl}`
        );

        return messageLines.join('\n');
    });

    const total = cartState.items.reduce((sum, item) => sum + getCartItemPrice(item), 0);
    const message = `Hello D&M, I would like to order the following:\n\n${lines.join('\n\n--------------------\n\n')}\n\nTotal: EGP ${total.toLocaleString('en-EG')}\n\nThank you.`;

    return encodeURIComponent(message);
}

function openWhatsApp() {
    const message = buildWhatsAppMessage();
    if (!message) return;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Render products to the grid
function renderProducts(productsToRender = products) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    grid.innerHTML = '';

    if (productsToRender.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'no-products-message';
        emptyMessage.innerHTML = '<p>No products found matching your filters.</p>';
        grid.appendChild(emptyMessage);
        return;
    }

    productsToRender.forEach(product => {
        const card = document.createElement('a');
        card.href = `product.html?id=${product.id}`;
        card.className = 'product-card';
        card.style.textDecoration = 'none';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.mainImage}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <span class="product-price">${product.price}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Update dynamic product count
function updateProductCount(count = products.length) {
    const countElement = document.getElementById('total-product-count');
    if (countElement) {
        countElement.textContent = `${count} product${count !== 1 ? 's' : ''}`;
    }
}

// Update filter counts dynamically
function updateFilterCounts() {
    const inStockCount = document.getElementById('in-stock-count');
    const outStockCount = document.getElementById('out-stock-count');
    if (inStockCount) {
        inStockCount.textContent = products.filter(p => p.inStock).length;
    }
    if (outStockCount) {
        outStockCount.textContent = products.filter(p => !p.inStock).length;
    }
}

// Apply current filters and re-render grid
function applyFilters() {
    let filtered = products;

    // Filter by search query first
    if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(product => product.name.toLowerCase().includes(query));
    }

    // Filter by availability
    if (activeFilters.availability.length > 0) {
        filtered = filtered.filter(product => {
            if (activeFilters.availability.includes('in-stock') && product.inStock) {
                return true;
            }
            if (activeFilters.availability.includes('out-of-stock') && !product.inStock) {
                return true;
            }
            return false;
        });
    }

    // Filter by price range
    if (activeFilters.priceMin !== null) {
        filtered = filtered.filter(product => {
            const price = parseFloat(product.price.replace(/[^0-9.]/g, ''));
            return price >= activeFilters.priceMin;
        });
    }
    if (activeFilters.priceMax !== null) {
        filtered = filtered.filter(product => {
            const price = parseFloat(product.price.replace(/[^0-9.]/g, ''));
            return price <= activeFilters.priceMax;
        });
    }

    renderProducts(filtered);
    updateProductCount(filtered.length);
}

// Initialize Search functionality
function initSearch() {
    const searchToggleBtn = document.getElementById('search-toggle-btn');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchCloseBtn = document.getElementById('search-close-btn');

    if (searchToggleBtn && searchOverlay && searchInput) {
        searchToggleBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            setTimeout(() => searchInput.focus(), 100);
        });

        const closeSearch = () => {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            searchQuery = '';
            applyFilters();
        };

        if (searchCloseBtn) {
            searchCloseBtn.addEventListener('click', () => {
                if (searchInput.value.trim() !== '') {
                    searchInput.value = '';
                    searchQuery = '';
                    applyFilters();
                    searchInput.focus();
                    return;
                }

                closeSearch();
            });
        }

        // Close on Escape keypress
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                closeSearch();
            }
        });

        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            applyFilters();
        });
    }
}

// Initialize Filter Dropdowns & Inputs
function initFilterDropdowns() {
    const dropdowns = document.querySelectorAll('.filter-dropdown');

    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.filter-btn');
        const popup = dropdown.querySelector('.filter-popup');

        btn.addEventListener('click', (e) => {
            e.stopPropagation();

            // Close other dropdowns
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });

            // Toggle current
            dropdown.classList.toggle('active');
        });

        // Prevent clicking inside the popup from closing it
        if (popup) {
            popup.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });

    // Set up Availability filters
    const availabilityDropdown = document.getElementById('availability-dropdown');
    if (availabilityDropdown) {
        const checkboxes = availabilityDropdown.querySelectorAll('input[type="checkbox"]');
        const selectedCountText = availabilityDropdown.querySelector('.selected-count');
        const resetBtn = availabilityDropdown.querySelector('.reset-link');

        checkboxes.forEach(cb => {
            cb.addEventListener('change', () => {
                const checkedCbs = Array.from(checkboxes).filter(c => c.checked);
                activeFilters.availability = checkedCbs.map(c => c.value);
                if (selectedCountText) {
                    selectedCountText.textContent = `${checkedCbs.length} selected`;
                }
                applyFilters();
            });
        });

        if (resetBtn) {
            resetBtn.addEventListener('click', (e) => {
                e.preventDefault();
                checkboxes.forEach(cb => cb.checked = false);
                activeFilters.availability = [];
                if (selectedCountText) {
                    selectedCountText.textContent = '0 selected';
                }
                applyFilters();
            });
        }
    }

    // Set up Price filters
    const priceDropdown = document.getElementById('price-dropdown');
    if (priceDropdown) {
        const minInput = priceDropdown.querySelector('input[placeholder="From"]');
        const maxInput = priceDropdown.querySelector('input[placeholder="To"]');
        const resetBtn = priceDropdown.querySelector('.reset-link');

        const handlePriceChange = () => {
            const minVal = minInput.value ? parseFloat(minInput.value) : null;
            const maxVal = maxInput.value ? parseFloat(maxInput.value) : null;
            activeFilters.priceMin = minVal;
            activeFilters.priceMax = maxVal;
            applyFilters();
        };

        if (minInput) minInput.addEventListener('input', handlePriceChange);
        if (maxInput) maxInput.addEventListener('input', handlePriceChange);

        if (resetBtn) {
            resetBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (minInput) minInput.value = '';
                if (maxInput) maxInput.value = '';
                activeFilters.priceMin = null;
                activeFilters.priceMax = null;
                applyFilters();
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadCartState();

    // Re-initialize lucide icons for statically loaded elements
    if (window.lucide) {
        lucide.createIcons();
    }

    if (document.getElementById('products-grid')) {
        renderProducts();
        initFilterDropdowns();
        updateProductCount();
        updateFilterCounts();
    }

    if (document.getElementById('single-product-container')) {
        renderSingleProduct();
    }

    initSearch();
    renderCart();

    const cartToggleBtn = document.getElementById('cart-toggle-btn');
    const cartCloseBtn = document.getElementById('cart-close-btn');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartWhatsappBtn = document.getElementById('cart-whatsapp-btn');
    const waFloatBtn = document.getElementById('wa-float-btn');

    if (cartToggleBtn) {
        cartToggleBtn.addEventListener('click', () => toggleCart(true));
    }

    if (cartCloseBtn) {
        cartCloseBtn.addEventListener('click', () => toggleCart(false));
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', () => toggleCart(false));
    }

    if (cartWhatsappBtn) {
        cartWhatsappBtn.addEventListener('click', openWhatsApp);
    }

    if (waFloatBtn) {
        waFloatBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openWhatsApp();
        });
    }
});

// ============================================
// Single Product Logic
// ============================================

function renderSingleProduct() {
    const container = document.getElementById('single-product-container');
    const productContent = document.getElementById('product-content');
    const productNotFound = document.getElementById('product-not-found');

    if (!container || !productContent || !productNotFound) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = products.find(p => p.id == productId);

    if (!product) {
        productContent.classList.add('hidden');
        productNotFound.classList.remove('hidden');
        return;
    }

    productContent.classList.remove('hidden');
    productNotFound.classList.add('hidden');

    const productTitle = document.getElementById('product-title');
    const productPrice = document.getElementById('product-price');
    const productMainImage = document.getElementById('product-main-image');
    const thumbnailsContainer = document.getElementById('thumbnails-container');
    const thumbCounter = document.getElementById('thumb-counter');
    const colorSelector = document.getElementById('color-selector');
    const activeColorText = document.getElementById('active-color-text');
    const sizeSelector = document.getElementById('size-selector');
    const featuresContainer = document.getElementById('product-features');
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');
    const qtyValue = document.getElementById('qty-value');
    const prevBtn = document.getElementById('prev-thumb-btn');
    const nextBtn = document.getElementById('next-thumb-btn');
    const shareBtn = document.getElementById('share-btn');

    let activeIndex = product.variants.findIndex(v => v.image === product.mainImage);
    if (activeIndex === -1) activeIndex = 0;

    if (productTitle) productTitle.textContent = product.name;
    if (productPrice) productPrice.textContent = product.price;
    if (productMainImage) {
        productMainImage.src = product.variants[activeIndex]?.image || product.mainImage;
        productMainImage.alt = product.name;
    }

    if (sizeSelector && product.sizes) {
        sizeSelector.innerHTML = product.sizes.map((size, index) => `
            <button class="size-pill px-5 py-3 border rounded-full text-sm font-semibold transition-colors ${index === 0 ? 'bg-primary text-white border-primary' : 'bg-transparent text-primary border-gray-300 hover:border-primary'}" data-price="${size.price || product.price}">
                ${size.name || size}
            </button>
        `).join('');
    }

    if (featuresContainer && product.descriptionFeatures) {
        featuresContainer.innerHTML = `
            <div class="mb-8">
                <h3 class="font-medium text-lg mb-3">Features</h3>
                <ul class="list-disc pl-5 space-y-2 text-gray-700">
                    ${product.descriptionFeatures.map(feat => `<li>${feat}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    if (colorSelector) {
        colorSelector.innerHTML = product.variants.map((variant, index) => `
            <button class="color-swatch-btn relative w-8 h-8 rounded-full flex items-center justify-center transition-all ${index === activeIndex ? 'ring-2 ring-primary ring-offset-2' : ''}" data-color="${variant.colorName}" data-image="${variant.image}">
                <span class="w-6 h-6 rounded-full block border border-gray-200" style="background-color: ${variant.hex}"></span>
            </button>
        `).join('');
    }

    if (thumbnailsContainer && product.variants) {
        thumbnailsContainer.innerHTML = product.variants.map((variant, index) => `
            <button class="thumbnail-btn flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden ${index === activeIndex ? 'border-accent' : 'border-transparent'}" data-img="${variant.image}">
                <img src="${variant.image}" class="w-full h-full object-cover" alt="Thumbnail">
            </button>
        `).join('');
    }

    if (activeColorText) {
        activeColorText.textContent = product.variants[activeIndex]?.colorName || '';
    }

    if (thumbCounter) {
        thumbCounter.textContent = `${activeIndex + 1}/${product.variants.length}`;
    }

    if (window.lucide) {
        lucide.createIcons();
    }

    if (sizeSelector) {
        const pills = sizeSelector.querySelectorAll('.size-pill');
        pills.forEach(pill => {
            pill.addEventListener('click', () => {
                pills.forEach(p => {
                    p.classList.remove('bg-primary', 'text-white', 'border-primary');
                    p.classList.add('bg-transparent', 'text-primary', 'border-gray-300');
                });
                pill.classList.remove('bg-transparent', 'text-primary', 'border-gray-300');
                pill.classList.add('bg-primary', 'text-white', 'border-primary');

                if (productPrice) {
                    productPrice.textContent = pill.getAttribute('data-price');
                }
            });
        });
    }

    if (qtyMinus && qtyPlus && qtyValue) {
        qtyMinus.addEventListener('click', () => {
            let val = parseInt(qtyValue.textContent);
            if (val > 1) {
                qtyValue.textContent = val - 1;
            }
        });
        qtyPlus.addEventListener('click', () => {
            let val = parseInt(qtyValue.textContent);
            qtyValue.textContent = val + 1;
        });
    }

    const addToCartBtn = document.querySelector('[data-action="add-to-cart"]');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const activeSizePill = sizeSelector ? sizeSelector.querySelector('.size-pill.bg-primary') : null;
            const selectedSize = activeSizePill ? activeSizePill.textContent.trim() : (product.sizes[0].name || product.sizes[0]);
            const selectedColor = product.variants[activeIndex]?.colorName || activeColorText?.textContent.trim() || 'Default';
            const quantity = qtyValue ? parseInt(qtyValue.textContent, 10) || 1 : 1;
            const selectedPrice = activeSizePill ? activeSizePill.getAttribute('data-price') : (product.sizes[0].price || product.price);
            
            addToCart(product, selectedSize, selectedColor, quantity, selectedPrice);
        });
    }

    const zoomContainer = document.getElementById('main-image-container');
    if (zoomContainer && productMainImage) {
        zoomContainer.addEventListener('mousemove', (e) => {
            const rect = zoomContainer.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            productMainImage.style.transformOrigin = `${x * 100}% ${y * 100}%`;
            productMainImage.style.transform = 'scale(2)';
        });

        zoomContainer.addEventListener('mouseleave', () => {
            productMainImage.style.transform = 'scale(1)';
            productMainImage.style.transformOrigin = 'center center';
        });
    }

    const updateActiveThumbnail = (index) => {
        activeIndex = index;

        if (thumbCounter) {
            thumbCounter.textContent = `${activeIndex + 1}/${product.variants.length}`;
        }

        const thumbBtns = thumbnailsContainer ? thumbnailsContainer.querySelectorAll('.thumbnail-btn') : [];
        thumbBtns.forEach((btn, i) => {
            if (i === activeIndex) {
                btn.classList.remove('border-transparent');
                btn.classList.add('border-accent');
                btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                btn.classList.remove('border-accent');
                btn.classList.add('border-transparent');
            }
        });

        const selectedVariant = product.variants[activeIndex];
        if (selectedVariant && productMainImage) {
            productMainImage.src = selectedVariant.image;
        }

        if (colorSelector) {
            const swatchBtns = colorSelector.querySelectorAll('.color-swatch-btn');
            swatchBtns.forEach((b, i) => {
                if (i === activeIndex) {
                    b.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
                    if (activeColorText) {
                        activeColorText.textContent = b.getAttribute('data-color');
                    }
                } else {
                    b.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');
                }
            });
        }
    };

    if (thumbnailsContainer) {
        const thumbBtns = thumbnailsContainer.querySelectorAll('.thumbnail-btn');
        thumbBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                updateActiveThumbnail(i);
            });
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const nextIndex = (activeIndex - 1 + product.variants.length) % product.variants.length;
                updateActiveThumbnail(nextIndex);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const nextIndex = (activeIndex + 1) % product.variants.length;
                updateActiveThumbnail(nextIndex);
            });
        }
    }

    if (colorSelector && activeColorText) {
        const swatchBtns = colorSelector.querySelectorAll('.color-swatch-btn');
        swatchBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                updateActiveThumbnail(i);
            });
        });
    }

    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            const shareData = {
                title: product.name,
                text: `Check out ${product.name} at D&M!`,
                url: window.location.href,
            };
            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                } catch (err) {
                    console.error('Error sharing:', err);
                }
            } else {
                navigator.clipboard.writeText(window.location.href)
                    .then(() => alert('Link copied to clipboard!'))
                    .catch(() => alert('Failed to copy link.'));
            }
        });
    }
}
