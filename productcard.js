class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .product-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: var(--bg-color);
          color: var(--text-color);
          border-radius: 8px;
          padding: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        ::slotted(img) {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 50%;
        }

        ::slotted(.produit) {
          margin-top: 10px;
          font-size: 1rem;
          font-weight: bold;
        }

        ::slotted(.prix) {
          margin-top: 10px;
          font-size: 1rem;
          font-weight: bold;
        }

        ::slotted(.description) {
          margin-top: 10px;
          font-size: 1rem;
          font-weight: bold;
        }

        ::slotted(button) {
          padding: 12px;
          background-color: grey;
          text-align: center;
          cursor: pointer;
          width: 100%;
          font-size: 18px;
        }

        ::slotted(button:hover) {
          background-color: green;
          opacity: 0.8;
        }
      </style>

      <div class="product-card">
        <slot name="image"></slot>
        <slot name="produit"></slot>
        <slot name="prix"></slot>
        <slot name="description"></slot>
        <slot name="button"></slot>
      </div>
    `;
  }

connectedCallback() {
    const buttonSlot = this.shadowRoot.querySelector('slot[name="button"]');
    buttonSlot.addEventListener('slotchange', () => {
      const button = buttonSlot.assignedElements()[0];
      if (button) {
        button.addEventListener('click', () => {
          const productName = this.querySelector('[slot="produit"]').textContent.trim();

          const event = new CustomEvent('add-to-cart', {
            detail: { name: this.normalizeName(productName) },
            bubbles: true,
            composed: true,
          });

          this.dispatchEvent(event);
        });
      }
    });
  }

  normalizeName(name) {
    if (name.includes('Stitch')) return 'T-shirt stitch';
    if (name.includes('Casque')) return 'Casque';
    return name;
  }
}

customElements.define('product-card', ProductCard);