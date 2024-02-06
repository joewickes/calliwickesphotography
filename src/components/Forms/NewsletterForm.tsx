'use client';

import { useState } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setToast = (message: string) => {
    toast.info(message);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setToast('Submitting your info...');
    setIsDisabled(true);

    const data = {
      name,
      email,
      newletter: true,
    };

    const res = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      setName('');
      setEmail('');

      setToast('Your request was submitted! Thanks!');
      setSubmitted(true);
    }
  };

  return !submitted ? (
    <form
      className="md:flex-1 md:mr-[50px] md:pl-[50px] flex flex-col justify-end items-end max-w-[500px] w-full"
      onSubmit={onSubmit}
    >
      <ToastContainer position="top-right" closeOnClick autoClose={5000} pauseOnHover transition={Slide} />
      <label className="flex flex-col w-full">
        {`Name *`}
        <input
          disabled={isDisabled}
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className="border w-full border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[50px] h-[40px]"
          type="text"
          id="name"
        />
      </label>
      <label className="flex flex-col w-full">
        {`Email Address *`}
        <input
          disabled={isDisabled}
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[50px] h-[40px] w-full"
          type="email"
          id="email"
        />
      </label>
      <div>
        <button
          disabled={isDisabled}
          type="submit"
          className="mb-[60px] border border-black py-[15px] text-[13px] tracking-[.35em] px-[30px]"
        >
          {`SUBMIT`}
        </button>
      </div>
    </form>
  ) : (
    <>
      <div className="flex-1 mt-[30px] flex flex-col justify-center mb-[100px]">
        <h2 className="text-[35px] leading-1 mb-[30px] whitespace-pre-line">{`Thank you so much for signing up!`}</h2>
        <p className="mt-[50px]">{`I’m looking forward to adding you to the list and will be in touch shortly!`}</p>
        <p className="mt-[25px]">
          {`While you wait… find me on`}
          <a
            target="_blank"
            href="https://www.facebook.com/CalliWickesPhotography/"
            className="font-semibold"
            aria-label="Facebook"
          >
            {` `}
            Facebook
          </a>
          {` `}
          {`or `}
          <a
            target="_blank"
            href="https://www.instagram.com/calliwickesphotography/"
            className="font-semibold"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </p>
        <p className="mt-[25px]">
          {`You can also check out my`}{' '}
          <a
            target="_blank"
            href="https://www.pinterest.com/calliwickes/"
            className="font-semibold"
            aria-label="Pinterest"
          >
            Pinterest
          </a>{' '}
          {`page for outfit inspiration for your upcoming session!`}
        </p>
      </div>
    </>
  );
};
export default ContactForm;
