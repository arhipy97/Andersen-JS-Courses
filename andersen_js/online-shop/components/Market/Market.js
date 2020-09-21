class Market {
  constructor() {
    this.classNameActive = 'item__button_active';
    this.labelAdd = 'ADD TO BAG';
    this.lableRemove = 'REMOVE FROM THE BAG';
  };

  handleSetLocationStorage(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);
    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.lableRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    };

    headerBlock.render(products.length);
  };

  handleOpenInfoProductPage(id) {
    event.preventDefault();
    infoProductBlock.render(id);
    // document.body.style.overflow = "hidden";
  };

  render() {
    document.body.style.overflow = "";
    const productStore = localStorageUtil.getProducts();

    for (let i = 0; i < Catalog.length; i++) {
      let HTML = '';

      Catalog[i].forEach(({ id, img, name, price }) => {
        let activeClass = '';
        let activeText = '';

        if (productStore.indexOf(id) === -1) {
          activeText = this.labelAdd;
        } else {
          activeClass = ' ' + this.classNameActive;
          activeText = this.lableRemove;
        }

        HTML += `
                  <div class="market__items">
                  <li class="products-element">
                      <a class="market__item" href="#" onclick="market.handleOpenInfoProductPage('${id}')">
                          <img class='item__img' src="${img}" alt="">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <div class="item__title">${name}</div>
                          <div class="item__price">${price}</div>
                      </a>
                      <button class="item__button${activeClass}" onclick="market.handleSetLocationStorage(this, '${id}')">
                          ${activeText}
                      </button>
                  </li>
                  </div>
                `;
      });

      const MARKET = `
        <div class="market__collection">
          <div class="market__container">${HTML}</div>
        </div>
      `;
      ROOT_MARKET.innerHTML += MARKET;
    }
  }

  hideTabContent() {
    const tabsContent = document.querySelectorAll('.market__collection');
    const tabs = document.querySelectorAll('.tabheader__item');

    tabsContent.forEach((item) => {
      item.classList.remove('show');
      item.classList.add('hidden');
    });
      
    tabs.forEach((item) => {
      item.classList.remove('tabheader__item_active');
    });
  };
        
  showTabContent(i = 0) {
    
    const tabsContent = document.querySelectorAll('.market__collection');
    const tabs = document.querySelectorAll('.tabheader__item');
    this.hideTabContent(tabs, tabsContent);
    tabsContent[i].classList.add('show');
    tabs[i].classList.add('tabheader__item_active'); 
    event.preventDefault();
  };

};

const market = new Market();
market.render();
market.showTabContent();




