export type ContactItemType = "Call" | "Email" | "Fax";

export type ContactItem = {
  id: number;
  type: ContactItemType;
  value: string;
  label?: string | null;
};

export type ContactSection = {
  id: number;
  title: string;
  description?: string | null;
  items: ContactItem[];
};

export type ContactCardType =
  | "FIND_REPRESENTATIVE"
  | "CONTACT_CUSTOMER_SERVICE"
  | "CONTACT_TECHNICAL_SERVICES"
  | "CONTACT_SPEC_ENGINEER";

export type ContactCard = {
  id: number;
  title: string;
  description?: string | null;
  type: ContactCardType;
  showForm: boolean;
  actionLabel: string;
  sections: ContactSection[];
};

export type ContactBlock = {
  __component: "blocks.contact";
  id: number;
  heading: string;
  description?: string | null;
  cards: ContactCard[];
};
