import logo from '../Assets/logo.svg';

function Footer() {
    const menus =[
        {
            heading: "Menu Title",
            menus: [
                {menu: "Menuu 01"},
                {menu: "Menuu 02"},
                {menu: "Menuu 03"},
                {menu: "Menuu 04"},
            ]
        },
        {
            heading: "Menu Title",
            menus: [
                {menu: "Menuu 01"},
                {menu: "Menuu 02"},
                {menu: "Menuu 03"},
                {menu: "Menuu 04"},
            ]
        },
        {
            heading: "Menu Title",
            menus: [
                {menu: "Menuu 01"},
                {menu: "Menuu 02"},
                {menu: "Menuu 03"},
                {menu: "Menuu 04"},
            ]
        },
    ]
    return(<>
    <div className="flex flex-col gap-12 px-6 sm:px-12 md:px-20 py-20 bg-[#141B20]">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center pb-12 border-b border-[#30363b]">
            <div className="flex flex-col gap-6">
                <img src={logo} alt="logo" className='w-56'/>
                <p className='max-w-md text-white text-opacity-50 font-plus-jakarta-sans text-base leading-8'>Faucibus et egestas eu est vulputate. Sodales tortor diam felis a vitae. Ultrices cras ut quisque auctor quis risus morbi at arcu.</p>
            </div>
            <div className='flex gap-8 flex-wrap'>
                {menus.map(item => (
                <div className='flex flex-col gap-4'>
                    <p className='text-white font-plus-jakarta-sans text-bold leading-8'>{item.heading}</p>
                    <div className='flex flex-col gap-2'>
                        {item.menus.map(innerItem => (
                            <p className='text-white text-opacity-50 font-plus-jakarta-sans text-base leading-8'>{innerItem.menu}</p>
                        ))}
                    </div>
                </div>

                ))}
            </div>
        </div>
        <div className='flex justify-between items-center gap-6 flex-wrap'>
        <p className='text-white text-opacity-50 font-plus-jakarta-sans text-base leading-8'>© Copyright 2023, Excellence</p>
        <div className='flex gap-6 flex-wrap'>
        <p className='text-white text-opacity-50 font-plus-jakarta-sans text-base leading-8'>Terms & Condition</p>
        <p className='text-white text-opacity-50 font-plus-jakarta-sans text-base leading-8'>Privacy Policy</p>
        </div>
        </div>
    </div>
    </>)
}

export default Footer;