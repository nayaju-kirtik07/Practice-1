import { ChevronLeft , ChevronRight } from 'lucide-react';

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="first active d-flex gap-3"
            data-bs-interval="10000"
          >
            <div className="slider-1">
              <div className="slider-1-content contents ">
                <p className="heading">Bakery Products</p>
                <p className="discount">Up to 15% 0ff</p>
                <button className="explore-btn">Explore</button>
              </div>
            </div>
            <div className="slider-2">
              <div className="slider-2-content contents">
                <p className="heading">Bakery Products</p>
                <p className="discount">Up to 15% 0ff</p>
                <button className="explore-btn">Explore</button>
              </div>
            </div>
            <div className="slider-3">
              <div className="slider-3-content contents">
                <p className="heading">Bakery Products</p>
                <p className="discount">Up to 15% 0ff</p>
                <button className="explore-btn">Explore</button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          < ChevronLeft className='prev-icon' size={44} color='black'/>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <ChevronRight className='next-icon' size={44} color='black' />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
