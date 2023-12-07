import homeJourneryImg from '../Assets/home-journery-img.png';
import tickIcon from '../Assets/tick-icon.svg';

function HomeJourney(){
    return(<>
    <div className="flex flex-col lg:flex-row gap-12 px-6 sm:px-12 md:px-20 py-32 bg-[#F8FBFD]">
        <div className='flex flex-col gap-12 lg:w-1/2'>
            <div className='flex flex-col gap-6'>
                <p className='text-blue-400 font-plus-jakarta-sans text-16 font-normal font-bold leading-5'>WHAT WE OFFER YOU</p>
                <h1 className='text-gray-900 font-plus-jakarta-sans  font-bold leading-7 text-3xl'>Seamless Home Journey</h1>
                <p className='text-[#5A6B82] font-plus-jakarta-sans text-lg leading-6'>Maximize the visibility of your property with Excellence Realty. As members of 23 realtor associations throughout Florida, our reach is unparalleled.</p>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-3 items-center border border-[#e9e9e9] rounded-md bg-[#F8FBFD] p-6'>
                    <img src={tickIcon} alt="tick"/>
                    <p className='text-[#5A6B82] font-plus-jakarta-sans text-16 font-normal font-normal'>Listings syndicated to major portals like Zillow, Realtor.com, Trulia, Homes.com, and more.</p>
                </div>
                <div className='flex gap-3 items-center border border-[#e9e9e9] rounded-md bg-[#F8FBFD] p-6'>
                    <img src={tickIcon} alt="tick"/>
                    <p className='text-[#5A6B82] font-plus-jakarta-sans text-16 font-normal font-normal'>Experience the power of the MLS, ensuring your property gets the exposure it deserves.</p>
                </div>
                <div className='flex gap-3 items-center border border-[#e9e9e9] rounded-md bg-[#F8FBFD] p-6'>
                    <img src={tickIcon} alt="tick"/>
                    <p className='text-[#5A6B82] font-plus-jakarta-sans text-16 font-normal font-normal'>Rely on the expertise of licensed realtors who've successfully closed over 30,000 sales in the last 18 years. Trust in a process that brings the best offers to your doorstep.</p>
                </div>
            </div>
        </div>
        <div className='lg:w-1/2'>
        <img src={homeJourneryImg} alt="homeJournery"/>
        </div>
    </div>
    </>)
}

export default HomeJourney;