const products = [
    { id: 1, title: "Pink and White Roses", price: "50 Euro", description: "Delicate and charming, pink roses symbolize grace, admiration, and joy. Their soft hue conveys heartfelt emotions, making them perfect for expressing gratitude, affection, or celebration.", image: "Images/pinkWhiteRoses.png" },
    { id: 2, title: "White Roses Bouquet", price: "70 Euro", description: "Symbolizing purity and elegance, white roses bring a sense of serenity and sophistication to any setting.", image: "Images/whiteRoses.png" },
    { id: 3, title: "Pink Peony Bouquet", price: "60 Euro", description: "Delicate and charming, pink peonies symbolize love, grace, and happiness. Their soft, lush petals bring a romantic and feminine touch to any bouquet or arrangement.", image: "Images/pinkPeony.png" },
    { id: 4, title: "Pink Tulips Bouquet", price: "55 Euro", description: "Elegant and cheerful, pink tulips represent affection, caring, and good wishes. Their vibrant and gentle color adds a fresh, perfect for expressing love and gratitude.", image: "Images/pinkTulips.png" }
];

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id")); 

if (!isNaN(id)) {
    const product = products.find(p => p.id === id);

    if (product) {
        const titleElem = document.getElementById("product-title");
        const priceElem = document.getElementById("product-price");
        const imgElem = document.getElementById("product-image");
        const descElem = document.getElementById("product-description");

        if (titleElem) titleElem.textContent = product.title;
        if (priceElem) priceElem.textContent = product.price;
        if (imgElem) imgElem.src = product.image;
        if (descElem) descElem.textContent = product.description;
    }
}

function generateCatalog(productsArray) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    productsArray.forEach((product) => {
        const col = document.createElement("div");
        col.classList.add("col-md-6");

        col.innerHTML = `
            <div class="product-item">
                <div class="product-img-wrapper">
                    <a href="product.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.title}" class="img-fluid">
                    </a>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.title}</h3>
                    <p class="product-price"> ${product.price}</p>
                    <button class="btn-order-outline" disabled>Order Now</button>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
}

generateCatalog(products);

// functie pentru incarcare componente (header/footer)
async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        const data = await response.text();

        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = data;
        }

    } catch (error) {
        console.error("Error loading component:", error);
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    // incarcam header si footer
    await loadComponent("header-placeholder", "header.html");
    await loadComponent("footer-placeholder", "footer.html");

    // fix pentru navbar fixed-top
    const navbar = document.querySelector(".navbar.fixed-top");
    if (navbar) {
        document.body.style.paddingTop = navbar.offsetHeight + "px";
    }

});