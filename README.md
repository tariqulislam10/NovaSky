# 🚀 NovaSky Landing Page Clone

A modern and responsive **NovaSky landing page clone** recreated from a provided website screenshot using **HTML5, Tailwind CSS, and Vanilla JavaScript**.

The main goal of this project was to practice **pixel-focused UI recreation, responsive design, Tailwind CSS, semantic HTML, and modern frontend development**.

---

## 🌐 Live Preview

🔗 https://novasky-web.vercel.app/

---

## 📸 Preview

<img width="1920" height="3213" alt="Image" src="https://github.com/user-attachments/assets/1563eab7-658e-4dbe-80fb-e0a6cfd86bba" />

---

## ✨ Features

- 🎨 Screenshot-based UI recreation
- 📱 Fully responsive design
- 🧭 Responsive navigation
- 🍔 Mobile hamburger menu
- 🏔️ Hero section with background image
- 🔵 Modern CTA buttons
- 💳 Responsive pricing cards
- ⭐ Popular plan highlight
- 📡 5G network feature section
- 📍 Nationwide coverage section
- 📞 Unlimited calls & SMS section
- ❌ No-contract feature
- 📲 eSIM service card
- 🏢 Business service card
- 🎧 Support service card
- 🦶 Responsive footer
- ✨ Hover effects
- 🔗 Smooth scrolling
- ♿ Basic accessibility support

---

## 🛠️ Technologies Used

- **HTML5**
- **Tailwind CSS**
- **JavaScript ES6+**
- **CSS3**
- **Tailwind CSS CLI**
- **Google Fonts**
- **SVG Icons**

---

## 📂 Project Structure

```text
NovaSky-Landing-Page/
│
├── node_modules/
│
├── src/
│   │
│   ├── assets/
│   │   ├── logo.png
│   │   ├── hero.png
│   │
│   ├── input.css
│   |── output.css
|   |__ script.js
|
├── index.html
|__.gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🎨 Design

The website uses a dark blue telecommunications-inspired design with bright blue and cyan accents.

### Color Palette

| Purpose         | Color     |
| --------------- | --------- |
| Main Background | `#00183c` |
| Card Background | `#0d2548` |
| Primary Blue    | `#39a1fd` |
| Accent Cyan     | `#3fd0fc` |
| Main Text       | `#ffffff` |

### Typography

The project uses:

**Poppins**

with different font weights for headings, navigation, pricing, buttons, and body content.

---

## 🧩 Page Sections

### 1. Navigation

The navigation includes:

- NovaSky logo
- Home
- Plans
- Business
- Coverage
- Help
- My Account
- Mobile navigation menu

---

### 2. Hero Section

The hero section contains the main headline:

> **Connect higher.**

Along with:

- Short description
- Explore Our Plans CTA
- Activate an eSIM CTA
- Mountain background image
- Dark gradient overlay

---

### 3. Pricing Plans

The landing page contains three pricing plans.

#### NovaSky One

**CHF 24.90/month**

- 25 GB in 5G Switzerland
- Unlimited calls within Switzerland
- Unlimited SMS within Switzerland
- Hotspot included
- No commitment

#### NovaSky Plus

**CHF 39.90/month**

- 80 GB in 5G Switzerland & EU
- Unlimited calls within Switzerland
- Unlimited SMS within Switzerland & EU
- Hotspot included
- EU roaming included
- No commitment

⭐ **Popular Plan**

#### NovaSky Max

**CHF 59.90/month**

- 150 GB in 5G Switzerland
- Unlimited calls within Switzerland
- Unlimited SMS within Switzerland & EU
- Worldwide roaming
- Priority network

---

## 📡 Key Features

The page highlights four main benefits:

### Ultra-Fast 5G Network

Enjoy a fast and reliable connection wherever you are.

### Nationwide Coverage

Reliable, high-performance coverage across Switzerland.

### Unlimited Calls & SMS

Stay connected with family and friends without limits.

### No Contract

No long-term commitment. Cancel whenever you want.

---

## 📲 Services

The landing page includes four service cards:

### eSIM

Activate your plan instantly without needing a physical SIM.

### Coverage

Check where NovaSky provides coverage across Switzerland.

### Business

Flexible mobile solutions for teams and companies.

### Support

Customer support to help users throughout the week.

---

## 📱 Responsive Design

The website is optimized for:

- 📱 Mobile
- 📱 Tablet
- 💻 Laptop
- 🖥️ Desktop
- 🖥️ Large screens

Tailwind responsive utilities are used to adapt the layout across different screen sizes.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/tariqulislam10/NovaSky.git
```

### 2. Navigate into the project

```bash
cd novasky
```

### 3. Install dependencies

```bash
npm install
```

---

## 🚀 Development

Start Tailwind CSS in watch mode:

```bash
npm run dev
```

Tailwind will watch the project files and automatically generate:

```text
src/output.css
```

from:

```text
src/input.css
```

You can then open:

```text
src/index.html
```

using VS Code Live Server or another local development server.

---

## 📦 Production Build

To generate a minified production CSS file:

```bash
npm run build
```

---

## 🧠 JavaScript

JavaScript is intentionally kept minimal.

The main JavaScript functionality is the responsive mobile navigation menu.

The project uses modern JavaScript such as:

```javascript
const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));

  mobileMenu.classList.toggle("hidden");
});
```

No JavaScript framework is used.

---

## ♿ Accessibility

The project follows basic accessibility practices:

- Semantic HTML5 elements
- Proper heading hierarchy
- Accessible buttons
- Descriptive image `alt` attributes
- Keyboard-friendly navigation
- `aria-expanded` for mobile navigation
- Responsive text and layouts
- Appropriate color contrast

---

## 🎯 What I Practiced

Through this project, I practiced:

- HTML5 semantic structure
- Tailwind CSS
- Tailwind CLI
- Responsive web design
- CSS Grid
- Flexbox
- Mobile-first development
- Navigation design
- Hero section design
- Pricing card layouts
- Image overlays
- Typography hierarchy
- SVG icons
- UI spacing
- Hover states
- Basic accessibility
- Vanilla JavaScript
- Screenshot-based website recreation

---

## 👨‍💻 Author

### Tariqul Islam

**Web Developer / Frontend Developer**

- GitHub: https://github.com/tariqulislam10
- LinkedIn: https://linkedin.com/in/tariqulislam10

---

## 📄 Disclaimer

This project was created for **educational and frontend development practice purposes** based on a provided visual reference.

It is not affiliated with or endorsed by the original NovaSky brand.

---

## ⭐ Show Your Support

If you found this project useful or interesting, consider giving it a ⭐ on GitHub!
