import ExternalServices from './externalServices.js';
import { alertMessage } from './utils.js';

export default class Admin {
  constructor() {
    this.token = null;
    this.services = new ExternalServices();
    // sers up the main element
    this.mainElement = document.getElementById('adminMain');
  }

  async login(creds, next) {
    try {
      this.token = await this.services.loginRequest(creds);
      next();
    } catch (err) {
      alertMessage(err.message.message);
    }
  }

  showLogin() {
    const formAdmin = `
            <form class="soForm" id="adminForm"">
                <fieldset>
                    <legend>Login</legend>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="name@email.com" autocomplete='username' value="user1@email.com">
                    <br>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password"  autocomplete='current-password' placeholder="password" value='user1'>
                    <br>
                    <input type="submit" id="login" value="Sign In">
                </fieldset>
            </form>
        `;

    document.getElementById('adminMain').innerHTML = formAdmin;

    document.getElementById('login').addEventListener('click', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      this.login({ email, password }, this.getOrders.bind(this));
    });

  }

  async getOrders() {
    try {
      const orderTable = await this.services.orderRequest(this.token);
      this.mainElement.innerHTML = this.getHtml();
      const parent = document.getElementById('tableBody');
      parent.innerHTML = this.orderTableMaker(orderTable);
    } catch (err) {
      //console.log(err);
    }
  }

  orderHtml() {
    return `
        <table id="orderTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>#Items</th>
                    <th>Total</th>
                </tr>
            </thead>
        </table> `;
  }

  orderTableMaker(orders) {
    const orderData = orders;
    const table = document.getElementById('orderTable');

    for (let i = 0; i < orderData.length; i++) {
      let container = document.createElement('tr');
      let id = document.createElement('td');
      let name = document.createElement('td');
      let date = document.createElement('td');
      let items = document.createElement('td');
      let total = document.createElement('td');

      let orderDate = new Date(orderData[i].orderDate).toLocaleDateString(
        'en-US'
      );

      if (orderData[i].items === undefined) {
        this.length = 0;
      } else {
        this.length = orderData[i].items.length;
      }

      let orderTotal = orderData[i].orderTotal;

      id.innerHTML = orderData[i].id;
      name.innerHTML = orderData[i].fname;
      date.innerHTML = orderDate;
      items.innerHTML = this.length;
      total.innerHTML = `$${Number(orderTotal).toFixed(2)}`;

      container.appendChild(id);
      container.appendChild(name);
      container.appendChild(date);
      container.appendChild(items);
      container.appendChild(total);

      table.appendChild(container);
    }
  }
}

let admin = new Admin();
admin.showLogin();
