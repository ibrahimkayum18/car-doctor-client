import { useEffect, useState } from "react";
import { FaArrowRight, FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const RightService = ({ service }) => {
  const { _id, price } = service || {};
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="">
      <div className="bg-gray-200 px-7 py-14 rounded-lg">
        <h2 className="text-3xl font-bold pb-5">Services</h2>
        <ul>
          {services.map((service) => (
            <li
              key={service._id}
              className="py-3 bg-white px-5 mb-2 rounded-lg font-bold"
            >
              <Link
                to={`/details/${service._id}`}
                className="flex justify-between"
              >
                {service.title} <FaArrowRight className="mt-1"></FaArrowRight>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5 bg-zinc-900 my-5 rounded-lg">
        <h2 className="text-3xl text-white font-bold pb-5">Download</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="">
              <span className="text-4xl text-white">
                <FaFile></FaFile>
              </span>
            </div>
            <div className="text-white">
              <h2 className="text-xl font-bold">Our Branches</h2>
              <p>Download</p>
            </div>
          </div>
          <div>
            <button className="bg-[#FF3811] text-white rounded-lg p-4">
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-3">
            <div className="">
              <span className="text-4xl text-white">
                <FaFile></FaFile>
              </span>
            </div>
            <div className="text-white">
              <h2 className="text-xl font-bold">Company Details</h2>
              <p>Download</p>
            </div>
          </div>
          <div>
            <button className="bg-[#FF3811] text-white rounded-lg p-4">
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
      </div>
      <div className="my-7 rounded-lg bg-zinc-900 text-white px-7 py-14">
        <img className="mx-auto" src={logo} alt="" />
        <p className="text-xl font-bold text-center mt-3">
          Need Help? We Are Here <br />
          To Help You
        </p>
        <div className="bg-white p-5 mt-5 rounded-lg relative">
          <h2 className="text-xl font-bold text-black text-center">
            <span className="text-[#FF3811]">Car Doctor</span> Special
          </h2>
          <p className="text-black pb-3 text-center font-bold">
            Sava up to <span className="text-[#FF3811]">60% OFF</span>
          </p>
          <Link>
            <button className="btn bg-[#FF3811] text-white absolute left-16 border-none">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>
      <div className="my-10 p-6">
        <h2 className="text-2xl text-center pb-5 font-bold">Price: ${price}</h2>
        <div className="text-center">
          <Link to={`/bookings/${_id}`}>
            <button className="btn bg-[#FF3811] text-white border-none">
              Purchase Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightService;
