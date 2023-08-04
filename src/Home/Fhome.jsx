

const FHome = () => {
  return (
    <section className="Fhome">
      <div className="fhome_img">
        <img src="../assets/Image/hero_img2.jpg" alt="img" />
      </div>
      <div className="container">
        <div className="ons_ceo">
          <div className="ceo_text Fhome_text">
            <p>
              Bondhu Foundation works as a safe and quick bridge between blood donors and receivers at need through internet.
              We are working to ensure the health care of the poor people of the society who cannot afford their own.
            </p>
          </div>
          <div className="ceo_img">
            <img src="../assets/Image/ceo.jpeg" alt="CEO Image" />
            <h4>MD:SHARIFUL ISLAM SHARIF</h4>
            <h4>CEO</h4>
          </div>
        </div>
        <br /><br />
        <br /><br />
        <div className="ons_ceo">
          <div className="ceo_img">
            <img src="../assets/Image/ceo.jpeg" alt="CEO Image" />
            <h4>MD:SHARIFUL ISLAM SHARIF</h4>
            <h4>CEO</h4>
          </div>
          <div className="ceo_text">
            <h1>What People Say</h1>
            <p>
              We are working to ensure the health care of the poor people of the society who cannot afford their own.
              Bondhu foundation is always there to help those people and to conduct various social activities.
            </p>
          </div>
        </div>

        {/* Our Partners */}
        <div className="Fhome_our">
          <h1>Our Partners</h1>
          <div className="add">
            <div className="add_slider">
              <div className="add_item"><a href="#"><img src="../assets/Image/hero_img2.jpg" alt="Logo" /></a></div>
              <div className="add_item"><a href="#"><img src="../assets/Image/hero_img2.jpg" alt="Logo" /></a></div>
              <div className="add_item"><a href="#"><img src="../assets/Image/hero_img2.jpg" alt="Logo" /></a></div>
              <div className="add_item"><a href="#"><img src="../assets/Image/hero_img2.jpg" alt="Logo" /></a></div>
              <div className="add_item"><a href="#"><img src="../assets/Image/hero_img2.jpg" alt="Logo" /></a></div>
              <div className="add_item"><a href="#"><img src="../assets/Image/hero_img2.jpg" alt="Logo" /></a></div>
            </div>
          </div>
        </div>
        {/* Our Partners end */}

        {/* 
        <div className="hero_data">
          <div className="hero_img1">
            <img src="../assets/Image/hero_img.png" alt="img" />
            <div className="hero_user">
              <div className="user">
                <h4>Ours Visitor's</h4>
              </div>
            </div>
          </div>
          <div className="hero_img2">
            <img src="../assets/Image/hero_img2.jpg" alt="img" />
            <marquee>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum ex,
              fugit enim amet laudantium laboriosam! Ad quisquam reiciendis error?
            </marquee>
          </div>
          <div className="hero_img1">
            <img src="../assets/Image/hero_img.png" alt="img" />
            <div className="hero_user">
              <div className="user">
                <h4>Total Member's</h4>
              </div>
            </div>
          </div>
        </div> 
        */}
      </div>
    </section>
  );
};

export default FHome;
