import { useLoaderData } from "react-router-dom";
import person from '../../assets/icons/person.svg'

const Booked = () => {
  const bookings = useLoaderData();
  console.log('All bookings',bookings);

  const handleUpdate = _id => {
    console.log(_id)
  }


  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              Delete
            </th>
            <th>Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Price</th>
            <th>Confirm</th>
          </tr>
        </thead>
        <tbody>
          {
            bookings.map(book => <tr key={book._id}>
                <th className="h-28">
                  <button className="btn btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        <img
                          src={book?.img ? book.img : person}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{book.fname +" "+ book.lname}</div>
                      <div className="text-sm opacity-50">Bangladesh</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{book.title}</p>
                </td>
                <td>
                  <p>{book.date}</p>
                </td>
                <td>{'$'+ book.price}</td>
                <th>
                  <button onClick={() => handleUpdate(book._id)} className="btn bg-red-500 text-white hover:text-black btn-xs">Confirm Order</button>
                </th>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default Booked;
