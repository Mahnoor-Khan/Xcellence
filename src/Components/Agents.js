import fbIcon from "../Assets/fb-icon.svg";
import instaIcon from "../Assets/insta-icon.svg";
import linkedInIcon from "../Assets/linkedin-icon.svg";
import agentImg1 from "../Assets/agent-img-1.png";
import agentImg2 from "../Assets/agent-img-2.svg";
import agentImg3 from "../Assets/agent-img-3.png";
import agentImg4 from "../Assets/agaent-img-4.svg";
import rightArrowIcon from "../Assets/right-arrow-icon.svg";

function Agents() {
  const cards = [
    {
      name: "Devon Lane",
      location: "Lakeland, Florida",
      language: "English",
      img: agentImg1,
    },
    {
      name: "Devon Lane",
      location: "Lakeland, Florida",
      language: "English",
      img: agentImg2,
    },
    {
      name: "Devon Lane",
      location: "Lakeland, Florida",
      language: "English",
      img: agentImg3,
    },
    {
      name: "Devon Lane",
      location: "Lakeland, Florida",
      language: "English",
      img: agentImg4,
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-12 px-6 sm:px-12 md:px-20 py-32">
        <div className="flex flex-col gap-6">
          <p className="text-blue-400 font-plus-jakarta-sans text-16 font-normal font-bold leading-5">
            OUR TEAM
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <p className="w-full md:w-1/2 text-gray-900 font-plus-jakarta-sans  font-bold leading-7 text-3xl">
              Real Estate Renaissance: Our Agents
            </p>
            <p className="w-full md:w-1/2 text-[#5A6B82] font-plus-jakarta-sans text-lg leading-6">
              Meet the faces behind our success. Our agents, spread across
              Florida, from the sunny Keys to the northern bounds of
              Jacksonville and Pensacola, bring local expertise and a personal
              touch to your property journey. Discover the agents who resonate
              with your vision and let them guide you home. 
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
          {cards?.map((item) => (
            <div className="flex flex-col border border-[#f3f3f3] rounded-md">
              <img src={item.img} alt="agent" />
              <div className="flex flex-col gap-4 p-6">
                <div className="flex flex-col gap-3 pb-4 border-b border-[#F3F3F3]">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#232931] font-plus-jakarta-sans text-2xl font-bold">
                      {item.name}
                    </p>
                    <p className="text-[#5A6B82] font-plus-jakarta-sans text-xl">
                      {item.location}
                    </p>
                  </div>
                  <p className="text-[#7AB3DF] font-plus-jakarta-sans text-base">
                    {item.language}
                  </p>
                </div>
                <div className="flex justify-between gap-6 flex-wrap">
                  <div className="flex gap-4">
                    <img src={fbIcon} alt="social-media-icon" />
                    <img src={instaIcon} alt="social-media-icon" />
                    <img src={linkedInIcon} alt="social-media-icon" />
                  </div>
                  <div className="flex gap-1">
                    <p className="text-[#232931] font-plus-jakarta-sans text-base">
                      Visit Profile
                    </p>
                    <img src={rightArrowIcon} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="text-white font-plus-jakarta-sans text-base py-4 px-8 rounded-md bg-[#7AB3DF]">
            See All Agents
          </button>
        </div>
      </div>
    </>
  );
}

export default Agents;
