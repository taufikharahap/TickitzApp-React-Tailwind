import { useState, useEffect } from 'react';

const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  const handleIndicator = (index) => setCurr(index);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <div className="overflow-hidden relative mt-[70px] md:mt-0">
        <div
          className="w-fit flex transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${curr * 33.4}%)` }}
        >
          {slides}
        </div>

        {/* Indicator */}
        <div className="absolute bottom-5 left-0 right-0">
          <div className="flex items-center justify-center md:gap-3 gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`
                  transition-all h-[5px] md:h-[7px]
                  ${curr === i ? 'md:w-[43px] w-[25px] bg-[#1D4ED8] rounded-[20px]' : 'bg-white rounded-[50%] md:w-[7px] w-[5px]'}
                `}

                onClick={()=>{handleIndicator(i)}}
              ></button>
            ))}
          </div>
        </div>
        {/* prev and next */}
        <div className="absolute bottom-0 right-0 flex flex-row gap-x-3 hidden">
          <button
            onClick={prev}
            className="flex flex-row justify-center items-center w-[60px] h-[60px] border-2 border-brown rounded-full  rotate-180"
          >
            <span className="-mt-2 w-fit text-[30px] text-brown text-center">&#8594;</span>
          </button>
          <button
            onClick={next}
            className="flex flex-row justify-center items-center w-[60px] h-[60px] bg-brown rounded-full"
          >
            <span className="-mt-2 w-fit text-[30px] text-white text-center">&#8594;</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;