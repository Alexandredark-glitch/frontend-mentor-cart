# 🍰 Product List with Cart: State-Driven Architecture

A responsive, state-synchronized eCommerce interface. This project moves beyond simple DOM manipulation by implementing a centralized state management pattern, where the UI view layer strictly reflects the underlying data model (`cart` array).

### 🔗 Links
- **Live Demo URL:** https://alexandredark-glitch.github.io/frontend-mentor-cart
- **Source Code:** https://github.com/Alexandredark-glitch/frontend-mentor-cart

### 🛠️ Built With
<div align="left">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
</div>

### 🚀 Key Technical Highlights

- **Responsive Asset Management:** Utilized `window.matchMedia` listeners to dynamically toggle between high-fidelity desktop imagery and optimized mobile assets, ensuring strict performance-per-device ratios.
- **Synchronous View Reconciliation:** Orchestrated a state-driven pipeline where adding/removing items triggers a cascade of UI updates (Title count, Subtotal calculation, Cart list rendering), ensuring the View is always a direct projection of the State.
- **Semantic Dialog Implementation:** Leveraged the native HTML `<dialog>` element with `showModal()` to provide a polished, accessible checkout confirmation experience without relying on z-index hackery.
- **Event Delegation Patterns:** Implemented a single, high-level listener for the entire product list to handle complex interactions, significantly reducing memory overhead compared to binding individual listeners to every product button.
