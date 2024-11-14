import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div>
      <div className="bg-gray-800 px-2 md:px-8 py-12">
        
        {/* <YMaps query={{ apikey: "https://api-maps.yandex.ru/2.0/?coordorder=longlat&load=package.full&lang=ru-RU" }}>
  <div>
            <Map
              defaultState={{ center: [41.2995, 69.2401], zoom: 10 }}
              width="100%"
              height="500px"
            >
              <Placemark geometry={[41.2995, 69.2401]} />
            </Map>
          </div>
</YMaps> */}

      </div>
      <div className="bg-gray-800 py-4">
        <div className=" mx-auto max-w-[1100px] px-3">
        <div className="container mx-auto max-w-[1100px]">
          <ul className="flex flex-col md:flex-row justify-between gap-12 text-white">
            <li className="flex flex-col">
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <NavLink to="/about" className="mb-2 hover:underline">
                About Us
              </NavLink>
              <NavLink to="#" className="mb-2 hover:underline">
                Who We Are
              </NavLink>
              <NavLink to="/contact" className="hover:underline">
                Contact Us
              </NavLink>
            </li>
            <li className="flex flex-col">
              <h2 className="text-xl font-bold mb-4">Social Media</h2>
              <a href="#" className="mb-2 hover:underline">
                Facebook
              </a>
              <a href="#" className="mb-2 hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="flex flex-col">
              <h2 className="text-xl font-bold mb-4">Contact</h2>
              <p className="flex items-center gap-2 mb-4 text-sm w-[260px]">
                <CiLocationOn className="text-[#38afd0] text-xl " />
                </p>
              <p className="flex items-center gap-2 mb-4 text-sm">
                <CiLocationOn className="text-[#38afd0] text-xl" />
                603142, Нижегородская область, Нижний Новгород, ул. Дегтярева, 29
              </p>
              <a
                href="tel:+78312808446"
                className="flex items-center gap-2 mb-2 hover:underline"
              >
                <FaPhoneAlt className="text-[#38afd0] text-lg" />
                +7 831 280-84-46
              </a>
              <a
                href="mailto:izoflex@bk.ru"
                className="flex items-center gap-2 hover:underline"
              >
                <MdEmail className="text-[#38afd0] text-lg" />
                Email: izoflex@bk.ru
              </a>
            </li>
          </ul>
          <div className="block">
            <p className="text-white text-center mt-[70px]">© 2014 - 2024 Производственная компания ООО Изофлекс.</p>
            <a className="text-[#4f51c8] md:ml-[400px] text-center" href="#">Политика конфиденциальности</a>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
