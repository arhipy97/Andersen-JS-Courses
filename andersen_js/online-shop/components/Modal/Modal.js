const MODAL = `
               <div class="modal__dialog">
                  <div class="modal__content" id="modal__content">
                     <form action="#">
                        <div data-close class="modal__close" onclick="login.closeModal()">&times;</div>
                        <div class="modal__title">Log in to your account!</div>
                        <input required placeholder="Account name" name="name" type="text" class="modal__input" id="username">
                        <input required placeholder="Password" name="password" type="password" class="modal__input" id="password">
                        <a href="#" class="btn" onclick="login.login()">Go shoping!</a>
                     </form>
                  </div>
               </div>
            `;

ROOT_MODAL.innerHTML = MODAL;
