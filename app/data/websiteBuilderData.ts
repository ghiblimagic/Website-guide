// data/websiteBuilders.ts

// Type definitions
export type TagCategory = "pages" | "shop" | "customization" | "pos";

export interface WebsiteBuilder {
  id: number;
  name: string;
  tags: {
    pages: string[];
    shop: string[];
    customization: string[];
    pos: string[];
  };
  difficulty: string;
  cost: string[];
  trial: string;
  bestFor: string[];
  support: string;
  migration: string;
  security: string;
  accessibility: string;
  handoff: string[];
  ecommerce: string[];
  appStore: string;
  seo: string[];
  pros: string[];
  cons: string[];
  moreInfo: string[];
  examples: string[];
  perfectIf: string[];
  skipIf: string[];
}

export const websiteBuilders: WebsiteBuilder[] = [
  {
    id: 1,
    name: "Google Sites",
    tags: {
      pages: ["1 page", "multi-page"],
      shop: ["no shop", "small shop"],
      customization: ["low customization"],
      pos: [] as string[],
    },
    difficulty: "⭐",
    cost: [
      'Free website builder and hosting with a google account, free SSL cert, no tiers, no ads, there is a tiny, semi-transparent "Report Abuse" button in the bottom left.',
      "Although you can use the free Google.sites subdomain I highly recommend buying a custom domain. Why? Because lots of scams use sites with google.sites subdomains because its free, so some socials/websites filter out google.site subdomains. Also it looks more professional to have a cheap custom domain added to your site.",
      '"Google Sites are free to build, host, and maintain with a Google or Gmail account. There are no web hosting fees. If, however, you are using Google Sites in conjunction with Google Workspace, the cost is rolled into the user license fee of all plans."',
    ],
    trial: "N/A its free",
    bestFor: [
      "Simple blogs, bio sites, portfolios, simple websites, internal team sites, disposable sites for one time events or reports",
    ],
    support:
      '"Google Sites support for a free Gmail account is basically no existent from Google Inc. themselves. There isn\'t a way to submit a ticket or talk to a Google representative. With a Google Workspace subscription the situation improves, but it comes at a cost there. However, there is an active Help Community of product experts, which is a forum type system." https://www.kirksvillewebdesign.com/google-sites-developer/google-sites-news/free-website-builder-plans',
    migration:
      "You can only migrate it to sharepoint (used for corporate intranets) otherwise you'd have to rebuild from scratch https://cloudiway.com/solutions/google-sites-migration/",
    security:
      "Your website data is stored on Google's servers, which could raise concerns about data privacy and security for some people.",
    accessibility:
      "Not great for accessibility but there are guides to make use of the accessibility features it does have: such as this 7 minute video: https://www.youtube.com/watch?v=XSsY9Wr0WD0&t=444s https://sites.google.com/a/umich.edu/engcom-wiki/web/accessibility/google-sites-accessibilty",
    handoff: [
      `Very Easy to add someone, and its a very simple website builder https://support.google.com/sites/answer/97934?hl=en`,

      `"If, at some point, I want/need to turn webmaster duties over to someone, it wouldn't take eons to show them what to do. I've shown other embroiderers (most of whom are not terribly techie) how to start their sites, and all have been successful. ... it's perfect for the groups I work with (demographics tilt toward senior citizen)"https://www.reddit.com/r/GoogleSites/comments/1jih1vj/comment/mjlw7bb/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button`,

      `"I onboarded many nonprofits onto Google Sites because they used Docs and Sheets, but also because your average person can easily make updates". https://www.reddit.com/r/GoogleSites/comments/1jih1vj/would_anyone_actually_recommend_google_sites/`,
    ],
    ecommerce: [
      "The lack of a proper CMS makes the prospect of managing a large ecommerce site on Google Sites impractical. However, templates have been made which utilize Pay Now buttons and simple storefronts. https://www.kirksvillewebdesign.com/google-sites/google-sites-templates/business-ecommerce",
      "Most seem to use jotform to create a simple store",
    ],
    appStore:
      'No App store but you can embed code (widgets into your site to extend its functionality slightly) https://sites.google.com/site/horstwebdesign/integrations-widgets-apps-and-add-ons Examples of premium "apps", in this case its just code you\'ll copy and paste into Google Sites: https://www.commoninja.com/widgets?via=googlesites',
    seo: [
      "Google Sites can show up in search results, and Google themselves say theres nothing blocking it from performing well in search but it's full potential is limited.",

      "The actual limitation is the SEO toolkit: it's very bare-bones compared to other builders. Google Sites gives you only the basics: Site title, Page titles, Header tags, Image alt text, Integrations like Google Analytics + Search Console. That's enough for simple sites, but it means you can't customize things like meta descriptions, structured data, advanced indexing controls, or performance tweaks.",

      "So while it can rank, it's unlikely to compete with sites built on platforms that allow deeper optimization.",

      "If you want to get the most out of Google Sites, these guides cover best practices: https://www.googlesites-seo.com/ https://sites.google.com/site/horstwebdesign/seo-tips https://www.kirksvillewebdesign.com/google-sites/seo",
    ],
    pros: [
      "Free with a google account!",
      "All google sites are made to work on desktop and mobile devices, so it'll save you time troubleshooting the appearance of the site on different screens.",
      "If your organization also uses Google Drive and other Google products, the native integration can help a lot.",
      "You can get templates through their store, theres both free and premium templates: https://www.kirksvillewebdesign.com/google-sites/google-sites-templates",
      '"I\'ve used Wordpress, Wix, and Squarespace, and just really enjoy the simplicity. There are great prebuilt templates out there, but even using Canva and a few embeds from other platforms and you can have a decent site." https://www.reddit.com/r/GoogleSites/comments/1jih1vj/comment/mjs9emf/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button',
      '" We are a school using Google Workspace for Education, basically all of the Google apps like docs, sheets, slides etc. I decided on Google Sites as it is collaborative, and our team could easily work on it, adding content and pulling in images from Google Photos. Most of the team have no experience in web designing but it was easy to set up and we have no complaints!" https://www.reddit.com/r/GoogleSites/comments/1jih1vj/comment/mjtzq4q/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button',
      "Google sites used to share your google drive or google worksplace storage, but that is no longer the case for new google sites.",
    ],
    cons: [
      "Minimal customization, so the sites tend to look basic.",
      "It only supports minimal blogging features.",
      "If you don't use a custom domain and stick with the google.sites domain, some sites such as reddit filter out google site links because of the high amount of scams and malware that create free google sites to trick potential victims.",
    ],
    moreInfo: [
      "https://sites.google.com/site/horstwebdesign/about-google-sites",
    ],
    examples: [
      "https://www.splitrockoutdoors.ca/",
      "https://www.tunbridgehs.com/",
      "https://www.shevingtonphotographicsocialclub.com/",
    ],
    perfectIf: [
      "You just want a basic website with maybe a contact form, gallery and map at most, budget and technical hassle need to be minimal, you're okay with a basic design, no complex features.",
      "You want a short term site for an event or a report.",
      "For a very simple store, you could use a template which gives you access to a small store, mostly through JotForm integrations.",
      "If your organization also uses Google Drive and other Google products, the native integration can help a lot.",
    ],
    skipIf: [
      "You need a site that will grow as your business grows. However, you could always start with a free Google Site and move to a more robust page builder later.",
      "Want to avoid having a basic looking site, customization is limited.",
      "Want to have the highest SEO ranking possible (ranking high on google search results)",
      "Need a true E-commerce store.",
    ],
  },
  {
    id: 2,
    name: "Carrd",
    tags: {
      pages: ["1 page"],
      shop: ["no shop"],
      customization: ["low customization"],
      pos: [] as string[],
    },
    difficulty: "⭐",
    cost: [
      "Pro Lite $9/year",
      "Pro Standard $19/year (need this tier or higher to use a custom domain)",
      "Pro Plus $49/yr",
      "https://carrd.co/pro",
    ],
    trial: "7 day trial",
    bestFor: [
      "Simple one-page sites for: Freelancers, Entrepreneurs, Portfolios, Personal Brands, Event Organizers, Small Biz Landing Pages",
    ],
    support:
      "Offers email support, no phone support. Usually replies within 24 hours. https://carrd.co/contact",
    migration:
      "Can only export the website on a pro plus plan or higher, though even then the form elements will not be functional in the download. https://carrd.co/docs/sites/downloading",
    security: "Handled by Carrd, you don't have to do anything.",
    accessibility:
      "Since Carrd sites are simpler they're more likely to be accessible. However there's nothing about \"we meet WCAG 2.1 Level AA\" for the templates, so if you legally need to meet this requirements or want to care for all your potential customers, you'd likely have to manually check for accessibility compliance. Simple accessibility tips for Carrd: https://accessibility.carrd.co Web accessibility Resources: https://weba11y.carrd.co/",
    handoff: [
      "Very simple to share access: https://carrd.co/docs/sites/sharing-access-to-a-site",
    ],
    ecommerce: [
      "No built in E-commerce features. But you could use Ecwid to embed an online store to your Carrd website: https://support.ecwid.com/hc/en-us/articles/360002848039-Selling-on-Carrd-with-Ecwid",
      "However with Ecwid you are limited to 5 products on a starter plan, 100 to venture, ect. No free plans. Heres a through article which compares shopify to Ecwid: https://www.stylefactoryproductions.com/blog/shopify-vs-ecwid",
      "Embeding options are only available for pro standard and up plans.",
      "More e-commerce options such as stripe, gumload: https://zite.design/carrd/carrd-e-commerce/",
      "You could also use e-commerce templates made by users, prices vary. Heres one example: https://kostas-templates.carrd.co/",
    ],
    appStore:
      "Limited to just 5 widgets: Stripe, PayPal, Gumroad, Typeform, facebook https://carrd.co/docs/building/adding-widgets But you can also embed services like Ecwid with a pro standard plan.",
    seo: [
      "Carrd doesn't offer as much SEO customization as bigger builders, but if you follow the main best-practice tips, you can still get solid rankings.",

      "For small businesses or low-competition niches, it's usually enough. If you're in a very competitive market, though, you probably won't hit the very top spots on Google with Carrd alone.",

      "With Pro Standard or above, you can: Add meta tags, Connect Google Analytics to see your traffic sources and what people search for (super helpful for fine-tuning SEO).",

      "Most of the useful SEO options sit behind a small paywall (Pro Standard or higher), but Carrd is so inexpensive that upgrading a tier is still much cheaper than most alternatives.",

      "Since Carrd sites are lightweight by design, they're often pretty fast. Just avoid huge images or videos and you'll be in good shape.",

      "Helpful SEO guides for Carrd: 7-minute YouTube walkthrough: https://www.youtube.com/watch?v=F7_1BWxxYoQ More in-depth tips: https://www.nocode.mba/articles/10-essential-card-seo-tips-to-boost-your-website#",
    ],
    pros: ["Very affordable!", "Easy to use"],
    cons: [
      'For single page websites. Though if you want it to "look" like a multi page website you can use their sections feature. However it won\'t have the SEO benefits of a true multi page website.',
      '"A "multi page" Carrd is also slightly more complicated to set up. 3 minute guide: https://www.youtube.com/watch?v=RVcovcKaeq4',
    ],
    moreInfo: [
      "8 minute overview: https://www.youtube.com/watch?v=oAtkeesUW68",
      "15 minute tutorial: https://www.youtube.com/watch?v=1PL6NntBaK4",
    ],
    examples: [
      '"18 Best Carrd Websites" inspiration article: https://colorlib.com/wp/carrd-websites/',
      "Also: a curated gallery of Carrd one-page sites: https://onepagelove.com/tag/carrd",
      '"20 Inspiring Carrd Website Examples": https://www.sitebuilderreport.com/inspiration/carrd-websites',
      "Curated gallery of Carrd one-pagers: https://deckof.carrd.co/",
    ],
    perfectIf: [
      "you want a clean simple, affordable one page website in roughly an hour. (You can add forms to it)",
      "You want to make it `look` like it has multiple pages, and don't mind the SEO hit & that `multiple pages` on Caard can be buggy",
    ],
    skipIf: [
      "You need blogging or complex features.",
      "You need a real multi-page website",
    ],
  },
];

export const tagCategories: Record<TagCategory, string[]> = {
  pages: ["1 page", "multi-page"],
  shop: ["no shop", "small shop", "big shop"],
  customization: ["low customization", "medium to heavy customization"],
  pos: ["built in POS"],
};

export const guidingQuestions: Array<{
  id: number;
  question: string;
  yesAction: { category: TagCategory; tag: string };
  noAction: { category: TagCategory; tag: string };
}> = [
  {
    id: 1,
    question: "Do you just need a single page site?",
    yesAction: { category: "pages", tag: "1 page" },
    noAction: { category: "pages", tag: "multi-page" },
  },
  {
    id: 2,
    question: "Do you need an online shop?",
    yesAction: { category: "shop", tag: "small shop" },
    noAction: { category: "shop", tag: "no shop" },
  },
  {
    id: 3,
    question: "Do you need heavy customization options?",
    yesAction: {
      category: "customization",
      tag: "medium to heavy customization",
    },
    noAction: { category: "customization", tag: "low customization" },
  },
];
