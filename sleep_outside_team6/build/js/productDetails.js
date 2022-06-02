import { setLocalStorage } from './utils.js';

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.products = {};
    this.dataSource = dataSource;
    this.i = localStorage.length;
  }

  async init() {
    this.products = await this.dataSource.findProductById(this.productId);
    document.querySelector('main').innerHTML = this.renderProductDetails(
      this.products
    );
    document
      .getElementById('addToCart')
      .addEventListener('click', this.addToCart.bind(this));
  }

  addToCart() {
    this.i += 1;
    setLocalStorage(localStorage.length, this.products);
  }

  renderProductDetails(product) {
    return `<section class="product-detail">
        <h3>${product.Brand.Name}</h3>
        <h2 class="divider">${product.Name}</h2>
        <img
          class="divider"
          src=${product.Images.PrimaryLarge}
          alt=${product.Name}
        />

        <p class="product-card__price">$${product.ListPrice.toFixed(2)}</p>
        <p class="product__color">${product.Colors[0].ColorName}</p>
        <p class="product__description">
        ${product.DescriptionHtmlSimple}
        </p>
        <div class="product-detail__add">
          <button id="addToCart" data-id="${
            this.productId
          }">Add to Cart</button>
        </div>
      </section>`;
  }
}
