import ExternalServices from './externalServices';
import ProductDetails from './productDetails';
import { getParams } from './utils.js';

const dataSource = new ExternalServices('tents');

const productId = getParams('product');

const product = new ProductDetails(productId, dataSource);
product.init();

