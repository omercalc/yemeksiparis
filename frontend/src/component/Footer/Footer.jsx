const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © 2024 My FAMILY Restaurant. Tüm hakları saklıdır.
        </p>
        <div className="mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-2"
          >
            Gizlilik Politikası
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-2"
          >
            Hizmet Şartları
          </a>
        </div>
        <div className="mt-4 space-x-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-facebook-fill text-2xl text-blue-600"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-fill text-2xl text-pink-500"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-twitter-fill text-2xl text-blue-400"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;