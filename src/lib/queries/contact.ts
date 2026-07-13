import { strapiFetch } from '@/lib/strapi';
import type { ChatCTAData, ContactPageData } from '@/lib/types/strapi';

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
  const data = await strapiFetch<{ contactPage: { data: { attributes: ContactPageData } } }>(CONTACT_QUERY);
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
  const data = await strapiFetch<{ contactPage: { data: { attributes: ChatCTAData } } }>(CHAT_CTA_QUERY);
  return data.contactPage.data.attributes;
}
