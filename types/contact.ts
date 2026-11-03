export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export type ContactFormData = Omit<Contact, 'id'>;