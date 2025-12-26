export interface SelectedTags {
  "pages needed": string[];
  shop: string[];
  "creative freedom": string[];
  "learning curve": string[];
  POS: string[];
}

export type TagCategory =
  | "pages needed"
  | "shop"
  | "creative freedom"
  | "learning curve"
  | "POS";

export type FieldType =
  | "summary"
  | "difficulty"
  | "cost"
  | "seo"
  | "support"
  | "ecommerce"
  | "trial"
  | "bestFor"
  | "migration"
  | "security"
  | "accessibility"
  | "collaboration"
  | "appStore"
  | "examples"
  | "moreInfo"
  | "proCons";

interface VisibleFields {
  summary: boolean;
  difficulty: boolean;
  cost: boolean;
  seo: boolean;
  support: boolean;
  ecommerce: boolean;
  trial: boolean;
  bestFor: boolean;
  migration: boolean;
  security: boolean;
  accessibility: boolean;
  collaboration: boolean;
  appStore: boolean;
  examples: boolean;
  moreInfo: boolean;
  proCons: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: (string | string[] | (string | string[])[])[];
  linkText?: string;
  link?: string;
}

export interface WebsiteBuilder {
  id: number;
  name: string;
  tags: {
    "pages needed": string[];
    shop: string[];
    "creative freedom": string[];
    POS: string[];
    "learning curve": string[];
  };
  difficulty: string;
  cost: (string | string[] | (string | string[])[])[];
  trial: (string | string[] | (string | string[])[])[];
  bestFor: (string | string[] | (string | string[])[])[];
  support: (string | string[] | (string | string[])[])[];
  migration: (string | string[] | (string | string[])[])[];
  security: (string | string[] | (string | string[])[])[];
  accessibility: (string | string[] | (string | string[])[])[];
  collaboration: (string | string[] | (string | string[])[])[];
  ecommerce: (string | string[] | (string | string[])[])[];
  appStore: (string | string[] | (string | string[])[])[];
  seo: (string | string[] | (string | string[])[])[]; // Can be string OR array of strings
  pros: (string | string[] | (string | string[])[])[];
  cons: (string | string[] | (string | string[])[])[];
  moreInfo: (string | string[] | (string | string[])[])[];
  examples: (string | string[] | (string | string[])[])[];
  perfectIf: (string | string[] | (string | string[])[])[];
  skipIf: (string | string[] | (string | string[])[])[];
}

export type GuidingOption = {
  label: string;
  action: {
    category: TagCategory;
    tag: string;
  };
};

export type GuidingQuestion = {
  id: number;
  question: string;
  options: GuidingOption[];
};
