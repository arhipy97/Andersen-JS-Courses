class Header {
  handleOpenShoppingPage() {
    event.preventDefault();
    shoppingBag.render();
  }

  switchLogIcon() {
    if (localStorage.getItem("isLogin") !== "true") {
        document.getElementById("header__login--link").classList.remove('hidden');
        document.getElementById("header__logout--link").classList.add('hidden');
      } else {
        document.getElementById("header__login--link").classList.add('hidden');
        document.getElementById("header__logout--link").classList.remove('hidden');
      }
  };

  scrollToContent(el, sectionNumber) {
    event.preventDefault();
    const BLOCK = el.getAttribute("href").slice(1);
    document.getElementById(BLOCK).scrollIntoView({
      behavior: 'smooth',
      BLOCK: 'start',
    });
    market.showTabContent(sectionNumber)
  }

  render(count) {
    const HTML = `  <div class='header__logo'>
                      <a href="#" class="header__link">ASHION</a>
                    </div>
                      <nav class="header__nav">
                        <a class="header__nav--link nav__scroll" href="#market" onclick="headerBlock.scrollToContent(this,0)">MEN'S</a>
                        <a class="header__nav--link nav__scroll" href="#market" onclick="headerBlock.scrollToContent(this,1)">WOMEN'S</a>
                        <a class="header__nav--link nav__scroll" href="#market" onclick="headerBlock.scrollToContent(this,2)">KID'S</a>
                        <a class="header__nav--link" href="#footer" onclick="headerBlock.scrollToContent(this)">CONTACT</a>
                      </nav>
                    <div class="header__login" id="header__login">
                        <a href="#" class="header__logout--link" id="header__logout--link" onclick="login.logout()">
                           <i class="fa fa-sign-out-alt fa-lg" aria-hidden="true"></i>
                        </a>
                        <a data-modal href="#" class="header__login--link" id="header__login--link" onclick="login.openModal()">
                           <i class="fa fa-sign-in" aria-hidden="true"></i>
                        </a>
                        <a href="#" class="header__login--link" onclick="headerBlock.handleOpenShoppingPage()">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                           ${count}
                        </a>
                    </div>`;
      ROOT_HEADER.innerHTML = HTML;
      this.switchLogIcon();
  }
}

const headerBlock = new Header();

headerBlock.render(localStorageUtil.getProducts().length);