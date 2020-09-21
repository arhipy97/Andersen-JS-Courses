class LocalStorageUtil {
  constructor() {
    this.keyName = 'products';
  };

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    return productsLocalStorage !== null ? JSON.parse(productsLocalStorage):[];
  };

  putProducts(id) {
    let products = this.getProducts();
    let pushProduct = false;
    const index = products.indexOf(id);

    if (index === -1) {
      products.push(id);
      pushProduct = true;
    } else {
      products.splice(index, 1);
    };

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return { pushProduct, products };
  };

  clearProductArray() {
    const products = [];
    localStorage.setItem(this.keyName, JSON.stringify(products));
  };

  putLogin() {
    localStorage.setItem("isLogin", true);
  };

  deleteLogin() {
    localStorage.setItem("isLogin", false);
  };
};

const localStorageUtil = new LocalStorageUtil();

