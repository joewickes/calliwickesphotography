'use client';

import { useState } from 'react';

import { ArrowRight } from '@phosphor-icons/react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsDisabled(true);

    const data = {
      name,
      email,
      newsletter: true,
    };

    const res = await fetch(`/api/email`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      setName('');
      setEmail('');

      setSubmitted(true);
    }
  };

  return !submitted ? (
    <form
      className="xl:flex-1 xl:mr-[50px] xl:pl-[50px] flex flex-col justify-end items-end max-w-[500px] w-full"
      onSubmit={onSubmit}
    >
      <label className="flex flex-col w-full">
        <input
          disabled={isDisabled}
          value={name}
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
          className="border w-full border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[25px] h-[40px]"
          type="text"
          id="name"
        />
      </label>
      <label className="flex flex-col w-full">
        <input
          disabled={isDisabled}
          value={email}
          placeholder="Email Address"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[25px] h-[40px] w-full"
          type="email"
          id="email"
        />
      </label>
      <div>
        <button
          disabled={isDisabled}
          type="submit"
          className="mb-[25px] py-[15px] px-[30px]"
          aria-label="Newsletter Form Submit Button"
        >
          <ArrowRight size={25} />
        </button>
      </div>
    </form>
  ) : (
    <>
      <div className="flex-1 mt-[30px] flex flex-col justify-center mb-[100px] pl-[50px]">
        <h2 className="text-[35px] leading-1 mb-[30px] whitespace-pre-line">{`Thank you so much for signing up!`}</h2>
      </div>
    </>
  );
};
export default ContactForm;
