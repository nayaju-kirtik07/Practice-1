import {
  Heart,
  BriefcaseBusiness,
  Croissant,
  Coffee,
  Utensils,
  Cake,
} from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="/">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/brands">
                  Brands
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/offers">
                  Offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/buying">
                  Buying Offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/gift">
                  Gifts
                </a>
              </li>
            </ul>

            {/* Search Bar and Icons */}
            <div className="d-flex align-items-center ms-auto">
              <form className="d-flex me-2" role="search">
                <input
                  className="form-control custom-input"
                  style={{ borderRadius: "20px" }}
                  type="search"
                  placeholder="Search on Kaffe codes"
                  aria-label="Search"
                />
              </form>
              <Heart className="nav-links like-emoji me-2" />
              <BriefcaseBusiness className="nav-links me-2" />
              <button className="btn btn-success nav-links sign-in-btn">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="below-nav">
        <ul className="below-nav-ul d-flex">
          <li className="items">
            {" "}
            <Croissant className="items-icon" size={64} color="brown" />
            <p className="items-name">Bakery</p>
          </li>

          <li className="items">
            <Coffee className="items-icon" size={64} color="brown" />
            <p className="items-name">Coffee</p>
          </li>

          <li className="items">
            <Coffee className="items-icon" size={64} color="brown" />
            <p className="items-name">Tea</p>
          </li>

          <li className="items">
            <Utensils className="items-icon" size={64} color="brown" />
            <p className="items-name">Utensils </p>
          </li>

          <li className="items">
            <Cake className="items-icon" size={64} color="brown" />
            <p className="items-name">Cake </p>
          </li>
          <li className="items">
            <Cake className="items-icon" size={64} color="brown" />
            <p className="items-name">Brownies</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
