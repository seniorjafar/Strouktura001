import React from 'react';
import { Carousel } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import Img from "../../assets/image/kub.jpeg";
import Icon from "../../assets/icon/text.svg";
import Safari from "../../assets/image/safari.jpeg";
import Moon from "../../assets/image/moon.jpeg";
import Wood from "../../assets/image/wood.jpeg";

const theme = {
  carousel: {
    defaultProps: {
      prevArrow: ({ loop, handlePrev, firstIndex }) => {
        return (
          <button
            onClick={handlePrev}
            disabled={!loop && firstIndex}
            className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
          >
            <ChevronLeftIcon strokeWidth={3} className="-ml-1 h-7 w-7" />
          </button>
        );
      },
      nextArrow: ({ loop, handleNext, lastIndex }) => (
        <button
          onClick={handleNext}
          disabled={!loop && lastIndex}
          className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
        >
          <ChevronRightIcon strokeWidth={3} className="ml-1 h-7 w-7" />
        </button>
      ),
      navigation: ({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                activeIndex === i ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      ),
      autoplay: false,
      autoplayDelay: 5000,
      transition: {
        type: "tween",
        duration: 0.5,
      },
      loop: false,
      className: "",
    },
    styles: {
      base: {
        carousel: {
          position: "relative",
          width: "w-full",
          height: "h-96",
          overflowX: "overflow-x-hidden",
          display: "flex",
        },
 
        slide: {
          width: "w-full",
          height: "h-96",
          display: "inline-block",
          flex: "flex-none",
        },
      },
    },
  },
};

const Hero = ({ img, title, text, description }) => (
  <div className="max-w-md mx-auto mb-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl dark:bg-gray-800">
    <div className="md:flex ">
      <div className="md:shrink-0">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src={img} alt="" />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline dark:text-white">{text}</a>
        <p className="mt-2 text-slate-500 dark:text-slate-400">{description}</p>
      </div>
    </div>
  </div>
);

const Card = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
    <div>
      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
        <img className="h-6 w-6" src={icon} alt="" />
      </span>
    </div>
    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
      {description}
    </p>
  </div>
);

export const Home = () => {
  // Carousel 
  const carousels = [
    {
      img: Safari
    },
    {
      img: Moon
    },
    {
      img: Wood
    }

  ];

  // Heros
  const heros = [
    {
      img: Img,
      title: 'Company retreats',
      text: 'Incredible accommodation for your team',
      description: 'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.'
    },
    {
      img: Img,
      title: 'Company retreats',
      text: 'Incredible accommodation for your team',
      description: 'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.'
    }
  ];

  // Cards data
  const cards = [
    {
      icon: Icon,
      title: 'Writes Upside-Down',
      description: 'The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.'
    },
    {
      icon: Icon,
      title: 'Writes Upside-Down',
      description: 'The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.'
    },
    {
      icon: Icon,
      title: 'Writes Upside-Down',
      description: 'The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.'
    },
    {
      icon: Icon,
      title: 'Writes Upside-Down',
      description: 'The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.'
    }
  ];



  // Language
  const { t, i18n } = useTranslation();

  return (
    <div className='p-3'>
      {/* language */}
      {/* <h1>{t('Section')}</h1> */}

      {/* carousel */}
      <section className='container-xl my-4'>
        <Carousel className="rounded-xl h-96" navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
           )}>
            {carousels.map((carousel, index) => (
              <div key={index} className="relative">
                <img
                  src={carousel.img}
                  alt="carousel image"
                  className="h-96 w-full object-cover"
                />
              </div>
            ))}
        </Carousel>
      </section>

      {/* hero */}
      <section className='container-xl xl:flex'>
        {heros.map((hero, i) => (
          <Hero key={i} img={hero.img} title={hero.title} text={hero.text} description={hero.description} />
        ))}
      </section>
      
      {/* cards data */}
      <section className="container-xl grid gap-4 sm:grid-cols-1 md:grid-cols-2 2lg:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} description={card.description} />
        ))}
      </section>
      <section>
        
      </section>

        
      
    </div>
  );
};
