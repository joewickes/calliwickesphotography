'use client';

import { useEffect, useState } from 'react';

const FooterDirectory = ({
  directoryListingsPreamble,
  directoryItems,
}: {
  directoryListingsPreamble: string;
  directoryItems: [
    {
      attributes: {
        directoryListingTitle: string;
        directoryListingLink: string;
      };
    },
  ];
}) => {
  const [isHomePage, isHomePageSet] = useState(false);

  // check url slug for home page
  useEffect(() => {
    const url = window.location.href;
    const urlSlug = url.split('/')[3];
    if (urlSlug === '') {
      isHomePageSet(true);
    }
  }, []);

  return isHomePage ? (
    <div className="xl:flex-1 w-full flex-wrap font-thin flex mt-[20px] xl:mt-[50px] items-start text-center justify-start">
      <div className="flex flex-col">
        <p className="text-left pr-[5px] min-w-[75px] sm:min-w-auto">{directoryListingsPreamble}</p>
        <ul className="flex flex-wrap">
          {directoryItems.map((listing: any, idx: number) => {
            return (
              <li className="flex flex-nowrap" key={idx}>
                <a
                  className="underline text-nowrap min-h-[24px] min-w-[24px]"
                  href={listing.attributes.directoryListingLink}
                >
                  {listing.attributes.directoryListingTitle}
                </a>
                {idx === directoryItems.length - 1 ? '' : <p className="px-[10px]">{`|`}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  ) : null;
};

export default FooterDirectory;
