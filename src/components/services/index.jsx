import User from "../../assets/image/users.png";

function Services() {
  return (
    <div>
      <h2 className="text-center font-bold lg:text-3xl text-2xl text-white font-lato">
        Services
      </h2>
      <p className="text-center font-medium lg:text-lg text-sm text-[#959595] mt-2 font-lato">
        Lorem ipsum dolor sit amet consectetur.
        <br className="lg:hidden" /> Imperdiet convallis blandit felis ligula aliquam
      </p>

      <div className="flex justify-center lg:mt-14 mt-7">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[30px] mx-5 lg:mx-2 w-full max-w-[1200px]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-[#FFFFFF]/4 lg:p-7 p-4 text-center rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#00A0FA]/50"
            >
              <img src={User} alt="" className="w-9 h-9 mx-auto" />
              <h1 className="font-bold lg:text-2xl text-xl text-[#00A0FA] mt-3 font-lato">
                App Design
              </h1>
              <p className="font-medium text-sm text-[#959595] mt-5 mx-auto lg:w-60 font-lato">
                Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
                consectetur.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
