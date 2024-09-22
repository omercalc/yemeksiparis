import "./Services.css";

const Services = () => {
  return (
    <div className="section">
        <h1 className="services-t-h1 ">NEDEN BİZ?</h1>
        <div className="services">
      <div className="ser-where">
        <div className="ser-text">
        <h1 className="ser-h1">GÜVENİLİR VE HİJYENİK...</h1>
        <p className="ser-p">
        Sadece paket servis hizmeti sunan restoranımızda, hijyen ve güvenilirlik en önemli önceliğimizdir. Siparişleriniz, gıda güvenliği standartlarına uygun olarak hazırlanır ve titizlikle paketlenir. Tazelik ve lezzeti koruyarak, temiz ve güvenli bir şekilde adresinize ulaştırıyoruz. Ev konforunda, gönül rahatlığıyla tüketebileceğiniz yemekler için bize güvenebilirsiniz!
        </p>
        <button className="h-t-btn bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          HAKKIMIZDA
        </button>
        </div>
        <div className="ser-image">
          <img src="../../hero-banner-1.png" alt="" />
        </div>
      </div>
      <div className="ser-where">
        <div className="ser-image">
          <img src="../../paket-servis.jpg" alt="" />
        </div>
        <div className="ser-text">
          <h1 className="ser-h1">HIZLI VE SICAK...</h1>
          <p className="ser-p">
          Restoranımızda, lezzetlerimizi en hızlı şekilde ve her zaman sıcacık teslim ediyoruz. Siparişleriniz, hazırlık aşamasından itibaren hızla işleme alınır ve taptaze şekilde kapınıza ulaştırılır. Özenle paketlenen yemeklerimiz, sıcaklıklarını koruyarak sofralarınıza gelir. Zamanında ve sıcak bir yemek deneyimi için her an yanınızdayız!
          </p>
          <button className="h-t-btn bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          SİPARİŞ VER
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;
