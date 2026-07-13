'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

const ContactForm = ({
  formButtonText,
  responseTitle,
  responseParagraph,
}: {
  formButtonText: string;
  responseTitle: string;
  responseParagraph: BlocksContent;
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const formatPhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);
    setError('');

    const data = {
      name,
      email,
      phone,
      message,
      newsletter: false,
    };

    try {
      const res = await fetch(`/api/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (res.status === 200) {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setSubmitted(true);
      } else {
        setError(`Failed to send message: ${responseData.message}`);
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsDisabled(false);
    }
  };

  return !submitted ? (
    <form className="xl:flex-1 xl:mr-[100px] xl:mt-[50px]" onSubmit={onSubmit}>
      <label className="flex flex-col" htmlFor="name">
        <span className="sr-only">Name</span>
        <input
          disabled={isDisabled}
          value={name}
          required
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="border border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[25px] h-[40px]"
          type="text"
          id="name"
        />
      </label>
      <label className="flex flex-col" htmlFor="email">
        <span className="sr-only">Email Address</span>
        <input
          placeholder="Email Address "
          disabled={isDisabled}
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[25px] h-[40px]"
          type="email"
          id="email"
        />
      </label>
      <label className="flex flex-col" htmlFor="phone">
        <span className="sr-only">Phone Number</span>
        <input
          disabled={isDisabled}
          value={phone}
          placeholder="Phone Number"
          onChange={formatPhoneNumber}
          className="border border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[25px] h-[40px]"
          type="tel"
          id="phone"
          name="phone"
          required
        />
      </label>
      <label className="flex flex-col" htmlFor="message">
        <span className="sr-only">Message</span>
        <textarea
          disabled={isDisabled}
          placeholder="Message"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          className="border border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[50px]"
        />
      </label>
      {error && (
        <p role="alert" className="text-red-600 text-[14px] mb-[25px]">
          {error}
        </p>
      )}
      <div>
        <button
          disabled={isDisabled}
          type="submit"
          className="mb-[60px] border border-black py-[15px] text-[16px] tracking-[.35em] px-[30px]"
          aria-label="Contact Form Submit Button"
        >
          {formButtonText}
        </button>
      </div>
    </form>
  ) : (
    <>
      <div className="flex-1 mt-[30px] flex flex-col justify-center mb-[100px]">
        <h2 className="text-[35px] leading-1 mb-[30px] whitespace-pre-line">{responseTitle}</h2>
        <span className="mt-[50px]">
          <BlocksRenderer content={responseParagraph} />
        </span>
      </div>
    </>
  );
};
export default ContactForm;
