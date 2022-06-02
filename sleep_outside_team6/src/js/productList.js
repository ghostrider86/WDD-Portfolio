import { renderListWithTemplate } from './utils.js';

export default class ProductList {
  constructor(category, listElement, datasource, template) {
    this.category = category;
    this.listElement = listElement;
    this.datasource = datasource;
    this.template = template;
    this.filterArray = [];
  }
  async init() {
    const list = await this.datasource.getData(this.category);
    renderListWithTemplate(
      this.template,
      this.listElement,
      list,
      this.prepareTemplate,
      this.filterList
    );
  }
  prepareTemplateOld(clone, product) {
    clone.querySelector('a').href += product.Id;
    clone.querySelector('img').src = product.Image;
    clone.querySelector('.card__brand').textContent = product.Brand.Name;
    clone.querySelector('.card__name').textContent = product.NameWithoutBrand;
    clone.querySelector('.product-card__price').textContent +=
      product.ListPrice;
    return clone;
  }
  prepareTemplate(clone, product) {
    clone.querySelector('a').href += product.Id;
    clone.querySelector('img').src = product.Images.PrimaryMedium;
    clone.querySelector('.card__brand').textContent = product.Brand.Name;
    clone.querySelector('.card__name').textContent = product.NameWithoutBrand;
    clone.querySelector(
      '.product-card__price'
    ).textContent += product.ListPrice.toFixed(2);
    return clone;
  }
  filterList(i, element, boolean, filterArray) {
    if (boolean != true) {
      let alreadyExists = false;
      if (i === element.NameWithoutBrand.substring(0, 3)) {
        alreadyExists = true;
        return alreadyExists;
      } else {
        filterArray.push(element.NameWithoutBrand.substring(0, 3));
        return alreadyExists;
      }
    } else {
      filterArray.push(element.NameWithoutBrand.substring(0, 3));
      return true;
    }
  }
}
