import Slider from "react-slick";

function Carousel() {
    const images = [
        "/imatges/amposta2.jpg",
        "/imatges/amposta3.jpg",
        "/imatges/amposta4.jpg",
        "/imatges/amposta5.jpg",
        "/imatges/amposta6.jpg",
        "/imatges/amposta7.jpg",
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
    }

    return (
    <div className="carousel-photos">
        <Slider {...settings}>
        {images.map((image, index) => (
            <div key={index} className="slide">
                <img src={image} alt="slide"/>
            </div>
        ))}
    </Slider>
    </div>
    
  );
}

export default Carousel;
