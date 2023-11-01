import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCart = ({ service }) => {
  const { img,_id, title, price } = service || {};
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt={title}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        
        <div className="flex justify-between items-center">
        <p className='text-xl font-bold text-orange-500'>Price: ${price}</p>
          <Link to={`/details/${_id}`}><button className="text-2xl text-orange-500"><FaArrowRight></FaArrowRight></button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
