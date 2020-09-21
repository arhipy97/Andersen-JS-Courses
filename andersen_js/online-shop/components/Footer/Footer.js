class Footer {
  render () {
    const HTML = `
                <div class="footer__contact">
                  <div class="footer__adress">
                    <i class="far fa-compass"></i>Minsk, Independence Square 24
                  </div>
                  <div class="footer__author">
                    <i class="fas fa-street-view"></i>Ксения Бойко
                  </div>
                  <div class="footer__author">
                    <i class="fas fa-street-view"></i>Степан Сукач
                  </div>
                  <div class="footer__author">
                    <i class="fas fa-street-view"></i>Кирилл Архипенко
                  </div>
                </div>
                <div class="footer__social">
                  <a href="https://vk.com" class="social__item">
                    <i class="fab fa-vk"></i>
                  </a>
                  <a href="https://twitter.com/home" class="social__item">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com" class="social__item">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com" class="social__item">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1068.1183134212731!2d30.523566374577957!3d50.45175801557968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5038fcefcf%3A0x60ffaf3012035f5d!2zRWxlcGhhbnQgU1BBINGB0LDQu9C-0L0g0YLQsNC50YHQutC-0LPQviDQvNCw0YHRgdCw0LbQsA!5e0!3m2!1sru!2sby!4v1599245345383!5m2!1sru!2sby" width="300" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="true" tabindex="0"></iframe>
              `;
              ROOT_FOOTER.innerHTML = HTML;
  }
} 

const footer = new Footer;
footer.render();



