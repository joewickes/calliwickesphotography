'use client';

import { useState } from 'react';
import Image from 'next/image';

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
import Header from '@/components/Header/Header';
import { Slide, ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { format } from 'path';

const ContactPage = () => {
  const contactBlurb = `I can't wait to connect with you!\n\n
  Thanks for exploring my site. I’m excited to get to know you and possibly capture some incredible images you'll treasure forever! Reach out using the form below or shoot me an email at calliwickesphotography@gmail.com for any questions or to schedule a session! While I respond to your inquiry, feel free to browse my latest work on Facebook and Instagram!\n\n
  I am based in Tampa, FL, and I proudly serve the Tampa Bay Area, including Clearwater and St Petersburg.`;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const formatPhoneNumber = (e: any) => {
    const currNum = e.target.value;
    const len = currNum.length;
    const lastLen = phone.length;
    console.log(isNaN(parseInt(currNum[currNum.length - 1])), 'vs', 'number');

    if (len < lastLen) {
      setPhone(currNum);
    } else if (isNaN(parseInt(currNum[currNum.length - 1]))) {
      return;
    } else if (len === 1) {
      setPhone(`(${currNum}`);
    } else if (len === 4) {
      setPhone(currNum + ') ');
    } else if (len === 9) {
      setPhone(currNum + '-');
    } else if (len > 14) {
      return;
    } else {
      setPhone(currNum);
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    toast.info('Sending your message...');
    setIsDisabled(true);

    const data = {
      name,
      email,
      phone,
      message,
    };

    const res = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      toast.info('Your message was sent! Thanks!');
      setIsDisabled(false);
    }
  };

  return (
    <main>
      <ToastContainer position="top-right" closeOnClick autoClose={5000} pauseOnHover transition={Slide} />
      <Header isHome />
      <section
        id="kideatingfruit"
        className="pt-[15dvh] px-[30px] h-[100dvh] text-white mb-[30px] md:flex md:items-center"
      >
        <h2 className="text-[40px] leading-1 flex flex-col text-white pt-[60px] md:text-[70px] md:font-thin md:pl-[100px] md:flex-1 md:pt-0 md:pb-[60px]">
          {`Start saving these moments`}
        </h2>
        <p className="font-thin text-right pt-[200px] pb-[250px] md:pr-[100px] md:flex-1 md:pt-[250px] md:pb-[10px]">
          {`Tampa | family + senior photography`}
        </p>
      </section>

      <section className="px-[30px] mb-[60px] md:pl-[100px] md:pt-[100px]">
        <h1 className="text-[45px] leading-1 mb-[30px]">{`Let's get in touch!`}</h1>
        <p className="font-thin whitespace-pre-line">{contactBlurb}</p>
      </section>

      <section className="px-[30px] text-black md:pl-[100px] md:flex" onSubmit={onSubmit}>
        <div className="flex justify-center mb-[60px] md:flex-1 md:justify-start">
          <div className="mt-[30px] h-[90dvw] w-[90dvw] md:h-auto md:w-auto overflow-hidden">
            <Image
              placeholder="blur"
              src="/images/Home/tampaphotographerportrait.webp"
              alt="Tampa photographer in downtown portrait."
              height={840}
              width={560}
              className="object-cover mt-[-10dvw] md:mt-[-100px]"
            />
          </div>
        </div>
        <form className="md:flex-1 md:mr-[100px] md:mt-[50px]">
          <label className="flex flex-col">
            {`Name *`}
            <input
              disabled={isDisabled}
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
              disabled={isDisabled}
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
              disabled={isDisabled}
              value={phone}
              onChange={formatPhoneNumber}
              className="border border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[50px] h-[40px]"
              type="tel"
              id="phone"
              name="phone"
              required
            />
          </label>
          <label className="flex flex-col">
            {`Message *`}
            <textarea
              disabled={isDisabled}
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              className="border border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[50px]"
            />
          </label>
          <div>
            <button
              disabled={isDisabled}
              type="submit"
              className="mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]"
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
