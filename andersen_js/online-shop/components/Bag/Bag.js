class Bag {
  constructor(){
    this.sumCatalog = 0;
  };

  handleClear() {
    ROOT_BAG.innerHTML = '';
  	document.body.style.overflow = '';
  };

  render() {
    document.body.style.overflow = 'hidden';
    const productStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    this.sumCatalog = 0;

    for (let i = 0; i < Catalog.length; i++) {
      Catalog[i].forEach(({ id, img, name, price }) => {
        if (productStore.indexOf(id) !== -1) {
          htmlCatalog += `
                    			<tr>
                            <td class="bag-element__name">${name} :</td>
                            <td class="bag-element__price">${price}</td>
                        	</tr>
                    		`;
          this.sumCatalog += Number(price.slice(2));
        };
    	});
  	};

    const html = `
            			<div class="bag__container">
                		<div class="bag__close" onclick="shoppingBag.handleClear()">&times;</div>
                		<table class='table'>${htmlCatalog}
                    	<tr>
                        <td class="bag-element__name">TOTAL PAYABLE :</td>
                        <td class="bag-element__price">$ ${this.sumCatalog.toFixed(2)} <span class="transfer"></span></td>
                    	</tr>
                		</table>
                		<button class="buy__button" onclick="shoppingBag.checkLoginBeforeBuy()">BUY ALL NOW!</button>
            			</div>
        				`;
    ROOT_BAG.innerHTML = html;
    this.converter();
  }

  converter() {
    async function getUSD(usdValue) {
      let response = await fetch('https://openexchangerates.org/api/latest.json?app_id=48e71f3994df4ccfabc60f51925ad763');
      let content = await response.json();
      const transfer = document.querySelector('.transfer');
      transfer.innerHTML = `/ € ${(usdValue * content.rates.EUR).toFixed(2)}`
		};
		
    getUSD(this.sumCatalog);
  }
    
    checkLoginBeforeBuy() {
        if (localStorage.getItem("isLogin") !== "true") {
            login.openModal();
        } else {
            localStorageUtil.clearProductArray();
            shoppingBag.handleClear()
            ROOT_MARKET.innerHTML = '';
            market.render();
            market.showTabContent();
            headerBlock.render(localStorageUtil.getProducts().length);
        }
        
    }
}

const shoppingBag = new Bag();
