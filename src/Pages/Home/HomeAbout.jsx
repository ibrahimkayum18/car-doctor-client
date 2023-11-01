import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'


const HomeAbout = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className='relative w-1/2 mr-10'>
        <img
          src={person}
          className="w-11/12 h-full rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="max-w-sm rounded-lg shadow-2xl absolute top-1/2 left-1/3 p-2 bg-white"
        />
        </div>
        <div className='w-1/2 space-y-8'>
            <h2 className="text-3xl font-bold text-orange-400">About Us</h2>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-2">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p>
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <button className="btn bg-[#FF3811] mr-6 hover:border-2 hover:text-[#FF3811] hover:border-[#FF3811] text-white hover:bg-transparent">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
