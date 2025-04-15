// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// DOM Elements
const mainProductImage = document.getElementById('mainProductImage');
const thumbnailImages = document.getElementById('thumbnailImages');
const productTitle = document.getElementById('productTitle');
const productPrice = document.getElementById('productPrice');
const productDescription = document.getElementById('productDescription');
const fullDescription = document.getElementById('fullDescription');
const colorOptionsContainer = document.getElementById('colorOptions');
const sizeSelectorContainer = document.getElementById('sizeSelectorContainer');
const productCategory = document.getElementById('productCategory');
const productSKU = document.getElementById('productSKU');
const addToCartBtn = document.querySelector('.product-details-container .add-to-cart');
const quantityInput = document.getElementById('quantity');
const plusBtn = document.querySelector('.quantity-btn.plus');
const minusBtn = document.querySelector('.quantity-btn.minus');
const tabs = document.querySelectorAll('.tabs li');
const tabContents = document.querySelectorAll('.tab-content');
const relatedProductsContainer = document.getElementById('relatedProducts');

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = totalItems;
    });
}

// Sample product data
const products = [
  {
  id: 1,
  SKU: "Tops Set _cot_100103",
  title: "Men's Casual T-Shirt",
  price: 228,
  originalPrice: 228,
  category: "t-shirts",
  image: "img/1.jpeg",
  images: [
  "img/1.jpeg",
  "img/1.jpeg",
  ],
  
  description: "Fabric – PolyCotton <br> Pattern – Colorblocked <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["white", "black", "gray"],
  sizes: ["S", "M", "L", "XL"]
  },
  
  {
  id: 2,
  title: "Full Sleeves Regular Fit Cotton T-Shirts",
  SKU: "Sleeves_cot_100303",
  price: 183,
  originalPrice: 183,
  category: "t-shirts",
  image: "img/16.jpeg",
  images: [
  "img/16.jpeg",
  "img/16.jpeg"
  ],
  
  description: "Fabric – Cotton <br> Pattern – Solid <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["blue", "red", "green"],
  sizes: ["S", "M", "L", "XL"]
  },
  
  {
  id: 3,
  SKU: "Tops_cot_100302",
  title: "Girls Multicolor Cotton Tops",
  price: 133,
  originalPrice: 133,
  category: "t-shirts",
  image: "img/18.jpeg",
  images: [
  "img/18.jpeg",
  "img/18.jpeg"
  ],
  description: "Fabric – Cotton <br> Pattern – Solid <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  sizes: ["S", "M", "L", "XL"]
  },
  
  // ... other t-shirts
  // Shirts
  
  {
  id: 5,
  SKU: "Tops Set _cot_100307",
  title: "Girls Top & Bottom Sets",
  price: 263,
  originalPrice: 263,
  category: "shirts",
  image: "img/3.jpeg",
  images: [
  "img/3.jpeg",
  "img/3.jpeg"
  ],
  description: "Fabric – Cotton <br> Pattern – Printed <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["white", "black"],
  sizes: ["S", "M", "L", "XL"]
  },
  
  
  
  
  
  {
  id: 7,
  SKU: "Tops Set _cot_100306",
  title: "Girls Top & Bottom Sets",
  price: 263,
  category: "shirts",
  image: "img/4.jpeg",
  images: [
  "img/4.jpeg",
  "img/4.jpeg"
  ],
  description: "Fabric – Cotton <br> Pattern – Solid <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["white", "blue", "gray"],
  sizes: ["S", "M", "L", "XL"]
  },
  
  {
  id: 8,
  SKU: "Short_cot_100301",
  title: "Trendy Boys & Girls Multicolor Cotton Shorts",
  price: 108,
  category: "shirts",
  image: "img/19.jpeg",
  images: [
  "img/19.jpeg",
  "img/19.jpeg"
  ],
  description: "Fabric – Cotton <br> Pattern – Solid <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["white", "blue", "gray"],
  sizes: ["S", "M", "L", "XL"]
  },
  
  {
  id: 9,
  SKU: "Shorts _cot._100201",
  title: "Modern Women Shorts",
  price: 152,
  category: "shirts",
  image: "img/111.jpeg",
  images: [
  "img/11.jpeg",
  "img/11.jpeg"
  ],
  description: "Fabric – Cotton Blend <br> Pattern – Printed <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["white", "blue", "gray"],
  sizes: ["S", "M", "L", "XL"]
  },
  
  {
  id: 10,
  SKU:"T-shirt _cot_100305",
  title: "Casual Kids T-Shirts",
  price: 118,
  category: "shirts",
  image: "img/13.jpeg",
  images: [
  "img/13.jpeg",
  "img/13.jpeg"
  ],
  description: "Fabric – Cotton <br> Pattern – Printed <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["white", "blue", "gray"],
  sizes: ["S", "M", "L", "XL"]
  },
  
  
  
  {
  id: 12,
  SKU: "T-shirt _cot_100304",
  title: "Casual Kids T-Shirts",
  price: 108,
  category: "shirts",
  image: "img/15.jpeg",
  images: [
  "img/15.jpeg",
  "img/15.jpeg"
  ],
  description: "Fabric – Cotton <br> Pattern – Solid <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["white", "blue", "gray"],
  sizes: ["S", "M", "L", "XL"]
  },
  
  {
  id: 19,
  SKU: "T-SHIRT_RND_100101",
  title: "Soccer Sports T shirt",
  price: 163,
  category: "shirts",
  image: "img/21.jpeg",
  images: [
  "img/21.jpeg",
  "img/21.jpeg"
  ],
  description: "Fabric – Cotton <br> Pattern – Solid <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["white", "blue", "gray"],
  sizes: ["S", "M", "L", "XL"]
  },
  
  {
  id: 20,
  SKU: "SOCKS_100101",
  title: "Socks For Kids",
  price: 67.99,
  category: "shirts",
  image: "img/20.jpeg",
  images: [
  "img/20.jpeg",
  "img/20.jpeg"
  ],
  description: "Fabric – Cotton <br> Pattern – Solid <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["white", "blue", "gray"],
  sizes: ["S", "M", "L", "XL"]
  },
  // Shirts
  // Lowers
  {
  id: 13,
  SKU: "Lower _Hojari._100105",
  title: "Track Pants for Men - Stylish Track Pants , Lower for Men’s ",
  price: 185,
  category: "lowers",
  image: "img/6.jpeg",
  images: [
  "img/9.jpeg",
  "img/9.jpeg"
  ],
  description: "Fabric – Cotton <br> Pattern – Solid <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["white", "blue", "gray"],
  sizes: ["S", "M", "L", "XL"]
  },
  
  {
  id: 14,
  SKU: "Lower _cot_100104",
  title: "Track Pants for Men - Stylish Track Pants , Lower for Men’s",
  price: 160,
  category: "lowers",
  image: "img/5.jpeg",
  images: [
  "img/5.jpeg",
  "img/5.jpeg"
  ],
  description: "Fabric – Cotton Blend <br> Pattern – Solid <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["white", "blue", "gray"],
  sizes: ["S", "M", "L", "XL"]
  },
  
  {
  id: 15,
  SKU: "Plazo _cot._100203",
  title: "Printed Palazzo Bottom Wear For Women And Girls ",
  price: 118,
  category: "lowers",
  image: "img/7.jpeg",
  images: [
  "img/7.jpeg",
  "img/7.jpeg"
  ],
  description: "Fabric – Cotton Blend <br> Pattern – Printed <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["white", "blue", "gray"],
  sizes: ["S", "M", "L", "XL"]
  },
  
  {
  id: 16,
  SKU: "Shorts _cot._100106",
  title: "Trendy Men Shorts",
  price: 108,
  category: "lowers",
  image: "img/12.jpeg",
  images: [
  "img/12.jpeg",
  "img/12.jpeg"
  ],
  description: "Fabric – Cotton Blend <br> Pattern – Solid <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["white", "blue", "gray"],
  sizes: ["S", "M", "L", "XL"]
  },
  
  
  
  {
  id: 17,
  SKU: "Plazo _cot._100202",
  title: "Printed Palazzo Bottom Wear For Women And Girls",
  price: 105,
  category: "lowers",
  image: "img/10.jpeg",
  images: [
  "img/10.jpeg",
  "img/10.jpeg"
  ],
  description: "Fabric – Cotton Blend <br> Pattern – Solid <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
  
  colors: ["white", "blue", "gray"],
  sizes: ["S", "M", "L", "XL"]
  },
  
  
   
  {
    id: 21,
    SKU: "Vest_cot_100102",
    title: "Men’s Innerwear Vests",
    price: 63,
    category: "pants",
    image: "img/17.jpeg",
    images: [
    "img/17.jpeg",
    "img/17.jpeg"
    ],
    description: "Fabric – Cotton <br> Pattern – Solid <br> <b> Sold by – Fashion Retail <br> Return Policy – Available ( As per our company policies ) </b>",
    
    colors: ["white", "blue", "gray"],
    sizes: ["S", "M", "L", "XL"]
    },



  ];

// Find the current product
const product = products.find(p => p.id === productId);

// Display product details
function displayProductDetails() {
    if (!product) {
        if (productTitle) productTitle.textContent = 'Product Not Found';
        if (addToCartBtn) {
            addToCartBtn.disabled = true;
            addToCartBtn.textContent = 'Unavailable';
        }
        return;
    }

    if (productTitle) productTitle.textContent = product.title;
    if (productPrice) productPrice.innerHTML = `₹${product.price.toFixed(2)}${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toFixed(2)}</span>` : ''}`;
    if (productDescription) productDescription.innerHTML = product.description;
    if (fullDescription) fullDescription.innerHTML = product.description;
    if (productCategory) productCategory.textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    if (productSKU) productSKU.textContent = product.SKU;

    // Product Images
    if (thumbnailImages && mainProductImage) {
        thumbnailImages.innerHTML = '';
        const productImages = product.images && product.images.length > 0 ? product.images : [product.image];

        productImages.forEach((imgSrc, index) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `${product.title} - View ${index + 1}`;

            if (index === 0) {
                img.classList.add('active');
                mainProductImage.src = imgSrc;
                mainProductImage.alt = product.title;
            }

            img.addEventListener('click', function() {
                mainProductImage.src = this.src;
                thumbnailImages.querySelectorAll('img').forEach(thumb => thumb.classList.remove('active'));
                this.classList.add('active');
            });

            thumbnailImages.appendChild(img);
        });
    }

    // Color Options
    if (colorOptionsContainer) {
       colorOptionsContainer.innerHTML = '';
        if (product.colors && product.colors.length > 0) {
            const colorLabel = document.createElement('p');
            colorLabel.textContent = 'Select Color:';
            colorOptionsContainer.appendChild(colorLabel);
            const colorsWrapper = document.createElement('div');
            colorsWrapper.className = 'color-swatches';

            product.colors.forEach((color, index) => {
                const colorOption = document.createElement('div');
                colorOption.className = `color-option ${index === 0 ? 'selected' : ''}`;
                colorOption.style.backgroundColor = color;
                colorOption.dataset.color = color;
                colorOption.title = color.charAt(0).toUpperCase() + color.slice(1);

                colorOption.addEventListener('click', function() {
                    colorOptionsContainer.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                });

                colorsWrapper.appendChild(colorOption);
            });
            colorOptionsContainer.appendChild(colorsWrapper);
        } else {
         colorOptionsContainer.style.display = 'none';
        }
    }

    // Size Options
    if (sizeSelectorContainer) {
        sizeSelectorContainer.innerHTML = '';
        if (product.sizes && product.sizes.length > 0) {
            const sizeLabel = document.createElement('label');
            sizeLabel.htmlFor = 'size';
            sizeLabel.textContent = 'Select Size:';

            const sizeSelect = document.createElement('select');
            sizeSelect.id = 'size';
            sizeSelect.name = 'size';

            product.sizes.forEach(size => {
                const option = document.createElement('option');
                option.value = size;
                option.textContent = size;
                sizeSelect.appendChild(option);
            });

            sizeSelectorContainer.appendChild(sizeLabel);
            sizeSelectorContainer.appendChild(sizeSelect);
            sizeSelectorContainer.style.display = '';
        } else {
             sizeSelectorContainer.style.display = 'none';
        }
    }

    // Related Products
    const related = products.filter(p => p.category === product.category && p.id !== product.id);
    displayRelatedProducts(related);
}

function displayRelatedProducts(relatedProductsArray) {
    if (!relatedProductsContainer) return;

    relatedProductsContainer.innerHTML = '';

    relatedProductsArray.slice(0, 4).forEach(relatedProd => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${relatedProd.image}" alt="${relatedProd.title}">
                ${relatedProd.originalPrice ? '<div class="product-badge">Sale</div>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${relatedProd.title}</h3>
                <div class="product-price">
                    ₹${relatedProd.price.toFixed(2)}
                    ${relatedProd.originalPrice ? `<span class="original-price">₹${relatedProd.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="btn add-to-cart-related" data-id="${relatedProd.id}">Add to Cart</button>
                    <a href="product.html?id=${relatedProd.id}" class="btn view-details">View Details</a>
                </div>
            </div>
        `;
        relatedProductsContainer.appendChild(productCard);
    });

    relatedProductsContainer.querySelectorAll('.add-to-cart-related').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const relatedProductId = parseInt(this.getAttribute('data-id'));
            const relatedProductToAdd = products.find(p => p.id === relatedProductId);
            if (relatedProductToAdd) {
                addToCart(relatedProductToAdd, 1, null, null, true);
            }
        });
    });
}

// FIXED: Add to Cart Function with proper size handling
function addToCart(productToAdd, quantity = 1, color = null, size = null, isFromRelated = false) {
    if (!productToAdd) {
        console.error("Attempted to add invalid product to cart.");
        return;
    }

    let selectedColor;
    let selectedSize;

    if (isFromRelated) {
        selectedColor = (productToAdd.colors && productToAdd.colors.length > 0) ? productToAdd.colors[0] : 'default';
        selectedSize = (productToAdd.sizes && productToAdd.sizes.length > 0) ? productToAdd.sizes[0] : 'N/A';
    } else {
        const selectedColorElement = document.querySelector('.color-option.selected');
        selectedColor = selectedColorElement ? selectedColorElement.dataset.color : 
                     (productToAdd.colors && productToAdd.colors.length > 0) ? productToAdd.colors[0] : 'default';
        
        // FIXED: Properly get selected size from dropdown
        const sizeSelect = document.getElementById('size');
        selectedSize = size || (sizeSelect ? sizeSelect.value : 
                     (productToAdd.sizes && productToAdd.sizes.length > 0) ? productToAdd.sizes[0] : 'N/A');
    }

    quantity = Math.max(1, parseInt(quantity));

    const existingItemIndex = cart.findIndex(item =>
        item.id === productToAdd.id &&
        item.color === selectedColor &&
        item.size === selectedSize
    );

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            id: productToAdd.id,
            title: productToAdd.title,
            price: productToAdd.price,
            image: productToAdd.image,
            quantity: quantity,
            color: selectedColor,
            size: selectedSize // Now correctly stores selected size
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${quantity} × ${productToAdd.title} (Size: ${selectedSize}) added to cart`);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }, 10);
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    displayProductDetails();
    updateCartCount();

    if (!product) {
        console.warn("Product is not loaded, skipping related event listener setup.");
        return;
    }

    // Quantity Controls
    if (plusBtn && minusBtn && quantityInput) {
        plusBtn.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityInput.value);
            quantityInput.value = currentQuantity + 1;
        });

        minusBtn.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityInput.value);
            if (currentQuantity > 1) {
                quantityInput.value = currentQuantity - 1;
            }
        });
    }

    // FIXED: Main Add to Cart Button with proper size selection
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const quantity = parseInt(quantityInput.value) || 1;
            
            // Get selected size from dropdown
            const sizeSelect = document.getElementById('size');
            const selectedSize =  sizeSelect.value;
            
            // Get selected color
            const selectedColorElement = document.querySelector('.color-option.selected');
            const selectedColor = selectedColorElement ? selectedColorElement.dataset.color : null;
            
            addToCart(product, quantity, selectedColor, selectedSize);
        });
    }

    // Tabs
    if (tabs.length > 0 && tabContents.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.dataset.tab;

                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                this.classList.add('active');
                const targetContent = document.getElementById(tabId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // Review Form
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your review!');
            this.reset();

            const stars = reviewForm.querySelectorAll('.rating-input i');
            if (stars.length > 0) {
                stars.forEach(star => {
                    star.classList.remove('fas');
                    star.classList.add('far');
                });
            }
        });

        // Star Rating
        const ratingStars = reviewForm.querySelectorAll('.rating-input i');
        if (ratingStars.length > 0) {
            ratingStars.forEach(star => {
                star.addEventListener('click', function() {
                    const rating = parseInt(this.dataset.rating);
                    ratingStars.forEach((s, index) => {
                        if (index < rating) {
                            s.classList.remove('far');
                            s.classList.add('fas');
                        } else {
                            s.classList.remove('fas');
                            s.classList.add('far');
                        }
                    });
                });
            });
        }
    }
});
