import { React, useState } from "react";
import { IoMdText } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import Contact from "/contact.svg";
function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setMessage(e.target[2].value);

    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
  };
  return (
    <div className="container mx-auto">
      <div className="p-8">
        <h1 className="font-bold text-6xl ">CONTACT US</h1>
        <p className=" text-gray-500 font-serif mt-10 ">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>
        <div className="mt-10  flex items-center md:justify-start">
          <div className="left w-1/2">
            <div className="flex gap-10 w-full">
              <button className="md:flex items-center gap-4 text-white px-10 py-2 rounded-md bg-black ">
                <span>
                  <IoMdText />
                </span>
                VIA SUPPORT CHAT
              </button>
              <button className="flex items-center gap-4 text-white px-10 py-2 rounded-md bg-black ">
                <span>
                  <IoCall />
                </span>{" "}
                VIA CALL
              </button>
            </div>
            <button className=" justify-center text-center w-full border-black border px-3 py-2 mt-3 flex items-center gap-10">
              <IoMdText /> VIA EMAIL FORM
            </button>
          </div>
        </div>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-2/3">
            <form onSubmit={onSubmit} className="flex p-3 flex-col">
              <input
                type="text"
                placeholder="NAME"
                name="name"
                className="w-full  md:w-full border border-black mt-10 rounded-md p-2"
              />
              <input
                type="text"
                name="email"
                placeholder="email"
                className="md:w-full border border-black mt-10 rounded-md p-2"
              />
              <textarea
                type="text"
                name="message"
                placeholder="Your Message Here"
                className="md:w-full border border-black mt-10 rounded-md p-2"
              />
              <button
                type="submit"
                className="flex justify-end w-fit mt-3  items-center gap-4 text-white px-10 py-2 rounded-md bg-black "
              >
                SUBMIT
              </button>
            </form>
          </div>
          <div className=" flex items-center duration-300 right ">
            <img src={Contact} alt="" className="mb-10 ml-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
