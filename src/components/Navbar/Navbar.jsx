const Navbar = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a
          href="/"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          <img src="/assets/img/logoGrande.png" alt="" />
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/" className="active">
                Inicio
              </a>
            </li>
            <li>
              <a href="about.html">Nosotros</a>
            </li>
            <li>
              <a href="single-post.html">Relevante</a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Categorías</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="category.html">Category 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="category.html">Category 2</a>
                </li>
                <li>
                  <a href="category.html">Category 3</a>
                </li>
                <li>
                  <a href="category.html">Category 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contacto</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <div className="header-social-links">
          <a href="https://x.com/ElNarradordeMX" className="twitter" target="_blank">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100059998510945" className="facebook" target="_blank">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/narradordemexico" className="instagram" target="_blank">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@narradormexico" className="tiktok" target="_blank">
            <i className="bi bi-tiktok"></i>
          </a>
          <a href="https://www.youtube.com/@ElNarradordeM%C3%A9xico" className="youtube" target="_blank">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
