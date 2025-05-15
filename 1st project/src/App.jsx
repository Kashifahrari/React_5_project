import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <nav className="nav-bar">
          <div className="Logo">
            <img src="public\Images\brand_logo.png" alt="logo display" />
          </div>

          <ul className="nav-list">
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
          <button>Log in</button>
        </nav>

        <div className="container">
          <div className="text">
            <div className="h2headding">
              <h2>Your Feet</h2>
              <h2>Deserve</h2>
              <h2>The Best</h2>
            </div>

            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div className="shop-btn">
              <button>Shop Now</button>
              <button>Category</button>
            </div>
          </div>
          <div className="shoe-img">
            <img src="public\Images\shoe_image.png" alt="Nike " />
          </div>
        </div>
        <div className="footer">
          <img src="public\Images\shop.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default App;
