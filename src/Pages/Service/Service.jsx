import { useLoaderData, useParams } from "react-router-dom";
import ServiceBanner from "./ServiceBanner";
import RightService from "./RightService";
import Footer from "../../Components/Footer";

const Service = () => {
  const service = useLoaderData();
  console.log(service);
  const { _id, img, description, facility, title } = service || {};
  return (
    <div>
      <ServiceBanner></ServiceBanner>
      <div className="grid md:grid-cols-4 gap-5 mt-14">
        <div className="col-span-3">
          <img className="w-full rounded-lg" src={img} alt="" />
          <h2 className="text-4xl font-bold py-5">{title}</h2>
          <p className="text-[#737373]">{description}</p>

          <div className="grid grid-cols-2 gap-5 my-10">
            {facility.map((fac, index) => (
              <div
                key={index}
                className="p-10 bg-gray-200 rounded-lg border-t-2 border-orange-600"
              >
                <h2 className="text-2xl font-bold pb-4">{fac.name}</h2>
                <p className="text-xl">{fac.details}</p>
              </div>
            ))}
          </div>
          <p className="text-xl">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <div className="my-10">
            <h2 className="text-4xl font-bold pb-5">
              3 Simple Steps to Process
            </h2>
            <p className="text-xl">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text
            </p>
            <div className="grid grid-cols-3 gap-5 my-10">
              <div className="text-center space-y-3 p-7 border-2 rounded-lg">
                <div className="h-20 w-20 rounded-full mx-auto bg-[#63534b] flex items-center justify-center">
                  <div className="h-14 w-14 mx-auto bg-[#FF3811] rounded-full flex items-center justify-center">
                    <h2 className="font-bold text-3xl text-white">1</h2>
                  </div>
                </div>
                <h2 className="text-2xl font-bold">Step One</h2>
                <p className="text-xl">It uses a dictionary of over 200 .</p>
              </div>
              <div className="text-center space-y-3 p-7 border-2 rounded-lg">
                <div className="h-20 w-20 mx-auto rounded-full bg-[#913000] flex items-center justify-center">
                  <div className="h-14 w-14 mx-auto bg-[#FF3811] rounded-full flex items-center justify-center">
                    <h2 className="font-bold text-3xl text-white">2</h2>
                  </div>
                </div>
                <h2 className="text-2xl font-bold">Step Two</h2>
                <p className="text-xl">It uses a dictionary of over 200 .</p>
              </div>
              <div className="text-center space-y-3 p-7 border-2 rounded-lg">
                <div className="h-20 w-20 mx-auto rounded-full bg-[#913000] flex items-center justify-center">
                  <div className="h-14 w-14 mx-auto bg-[#FF3811] rounded-full flex items-center justify-center">
                    <h2 className="font-bold text-3xl text-white">1</h2>
                  </div>
                </div>
                <h2 className="text-2xl font-bold">Step Three</h2>
                <p className="text-xl">It uses a dictionary of over 200 .</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <RightService service={service}></RightService>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Service;
