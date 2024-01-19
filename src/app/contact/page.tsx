"use client";

import { useState } from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Slide, ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { format } from "path";

const ContactPage = () => {
  const contactBlurb = `I can't wait to connect with you!\n\n
  Thanks for exploring my site. I’m excited to get to know you and possibly capture some incredible images you'll treasure forever! Reach out using the form below or shoot me an email at calliwickesphotography@gmail.com for any questions or to schedule a session! While I respond to your inquiry, feel free to browse my latest work on Facebook and Instagram!\n\n
  I am based in Tampa, FL, and I proudly serve the Tampa Bay Area, including Clearwater and St Petersburg.`;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const formatPhoneNumber = (e: any) => {
    const currNum = e.target.value;
    const len = currNum.length;
    const lastLen = phone.length;
    console.log(isNaN(parseInt(currNum[currNum.length - 1])), "vs", "number");

    if (len < lastLen) {
      setPhone(currNum);
    } else if (isNaN(parseInt(currNum[currNum.length - 1]))) {
      return;
    } else if (len === 1) {
      setPhone(`(${currNum}`);
    } else if (len === 4) {
      setPhone(currNum + ") ");
    } else if (len === 9) {
      setPhone(currNum + "-");
    } else if (len > 14) {
      return;
    } else {
      setPhone(currNum);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      message,
    };

    console.log("data", data);

    // setName("");
    // setEmail("");
    // setPhone("");
    // setMessage("");
    toast.info("Your message was sent! Thanks!");
  };

  return (
    <main>
      <ToastContainer
        position="top-right"
        closeOnClick
        autoClose={5000}
        pauseOnHover
        transition={Slide}
      />
      <Header />
      <section className="mt-[20dvh] bg-black px-[30px] text-white mb-[30px]">
        <h1 className="text-[40px] leading-1 flex flex-col text-white pt-[60px]">
          {`Start saving these moments`}
        </h1>
        <p className="font-thin text-right py-[200px]">
          {`Tampa | family + senior photography`}
        </p>
      </section>

      <section className="px-[30px] mb-[60px]">
        <h2 className="text-[45px] leading-1 mb-[30px]">{`Let's get in touch!`}</h2>
        <p className="font-thin whitespace-pre-line">{contactBlurb}</p>
      </section>

      <section className="px-[30px] text-black" onSubmit={onSubmit}>
        {/* Image */}
        <form>
          <label className="flex flex-col">
            {`Name *`}
            <input
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="border border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[50px] h-[40px]"
              type="text"
              id="name"
            />
          </label>
          <label className="flex flex-col">
            {`Email Address *`}
            <input
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[50px] h-[40px]"
              type="email"
              id="email"
            />
          </label>
          <label className="flex flex-col">
            {`Phone Number *`}
            <input
              value={phone}
              onChange={formatPhoneNumber}
              className="border border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[50px] h-[40px]"
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </label>
          <label className="flex flex-col">
            {`Message *`}
            <textarea
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              className="border border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[50px]"
            />
          </label>
          <div>
            <button
              type="submit"
              className="text-[16px] mb-[60px] tracking-widest border border-black py-[20px] px-[30px]"
            >
              {`SEND MESSAGE`}
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;
