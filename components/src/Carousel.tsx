import { useEffect } from "react";

const Carousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="relative mt-6 items-center flex justify-center"
      data-twe-carousel-init
      data-twe-ride="carousel"  // Enables auto-slide
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[10%] mb-2 lg:mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators
      >
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="0"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="1"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="2"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="relative w-full Image-box overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden", backgroundImage: "url('/anh1.jpg')" }}
        >
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-3xl font-bold relative z-10">ITIS: NGÀY TRỞ VỀ</h5>
          </div>
          <div className="w-full h-full inset-0 absolute bg-gradient-to-t from-[#000000a0] to-transparent"></div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden", backgroundImage: "url('/anh2.jpg')" }}
        >
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-3xl font-bold relative z-10">BIGGAME ITIS</h5>
          </div>
          <div className="w-full h-full inset-0 absolute bg-gradient-to-t from-[#000000a0] to-transparent"></div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden", backgroundImage: "url('/anh3.jpg')" }}
        >
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-3xl font-bold relative z-10">ITIS CUP 2023</h5>
          </div>
          <div className="w-full h-full inset-0 absolute bg-gradient-to-t from-[#000000a0] to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
