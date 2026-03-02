function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Update selected flag + text when clicked
document.querySelectorAll('.dropdown-content a').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const btn = document.querySelector('.dropdown-btn');
    btn.innerHTML = this.innerHTML + ' <span class="arrow">&#9662;</span>';
    document.getElementById("dropdown").style.display = "none";
  });
});
// toggleDropdown();


  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');

  // create overlay if not present
  let overlay = document.getElementById('drawer-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'drawer-overlay';
    document.body.appendChild(overlay);
  }

  function openDrawer() {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    overlay.hidden = false;
    overlay.classList.add('show');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('show');
    setTimeout(() => overlay.hidden = true, 200);
  }

  hamburger.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Esc key close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });




// Product Data Array
const products = [
    { id: "19", price: "$10.30", desc: "T-shirts with multiple colors, for men", img: "assets/Layout/alibaba/Image/cloth/Bitmap.png" },
    { id: "20", price: "$10.30", desc: "Jeans shorts for men blue color", img: "assets/Layout/alibaba/Image/cloth/2 1.png" },
    { id: "21", price: "$12.50", desc: "Brown winter coat medium size", img: "assets/Layout/alibaba/Image/cloth/image 30.png" },
    { id: "22", price: "$34.00", desc: "Jeans bag for travel for men", img: "assets/Layout/alibaba/Image/cloth/image 24.png" },
    { id: "23", price: "$99.00", desc: "Leather wallet", img: "assets/Layout/alibaba/Image/cloth/image 26.png" },
    { id: "24", price: "$9.99", desc: "Canon camera black, 100x zoom", img: "assets/Layout/alibaba/Image/cloth/Bitmap (2).png" },
    { id: "25", price: "$8.99", desc: "Headset for gaming with mic", img: "assets/Layout/alibaba/Image/tech/image 86.png" },
    { id: "26", price: "$10.30", desc: "Smartwatch silver color modern", img: "assets/Image/tech/8.png" },
    { id: "27", price: "$10.30", desc: "Blue wallet for men leather material", img: "assets/Layout/alibaba/Image/interior/image 90.png" },
    { id: "28", price: "$80.95", desc: "Jeans bag for travel for men", img: "assets/Layout/alibaba/Image/tech/image 85.png" }
];

const Containerone = document.getElementById('grid-container');

// Function to render items
function displayProducts() {
    let htmlContent = "";
    
    products.forEach(item => {
        htmlContent += `
            <div class="product-card1">
                <div class="img-box">
                    <img src="${item.img}" alt="product">
                </div>
                <div>
                    <p class="price">${item.price}</p>
                    <p class="desc">${item.desc}</p>
                </div>
            </div>
        `;
    });

    Containerone.innerHTML = htmlContent;
}

// Call function on load
displayProducts();


//  product list
