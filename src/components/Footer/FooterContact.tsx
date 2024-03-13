'use client';
import { Phone, EnvelopeSimple } from '@phosphor-icons/react';

const FooterContact = ({ cwpEmail, cwpPhoneNumber }: { cwpEmail: string; cwpPhoneNumber: string }) => {
  return (
    <div className="flex flex-col mt-[20px] lg:pl-[50px]">
      <div className="flex items-center">
        <EnvelopeSimple size={18} className="mr-[10px]" />

        <a href={`mailto:${cwpEmail}`}>{cwpEmail}</a>
      </div>
      <div className="flex items-center mt-[5px]">
        <Phone size={18} className="mr-[10px]" />
        <a href={`tel:+1${cwpPhoneNumber.replace(/[\(\)\-\s]/g, '')}`}>{cwpPhoneNumber}</a>
      </div>
    </div>
  );
};

export default FooterContact;
