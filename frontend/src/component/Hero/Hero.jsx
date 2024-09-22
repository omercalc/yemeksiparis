import Services from "../Services/Services";
import "./Hero.css";

const Hero = () => {
  return (

    <>
    <div className="hero">
      <div className="hero-text">
        <div className="hero-title">
          <h1 className="h-t-h1 text-shadow">HOŞGELDİNİZ</h1>
          <h2 className="h-t-h2 text-shadow">ELYSİAN RESTAURANT</h2>
        </div>
        <p className="h-t-p">En Lezzetli Yemekleri Burada Keşfedin...</p>
        <button className="h-t-btn bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          SİPARİŞ VER
        </button>
      </div>
      <div className="hero-img">
        <img src="../../hero.webp" alt="" />
      </div>
    </div>
    <Services />

    </>
  );
};

export default Hero;
