
const ContactH = () => {
    return (
        <div className="my-14 bg-[#151515] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 py-14 rounded-xl px-10"> 
            <div className="flex items-center gap-5">
                <div className='text-white'>
                    <img className="h-20" src="https://i.ibb.co/cbD0sDr/calender.png" alt="" />
                </div>
                <div className="text-white">
                    <p className="font-semibold">We are open monday-friday</p>
                    <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className='text-white'>
                    <img className="h-20 rounded-full" src="https://e7.pngegg.com/pngimages/759/922/png-clipart-telephone-logo-iphone-telephone-call-smartphone-phone-electronics-text.png" alt="" />
                </div>
                <div className="text-white">
                    <p className=" font-semibold">Have a question?</p>
                    <h2 className="text-2xl font-bold">+2546 251 2658</h2>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className='text-white'>
                    <img className="h-20 rounded-full" src="https://i.pinimg.com/originals/29/a4/83/29a4835ebb3c55469e760dfb72f8d04a.jpg" alt="" />
                </div>
                <div className="text-white">
                    <p className=" font-semibold">We are open monday-friday</p>
                    <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
                </div>
            </div>
        </div>
    );
};

export default ContactH;