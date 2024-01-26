'use client';

import { useState } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const setToast = (message: string) => {
    toast.info(message);
  };

  const formatPhoneNumber = (e: any) => {
    const currNum = e.target.value;
    const len = currNum.length;
    const lastLen = phone.length;

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
    setToast('Sending your message...');
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

      setToast('Your message was sent! Thanks!');
      setIsDisabled(false);
    }
  };

  return (
    <form className="md:flex-1 md:mr-[100px] md:mt-[50px]" onSubmit={onSubmit}>
      <ToastContainer position="top-right" closeOnClick autoClose={5000} pauseOnHover transition={Slide} />
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
  );
};
export default ContactForm;
