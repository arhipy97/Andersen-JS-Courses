class Info {
  constructor() {
    this.classNameActive = 'item__button_active';
    this.labelAdd = 'ADD TO BAG';
    this.lableRemove = 'REMOVE FROM THE BAG';
    this.currentSectionNumber;
  };

  handleClear() {
    event.preventDefault();
    ROOT_INFO.innerHTML = '';
    ROOT_MARKET.innerHTML = '';
    market.render();
    market.showTabContent(this.currentSectionNumber);
  };

  render(productId) {
    const productStore = localStorageUtil.getProducts();
    let HTML = '';

    for (let i = 0; i < Catalog.length; i++) {
      Catalog[i].forEach(({ id, img, name, price, descr }) => {
        let activeClass = '';
        let activeText = '';

        if (productStore.indexOf(id) === -1) {
          activeText = this.labelAdd;
        } else {
          activeClass = ' ' + this.classNameActive;
          activeText = this.lableRemove;
        };

        if (productId === id) {
          this.currentSectionNumber = i;
          HTML += `
                          <div class="info__container">
                            <div class="info__close" onclick="infoProductBlock.handleClear('${id}')">
                              &times;
                            </div>
                            <div class="info__item">
                              <div class="info__first">
                                <img class='info__img' src="${img}" alt="">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                              </div>
                              <div class="info__second">
                                <div class="info__title">${name}</div>
                                <div class="info__price">${price}</div>
                                <div class="info__desc">${descr}</div>
                                <button class="item__button${activeClass}" onclick="market.handleSetLocationStorage(this, '${productId}')">${activeText}
                                </button>
                              </div>
                            </div>
                          </div>
                        `;
        };
      });
    };
    
    ROOT_INFO.innerHTML = HTML;
    
  };
};

const infoProductBlock = new Info();

