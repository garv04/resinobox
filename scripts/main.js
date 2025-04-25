    // Display products with descriptions

function displayProducts(productType) {
    // Check if product-grid exists
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return; // Exit if product-grid is not found

    // Clear existing products before displaying new ones
    productGrid.innerHTML = '';

    // Necklace product data
    const necklaceProducts = [
        {
            name: "Gold Plated Anti-Tarnished Solid Heart Necklace",
            price: "Rs. 250",
            image: "images/necklaces/IMG_9435.JPG"
        },
        {
            name: "Flowerie Gold Plated Anti-Tarnished Necklace",
            price: "Rs. 250",
            image: "images/necklaces/IMG_9429.JPG"
        },
        {
            name: "Gold Plated Anti-Tarnished 11:11 Necklace",
            price: "Rs. 250",
            image: "images/necklaces/IMG_9426.JPG"
        },
        {
            name: "Open Heart Love Necklace",
            price: "Rs. 250",
            image: "images/necklaces/IMG_9439.JPG"
        },
        {
            name: "Valentina Anti-Tarnished Necklace",
            price: "Rs. 250",
            image: "images/necklaces/IMG_9436.JPG"
        },
        {
            name: "Clover Black Anti-Tarnished Gold Plated Necklace",
            price: "Rs. 250",
            image: "images/necklaces/IMG_9437.JPG"
        },
        {
            name: "Bow Anti-Tarnished Gold Plated Necklace",
            price: "Rs. 250",
            image: "images/necklaces/IMG_9467.jpg"
        },
        {
            name: "Gold Plated Anti-Tarnished Heart 11:11 Necklace",
            price: "Rs. 250",
            image: "images/necklaces/IMG_9427.JPG"
        },
        {
            name: "Amber Gold Plated Anti-Tarnished Necklace",
            price: "Rs. 250",
            image: "images/necklaces/IMG_9433.JPG"
        },
        {
            name: "Bow Snake Anti-Tarnished Necklace",
            price: "Rs. 250",
            image: "images/necklaces/IMG_9445.JPG"
        },
        {
            name: "White Flowerie Gold Plated Anti-Tarnish Necklace",
            price: "Rs. 250",
            image: "images/necklaces/IMG_9463.JPG"
        },
        {
            name: "Kara Anti-Tarnish Necklace",
            price: "Rs. 250",
            image: "images/necklaces/IMG_9465.jpg"
        },
        {
            name: "Luna Anti-Tarnished Gold Plated Necklace",
            price: "Rs. 250",
            image: "images/necklaces/IMG_9453.JPG"
        },
        {
            name: "Diam Gold Plated Anti-Tarnished Necklace",
            price: "Rs. 250",
            image: "images/necklaces/IMG_9428.JPG"
        },
    ];

    // Bracelet product data
    const braceletProducts = [
        {
            name: "Gold Plated Nail Bracelet",
            price: "Rs. 200 each",
            image: "images/bracelets/IMG_9430.JPG",
            description: "Anti-Tarnish Gold Plated Nail Bracelet for women"
        },
        {
            name: "Black & White Clover Bracelet",
            price: "Rs. 225 each",
            image: "images/bracelets/IMG_9441.JPG",
            description: "Stainless steel gold plated white and black anti-tarnish clover bracelet for girls and women"
        },
        {
            name: "Golden Clover Bracelet",
            price: "Rs. 225 each",
            image: "images/bracelets/IMG_9442.JPG",
            description: "Stainless steel gold plated golden anti-tarnish clover bracelet for girls and women"
        },
        {
            name: "Cartier Love Bracelet",
            price: "Rs. 180",
            image: "images/bracelets/IMG_9447.JPG",
            description: "Stainless steel contemporary gold plated love AD anti-tarnish bracelet for women"
        },
        {
            name: "Square Cut Cubic Tennis Bracelet",
            price: "Rs. 225",
            image: "images/bracelets/IMG_9449.PNG", // Placeholder image path
            description: "Silver plated square cut cubic zirconia white matrix anti tarnish tennis bracelet"
        },
        {
            name: "Round Cut Cubic Tennis Bracelet",
            price: "Rs. 200",
            image: "images/bracelets/IMG_9450.PNG", // Placeholder image path
            description: "Silver plated round cut cubic zirconia white anti tarnish tennis bracelet for women"
        },
        {
            name: "AD Studded Nail Bracelet",
            price: "Rs. 350",
            image: "images/bracelets/IMG_9475.PNG", // Placeholder image path
            description: "Stainless steel gold plated anti tarnish AD studded nail bracelet for women"
        },
        {
            name: "Korean Bracelet",
            price: "Rs. 300",
            image: "images/bracelets/IMG_9476.PNG", // Placeholder image path
            description: "Gold plated south Korean anti tarnish bracelet for women"
        },
        {
            name: "American Diamond",
            price: "Rs. 399",
            image: "images/bracelets/IMG_9477.PNG", // Placeholder image path
            description: "American diamond studded bangle style anti tarnish bracelet for women"
        },
        {
            name: "Silver Plated Nail Bracelet",
            price: "Rs. 200",
            image: "images/bracelets/IMG_9480.JPG", // Placeholder image path
            description: "Anti tarnish silver plated nail bracelet for women"
        },
        {
            name: "Butterfly bracelet",
            price: "Rs. 150",
            image: "images/bracelets/b1.jpg",
            description: "Gold plated anti tarnish butterfly charm bracelet chain for women and girls"
        },
        {
            name: "Mother of pearls clover",
            price: "Rs. 399",
            image: "images/bracelets/b2.jpg",
            description: "Gold plated anti tarnish mother of pearls clover bracelet"
        },
        {
            name: "Heart Themed Bracelet",
            price: "Rs. 200",
            image: "images/bracelets/b3.jpg",
            description: "Gold plated anti tarnish heart themed bracelet for woman"
        },
        {
            name: "Bangle Style Cuff",
            price: "Rs. 280",
            image: "images/bracelets/b4.jpg",
            description: "Gold plated anti tarnish bangle style cuff for woman"
        },
        {
            name: "Snake Chain Bracelet",
            price: "Rs. 210",
            image: "images/bracelets/b5.jpg",
            description: "Gold plated anti tarnish snake chain bracelet"
        },
        {
            name: "Thick Snake Chain Bracelet",
            price: "Rs. 250",
            image: "images/bracelets/b6.jpg",
            description: "Gold plated anti tarnish thick snake chain bracelet"
        },
        {
            name: "Silver Coin Bracelet",
            price: "Rs. 105",
            image: "images/bracelets/b7.jpg",
            description: "Silver plated anti tarnish coin bracelet for woman"
        },
        {
            name: "Cuff Bracelet",
            price: "Rs. 190",
            image: "images/bracelets/b8.jpg",
            description: "Gold plated party-statement anti tarnish cuff bracelet"
        }
    ];

    // Charm product data
    const charmProducts = [
        {
            name: "Heart Charm",
            price: "Rs. 150",
            image: "images/charms/IMG_2442.jpg"
        },
        {
            name: "Iris Charm",
            price: "Rs. 150",
            image: "images/charms/IMG_2443.jpg"
        },
        {
            name: "Opaque Charm",
            price: "Rs. 150",
            image: "images/charms/IMG_2444.jpg"
        },
        {
            name: "Heart-Shell Charm",
            price: "Rs. 150",
            image: "images/charms/IMG_2446.jpg"
        },
        {
            name: "Mini Saturn Charm",
            price: "Rs. 150",
            image: "images/charms/IMG_2447.jpg"
        },
        {
            name: "Pink Stone Charm",
            price: "Rs. 150",
            image: "images/charms/IMG_2451.jpg"
        },
        {
            name: "Blue-Heart Saturn Charm",
            price: "Rs. 150",
            image: "images/charms/IMG_2452.jpg"
        },
        {
            name: "Pink-Heart Saturn Charm",
            price: "Rs. 150",
            image: "images/charms/IMG_2453.jpg"
        }
    ];

    // Sets product data
    const setProducts = [
        {
            name: "Bow Themed Set 1",
            price: "Rs. 350",
            image: "images/sets/IMG1.jpg",
            description: "Gold plated anti-tarnish bow design necklace and earring set"
        },
        {
            name: "Bow Themed Set 2",
            price: "Rs. 400",
            image: "images/sets/IMG2.jpg",
            description: "Gold plated anti-tarnish bow design necklace and earring set"
        },
        {
            name: "Green clovered Set",
            price: "Rs. 600",
            image: "images/sets/IMG3.jpg",
            description: "Gold plated anti-tarnish green clovered design necklace, bracelet and earrings set"
        },
        {
            name: "White clovered Set",
            price: "Rs. 600",
            image: "images/sets/IMG4.jpg",
            description: "Gold plated anti-tarnish white clovered design necklace, bracelet and earrings set"
        },
        {
            name: "Gold clovered Set",
            price: "Rs. 600",
            image: "images/sets/IMG5.jpg",
            description: "Gold plated anti-tarnish gold clovered design necklace, bracelet and earrings set"
        },
        {
            name: "Black clovered Set",
            price: "Rs. 600",
            image: "images/sets/IMG6.jpg",
            description: "Gold plated anti-tarnish black clovered design necklace, bracelet and earrings set"
        }
    ];

    // Display products based on type
    if (productType === 'necklace') {
        necklaceProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;
            productGrid.appendChild(productItem);
        });
    } else if (productType === 'bracelet') { 
        // Display bracelet products

        braceletProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <p>${product.description}</p> <!-- Added description -->
            `;
            productGrid.appendChild(productItem);
        });
    } else if (productType === 'charm') { 
        // Display charm products

        charmProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;
            productGrid.appendChild(productItem);
        });
    } else if (productType === 'set') {
        // Display set products
        
        setProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <p>${product.description}</p>
            `;
            productGrid.appendChild(productItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'charms.html') {
        displayProducts('charm');
    } else if (currentPage === 'necklaces.html') {
        displayProducts('necklace');
    } else if (currentPage === 'bracelet.html') {
        displayProducts('bracelet');
    } else if (currentPage === 'sets.html') {
        displayProducts('set');
    }
});
