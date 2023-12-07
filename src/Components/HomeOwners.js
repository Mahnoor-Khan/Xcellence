import homeOwnerImg1 from "../Assets/homeowner-img-1.png";
import homeOwnerImg2 from "../Assets/homeowner-img-2.png";
import homeOwnerImg3 from "../Assets/homeowner-img-3.png";
import startIcon from "../Assets/star-icon.svg";

function HomeOwners() {
  const cards = [
    {
      name: "Mark Oscar",
      designation: "Customer",
      description:
        "“ Xcellence helped me find my new home quickly. It's easy to use, and the property listings are detailed. It made house hunting a breeze! “",
      time: "2 Days ago",
      rate: "4.8",
      img: homeOwnerImg1,
    },
    {
      name: "Lisa Lee",
      designation: "Customer",
      description:
        "“ Selling my home was super easy with Xcellence’s services. Creating listings and tracking buyers was simple. I highly recommend it! “",
      time: "2 Days ago",
      rate: "4.8",
      img: homeOwnerImg2,
    },
    {
      name: "Sarah Cornor",
      designation: "Customer",
      description:
        "“ We're new to town, and Xcellence made our home search easy. Neighborhood info, virtual tours, and saved favorites were super helpful! “",
      time: "2 Days ago",
      rate: "4.8",
      img: homeOwnerImg3,
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-12 px-6 sm:px-12 md:px-20 py-32 bg-[#F8FBFD]">
        <div className="flex flex-col gap-6 justify-center items-center">
          <p className="text-blue-400 font-plus-jakarta-sans text-16 font-normal font-bold leading-5 text-center">
            TESTIMONIALS
          </p>
          <h1 className="text-gray-900 font-plus-jakarta-sans  font-bold leading-7 text-3xl text-center">
            Praise from Our Proud Homeowners
          </h1>
          <p className="text-[#5A6B82] font-plus-jakarta-sans text-lg leading-6 text-center">
            Hear from our satisfied clients who've experienced the Excellence
            difference. With years of service, we've transformed the real estate
            journey for countless homeowners. Dive into their stories, feel
            their joy, and discover why we are the trusted choice for many. 
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          {cards?.map((item) => (
            <div className="flex flex-col gap-6 p-6 bg-white rounded-md">
              <div className="flex flex-col">
                <div className="flex gap-4">
                  <img src={item.img} alt="homeOwner" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[#232931] font-plus-jakarta-sans text-16 font-normal font-bold">
                      {item.name}
                    </p>
                    <p className="text-[#5A6B82] font-plus-jakarta-sans text-14 font-normal">
                      {item.designation}
                    </p>
                  </div>
                </div>
                <p className="text-[#232931] font-plus-jakarta-sans text-18 font-normal leading-6 py-6 border-b border-[#EDEDED]">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-between gap-6">
                <p className="text-[#5A6B82] text-ellipsis font-plus-jakarta-sans text-base font-normal">
                  {item.time}
                </p>
                <p className="text-gray-900 font-plus-jakarta-sans text-base font-semibold flex gap-1">
                  <img src={startIcon} alt="star" />
                  {item.rate}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="text-white font-plus-jakarta-sans text-base py-4 px-8 rounded-md bg-[#7AB3DF]">
            See More Reviews
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeOwners;
