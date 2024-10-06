import { CONTACT } from "../utils/constants";
import headphone from "../utils/headphone.svg";

const Contact = () => {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="shadow-md p-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <h2 className="font-bold text-2xl font-serif mr-2">Contact</h2>
            <img src={headphone} className="w-8" alt="Headphone icon" />
          </div>
          <p className="my-2 font-serif text-gray-600 text-xs text-center">
            Got a question? We'd love to hear from you. Send us a message and we will try to get back to you ASAP.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <img src={CONTACT} alt="contact" className="w-full md:w-[400px] mb-4 md:mb-0" />
          <form className="border-2 w-full md:w-[40rem] p-8 mt-4 rounded-3xl mb-8 shadow-2xl shadow-gray-500">
            <div className="flex flex-col mb-4">
              <label className="text-sm font-bold font-serif mb-1">Name:</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="text-sm font-serif p-2 border border-gray-400 shadow-sm"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-sm font-bold font-serif mb-1">E-mail:</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="text-sm font-serif p-2 border border-gray-400 shadow-sm"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-sm font-bold font-serif mb-1">Message:</label>
              <textarea
                placeholder="Enter a message"
                className="text-sm font-serif p-2 border border-gray-400 shadow-sm h-24 resize-none"
              />
            </div>

            <div className="text-center">
              <button className="mx-auto bg-green-700 hover:bg-slate-700 text-sm text-white font-bold w-24 h-10 mt-7 shadow-md border-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
