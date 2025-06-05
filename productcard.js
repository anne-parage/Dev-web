
class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .product-card {
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          text-align:center;
          background-color: var(--bg-color);
          color: var(--text-color);
          border-radius: 8px;
          padding: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        img{
        width:200px;
        height:200px;
        object-fit:cover;
        border-radius:50%;
        }

        .produit{
        margin-top:10px;
        font-size:1rem;
        font-weight:bold;
        }

        .prix{
        margin-top:10px;
        font-size:1rem;
        font-weight:bold;
        }

        .description{
        margin-top:10px;
        font-size:1rem;
        font-weight:bold;
        }

        .product-card button {
          padding: 12px;
          background-color: grey;
          text-align: center;
          cursor: pointer;
          width: 100%;
          font-size: 18px;
        }

        .product-card button:hover {
          background-color:green;
          opacity: 0.8;
        }

      </style>

      <div class="product-card">
        <img >
        <p class="produit" ></p>
        <p class="prix" ></p>
        <p class="description"></p>
        <p><button>Add to cart</button></p>
      </div>
    `;

	}
  connectedCallback(){
    const name=this.getAttribute('produit');
    const imgsrc=this.getAttribute('image');
    const prix=this.getAttribute('prix');
    const description=this.getAttribute('description');

    const nameE=this.shadowRoot.querySelector('.produit');
    const imgsrcE=this.shadowRoot.querySelector('img');
    const prixE=this.shadowRoot.querySelector('.prix');
    const descriptionE=this.shadowRoot.querySelector('.description');



    nameE.textContent=name;
    prixE.textContent=prix;
    imgsrcE.src=imgsrc;
    imgsrcE.alt=name;
    descriptionE.textContent=description;



    this.shadowRoot.querySelector('button').addEventListener('click',()=>{
      this.dispatchEvent(new CustomEvent('add-to-cart',{
        detail:{name,prix},
        bubbles:true,
        composed:true
      }));
    });
  }
  
}
customElements.define('product-card', ProductCard);
