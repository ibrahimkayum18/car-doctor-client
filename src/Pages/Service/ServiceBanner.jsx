


const ServiceBanner = () => {
  return (
    <div className="carousel w-full py-10">
      <div id="slide1" className="carousel-item relative w-full">
        <img src='https://i.ibb.co/JdBsh2h/checkout.png' className="w-full h-11/12" />
        <div className="absolute flex items-center h-full w-full rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="space-y-5 pl-8 md:pl-14 lg:pl-20 ">
            <h2 className="text-5xl font-bold text-white ">
              Service Details
            </h2>
            
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 top-full  left-[40%] ">
              <p className="text-white rounded-lg bg-[#FF3811] py-3 px-6">Home/Service Details</p>
            </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
