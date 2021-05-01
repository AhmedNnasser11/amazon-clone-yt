import Product from "../Product/Product";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon Baner"
        />
        <div className="home__row">
          {/* Product */}
          <Product
            id="1"
            title="Lorem ipsum dolor sit amet consectetur adipisicing"
            price={29.99}
            image="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            rating={5}
          />
          <Product
            id="2"
            title="Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicing"
            price={29.99}
            image="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Lorem ipsum dolor sit amet consectetur adipisicing"
            price={29.99}
            image="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            rating={2}
          />
          <Product
            id="4"
            title="Lorem ipsum dolor sit amet consectetur adipisicing"
            price={29.99}
            image="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            rating={3}
          />
          <Product
            id="5"
            title="Lorem ipsum dolor sit amet consectetur adipisicing"
            price={29.99}
            image="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicing"
            price={29.99}
            image="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
