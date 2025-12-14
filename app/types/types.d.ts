export interface SelectedTags {
  pages: string[];
  shop: string[];
  "creative freedom": string[];
  "learning curve": string[];
  POS: string[];
}

export type TagCategory =
  | "pages"
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
