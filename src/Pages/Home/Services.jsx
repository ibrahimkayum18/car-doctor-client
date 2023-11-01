import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => {
        setServices(data);
    })
    },[])


    return (
        <div className="mt-10">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-500">Services</h3>
                <h2 className="text-4xl font-bold ">Our Services Area</h2>
                <p className="text-xl  text-gray-400">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    services.map(service => <ServiceCart
                    key={service._id}
                    service={service}
                    ></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;