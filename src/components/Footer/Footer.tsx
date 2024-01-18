import Link from "next/link";
import { useState } from "react";

import {
  ArrowUp,
  FacebookLogo,
  InstagramLogo,
  Dot,
} from "@phosphor-icons/react";

const Footer = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <footer className="flex flex-col justify-center items-center mt-[60px]">
      <div className="flex flex-col justify-center items-center">
        <p className="font-thin my-[60px]">© 2021 Calli Wickes Photography</p>
        <div className="flex mb-[60px]">
          <FacebookLogo size={23} className="mr-[35px]" />
          <InstagramLogo size={23} />
        </div>
        <Link href="#" legacyBehavior passHref>
          <ArrowUp size={30} className="mb-[30px]" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
