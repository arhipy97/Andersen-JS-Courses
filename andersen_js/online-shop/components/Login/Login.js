class Login {
  openModal() {
    event.preventDefault();
    ROOT_MODAL.classList.toggle('show');
    document.body.style.overflow = 'hidden';
  };

  closeModal() {
    ROOT_MODAL.classList.toggle('show');
    document.body.style.overflow = '';
  };

  appendSuccessAlert() {
    const icons = document.getElementById('header__login')
    const alert = document.createElement('div');
    alert.className = 'alert';
    alert.innerHTML = `Success!`;
    ROOT_HEADER.removeChild(icons);
    ROOT_HEADER.appendChild(alert);

    setTimeout(function(){ 
      ROOT_HEADER.removeChild(alert);
      ROOT_HEADER.appendChild(icons);
      headerBlock.switchLogIcon();
    }, 3000);
  };

  appendError(){
      const MODAL_ERROR = document.createElement('div');
      MODAL_ERROR.id = 'modal__error';
      const ERROR = document.createTextNode("Wrong login or password");
      const ELEM = document.getElementById("modal__content");
      MODAL_ERROR.appendChild(ERROR);
      ELEM.appendChild( MODAL_ERROR);
      setTimeout(() => ELEM.removeChild( MODAL_ERROR),1500);
  }

  login() {
    const USERNAME = document.getElementById('username').value;
    const PASSWORD = document.getElementById('password').value;
    
    for(let i = 0; i < Users.length; i++) {
      if(USERNAME == Users[i].username && PASSWORD == Users[i].password) {
        this.closeModal();
        localStorageUtil.putLogin();
        this.appendSuccessAlert();
        return
      };
    };
    this.appendError();
  };

  logout(){
    localStorageUtil.deleteLogin();
    headerBlock.switchLogIcon();
  };
};

const login = new Login();

