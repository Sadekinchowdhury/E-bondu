

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero_data">
                    <div className="hero_img1">
                        <img className="it_logo" src="../assets/Image/hero_img.png" alt="" />
                        <div className="hero_user">
                            <p>Ours Visitors</p>
                            <br />
                            <div className="user">
                                <h4>oooo2</h4>
                            </div>
                        </div>
                    </div>
                    <div className="hero_img2">
                        {/* <div className="live"></div> */}
                        {/* <video autoPlay loop src="assets/Video/video_2.mp4"></video> */}
                        <img src="assets/Image/hero_img2.jpg" alt="img" />
                    </div>
                    <div className="hero_img1">
                        <img className="it_logo" src="assets/Image/hero_img.jpg" alt="img" />
                        <div className="hero_user">
                            <p>Total Members</p>
                            <br />
                            <div className="user">
                                <h4>oooo2</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <marquee>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum ex,
                    fugit enim amet laudantium laboriosam! Ad quisquam reiciendis error?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum ex,
                    fugit enim amet laudantium laboriosam! Ad quisquam reiciendis error?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum ex,
                    fugit enim amet laudantium laboriosam! Ad quisquam reiciendis error?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum ex,
                    fugit enim amet laudantium laboriosam! Ad quisquam reiciendis error?
                </marquee>
            </div>
        </section>
    );
};

export default HeroSection;
