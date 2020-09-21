class Market_Menu {
    render() {
        const HTML =  `
        <div class="market__header">
            <h3 class="header__title">NEW COLLECTION</h3>
            <div class="header__links">
            <a href="#" class="header_link tabheader__item tabheader__item_active" onclick="market.showTabContent(0)">Men's</a>
            <a href="#" class="header_link tabheader__item" onclick="market.showTabContent(1)">Women's</a>
            <a href="#" class="header_link tabheader__item" onclick="market.showTabContent(2)">Kid's</a>
        </div>
        </div>
        `;
        ROOT_MARKET_MENU.innerHTML = HTML;
        };
    }

const marketBar = new Market_Menu();
marketBar.render();