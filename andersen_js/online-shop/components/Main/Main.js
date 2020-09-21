class Main {
  render() {
    const HTML = `
              <div class="main__first">
                <h3 class='first__title'>Men's fashion</h3>
                <p class='first__descr'>Select your new perfect style. 
                  <br>Discover your personalization.</br>
                </p>
              </div>
              <div class="main__second">
                <h3 class='second__title'>Women's fashion</h3>
                <p class='first__descr'>Best autumn-winter 2020 collection ever!</p>
              </div>
              <div class="main__third">
                <h3 class='third__title'>Kid's fashion</h3>
                <p class='third__descr'>A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.</p>
              </div>
            `;

    ROOT_MAIN.innerHTML = HTML;
  }
}

let mainBlock = new Main;
mainBlock.render();
