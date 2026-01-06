import Carousel from "./Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  return (
    <section id="gallery" className="photos">
        <div className="photos-into">
            <p>
                In Amposta and the Ebre Delta, you will find a wide variety of natural and urban landscapes. 
                From the peaceful fields and rice paddies stretching to the Ebre River, 
                to the wetlands full of birds and wildlife, and the historic streets and monuments of the town. 
                <br/><br/>
                This carousel will allow you to explore the beauty and diversity of the surroundings that make this region a unique place to visit.
            </p>
        </div>
        <div className="carousel">
            <Carousel/>
        </div>
    </section>
  );
}

export default Gallery;