import pointIcon1 from "../Assets/point-icon-1.svg";
import pointIcon2 from "../Assets/point-icon-2.svg";
import pointIcon3 from "../Assets/point-icon-3.svg";
import pointIcon4 from "../Assets/point-icon-4.svg";
import pointIcon5 from "../Assets/point-icon-5.svg";

function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-20 justify-center items-center py-32 px-6 sm:px-12 md:px-20">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <p className="text-white font-plus-jakarta-sans text-6xl font-bold leading-32">
            The Path to Your Dream Home
          </p>
          <p className="text-[#bdc1c3] font-plus-jakarta-sans text-18 font-normal font-normal leading-6">
            Experience home buying with Excellence Realty like never before. As
            the pioneers of the integrated approach, we offer a seamless journey
            by unifying real estate, mortgage, and title services. With the
            Excellence One app or our website, you can:
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:w-1/2">
          <div className="flex gap-4 ">
            <div className="w-1/2 flex p-6 gap-3 rounded-lg justify-center items-center border border-[#707271] bg-[rgba(255, 255, 255, 0.06)] backdrop-blur-md">
              <img src={pointIcon1} alt="icon" />
              <p className="text-white font-plus-jakarta-sans text-16 font-normal font-normal leading-6">
                Search for properties effortlessly.
              </p>
            </div>
            <div className="w-1/2 flex p-6 gap-3 rounded-lg justify-center items-center border border-[#707271] bg-[rgba(255, 255, 255, 0.06)] backdrop-blur-md">
              <img src={pointIcon2} alt="icon" />
              <p className="text-white font-plus-jakarta-sans text-16 font-normal font-normal leading-6">
                Collaborate with your dedicated agent.
              </p>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="w-1/2 flex p-6 gap-3 rounded-lg justify-center items-center border border-[#707271] bg-[rgba(255, 255, 255, 0.06)] backdrop-blur-md">
              <img src={pointIcon3} alt="icon" />
              <p className="text-white font-plus-jakarta-sans text-16 font-normal font-normal leading-6">
                View all your transactions—real estate, mortgage, and title
              </p>
            </div>
            <div className="w-1/2 flex p-6 gap-3 rounded-lg justify-center items-center border border-[#707271] bg-[rgba(255, 255, 255, 0.06)] backdrop-blur-md">
              <img src={pointIcon4} alt="icon" className="w-6" />
              <p className="text-white font-plus-jakarta-sans text-16 font-normal font-normal leading-6">
                Apply for a mortgage in just a few taps.
              </p>
            </div>
          </div>
          <div className="flex p-6 gap-3 rounded-lg justify-center items-center border border-[#707271] bg-[rgba(255, 255, 255, 0.06)] backdrop-blur-md">
            <img src={pointIcon5} alt="icon" />
            <p className="text-white font-plus-jakarta-sans text-16 font-normal font-normal leading-6">
              Securely make your escrow deposit. Enjoy the simplification of the
              process, all under one family and one experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
