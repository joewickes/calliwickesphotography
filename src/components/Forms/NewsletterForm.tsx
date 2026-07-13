'use client';

import { FormEvent, useState } from 'react';

import { ArrowRight } from '@phosphor-icons/react';

import { useContactSubmit } from './useContactSubmit';

const NewsletterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { isDisabled, submitted, error, submit } = useContactSubmit();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ok = await submit({ name, email, newsletter: true });
    if (ok) {
      setName('');
      setEmail('');
    }
  };

  return !submitted ? (
    <form
      className="xl:flex-1 xl:mr-[50px] xl:pl-[50px] flex flex-col justify-end items-end max-w-[500px] w-full"
      onSubmit={onSubmit}
    >
      <label className="flex flex-col w-full" htmlFor="newsletter-name">
        <span className="sr-only">Name</span>
        <input
          disabled={isDisabled}
          value={name}
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
          className="border w-full border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[25px] h-[40px]"
          type="text"
          id="newsletter-name"
        />
      </label>
      <label className="flex flex-col w-full" htmlFor="newsletter-email">
        <span className="sr-only">Email Address</span>
        <input
          disabled={isDisabled}
          value={email}
          placeholder="Email Address"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#cdcdcd] px-[16px] py-[14px] mt-[10px] mb-[25px] h-[40px] w-full"
          type="email"
          id="newsletter-email"
        />
      </label>
      {error && (
        <p role="alert" className="text-red-600 text-[14px] mb-[15px] w-full">
          {error}
        </p>
      )}
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
        <p className="text-[35px] leading-1 mb-[30px] whitespace-pre-line">{`Thank you so much for signing up!`}</p>
      </div>
    </>
  );
};
export default NewsletterForm;
