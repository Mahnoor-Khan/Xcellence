import tickIcon from "../Assets/tick-icon.svg";
import videoImg from "../Assets/Video-img.png";

function Experience() {
  return (
    <>
      <div className="flex flex-col gap-12 px-6 sm:px-12 md:px-20 py-32">
        <div className="flex flex-col lg:flex-row gap-20 justify-center items-center">
          <div className="flex flex-col gap-6">
            <p className="text-blue-400 font-plus-jakarta-sans text-16 font-normal font-bold leading-5">
              OUR ALL-IN-ONE PLATFORM
            </p>
            <h1 className="text-gray-900 font-plus-jakarta-sans  font-bold leading-7 text-3xl">
              Tech-Forward Real Estate Experience
            </h1>
            <p className="text-[#5A6B82] font-plus-jakarta-sans text-lg leading-6">
              Welcome to the future of real estate with cellence Realty. Our
              flagship products, the Excellence One app, and the Xcellence.com
              platform, are at the heart of our technological edge.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center border border-[#e9e9e9] rounded-md  p-6">
              <img src={tickIcon} alt="tick" />
              <p className="text-[#5A6B82] font-plus-jakarta-sans text-16 font-normal font-normal">
                A unified platform bringing together real estate, mortgage, and
                title services.
              </p>
            </div>
            <div className="flex gap-3 items-center border border-[#e9e9e9] rounded-md  p-6">
              <img src={tickIcon} alt="tick" />
              <p className="text-[#5A6B82] font-plus-jakarta-sans text-16 font-normal font-normal">
                Enhanced user experience that defies fragmentation.
              </p>
            </div>
            <div className="flex gap-3 items-center border border-[#e9e9e9] rounded-md  p-6">
              <img src={tickIcon} alt="tick" />
              <p className="text-[#5A6B82] font-plus-jakarta-sans text-16 font-normal font-normal">
                Dive deep into a world where every process, every step, and
                every transaction is interconnected, all under one family, one
                brand, and one experience.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
            <img src={videoImg} alt="video"/>
        </div>
      </div>
    </>
  );
}

export default Experience;
