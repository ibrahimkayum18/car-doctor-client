import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import ServiceBanner from "../Service/ServiceBanner";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const {price, title, _id, img} = service;
  console.log(service);

  const handleOrder = e => {
    e.preventDefault()
    const form = e.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const date = form.date.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    const order = {fname, lname, date,img,title, price, phone, email, message, service: _id}
    console.log(order)
    fetch('http://localhost:5000/booking', {
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
  }

  return (
    <div>
      <ServiceBanner></ServiceBanner>
      <div className="my-14 p-5 md:p-6 lg:p-10 bg-gray-200  rounded-lg">
        <h2 className="text-center text-3xl font-bold">Book Service: <span className="text-orange-600">{title}</span></h2>
        <form onSubmit={handleOrder} className="w-3/4 mx-auto py-10">
          <div className="md:flex items-center justify-center gap-6 w-full">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">First Name</span>
              </label>
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text font-bold">Last Name</span>
              </label>
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex items-center justify-center gap-6 w-full">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex items-center justify-center gap-6 w-full">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Phone</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user.email}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div>
          <div className="form-control  ">
              <label className="label">
                <span className="label-text font-bold">Message</span>
              </label>
              <textarea name="message" cols="30" rows="30" placeholder="Message"
                className="input input-bordered w-full h-32 p-5"></textarea>
             
            </div>
          </div>
          <button type="submit" className="w-full py-3 bg-[#FF3811] text-white rounded-lg mt-7 font-bold">Order Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
