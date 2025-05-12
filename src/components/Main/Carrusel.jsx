const Carrusel = () => {
  return (
    <>
      <section id="slider" className="slider section dark-background">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide"
                style={{ backgroundImage: "url('/assets/img/post-slide-1.jpg')" }}
              >
                <div className="content">
                  <h2>
                    <a href="single-post.html">
                      The Best Homemade Masks for Face (keep the Pimples Away)
                    </a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem neque est mollitia! Beatae minima assumenda repellat
                    harum vero, officiis ipsam magnam obcaecati cumque maxime
                    inventore repudiandae quidem necessitatibus rem atque.
                  </p>
                </div>
              </div>

              <div
                className="swiper-slide"
                style={{ backgroundImage: "url('/assets/img/post-slide-2.jpg')" }}
              >
                <div className="content">
                  <h2>
                    <a href="single-post.html">
                      17 Pictures of Medium Length Hair in Layers That Will
                      Inspire Your New Haircut
                    </a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem neque est mollitia! Beatae minima assumenda repellat
                    harum vero, officiis ipsam magnam obcaecati cumque maxime
                    inventore repudiandae quidem necessitatibus rem atque.
                  </p>
                </div>
              </div>

              <div
                className="swiper-slide"
                style={{ backgroundImage: "url('/assets/img/post-slide-3.jpg')" }}
              >
                <div className="content">
                  <h2>
                    <a href="single-post.html">
                      13 Amazing Poems from Shel Silverstein with Valuable Life
                      Lessons
                    </a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem neque est mollitia! Beatae minima assumenda repellat
                    harum vero, officiis ipsam magnam obcaecati cumque maxime
                    inventore repudiandae quidem necessitatibus rem atque.
                  </p>
                </div>
              </div>

              <div
                className="swiper-slide"
                style={{ backgroundImage: "url('/assets/img/post-slide-4.jpg')" }}
              >
                <div className="content">
                  <h2>
                    <a href="single-post.html">
                      9 Half-up/half-down Hairstyles for Long and Medium Hair
                    </a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem neque est mollitia! Beatae minima assumenda repellat
                    harum vero, officiis ipsam magnam obcaecati cumque maxime
                    inventore repudiandae quidem necessitatibus rem atque.
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carrusel;
