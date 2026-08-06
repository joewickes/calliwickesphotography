import { strapiFetch } from '@/lib/strapi';
import type { ChatCTAData, ContactPageData, StrapiSingle } from '@/lib/types/strapi';

export const CONTACT_QUERY = `{
  contactPage {
    data {
      attributes {
        heroImage {
          data {
            attributes {
              url
              alternativeText
              width
              height
            }
          }
        }
        heroTitle
        heroSubtitle
        formTitle
        formParagraph
        formImage {
          data {
            attributes {
              url
              alternativeText
              width
              height
            }
          }
        }
        formNamePlaceholder
        formEmailPlaceholder
        formPhoneNumberPlaceholder
        formMessagePlaceholder
        formButtonText
        responseTitle
        responseParagraph
      }
    }
  }
}`;

/** Fetches the full Contact page content. */
export async function getContactData(): Promise<ContactPageData> {
  const data = await strapiFetch<{ contactPage: StrapiSingle<ContactPageData> }>(CONTACT_QUERY);

  if (data?.contactPage?.data == null) {
    throw new Error('Strapi returned no data for the Contact Page single type — is it published?');
  }

  return data.contactPage.data.attributes;
}

export const CHAT_CTA_QUERY = `{
  contactPage {
    data {
      attributes {
        formTitle
        formParagraph
        formNamePlaceholder
        formEmailPlaceholder
        formPhoneNumberPlaceholder
        formMessagePlaceholder
        formButtonText
        responseTitle
        responseParagraph
      }
    }
  }
}`;

/** Fetches the reduced contact-form fields used by the reusable Chat CTA. */
export async function getChatCTAData(): Promise<ChatCTAData> {
  const data = await strapiFetch<{ contactPage: StrapiSingle<ChatCTAData> }>(CHAT_CTA_QUERY);

  if (data?.contactPage?.data == null) {
    throw new Error('Strapi returned no data for the Contact Page single type — is it published?');
  }

  return data.contactPage.data.attributes;
}
