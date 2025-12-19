import { TagCategory, WebsiteBuilder, GuidingQuestion } from "../types/types";

export const websiteBuilders: WebsiteBuilder[] = [
  {
    id: 1,
    name: "Google Business Profile",
    tags: {
      pages: [],
      shop: ["no shop"],
      "creative freedom": ["low customization"],
      POS: [] as string[],
      "learning curve": ["low difficulty"],
    },
    difficulty: "⭐",
    cost: ["Free"],
    trial: ["N/A"],
    bestFor: [
      "Local visibility.",
      'Great for "I need something NOW."',
      "Most businesses should create a google business profile:",
      [
        "it's free.",
        "Relatively easy to setup.",
        "It's often the first thing that potential clients will see about your business.",
      ],
    ],
    support: [
      "Difficult to get a hold of support",
      "https://support.google.com/business/gethelp/?sjid=14556443374957707723-NC&visit_id=638994772013234530-3113233149&rd=1",
    ],
    migration: ["N/A, this is a google listing not a website."],
    security: ["N/A, this is a google listing not a website."],
    accessibility: ["N/A, this is a google listing not a website."],
    collaboration: [
      "You can easily add users to help manage your Google Business Listing Profile.",
      "Here's a video guide for adding users and admins:",
      ["https://www.youtube.com/watch?v=SqqqOF3AJo8"],
    ],
    ecommerce: ["N/A"],
    appStore: ["N/A"],
    seo: [
      "If you have this and link your website, it will help improve your SEO.",
      [
        "Because google likes to see your website linked on other sites, to boost its trustworthiness.",
      ],
    ],
    pros: [
      "Free, will help people find your business to potentially lead to some more sales",
      "Easy to setup",
    ],
    cons: [
      "Looks less professional if you don't add a website to your google business profile, but it's better than nothing and easy to setup.",
      "Although you can post your menu as images to get around setting up a website, it requires more work for customers to click through images to find the menu images.",
    ],
    moreInfo: [
      "It's free, so it's worth getting your google business profile setup. it usually takes a few weeks for the business to be verified.",
      "13 minute set up guide",
      ["https://www.youtube.com/watch?v=KPfjzL9oPiE"],
    ],
    examples: [] as string[],
    perfectIf: ["You only need people to find you on Google, quickly."],
    skipIf: ["You need an actual website."],
  },
  {
    id: 2,
    name: "Google Sites",
    tags: {
      pages: ["1 page"],
      shop: ["small shop"],
      "creative freedom": ["low customization"],
      POS: [] as string[],
      "learning curve": ["low difficulty"],
    },
    difficulty: "⭐",
    cost: [
      "Free website builder and hosting with a google account",
      [
        "Free SSL cert",
        "No tiers",
        "No ads",
        'However there is a tiny, semi-transparent "Report Abuse" button in the bottom left.',
      ],
      "Although you can use the free Google.sites subdomain I highly recommend buying a custom domain.",
      [
        "Because lots of scams create sites with google.sites subdomains (site names). So some websites filter out google.site subdomains. Also, it looks more professional to have a cheap custom domain added to your site.",
      ],
      '"Google Sites are free to build, host, and maintain with a Google or Gmail account. There are no web hosting fees. If, however, you are using Google Sites in conjunction with Google Workspace, the cost is rolled into the user license fee of all plans."',
      ["https://sites.google.com/site/horstwebdesign/about-google-sites"],
    ],
    trial: ["N/A it's free."],
    bestFor: [
      "Simple blogs",
      "Bio sites",
      "Portfolios",
      "Simple websites",
      "Internal team sites",
      "Disposable sites for one time events or reports",
    ],
    support: [
      `Basically no support if just have a free Gmail account instead of a workspace subscription, however there is a help community.`,
      '"Google Sites support for a free Gmail account is basically none existent from Google Inc. themselves. There isn\'t a way to submit a ticket or talk to a Google representative. With a Google Workspace subscription the situation improves, but it comes at a cost there. However, there is an active Help Community of product experts, which is a forum type system." https://www.kirksvillewebdesign.com/google-sites-developer/google-sites-news/free-website-builder-plans',
    ],
    migration: [
      "You'd have to build from scratch.",
      "You can only migrate it to sharepoint (used for corporate intranets).",
      ["https://cloudiway.com/solutions/google-sites-migration/"],
    ],
    security: [
      "Handles basic security for you.",
      "https://sites.google.com/view/templates-marketplace/googlesites/about-google-sites",

      [
        '"Your site is hosted on Google’s reliable servers, ensuring performance and uptime."',
        '"Google Sites provides automatic backups of your content, ensuring that your work is secure and easily recoverable in case of accidental deletion or changes."',
        '"Every Google Site automatically comes with SSL security, ensuring that your site is encrypted and safe for visitors, which helps build trust."',
        '"View and restore previous versions of your site, adding a layer of security to your content management."',
      ],
      "Your website data is stored on Google's servers, which could raise concerns about data privacy and security for some people.",
      ["https://grokipedia.com/page/Google_Sites?utm_source=chatgpt.com"],
    ],
    accessibility: [
      "Not great for accessibility but there are guides to make use of the accessibility features it does have.",
      "Such as this 7 minute video:",
      ["https://www.youtube.com/watch?v=XSsY9Wr0WD0&t=444s"],
      "https://sites.google.com/a/umich.edu/engcom-wiki/web/accessibility/google-sites-accessibilty",
    ],
    collaboration: [
      `Very Easy to add someone, and its a very simple website builder`,
      [`https://support.google.com/sites/answer/97934`],

      `"If, at some point, I want/need to turn webmaster duties over to someone, it wouldn't take eons to show them what to do. I've shown other embroiderers (most of whom are not terribly techie) how to start their sites, and all have been successful. ... it's perfect for the groups I work with (demographics tilt toward senior citizen)"`,
      [
        `https://www.reddit.com/r/GoogleSites/comments/1jih1vj/comment/mjlw7bb/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button`,
      ],

      `"I onboarded many nonprofits onto Google Sites because they used Docs and Sheets, but also because your average person can easily make updates".`,
      [
        `https://www.reddit.com/r/GoogleSites/comments/1jih1vj/would_anyone_actually_recommend_google_sites/`,
      ],
    ],
    ecommerce: [
      "Only simple stores",
      "The lack of a proper CMS makes the prospect of managing a large ecommerce site on Google Sites impractical. However, templates have been made which utilize Pay Now buttons and simple storefronts. https://www.kirksvillewebdesign.com/google-sites/google-sites-templates/business-ecommerce",
      "Most seem to use jotform to create a simple store",
    ],
    appStore: [
      `No App store but you can embed code (widgets into your site to extend its functionality slightly).`,
      `https://sites.google.com/site/horstwebdesign/integrations-widgets-apps-and-add-ons`,

      `Examples of premium "apps", in this case its just code you\'ll copy and paste into Google Sites: https://www.commoninja.com/widgets?via=googlesites`,
    ],
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
      "You can get templates through their store, theres both free and premium templates",
      [
        "https://www.kirksvillewebdesign.com/google-sites/google-sites-templates",
      ],
      '"I\'ve used Wordpress, Wix, and Squarespace, and just really enjoy the simplicity. There are great prebuilt templates out there, but even using Canva and a few embeds from other platforms and you can have a decent site."',
      [
        "https://www.reddit.com/r/GoogleSites/comments/1jih1vj/comment/mjs9emf/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
      ],
      '" We are a school using Google Workspace for Education, basically all of the Google apps like docs, sheets, slides etc. I decided on Google Sites as it is collaborative, and our team could easily work on it, adding content and pulling in images from Google Photos. Most of the team have no experience in web designing but it was easy to set up and we have no complaints!"',
      [
        "https://www.reddit.com/r/GoogleSites/comments/1jih1vj/comment/mjtzq4q/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
      ],
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
    id: 3,
    name: "Carrd",
    tags: {
      pages: ["1 page"],
      shop: ["small shop"],
      "creative freedom": ["low customization"],
      POS: [] as string[],
      "learning curve": ["low difficulty"],
    },
    difficulty: "⭐",
    cost: [
      "https://carrd.co/pro",
      [
        "Pro Lite $9/year",
        "Pro Standard $19/year",
        ["You need this tier or higher to use a custom domain"],
        "Pro Plus $49/yr",
      ],
    ],
    trial: ["7 day trial"],
    bestFor: [
      "Simple one-page sites for:",
      [
        "Freelancers",
        "Entrepreneurs",
        "Portfolios",
        "Personal Brands",
        "Event Organizers",
        "Small Biz Landing Pages",
      ],
    ],
    support: [
      "Offers email support, no phone support. Usually replies within 24 hours.",
      "https://carrd.co/contact",
    ],
    migration: [
      "Very limited, you'll basically be rebuilding the website.",
      "You Can only export the website on a pro plus plan or higher, though even then the form elements will not be functional in the download.",
      ["https://carrd.co/docs/sites/downloading"],
    ],
    security: [
      "Handled by Carrd.",
      ["https://carrd.co/docs/sites/setting-up-ssl"],
      "Regular Audits: Continuous monitoring and updates to ensure compliance and security",
      ["https://www.caard.net/privacy-policy-web"],
    ],
    accessibility: [
      "Since Carrd sites are simpler they're more likely to be accessible but you'll have to manually check for accessibility compliance.",
      "There's nothing about \"we meet WCAG 2.1 Level AA\" for the templates, so if you legally need to meet this requirements or want to care for all your potential customers, you'd likely have to manually check for accessibility compliance.",
      "Simple accessibility tips for Carrd:",
      ["https://accessibility.carrd.co"],
      "Web accessibility Resources:",
      ["https://weba11y.carrd.co/"],
    ],
    collaboration: [
      "Very simple to share access",
      ["https://carrd.co/docs/sites/sharing-access-to-a-site"],
    ],
    ecommerce: [
      "No built in E-commerce features. But you could have a small shop with an Ecommerce template Ecwid to embed an online store to your Carrd website",
      "https://support.ecwid.com/hc/en-us/articles/360002848039-Selling-on-Carrd-with-Ecwid",
      "However with Ecwid you are limited to 5 products on a starter plan, 100 to venture, ect. No free plans. Heres a through article which compares shopify to Ecwid: https://www.stylefactoryproductions.com/blog/shopify-vs-ecwid",
      "Embeding options are only available for pro standard and up plans.",
      "More e-commerce options such as stripe, gumload: https://zite.design/carrd/carrd-e-commerce/",
      "You could also use e-commerce templates made by users, prices vary. Heres one example: https://kostas-templates.carrd.co/",
    ],
    appStore: [
      "Limited to just 5 widgets: Stripe, PayPal, Gumroad, Typeform, facebook. But you can also embed services like Ecwid with a pro standard plan.",
      "https://carrd.co/docs/building/adding-widgets ",
    ],
    seo: [
      "Carrd doesn't offer as much SEO customization as bigger builders, but if you follow the main best-practice tips, you can still get solid rankings.",

      "For small businesses or low-competition niches, it's usually enough. If you're in a very competitive market, though, you probably won't hit the very top spots on Google with Carrd alone.",

      "With Pro Standard or above, you can: Add meta tags, Connect Google Analytics to see your traffic sources and what people search for (super helpful for fine-tuning SEO).",

      "Most of the useful SEO options sit behind a small paywall (Pro Standard or higher), but Carrd is so inexpensive that upgrading a tier is still much cheaper than most alternatives.",

      "Since Carrd sites are lightweight by design, they're often pretty fast. Just avoid huge images or videos and you'll be in good shape.",

      "Helpful SEO guides for Carrd: 7-minute YouTube walkthrough:",
      ["https://www.youtube.com/watch?v=F7_1BWxxYoQ"],
      "More in-depth tips",
      [
        "https://www.nocode.mba/articles/10-essential-card-seo-tips-to-boost-your-website#",
      ],
    ],
    pros: ["Very affordable!", "Easy to use"],
    cons: [
      'For single page websites. Though if you want it to "look" like a multi page website you can use their sections feature. However it won\'t have the SEO benefits of a true multi page website.',
      '"A "multi page" Carrd is also slightly more complicated to set up.',
      "3 minute guide",
      ["https://www.youtube.com/watch?v=RVcovcKaeq4"],
    ],
    moreInfo: [
      "8 minute overview:",
      ["https://www.youtube.com/watch?v=oAtkeesUW68"],
      "15 minute tutorial:",
      ["https://www.youtube.com/watch?v=1PL6NntBaK4"],
    ],
    examples: [
      '"18 Best Carrd Websites":',
      ["https://colorlib.com/wp/carrd-websites/"],
      "A curated gallery of Carrd one-page sites:",
      ["https://onepagelove.com/tag/carrd"],
      '"20 Inspiring Carrd Website Examples":',
      ["https://www.sitebuilderreport.com/inspiration/carrd-websites"],
      "Curated gallery of Carrd one-pagers:",
      ["https://deckof.carrd.co/"],
    ],
    perfectIf: [
      "You want a clean simple, affordable one page website in roughly an hour. (You can add forms to it)",
      "You want to make it `look` like it has multiple pages, and don't mind the SEO hit & that `multiple pages` on Caard can be buggy",
    ],
    skipIf: [
      "You need blogging or complex features.",
      "You need a real multi-page website",
    ],
  },
  {
    id: 4,
    name: "Pixpa",
    tags: {
      pages: ["multi-page"],
      shop: ["small shop"],
      "creative freedom": ["low customization"],
      POS: [] as string[],
      "learning curve": ["low difficulty"],
    },
    difficulty: "⭐",
    cost: [
      "https://www.pixpa.com/pricing",
      [
        "Basic:",
        ["$9/mo (by month)", "$4.05/mo (pay for 2 years)"],
        "Creator:",
        ["$15/mo (by month)", "$6.75/mo (pay for 2 years)"],
        "Professional:",
        ["$20/mo (by month", "$9/mo (pay for 2 years)"],
        "One more higher tier",
        "There are limits for the amount of products, images and storage based on tier (see pricing link for details).",
      ],
    ],
    trial: ["15 days"],
    bestFor: [
      "Small to medium creative businesses who want an all in one platform.",
      ["Photographers, designers, artists", "Writers and illustrators"],
      "Businesses that need password-protected client galleries",
      "Creatives selling prints, digital downloads, or a few physical products",
    ],
    support: [
      'Chat and Email: "24/7 via live chat and email. Get a fast response, any time."',
      "Can also hire a Pixpa expert for $199",
    ],
    migration: ["Can't migrate out of Pixpa."],
    security: [
      "Handled for you and you can disable AI crawling your website, so AI can't take your works from your site.",
      "'Right-click protection is available across your entire website, preventing unauthorized copying of your images and text.'",
      [
        "https://www.pixpa.com/updates/new-security-features-for-your-website",
        "https://help.pixpa.com/kb/where-is-my-site-hosted/",
      ],
    ],
    accessibility: [
      "Decent accessibility.",
      "From this article, it seems like its decent with accessibility but of course, you would have to follow the guide.",
      [
        "https://help.pixpa.com/kb/improving-web-accessibility-of-your-website-on-pixpa/",
      ],
    ],
    collaboration: [
      "Easy to collaborate.",
      "https://help.pixpa.com/kb/contributors/",
      [
        "The Contributors feature enables you to allow any person to edit any section of your Pixpa account. You can specify and give any permissions you prefer.",
        "The (contributors) feature is available starting from the Creator plan (up to 2 contributors). Professional and Advanced plans include unlimited contributors.",
      ],
    ],
    ecommerce: [
      "Great for selling prints, digital downloads, small-batch goods, limited inventory with low traffic",
      '"sell anything, no limits". However, that phrase only applies to the highest tier. For the first plan you can sell 3 products, the next you can sell 10 products, and the tiers after that allow for unlimited products.',
      ["https://www.pixpa.com/stores"],
      '"No hidden fees, no commissions. With Pixpa, every sale is yours."',
      ["https://www.pixpa.com/stores"],
      "Paid directly to your paypal, stripe, ect, money goes straight to you.",
      "Not for big businesses",
      "(only for the advanced plan) inventory tracking, abandoned cart recovery, order management",
      "(for creator plan or higher) custom discounts and promotions",
      'Scroll down to "online store" to see how it varies by plan https://www.pixpa.com/pricing',
      "Example of stores build on Pixpa: https://www.pixpa.com/examples/stores",
      "No advanced variations, subscriptions, or complex checkout flows",
      "Multi-currency and shipping options are basic",
    ],
    appStore: [
      "Has 100+ apps to extend your site's functionality",
      "https://www.pixpa.com/apps",
      "Some require a premium plan but that's the same for every app store.",
    ],
    seo: [
      "Strong SEO tools",

      "Pixpa has clearly invested a lot into making SEO easier compared to many site builders. You still need to do the usual work (titles, descriptions, alt text, etc.) but the platform is structured in a way that gives you a stronger chance of ranking well.",
      "Some standout SEO-friendly features:",
      [
        "Their sites follow solid SEO best practices by default.",
        "Clean, static URLs for everything (pages, galleries, products, blog posts). Search engines love that.",
        "You can set custom meta titles and descriptions for every type of content you create.",
        "The underlying HTML is pretty clean, which helps search engines index your pages more accurately.",
        "Pixpa uses server-side rendering, meaning Google can fully read your content instead of struggling with client-side scripts.",
        "Built-in support for 301 redirects if you ever restructure content or move from another platform.",
      ],

      "Handy SEO success checklist:",
      ["https://help.pixpa.com/kb/managing-website-seo/"],
      "A link where Pixpa talks about their SEO strategy:",
      ["https://www.pixpa.com/seo-tools"],
    ],
    pros: [
      "focused on creatives",
      "offers built-in portfolio, gallery, blog and e-commerce tools on one platform. So you don't need separate plugins, hosting, or store software.",
      "Already responsive",
    ],
    cons: [
      'Storage limitations, depends on plan. Scroll down to "Storage',
      ["https://www.pixpa.com/pricing"],
      "Doesn't have much customization",
      "Blog and CMS are basic",
    ],
    moreInfo: [] as string[],
    examples: [
      "Some of the templates",
      ["https://www.pixpa.com/templates/blog"],
    ],
    perfectIf: [
      "You're a photographer/artist/creative & want a portfolio, store, gallery and blog in one bundle.",
    ],
    skipIf: [
      "You expect heavy traffic, many pages, complex functionality, or plan for the business to get large (scale).",
      ["In that case Shopify would be better"],
    ],
  },
  {
    id: 5,
    name: "Squarespace",
    tags: {
      pages: ["multi-page"],
      shop: ["small shop"],
      "creative freedom": ["low customization"],
      POS: [] as string[],
      "learning curve": ["low difficulty"],
    },
    difficulty: "⭐⭐",
    cost: [
      "https://www.squarespace.com/pricing",
      [
        "Basic:",
        ["$16/mo (with year payment)", "$25 by month"],
        "Core:",
        ["$23/mo (with year payment)", "$36 by month"],
        "2 more plans for more advanced businesses",
      ],
    ],
    trial: ["14 day"],
    bestFor: [
      "For small businesses and bloggers that want something easy to use and fast to setup, while also having a professional looking site.",
      [
        "Creatives",
        "Portfolios",
        "Blogs",
        "Personal sites",
        "Simple e-commerce",
      ],
      "Those who prioritize simplicity versus customization.",
    ],
    support: [
      "Live chat (open 4am-8pm EST)",
      "Email",
      "No phone support",
      "https://support.squarespace.com/hc/en-us/p/contact",
      "https://www.launchthedamnthing.com/blog/how-to-contact-squarespace-support",
    ],
    migration: [
      "Very limited and painful to deal with; you'll basically be rebuilding your site",
      "Some things can be exported to WordPress, but its hit or miss.",
      [
        "https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site",
      ],
    ],
    security: [
      "Handles security, you don't have to do anything.",
      ["https://www.squarespace.com/security"],
    ],
    accessibility: [
      "Squarespace has built in tools to fine-tune your site to be more accessible.",

      "https://support.squarespace.com/hc/en-us/articles/215129127-Accessibility-resources-at-Squarespace",

      "https://accessibe.com/blog/knowledgebase/squarespace-website-accessibility",
    ],
    collaboration: [
      "Easy to add them as a contributor and easy for them to edit.",

      [
        "https://support.squarespace.com/hc/en-us/articles/206537287-Inviting-a-contributor",
      ],
    ],
    ecommerce: [
      "Available for all plans, but at different levels",

      "https://www.squarespace.com/pricing:",

      [
        'Scroll down to "Accept payments and sell products and services" to see how it varies by plan.',

        "Sell unlimited products and services, send invoices for free, sell content and memberships",

        "Free plans currently have a 2% online store transaction fee and 7% digital content and memberships transaction fee",

        'Click on "view full feature list" to see all the pros and cons of each plan',
      ],

      "https://www.tooltester.com/en/reviews/squarespace-review/ecommerce/",
      [
        'Its weak when trying to sell physical products "it lacks the full range of shipping and fulfillment options provided by Shopify, and also offers fewer payment options (for example, manual payments are not an option)."',
        '"It\'s possible to connect the store with fulfilment providers like ShipStation, ShipBob and Spocket, but not with marketplaces like AliExpress or Amazon Fulfillment." ',

        "Not as easy to use as other tools \"it can be tricky to find certain settings (e.g. changing currency), and displaying product collections on select pages isn't very intuitive. The editor's behaviour was a bit clunky at times.\" & advanced ecommerce features require one of the higher tier plans",

        '"Can include over 40 different types of content (e.g. videos, Instagram feeds, calendars, forms for product customization). There is also the ability to add Amazon product listings and Opentable reservation forms. To increase your customers spend you are also able to show "related items"".',

        '"One of the few e-commerce platforms that offer an integrated way for customers to leave product reviews, without needing to install an app. You can send an automated email to customers to request a review, or import them from Etsy."',

        '"Each item can have up to 6 options and 250 variants (SKUs)."',

        "You can change all relevant SEO settings like the product page's URL, page title and meta description",
      ],

      "https://www.websitebuilderexpert.com/ecommerce-website-builders/squarespace-e-commerce-business-review/",

      [
        '"Not great for international markets, because "While it supports 31 currencies, your store will only be able to display one at any time, meaning that when international customers visit, they will not see their local currency until checkout."',
      ],
      "https://www.squarespace.com/ecommerce-website",
    ],
    appStore: [
      "Less extensions/plugins than other options",

      "https://www.squarespace.com/extensions/home",
    ],
    seo: [
      "Squarespace is generally very solid for building your SEO ranking, especially for small-to-medium businesses that want a polished site without diving into technical settings.",
      "Key things worth noting:",
      [
        "All Squarespace templates are built with clean, crawlable code, so search engines can index your pages properly.",
        "They offer an official SEO checklist that walks you through best practices step-by-step.",
        "There's a built-in SEO report tool that highlights weak areas and gives you suggestions on what to improve.",
        "You can customize core SEO fields like page titles, descriptions, slugs, alt text, and structured data for products and events.",
        "There are now two third-party SEO plugins (TinyIMG and SEOSpace) that add a little more fine-tuning.",
        "Some people prefer WordPress for deeper SEO control (especially with tools like Yoast or RankMath), but for most businesses, Squarespace's built-in tools are more than enough. Especially if you follow their checklist consistently.",
        "Squarespace automatically creates mobile-friendly designs, which helps SEO.",
        "Built-in image compression can improve speed if you upload large images.",
        "Their SSL, sitemaps, structured data, and automatic canonical tags are all handled for you behind the scenes. No plugins needed.",
        "Since Squarespace uses server-side rendering, Google can read everything without issues.",
      ],
      "Helpful blog guide:",
      ["https://katescott.co/blog/squarespace-seo"],
      "In-depth 21-minute SEO tutorial:",
      ["https://www.youtube.com/watch?v=g4eF_H3rOhQ"],
      "Their SEO Guide:",
      [
        "https://support.squarespace.com/hc/en-us/articles/360002090267-SEO-checklist",
      ],
    ],
    pros: [
      "All in one platform, you can buy your domain within Squarespace.",
      "Simple to use.",
      "Strong support and community",
      "Although there are less templates, they're good quality so they'll look professional on any screen size. So you'll save the time you would of spent on these annoying adjustments.",
    ],
    cons: [
      "Slightly pricier but everything is in one place",
      "Can't customize the templates as much as you can with other builders like WordPress BUT the templates that do exist are good quality.",
      "If you have multiple locations, you'd have to make a site for each once since their e-commerce capabilities are more limited due to their smaller app market.",
    ],
    moreInfo: [
      "6 minute pro and cons",
      ["https://www.youtube.com/watch?v=FP1wTBM_8F8"],
    ],
    examples: [
      "Official showcase",
      ["https://www.squarespace.com/showcase"],
      "More examples for creatives/businesses",
      ["https://www.landing.gallery/website-builder/squarespace"],
      'SiteBuilderReport "55 Beautiful Examples of Squarespace Websites"',
      ["https://www.sitebuilderreport.com/squarespace-examples"],
      'Colorlib "21 Best Squarespace eCommerce Examples in 2025"',
      ["https://colorlib.com/wp/squarespace-ecommerce-examples/"],
    ],
    perfectIf: [
      "You want beautiful templates and zero fuss, you don't need tons of extra features.",
    ],
    skipIf: [
      "You want heavy customization or pixel-perfect control.",
      "Need a private gallery. If you're a creative that needs gallery software then Pixpa would be better for you. You can see a deeper comparison here:",
      ["https://www.youtube.com/watch?v=JkGh0W8j9f0"],
    ],
  },
  {
    id: 6,
    name: "Hostinger",
    tags: {
      pages: ["1 page"],
      shop: ["small shop"],
      "creative freedom": ["low customization"],
      POS: [] as string[],
      "learning curve": ["low difficulty"],
    },
    difficulty: "⭐⭐",
    cost: [
      "https://www.hostinger.com/pricing/website-builder",
      [
        "Premium website builder",
        ["$11.99/mo", "$3.49/mo with a 2 year sub"],
        "Business/E-commerce website builder",
        ["$13.99/mo", "$4.49/mo with a 2 year sub]"],
        "Free domain for a year for both plans.",
      ],

      "https://www.hostinger.com/ecommerce-website",
      [
        "This page goes into more detail about the Business/E-commerce website builder.",
      ],
    ],
    trial: [
      "30 day money back guarantee",
      "currently has a 14 day trial though it's a bit hidden",
      [
        "https://www.hostinger.com/support/10323594-how-to-try-hostinger-website-builder-for-free/",
      ],
    ],
    bestFor: [
      "For those that need a simple website:",
      ["Just text, videos, pictures, contact form or appointment form."],
      "Useful to create very simple websites for cheap",
      "E- Commerce is technically there for extra $$ but it has very minimal customization currently.",
    ],
    support: [
      "Live chat (24/7), email, no phone support",
      "Email (reply within 24 hours)",
      "https://www.hostinger.com/legal/customer-service-policy",
      "https://www.hostinger.com/contacts",
    ],
    migration: [
      "Not everything can be exported to WordPress, it's hit or miss.",
      [
        "https://www.hostinger.com/support/6572573-hostinger-website-builder-how-to-export-content-to-wordpress/",
      ],
    ],
    security: [
      "Handles security, you don't have to do anything.",
      ["https://www.hostinger.com/blog/hostinger-security"],
    ],
    accessibility: [
      "Couldn't find information about how accessible the templates are.",
      "However they have an article about how to make your site more accessible:",
      ["https://www.hostinger.com/tutorials/web-accessibility"],
      "How to add alt text on Hostinger:",
      [
        "https://www.hostinger.com/support/6466460-hostinger-website-builder-how-to-add-alt-text/",
      ],
    ],
    collaboration: [
      "Can share access with an employee, easy to edit site:",
      [
        "https://www.hostinger.com/support/1583777-how-to-share-access-to-your-account-at-hostinger/",
      ],
    ],
    ecommerce: [
      "You would need the business plan but its only suitable for small-medium businesses.",
      "https://www.hostinger.com/ecommerce-website",
      [
        '"Sell up to 1000 products and services, schedule appointments" ; so this is just for small to medium businesses.',
        '"Sell custom merch with built-in Printful integration"',
        '"Custom discount codes and gift cards"',
        '"Keep 100% of your profits with zero transaction fees" (but any payment providers you select might still have fees)',
      ],
      "https://www.websitebuilderexpert.com/website-builders/hostinger-website-builder-review/",
      [
        '"Its e-commerce features work best for smaller sellers. (The) inability to sell subscriptions and product bundles, and lack of advanced sales and marketing features can quickly limit businesses with larger inventories."',
        "Abandoned cart recovery",
        "100+ payment methods, such as Stripe and Apple Pay",
        "Customizable checkout options including checkout language and adding custom fields",
        "Tools for SEO, email, and marketing your business",
      ],
    ],
    appStore: ["No plugin store"],
    seo: [
      "For a simple local business, portfolio, or small shop with light SEO needs, Hostinger is usually totally fine.",

      "Hostinger's website builder is pretty good for basic SEO, especially for newer businesses that want a simple, low-cost setup. It gives you the essentials, but not the advanced SEO power you'd get with platforms like WordPress, Shopify, or even Wix.",

      "If you choose the Business Website Builder plan ($3.79/mo), you get access to Hostinger's AI SEO guidance. It walks you through titles, descriptions, keyword suggestions, and content tweaks.",

      "AI-generated content still needs human editing to avoid keyword stuffing or awkward phrasing.",

      "You can customize SEO settings for individual pages, products, and blog posts.",

      " Supports the core essentials:",
      [
        "Meta titles and descriptions",

        "Custom URLs",

        "Alt text for images",

        "Optimized heading structure",
      ],

      "The biggest limitation: there's no app store. So you can't fill in SEO gaps with plugins like image optimization, keyword research tools, or advanced analytics.",

      "It's missing more advanced features like:",
      [
        "Built-in image compression tools",

        "Rich schema customization",

        "Technical SEO controls (robots.txt editing, canonical tag tweaks, structured data beyond basics)",

        "Deep SEO performance analytics across pages",
      ],

      "Hostinger's builder is fast and lightweight, which does help SEO. Speed is one of its strengths compared to heavier builders.",

      "If you're planning to scale your SEO long-term (content-heavy blog, competitive niche, national audience), you may eventually outgrow the builder and move to WordPress or another platform.",

      "Hostinger provides an official SEO settings guide if you want a step-by-step walkthrough:",

      [
        "https://www.hostinger.com/support/6466320-hostinger-website-builder-seo-settings/",
      ],
    ],
    pros: [
      "Has templates that are created by the platform itself and are regularly updated",
      "Easy to use and edit",
    ],
    cons: [
      "Limited customization options",
      "eCommerce options are currently limited",
      "No marketing options, limited analytics",
    ],
    moreInfo: [] as string[],
    examples: [
      '"20 Inspiring Hostinger Website Builder Examples"',
      ["https://www.sitebuilderreport.com/inspiration/hostinger-websites"],
    ],
    perfectIf: [
      "If you just need a simple website with text, images and maybe a contact form. You don't need all the bells and whistles (addons/plugins).",
    ],
    skipIf: [
      "You want to heavily customize the look of your website, or you want plugin/addons to add extra features to your website.",
      "Or you want to do eCommerce (it technically has an eCommerce plan, but it's very limited)",
    ],
  },
  {
    id: 7,
    name: "Square",
    tags: {
      pages: ["multi-page"],
      shop: ["small shop"],
      "creative freedom": ["low customization"],
      POS: ["built in POS"],
      "learning curve": ["low difficulty"],
    },
    difficulty: "⭐⭐",
    cost: [
      "https://squareup.com/us/en/pricing",
      [
        "Free",
        [
          "Processing fees.",
          "It's website builder square online has very limited themes for the free plan.",
        ],
        "Plus",
        ["$49/mo + processing fees."],
        "Premium which is more $$$.",
        '"No hidden fees or locked-in contracts. Cancel or switch plans anytime."',
      ],
    ],
    trial: ["30 day trial"],
    bestFor: [
      "Small to medium businesses that don't need many e-commerce options:",
      [
        "Pop up shops",
        "Bookstores",
        "Cafés",
        "Appointment-based businesses",
        "Artists and creators",
        "Service businesses",
        "Food trucks",
        "Quick-serve",
      ],
      "Owners who want something simple + affordable",
      "Hybrid businesses (retail + café, etc.)",
      "Product sellers who don't rely heavily on blog SEO or content marketing",
    ],
    support: [
      'Chat (The ai assistant will reply first but they state "If you prefer, you can also chat with a live agent and Square will pair you with the first available Square Support advocate for support.")',
      "Email (replies within 24-48 hours)",
      "Has phone support:",
      [
        "Free: 6am - 6pm M-F for first 90 days",
        "Plus: 6am-6pm PT M-F",
        "Premium: 24/7",
        "You can check for updated support hours here: https://squareup.com/us/en/online-store/plans#support",
      ],
      "https://squareup.com/help/us/en/article/4993-contact-square-support",
    ],
    migration: [
      "You can export certain data like customers, item library, orders and reports, but you can't export the website itself.",
    ],
    security: [
      "Handles security, you don't have to do anything.",
      '"Our free web hosting platform provides exceptional speed, performance, and security. With Square, you’ll experience no restriction on bandwidth. Your website includes a free SSL certificate, which ensures that visitors navigate your website over a secure 128-bit encrypted connection. Plus, SSL also helps power eCommerce by enabling customers to check out directly on your domain.',
      [
        'Quote is from FAQ for "Do I get free web hosting when I create a website with Square?"',
        "https://squareup.com/us/en/online-store",
      ],
    ],
    accessibility: [
      "The square checkout has accessibility options:",
      "https://squareup.com/help/us/en/article/8337-set-up-accessibility-features",
      "Unclear how accessible the square online themes are but there are some widgets to help check your accessibility.",
      "However, the widgets aren't well regarded and are seen as an expensive bandaid solution.",
      "https://www.reddit.com/r/smallbusiness/comments/1ntz07u/comment/nm8t7z4/",
      [
        "\"I bet those $3K-$5K/year services are selling you the same $49/month widget with consulting markup. And honestly, the widgets (accessiBe, UserWay, etc.) don't actually solve the problem - they just add a toolbar that overlays your site. The underlying code issues are still there, which means you're still technically non-compliant. The real issue: if you get a demand letter, the lawyer will point out that the widget doesn't fix the actual WCAG violations. You're paying for something that doesn't protect you legally. ",
        " Better approach:  Run an actual scan to see what's broken (most issues are fixable), Fix the common stuff yourself:",
        [
          "Add alt text to images",
          "Fix color contrast",
          "Make sure forms have proper labels",
          "Check keyboard navigation",
        ],
        "For complex issues, hire a dev for a one-time fix. Once it's actually fixed, you don't need an ongoing subscription. Just rescan periodically when you add new features.",
      ],
    ],
    collaboration: [
      "Giving other users basic permission is free",

      "To give an employee access to edit the Square Online website itself, you must assign them a permission set that includes Full Access to the account. This permission level still prevents them from making major account changes like managing bank accounts, but grants the necessary permissions for website building and editing.",
      [
        "https://community.squareup.com/t5/Online-Store/How-to-add-another-user-to-edit-build-Square-Online-website/td-p/198964",
      ],

      'If you just want a team member "to manage the item catalog, orders, shipping and marketing settings associated with Square Online" instead of changing the visuals of the site itself, you can give them a specific permission for that.',
      [
        "https://community.squareup.com/t5/Online-Store/How-can-I-give-my-employees-team-members-access-to-my-Square/m-p/200013",
      ],

      "Note that basic team permissions are free, but if you need to create custom permission sets for different access levels to your online store and other features, you may need a subscription to the paid Team Management plan.",
      ["https://squareup.com/us/en/staff/advanced-access"],

      "Guide for how to give a team member Full Access permission",
      [
        "https://www.gentlefrog.com/how-to-add-a-full-access-team-member-to-square/",
      ],
    ],
    ecommerce: [
      "Low upfront cost, great for small to medium buisnesses",

      "Perfect if you don't need hardcore features. Pay per transaction, no monthly fees for a basic account",

      "The cheapest path to a functional POS with good online ordering tools",

      "Not ideal for large retail chains since inventory & multi-location tools are basic",

      "E-commerce features are weaker than Shopify, best to use shopify if you want a strong e-commerce platform. If you're a small business though, Shopify would be overkill.",
      "If you need a highly unique checkout flow, square might be too rigid for you",
    ],
    appStore: [
      "Has an appStore",

      "Some apps will cost extra, but that's the same for all website builders.",

      "https://squareup.com/us/en/app-marketplace",

      "https://squareup.com/help/us/en/article/5437-manage-your-square-app-marketplace-subscriptions",
    ],
    seo: [
      "when it comes to SEO, it's definitely on the basic end. However for small business, restaurants and cafes and small service, Square's simple SEO settings will likely be enough.",

      "What Square does well:",
      [
        "Covers the fundamentals:",
        [
          "You can set meta titles, descriptions, custom URLs, heading tags, and image alt text.",
          "Simple interface:",
          "SEO fields are easy to find and add, so beginners don't feel overwhelmed.",
          "Delivered by Weebly's backend: Square Online still uses Weebly's framework underneath, so it inherits the basic SEO tools that platform built over the years.",
        ],
      ],
      "Where it struggles:",
      [
        "Limited SEO flexibility",
        "Compared to Shopify, WordPress, or even Ecwid, Square doesn't offer much in the way of advanced SEO customization.",
        "No structured data controls",
        "No custom schema markup",
        "No canonical tag editing",
        "No robots.txt customization",
        "No advanced URL structure management",
        "No strong app market for SEO. If the built-in SEO tools fall short, there's no plugin ecosystem to fill the gaps, unlike Shopify or WordPress.",
        'Some users report weaker ranking potential. Not because Square "can\'t rank," but because it lacks the deeper SEO tuning options needed in competitive niches.',

        '"SEO isn\'t its strongest suit compared to Shopify or even Ecwid. While you can do basic SEO (meta titles, descriptions, alt text), its customization and flexibility for advanced SEO strategies (like structured data or technical SEO tweaks) are limited"',

        [
          "https://www.reddit.com/r/ecommerce/comments/1i7ewhn/comment/m8p8jor/",
        ],
      ],
      "Their official SEO guide for beginners is straightforward and practical.",
      [
        "https://squareup.com/us/en/the-bottom-line/starting-your-business/seo-guide-for-business",
      ],

      "17-minute tutorial on setting up SEO",
      ["https://www.youtube.com/watch?v=QVJ4dQ2P-xk"],
    ],
    pros: [
      "You can learn in a day, clean user interface",

      "Staff management starting on the square plus plan",

      "They have a website builder as well (square online, which is included in every square plan, even the free one)",
    ],
    cons: [
      "Limited customization options, square's online websites will look basic.",
    ],
    moreInfo: [] as string[],
    examples: [
      "10 Inspirational Square Online Store Examples",
      ["https://alvarotrigo.com/blog/square-online-store-examples/"],
    ],
    perfectIf: [
      "You are a small to medium business that wants an easy way to handle mobile/ online payments",
    ],
    skipIf: [
      "You want your website to look more polished or you want a full fledged eCommerce business",
    ],
  },
  {
    id: 8,
    name: "Wix",
    tags: {
      pages: ["multi-page"],
      shop: ["small shop"],
      "creative freedom": ["medium customization"],
      POS: ["built in POS"],
      "learning curve": ["medium difficulty"],
    },
    difficulty: "⭐⭐⭐",
    cost: [
      "https://www.wix.com/plans",
      [
        "Free",
        ["With Wix ads", "You have to use a wixsite.com domain name."],
        "Light",
        ["$17/mo", "No eCommerce capabilities, need Core or higher."],
        "Core",
        ["$29/mo"],
        "And some more expensive plans",
      ],
    ],
    trial: ["14 day trial for premium plans"],
    bestFor: [
      "Creative service businesses.",
      "Small shops that want a cute storefront.",
      "Personal brands.",
      "Service businesses with scheduling.",
      "A business that wants greater control how their site looks.",
      [
        "And doesn't mind that it will take some more time to get it to look just right, while not dealing with the complexity of Webflow or WordPress",
      ],
    ],
    support: [
      "24/7 chat, email, phone hours vary based on what language you speak:",

      "Phone: (English) Monday-Friday 2AM-6PM EST",

      "https://support.wix.com/en/article/contacting-wix-customer-care-for-support",
    ],
    migration: [
      "Can't be migrated. If you want to move, you'd have to rebuild from scratch elsewhere.",
      [
        "https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere",
      ],
    ],
    security: [
      "Handles security, you don't have to do anything.",
      ["https://www.wix.com/website-security"],
    ],

    accessibility: [
      '"Features comply with the highest global standards (WCAG 2.0)." and they have guides to make sure your website is accessible',

      ["https://www.wix.com/accessibility"],

      "These specific template were built with accessibility in mind (though you'd still have to manually enter alt text for images, which would be the same for any accessible template):",
      ["https://es.wix.com/website/templates/html/accessible"],
    ],

    collaboration: [
      "https://support.wix.com/en/article/inviting-people-to-contribute-to-your-site",
      [
        "More limitations. On a free Wix site (non-Studio), you only get 1 person who can be invited as a collaborator.",
        "Theres different Collaborator roles, such as Admin (Co-Owner), Website Manager and WEbsite Designer.",
        "If you expect more than one person to edit the site you'll need a paid plan.",
      ],
    ],
    ecommerce: [
      "If you need very basic or minimal e-commerce, their e-commerce will likely be enough for your business. If your business is mostly e-commerce then Shopify would be better.",
      "https://www.wix.com/ecommerce/website",
      [
        "E-commerce is a part of the Core and higher tier plans. The website makes it sound like it's a separate plan but it's just going into detail about the eCommerce feature.",
        '"Add an extensive catalog of products to your online store with up to 1,000 variants each"',
        'Dropshipping: "Add ready-to-sell products from Wix\'s dropshipping platform, or third-party apps, and let suppliers take care of fulfillment."',
        'Print on Demand: "Add your designs to hundreds of high-quality products, from t-shirts to headphones and let suppliers ship your custom merchandise directly to customers."',
        'Digital Products: "Sell digital products, such as music files, ebooks, online courses, images or gift cards."',
        'Subscriptions: "Easily create and manage recurring products and sell subscriptions to generate a steady revenue stream."',
        'Marketplace: "Reach shoppers on Google, eBay, Etsy, Amazon, Facebook, Instagram, TikTok and Wish, and manage it all from your Wix dashboard."',
      ],
      "To see a detailed breakdown of the e-Commerce capabilities of each plan scroll down to: Complete eCommerce platform",
      ["https://www.wix.com/plans"],

      "E-commerce takes a bit to set up, but you can do some decent customization with your shop (product filters, customize checkout, abandoned cart recovery)",

      "Wix also has a POS system, for if you need to make sure your digital and physical store are linked tightly",
      ["https://www.wix.com/pos"],
      [
        "My knee jerk reaction is to be wary since the POS is built as an add on for a website builder than the business focus being the POS, but some people seem to have a good experience? If you want a well known POS square would be ideal.",

        'About the POS:" Wix also allows me to have a plan B if the POS has issues for any reason....my phone. I can use my phone as a POS if the POS goes down or has connectivity issues, or the card reader dies because it got wet at a farmers market. The fact that I have an in pocket contingency plan at no extra cost is invaluable. We do farmers markets 4-5 days a week running 50-200 transactions per day."',

        [
          "https://www.reddit.com/r/smallbusiness/comments/1b6cqku/comment/n5umkat/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
        ],
      ],
      "More Reviews:",
      [
        "https://www.business.com/reviews/wix/",
        "https://www.merchantmaverick.com/reviews/wix-pos-review/",
      ],
    ],
    appStore: [
      "Has more apps/plugins than Squarespace, over 300.",
      "https://www.wix.com/app-market",
    ],
    seo: [
      "Wix used to have a rough reputation for SEO many years ago but that version of Wix doesn't exist anymore. Today, Wix has some of the strongest SEO tools of any no-code builder. It's beginner-friendly on the surface, but surprisingly advanced underneath.",

      "What Wix does really well:",
      [
        "SEO tools go way beyond the basics",
        " Wix includes features most drag-and-drop builders still don't:",
        [
          "Built-in structured data / schema markup (auto-generated for many page types)",
          "Canonical tags to avoid duplicate-content issues",
          "Automatic image compression and conversion (WebP)",
          "Robots.txt customization",
          "Editable page URL structure",
          "Breadcrumbs for improved indexing",
          "Accelerated Mobile Pages (AMP) for blogs (optional)",
        ],
        " SEO Wiz: Genuinely helpful for beginners. Wix's SEO Wiz gives you a personalized SEO plan based on your:",
        [
          "Industry",
          "Goals",
          "Keywords",
          "It walks you through, step-by-step, what to fix and why.",
        ],
        "Integrated analytics. Easy connection to Google Analytics, Search Console, and the built-in analytics dashboard.",
        "Fast hosting & performance updates. Wix now uses a global CDN, caching, lazy loading, and other optimizations behind the scenes. (Wix used to be slow. Not anymore.)",
      ],
      "Where Wix struggles:",
      [
        "Code bloat compared to custom or lightweight platforms",
        "Even with their performance improvements, Wix sites can still be heavier than WordPress or custom-coded sites.",
        "It's fine for most small businesses, but large content-heavy sites may feel the edges.",
      ],
      "Helpful resources:",
      [
        "Wix SEO Learning Hub: https://www.wix.com/seo/learn",
        "Official SEO Guide: https://support.wix.com/en/article/seo-checklist",
        "Structured data guide: https://support.wix.com/en/article/about-wix-seo-structured-data",
        "SEO Wiz walkthrough (video): https://www.youtube.com/watch?v=dF9X0ag5XyY",
      ],
    ],
    pros: [
      'Offers a free plan, though you\'ll have to deal with the "created by Wix" header.',
      "More templates to choose from",
      "Marketing templates, basic automation and integration with site behavior (sending emails based on users actions), app marketplace gives you access to chat bots and referral programs.",
      "Robust analytics: emails, bookings, e-commerce all in one hub.",
    ],
    cons: [
      'Can be a bit finicky to get it to look just right, might look off on different size screens. Trial and error to get it to look how you want. The "strip" layout is a bit weird to figure out.',
      "Can't customize as much as you can with WordPress, but more customization options than most other builder.",
      "All the options can be overwhelming at first",
      "Template lock in: once you choose a template and start editing, you can't switch your progress to another template. You'd have to re-add everything from scratch to that new template.",
      "Blogging is good, but not amazing. It's definitely usable, but serious content marketers may prefer WordPress for ultimate control.",
    ],
    moreInfo: [
      "Wix Review 2025: The Brutal Truth After Building 30+ Sites",
      ["https://www.youtube.com/watch?v=FSpGyiRX3ck"],
    ],
    examples: [
      "Blog post with 15 outstanding Wix examples",
      ["https://www.wix.com/blog/wix-websites-examples"],
      "Gallery of real-life Wix websites",
      ["https://www.sitebuilderreport.com/wix-examples"],
    ],
    perfectIf: [
      "You are willing to spend a bit more time editing in return for having access to more templates, or you need more apps to add more features",
    ],
    skipIf: [
      "You might migrate later (it's not easy). Or you don't want to fiddle with an editor too much to get everything looking right.",
    ],
  },
  {
    id: 9,
    name: "Siimple",
    tags: {
      pages: ["1 page"],
      shop: [],
      "creative freedom": ["low customization"],
      POS: [] as string[],
      "learning curve": ["low difficulty"],
    },
    difficulty: "⭐",
    cost: [
      "https://getsiimple.com/#pricing",
      [
        "It just has one plan.",
        ["$10/mo", "$8/mo (if you pay for a year)"],
        "Special note, you can make your site for free. You only start paying when you publish it.",
      ],
    ],
    trial: [
      "No trial, but you can build your entire site for free before publishing.",
      ["The free domain will use the simple domain"],
    ],
    bestFor: [
      "Local service businesses",

      "Those who need a simple one page website, with a basic form.",
      ["Small businesses", "Creatives", "Freelancers."],

      "Need very basic e-commerce",
      ["you could attach a payment processor like paypal, etc."],

      "Owners who don't want to fuss with plugins or complex settings",
    ],
    support: [
      '"Siimple is made with care and attention my team of 3 friends that have been building websites for over 2 decades. If anything gets tricky, you can talk to a real person immediately."',
      [
        "https://getsiimple.com/blog/why-website-builders-like-wix-squarespace-and-wordpress-might-be-hurting-your-local-business/",
      ],

      "They have a chat feature, but it's not clear what the hours are.",
    ],
    migration: ["Would need to start from scratch."],

    security: [
      "Handled for you, automatic updates.",
      '"We automatically backup, update and secure your site so you never have to worry.',
      ["https://getsiimple.com/?ref=getsiimple.com"],
    ],

    accessibility: [
      "Strong accessibility features",
      "\"Accessibility features aren't just nice-to-have — they're part of the default setup. Siimple's templates are mobile-first, use readable fonts, maintain strong color contrast, and follow clean navigation structures that work with assistive technologies.",
      [
        "https://getsiimple.com/blog/the-honest-truth-about-siimple-website-builder/",
      ],
    ],
    collaboration: [
      "Very limited, Siimple is primarily designed as a one-user, simple builder that keeps editing centralized and minimal, rather than as a team environment like larger builders offer.",

      "Its easy enough to edit that even if you have to share your login with employees it'd be easy for them to update the site.",
      [
        "This isn't ideal security wise, but with temporary shared credentials with careful password management this could work",
      ],

      "You can share the preview link so teammates can review the site design before it’s published (but not edit it).",
      [
        "https://docs.getsiimple.com/en/articles/10717345-how-can-i-share-a-preview-of-my-site-with-someone",
      ],
      "You can clone the site and have someone else edit the copy. That’s useful if you want a developer to customize a separate project and then manually merge changes later.",
      [
        "https://docs.getsiimple.com/en/articles/9757948-how-to-clone-or-duplicate-your-site?utm_source=chatgpt.com",
      ],
    ],
    ecommerce: [
      'no e-commerce features (creating a shop, managing inventory, shopping cart) BUT you can "connect your own checkout or payment processor (like Paypal, Gumroad or Stripe!)"',
      "how to use paypal, gumroad or stripe https://docs.getsiimple.com/en/articles/9830861-does-siimple-offer-e-commerce-or-shop-features",
    ],
    appStore: ["no app store"],

    seo: [
      "Siimple is, well simple but in this case that's a good thing. It's built for fast-loading, clean, lightweight websites, which gives small local businesses a solid SEO foundation right out of the box.",
      "What Siimple does well:",
      [
        "Excellent for Local SEO",
        [
          'Their templates are intentionally minimal, fast, and mobile-friendly; all ranking signals Google loves for local businesses. If your goal is to show up in "near me" searches, Siimple won\'t get in your way.',
        ],
        "Super clean, lightweight pages",
        "No bloated scripts, no heavy apps, no visual-builder clutter.This often means:",
        [
          "Faster loading (good for SEO)",
          "Better Core Web Vitals",
          "Cleaner HTML for Google to crawl",
          "Straightforward SEO fields",
        ],
        " You can easily edit:",
        [
          "Page title",
          "Meta description",
          "Meta image",
          "URL slug",
          "Alt text for images",
        ],
        "This covers the core SEO settings most small businesses need.",
        "Beginner-friendly SEO guidance",
        "Their SEO guide is genuinely helpful and written in plain English:",
        [
          "https://getsiimple.com/blog/how-a-siimple-website-can-get-your-local-business-found-on-google/",
        ],
      ],
      "Where Siimple is limited:",
      [
        "No advanced SEO tools. Unlike Wix, WordPress, or Webflow, Siimple doesn't offer:",
        [
          "Structured data controls",
          "Custom schema markup",
          "301 redirect management",
          "Robots.txt editing",
          "Canonical tags",
          "SEO analytics or keyword tools",
          "App marketplace for SEO add-ons",
        ],
        "It's intentionally simple, but that means fewer levers to pull if you're in a competitive niche.",
        "Not ideal for content-heavy SEO strategies. There's no blog, no complex sitemap control, and no tools for long-form content. If content marketing is part of your plan, you'll quickly outgrow it.",
      ],
    ],
    pros: [
      "You can bring your own domain or purchase the domain through them. Or use their free Siimple domain.",
      "https://getsiimple.com/",
      [
        '"You can cancel your subscription at any time. There are no contracts or hidden fees."',
        '"Version History and Backups"',
      ],
    ],
    cons: [
      "No blogging features",
      "No multi page support",
      "Won't scale with your business if it grows past a one page site",
    ],
    moreInfo: [] as string[],
    examples: [] as string[],
    perfectIf: [
      "You just need a simple one page website with minimal upkeep, with no blogging. It does have a contact form that will send messages to your email.",

      "Need a simple site where any purchases would be done through a payment processor (like Paypal, Gumroad or Stripe)",

      "Heavy focus on local SEO makes it great for localized small businesses",
    ],
    skipIf: [
      "You need multiple pages, blogging or a formal e-commerce features.",
    ],
  },
  {
    id: 10,
    name: "Shopify",
    tags: {
      pages: ["multi-page"],
      shop: ["big shop"],
      "creative freedom": ["medium customization"],
      POS: ["built in POS"],
      "learning curve": ["medium difficulty"],
    },
    difficulty: "⭐⭐⭐",
    cost: [
      "https://www.shopify.com/pricing",
      [
        "Basic (solo)",
        ["$29/mo"],
        "Grow",
        ["$79/mo"],
        "There are more expensive plans as well",
        "3 day free trial + $1/mo for the first 3 months of some plans",
      ],
    ],
    trial: ["3 day free trial + $1/mo for the first 3 months of some plans"],
    bestFor: [
      "For online businesses that sell lots of items and expect to grow.",
      [
        "Online retail stores",
        "DTC (direct-to-consumer) brands",
        "Subscription boxes",
        "Print-on-demand businesses",
        "Dropshipping stores",
        "Apparel, skincare, supplements, merch",
      ],
      "Businesses with lots of SKUs or variants",
      "Businesses selling internationally, since it handles multi-currency, multi-country selling",
    ],
    support: [
      "Varies based on your plan, but chat is available for all plans 24/7",
      "Phone: Shopify Plus and Retail plans only",
      "Email: Shopify Plus and Retail plans only",
      '"If you use a free Shopify theme and are on the Basic plan or higher, then you get up to 60 minutes of free design support (in 15-minute increments) for small theme changes."',
      '"For paid third-party themes, support is provided by the theme developer, not Shopify Support. You can access theme documentation and contact developer support through your Shopify admin."',
      "https://help.shopify.com/en/manual/your-account/contact-shopify-support",
      "https://help.shopify.com/en/manual/online-store/themes/theme-support#where-to-find-support-for-your-theme",
    ],
    migration: [
      "Very limited, you can export your stores data but the theme is specific to shopify.",
      "You'd basically need to hire a developer to fully migrate or just start from scratch on the new platform.",
      ["https://wpcreative.com.au/convert-shopify-theme-to-wordpress/"],
    ],
    security: [
      "Handles security, you don't have to do anything.",
      "Their site are PCI compliant, which meanns it securely processes and protects cardholder information",
      ["https://www.shopify.com/security?country=us&lang=en"],

      "Free SSL certificate",
      [
        "Click on full list of features and under Hosting and administration",
        "https://www.shopify.com/pricing",
      ],
    ],
    accessibility: [
      "There are accessibility guides and more accessible themes, but you'd also have to be careful if your plugins are accessible as well.",
      "Guide on how to make your site accessible:",
      [
        "https://help.shopify.com/en/manual/online-store/themes/customizing-themes/accessibility",
      ],
      "These are some of the more accessible themes:",
      ["https://accessibe.com/blog/knowledgebase/accessible-shopify-themes"],
      "Though the plugins/ apps you use might not be as accessible as your theme.",
    ],
    collaboration: [
      "You can easily add collaborators (e.g., developers, designers, agencies) for free to make limited edits, but staff accounts would require the pricey $79/mo plan",
      [
        "https://help.shopify.com/en/manual/your-account/users/security/collaborator-accounts",
      ],

      "https://help.shopify.com/en/manual/your-account/users/users-plan-requirements#staff-account-limits",

      [
        "Can easily personalize staff permissions BUT the basic plan has 0, you can't even buy 1 staff account to use with the basic plan.",
        "You'd need to buy the pricey $79/mo grow plan to get any staff accounts (5 staff)",
      ],
      "How to edit staff permissions",
      [
        "https://community.shopify.com/t/how-can-i-view-and-edit-staff-privileges-on-my-website/78602",
      ],
      "Without staff access on Basic, people often rely on collaborators for external tasks like design, coding, or marketing support",
      [
        "https://community.shopify.com/t/understanding-changes-to-staff-accounts-in-basic-plan/292910",
      ],
    ],
    ecommerce: [
      "Shopify was made for E-commerce.",

      "Unlimited products (though they'll ban you if you share illegal or NSFW products)",

      "Can dropship with shopify's network",

      "Marketing, abandoned checkout recovery, discount codes",

      "They make it easy to manage your inventory, order fulfillment, etc, though there will be transaction fees",

      "Basic and plus plans have limited checkout customization options, the pricier plans have more customization options.",

      'Scroll down to "Full list of features" and click to see what features are available for every plan: https://www.shopify.com/pricing?country=us&lang=en',
    ],
    appStore: [
      "Over 8000 Apps you can add to add features to your site (at various prices).",
    ],
    seo: [
      "Shopify is one of the strongest e-commerce platforms for SEO, especially if you have a real online store with lots of products. It comes with well-structured code, fast hosting, and a huge ecosystem of SEO tools and apps.",
      "What Shopify does well:",
      [
        "Great built-in SEO foundations. Shopify automatically handles a lot of the technical stuff for you:",
        [
          "Clean, readable URLs",
          "Automatic sitemap generation",
          "Auto-generated canonical tags",
          "Fast hosting + global CDN",
          "SSL certificates built-in",
          "Mobile-responsive themes",
          "Structured data baked into most modern themes",
          "These are things many other builders don't do as well.",
        ],
        "E-commerce SEO is where Shopify shines. Shopify is built to structure and optimize:",
        [
          "Product pages",
          "Collections",
          "Inventory-heavy catalogs",
          "Dynamic filtering & variations",
        ],
        "Easy access to SEO settings. For each page, product, and blog post you can edit:",
        [
          "Meta title",
          "Meta description",
          "URL slug",
          "Alt text",
          "Visibility settings",
        ],
        "Huge SEO app ecosystem. You can add apps to help with:",
        [
          "Image optimization",
          "Broken link detection",
          "Structured data enhancements",
          "Keyword research",
          "Automated meta tag suggestions",
          "301 redirects",
          "SEO audits and recommendations",
          "(SEO apps are a big reason many stores rank well on Shopify.)",
        ],
      ],
      "Where Shopify is limited:",
      [
        " Limited control over URL structure. Shopify forces certain URL patterns you can't change:",
        [
          "/products/",
          "/collections/",
          "/pages/",
          "Not a dealbreaker, but advanced SEO users sometimes dislike this.",
        ],
        "Apps can slow your site if you install too many. Speed matters for SEO, so owners need to stay mindful here.",
        "Theme code quality varies",
        [
          "Most modern themes are clean and optimized.",
          "Older or poorly coded themes can drag your SEO down unless improved.",
        ],
        "Blog is decent, but not as strong as WordPress for content-heavy SEO",
        [
          "If your strategy revolves around blogging and long-form content, Shopify isn't the best choice.",
        ],
      ],
      "Beginner-friendly SEO resources",
      [
        "Shopify's own guides are great for non-techy business owners:",
        [
          "https://help.shopify.com/en/manual/promoting-marketing/seo",
          "https://www.shopify.com/blog/shopify-seo#",
        ],

        "And this is a solid no-fluff walkthrough: https://www.youtube.com/watch?v=LMGj7N2iW2A",
      ],
    ],
    pros: [
      "The sections are built to be easy to edit, and to look good on any size screen (be responsive).",

      "It now has a drag and drop page builder: though you can use third party apps to add more advanced drag and drop features.",
      ["https://www.shopify.com/website/builder"],
      "Natively supports",
      ["Google shopping", "TikTok", "Instagram / Facebook shopping"],
    ],
    cons: [
      "Less creative freedom",

      "Learning curve for advanced features like SEO, analytics, automation flows",

      "Shopify can ban your store if it suspects you're a bot, selling prohibited items, running multiple brands in the same store (they want a store for each brand), and various other reasons. You can speak to shopify support on the off chance it does happen to you.",
    ],
    moreInfo: [] as string[],
    examples: [
      "Official store examples",
      ["https://www.shopify.com/examples"],

      "More detailed list",
      ["https://www.sitebuilderreport.com/shopify-stores-examples"],
    ],
    perfectIf: [
      "You have a medium or large eCommerce business.",

      "Businesses with lots of SKUs or complex product setups",

      "Brands that want strong SEO without touching code",
    ],
    skipIf: [
      "You're not running a store, it's overkill.",

      "Businesses needing total control over URL structure or advanced technical SEO",

      "Brands focused mostly on blogging/SEO content marketing",
    ],
  },
  {
    id: 11,
    name: "Ecwid",
    tags: {
      pages: ["multi-page"],
      shop: ["small shop"],
      "creative freedom": ["low customization"],
      POS: ["built in POS"],
      "learning curve": ["medium difficulty"],
    },
    difficulty: "⭐⭐⭐",
    cost: [
      "https://www.ecwid.com/pricing",
      [
        "Starter",
        ["$5/mo (same price to pay annually or monthly)"],
        "Venture",
        ["$30/mo", "$25 if paid annually"],
        "Business",
        ["$55/mo", "$45 if paid annually"],
        "Unlimited:",
        ["$130/mo", "$105 if paid annually"],
      ],
    ],
    trial: ["None"],
    bestFor: [
      "Smaller businesses",
      [
        "Local service businesses (cleaners, handymen, tutors, landscapers)",
        "Freelancers & consultants",
        "Coaches",
        "Therapists",
        "Personal brands",
        "Side projects / hobby businesses",
      ],
    ],
    support: [
      "All plans have email support, chat and phone depends on your plan",
      "Chat: Venture plan or above required (24/7 monday through friday)",
      'Phone: Business or above required: "Call-backs are available 2PM-10PM PDT, Monday-Friday in English. Scheduling via chat is required"',
      "Store Customization help (Annual Business or unlimited plan required): 2 to 6 hours of help customizing your shop",
    ],
    migration: [
      "Shop can be exported but the Ecwid website would have to be rebuilt.",
      "You'd use something like cart2Cart to fully export the site.",
      "Ecwid lets you export/import product catalogs via CSV.",
      [
        "https://www.shopping-cart-migration.com/shopping-cart-migration-options/24788-ecwid-to-shopify-migration",
      ],
    ],
    security: [
      "Handled by Ecwid.",
      '"Ecwid uses Amazon Web Services (AWS), so your store inherits some great security features, and both AWS and Ecwid are Level 1 PCI DSS certified."',
      [" https://www.forbes.com/advisor/business/software/ecwid-vs-shopify/"],
    ],
    accessibility: [
      "Strong accessibility features.",
      "https://support.ecwid.com/hc/en-us/articles/360004696179-Meeting-accessibility-guidelines-ADA",
      [
        '"Ecwid is designed with accessibility in mind and you can be sure that your Ecwid store is a welcoming place for everyone. Your store doesn\'t have any access barriers, you can sell online to people with disabilities - to visually-impaired buyers that have to use screen readers for browsing online shops or buyers that navigate with keyboard only. And you can be sure that your store follows ADA standards (ADA is short for the Americans with Disabilities Act, which became law in 1990)."',
        '"You can use the store with Instant Site that successfully passed accessibility tests along with Ecwid storefront."',
      ],
    ],
    collaboration: [
      "Ecwid doesn’t have a separate “collaborator account” concept like Shopify, giving someone access generally means giving them a staff account (which requires you to be on the right plan).",
      "You would need a business plan to be able to give specific editing permissions to staff, designers, developers etc.",
      [
        "https://support.ecwid.com/hc/en-us/articles/115005355089-Adding-and-managing-staff-accounts",
      ],
      "Ecwid plans & staff account limits",
      [
        "https://support.ecwid.com/hc/en-us/articles/207100729-Ecwid-plans-and-features#-compare-plans-and-features",
      ],
      "Ecwid lets you set exactly what each staff member can access, with 7 different permission types.",
      [
        "https://support.ecwid.com/hc/en-us/articles/115005355089-Adding-and-managing-staff-accounts?#-available-staff-permissions",
      ],
      "If you need just temporary access (like a developer), you can invite them as staff and then remove them after work is done.",
      "Ecwid also has a directory of official Ecwid Experts you can hire for help with setup, design, and customization.",
      ["https://www.ecwid.com/experts"],
      "How to add a staff member",
      [
        "https://support.ecwid.com/hc/en-us/articles/115005355089-Adding-and-managing-staff-accounts",
      ],
    ],
    ecommerce: [
      "Ideal for a small to medium sized business, not a full enterprise shop.",
      "https://www.ecwid.com/pricing",
      [
        "To see a breakdown of all the features available to each plan use the link above:",
        "No transaction fees through them (though third party payment processors might still charge fees).",
        "Can sell physical or digital products, manage orders & inventory, and integrate with many payment gateways.",
        "Mobile POS requires Venture or higher plans.",
        "POS integration with Lightspeed Retail POS requires the business or higher plan.",
        "POS integration with Square, Clover is only available on the unlimited plan.",
        "Supports multi-channel selling: storefront + social media shops + marketplace integrations, which is useful if you want to reach customers outside just your website",
        "Abandoned cart emails only available on business plan or above.",
      ],
      "https://www.forbes.com/advisor/business/software/ecwid-vs-shopify/",
      [
        '"Ecwid works with over 70 payment providers worldwide, including PayPal and Stripe, so there\'s a great chance we support your favorite option."',
        '"Email marketing, discount management, product variations and automated sales tax calculations, and it handles physical, subscription and digital product types.',
      ],
    ],
    appStore: [
      "App store is much smaller than Shopify's",

      "https://www.ecwid.com/apps/Featured",
    ],
    seo: [
      "If you're embedding Ecwid into another website, your overall SEO strength depends partly on the platform you're attaching it to (WordPress, Wix, Squarespace, etc.). Ecwid handles the product-level SEO, while the main site builder controls most of the technical SEO.",
      "However you can also use Ecwid's very basic site builder instead of embedding your Ecwid store in a separate site.",
      "What it does well:",
      [
        "Basic built-in SEO tools:",
        [
          "Meta titles",
          "Meta descriptions",
          "Product URLs",
          "Image alt text",
          "SEO-friendly product slugs",
          "Open Graph tags (for social sharing)",
        ],
        "Automatically generates structured data (schema).",
        [
          "This helps search engines understand product info (price, stock status, descriptions, and more), which is a major SEO advantage for online stores.",
        ],
        "Fast, lightweight templates:",
        [
          "Ecwid's Instant Site is optimized for speed, which boosts both rankings and conversion rates.",
        ],
        "Good for local SEO:",
        [
          "Their Instant Site is simple, clean, and mobile-friendly, helping small businesses get found in local search.",
        ],
        "301 redirects are supported:",
        ["Useful if you rename products or reorganize your catalog."],
      ],
      "Where it is limited:",
      [
        "For anything advanced you'd rely on third-party tools or separate apps on the platform you're using (WordPress plugins, Wix apps, etc.).",
        [
          "Keyword analysis",
          "SEO auditing",
          "Structured data customization",
          "Image compression",
          "Canonical tag control",
          "Advanced technical SEO",
        ],
        "URL structure limitations",
        [
          "You can edit product URLs, but not the full path on certain platforms.",
          "Example: yoursite.com/store/productname",
          "The /store/ part often can't be removed.",
        ],
        "SEO depends heavily on the host website builder (if Ecwid is embedded):",
        [
          "A slow Squarespace site = a slow Ecwid store.",
          "A poorly structured Wix site = Google judges the whole thing.",
        ],
      ],
    ],
    pros: [
      "Largely easy to use, but the initial process can be a bit difficult at first since the initial shop setup controls are lumped together.",

      '"Can set up a store in 10-15 minutes". Pick a template, add content + products, and publish.',
      ["https://www.youtube.com/watch?v=UWT2vDUOUFc"],

      "https://www.ecwid.com/pricing",
      [
        "Nonprofits get 6 months of Venture plans for free:",
        [
          '"Tell us more about your nonprofit and get 6 months of Venture for free." Scroll down the pricing page to "Do you offer any discounts for nonprofit organizations?" and click it to see the link to the form.',
        ],
        '"All Ecwid plans come with unlimited bandwidth and storage at no extra cost."',
      ],
      '"A free web address on an Ecwid subdomain, with options to connect a third-party domain or purchase one directly from the store admin."',
      [
        "https://support.ecwid.com/hc/en-us/articles/115005609945-Ecwid-overview",
      ],
    ],
    cons: [
      "Some plugins have left ecwid so some businesses have had to move to shopify, if they needed those integrations.",

      "Would need the venture plan or higher to use a custom domain, but each plan has a free .company.site domain",

      "For large shops, or shops that expect to get big it can be limiting.",

      "Limited customization options, but might be enough for a small shop that doesn't need heavy customization.",

      "Weaker marketing tools, though you can use plugins to get access to more marketing tools.",

      '"Wix and Ecwid can work for small hobby shops, but they get messy once you add more products, variants, shipping rules, or start running ads. Shopify has better checkout, payment options, apps, and support for scaling. Plus if you ever want to run Meta/TikTok ads, Shopify integrates smoothly.',
      [
        "https://www.reddit.com/r/EcommerceWebsite/comments/1n8i79t/comment/ncirbj9/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
      ],
      "https://www.workswaves.com/ecwid-review/",
      [
        '"It lacks features you might expect in a full CMS: there is no built-in blog support, and page-type flexibility is limited (good for shops/catalogs but not ideal if you need heavy content, blogs, or complex site structure)"',
        '"Customization options beyond what the template/section editor allows are minimal; for deeper control (special layouts, advanced SEO tweaks, custom pages) you might need to embed Ecwid into a more flexible site or code manually."',
      ],
    ],
    moreInfo: [
      "Article comparing Ecwid to Shopify:",
      ["https://www.forbes.com/advisor/business/software/ecwid-vs-shopify/"],

      "22 minute tutorial for setting up an Ecwid site:",
      ["https://www.youtube.com/watch?v=UWT2vDUOUFc"],

      "Goes into more detail about the website builder's features:",
      ["https://www.ecwid.com/website-builder"],
    ],
    examples: [] as string[],
    perfectIf: [
      "You have a website that needs e-commerce functionality embed into it through code or a widget.",
      "You just need a basic website and simple e-commerce store and you want them in the same place",
      [
        "However most people will built on wix/ Squarespace/ Carrd/etc and add their Ecwid store to it, instead of using Ecwid's more limited website builder.",
      ],
      "Straightforward shops with small budgets that don't need a lot of customized features or integrations with a ton of third-party tools.",
    ],
    skipIf: [
      "You have a medium to large e-commerce business, or plan for your business to grow significantly.",
    ],
  },
  {
    id: 12,
    name: "WordPress.org",
    tags: {
      pages: ["multi-page"],
      shop: ["no shop", "small shop", "big shop"],
      "creative freedom": ["heavy customization"],
      POS: [] as string[],
      "learning curve": ["high difficulty"],
    },
    difficulty: "⭐⭐⭐⭐⭐",
    cost: [
      "Depends on where you host it, WordPress itself is free. You'd choose your host and build your WordPress site there. Most hosts have 1-click install.",
      "Hostinger",
      [
        "$1.95/mo for 48 months",
        "10.99/mo regular price at renewal",
        "https://www.hostinger.com/wordpress-hosting",
      ],
      "Bluehost",
      ["2.95-3.00/mo starting", "https://www.bluehost.com/wordpress-hosting"],
      "Dreamhost",
      ["$2.59/mo starting", "https://www.dreamhost.com/wordpress/"],
      "Also use care when selecting apps/plugins, these prices can stack up quietly ($10/mo here, $20/mo there)",
    ],
    trial: ["Depends on the provider you chose."],
    bestFor: [
      "Businesses that want full control over the appearance, performance, caching, and SEO of their site.",
      "E-commerce stores",
      [
        "With the WooCommerce or similar plugins.",
        "You have access to the full WooCommerce platform, so its possible for it to support even medium to large e-commerce businesses",
      ],
      "Membership sites",
      "Content-heavy businesses",
      "Agencies and startups",
      "SEO-driven companies",
      "Online publications",
    ],
    support: [
      "Support varies based on your hosting platform.",
      "Theme and plugin support levels vary by the creators.",
    ],
    migration: [
      "This is where WordPress shines, it's the easiest to move away from. You can easily switch from one hosting provider to another.",
    ],
    security: [
      "If you use managed WordPress hosting they'll handle security. If you use a self-hosted solution you'd have to manually update plugins, themes and other security updates.",
    ],
    accessibility: [
      "Varies by theme, these are some of the more accessible themes:",
      ["https://wordpress.org/themes/tags/accessibility-ready/"],
      "Wordpress.org has an accessibility team which gives tips to make your site more accessible.",
      [
        "https://make.wordpress.org/accessibility/handbook/best-practices/quick-start-guide/",
        "https://make.wordpress.org/accessibility/handbook/best-practices/",
      ],

      "Though your plugins/apps might not be as accessible.",
      [
        '"While powerful, plugins are a common cause of accessibility issues. Since they add or modify your site’s code, they can easily introduce barriers, such as elements that are not keyboard-friendly, poor color contrast, or missing ARIA labels."',
        "https://www.webyes.com/blogs/wordpress-accessibility/#title-6",
      ],
      "If you use a Wordpress Plugin to try to improve accessibility, it's best to use it to only test for issues. The accessibility overlay tends to make things worse, and these plugins can't actually fix many accessibility issues. It would be better to try to manually fix the issues or hire a dev to fix the issues.",
      "https://www.boia.org/blog/wordpress-accessibility-plugins-and-ada-compliance",
      [
        "WordPress (accessibility) plugins aren’t always the best solution for compliance, especially if you’re unfamiliar with the basics of digital accessibility.",
        "Many digital accessibility issues are somewhat subjective; they require human judgment.  If you have an image of an apple with the alt text, “a yellow banana,” your plugin probably won’t flag it as an issue — but it would violate WCAG, and it could create an accessibility issue for a user with vision disabilities.",
        "Additionally, plugins often address only certain aspects of accessibility, leaving many potential issues unaddressed. They might focus on keyboard navigation or screen reader compatibility but overlook other critical factors like semantic HTML structure or proper form labeling. ",
        "However, plugins can still be helpful, particularly for finding barriers that can be identified with simple pass-or-fail rulesets.",
        [
          "Automated tools can instantly check contrast ratios against WCAG guidelines.",
          "Pointer targets (such as buttons) must meet minimum size requirements to ensure that users can activate them. Automated tools can find small pointer targets, and in some cases, fix them",
          "The World Wide Web Consortium (W3C), which publishes WCAG, recommends a hybrid approach to web accessibility testing. That means pairing automated tests (such as WordPress accessibility plugins) with manual audits.",
        ],
      ],
      "https://www.zaginteractive.com/insights/articles/january-2025/avoiding-accessibility-overlays-why-comprehensive-accessibility-matters",
      [
        '"In January 2025, the FTC proposed a $1 million fine on accessiBe, citing deceptive claims about its AI-powered product’s ability to make websites fully compliant with the Web Content Accessibility Guidelines (WCAG). The investigation revealed that accessWidget - the company’s flagship product - failed to deliver on its promise of complete accessibility."',
      ],
      "https://www.reddit.com/r/Wordpress/comments/1o84mnc/accessibility_plugins_are_so_evil_please_dont_use/",
      [
        '"Accessibility overlays are generally condemned by experts. They sometimes make it harder to use assistive technology like screen readers. Read some criticism: https://overlayfactsheet.com/en/"',
        '"True the accessibility plugins often do more harm than good. A simple overlay button isn’t real accessibility and it can mess up screen readers or keyboard navigation. Honestly, learning a bit about proper accessibility and testing your site manually is way better than relying on a plugin. ',
      ],
    ],
    collaboration: [
      "You can easily add editors with various permission levels",
      "https://wordpress.com/support/invite-people/user-roles/",
      [
        "When you invite someone to your WordPress.com site you can choose from a set of pre-defined user roles — and each role determines what they can and can’t do:",
        [
          "Administrator – full control over everything (site settings, plugins/themes, users).",
          "Editor – can create/edit/publish any content and moderate comments.",
          "Author – can create/edit/publish their own posts.",
          " Contributor – can write and edit posts but cannot publish them.",
          " Subscriber/Viewer – minimal access (can follow or view content).",
        ],
      ],
      "Even though WordPress.com doesn’t have a separate “collaborator” concept like Shopify, you can still manage access beyond the basics.",

      "Some plugins (on Business/Commerce plans) let you customize or extend roles, control capabilities more granularly, or even create custom roles for your workflow (content reviewers, page designers, etc.).",
      ["https://wordpress.com/plugins/browse/capabilities"],

      "You can also remove access at any time if a collaborator’s work is done.",
      ["https://wordpress.com/support/invite-people/"],

      "WordPress roles have a built-in hierarchy where higher roles include all permissions of lower ones plus more (e.g., Editors can do everything Authors can, plus more). For strictly content tasks, Editor or Author roles are often enough, and safer.",
      [
        "https://developer.wordpress.org/apis/security/user-roles-and-capabilities/",
        "https://wordpress.com/support/invite-people/user-roles/",
      ],
    ],
    ecommerce: [
      "You can add a plugin, two popular ones are woocommerce and bigcommerce",
      "https://wordpress.org/plugins/bigcommerce/",
      "https://wordpress.org/plugins/woocommerce/",
      "https://woocommerce.com/posts/woocommerce-pricing/",
      '" WooCommerce is unusable if you are not running any plugins on it. You need some expensive plugins that will cost you more than a year of shopify plan to really run on WooCommerce. Funnelkit for example cost $400 per year and, is just one of the best plugins out here for ecommerce.',
      "Need to pay at least 1 to 2k in plugins every single year, which is waaaay more than a basic shopify plan which costs around 400$ per year.",
      "Also have to add hosting cost. If you are running a pretty big store, you will need a strong server, which can cost some k every year too.",
      "To be short :",
      "If you are making sales on Shopify, WooCommerce will be insanely cheaper than Shopify as you will pay more in Shopify Fees for 1 month than a WooCommerce store for a year.",
      'If you are not making sales, WooCommerce will be more expensive. " https://www.reddit.com/r/woocommerce/comments/1cbqexb/comment/l10hty4/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button',
    ],
    appStore: [
      "Over 30,000 themes and 70,000 plugins to choose from to personalize your site, at various prices (some are free)",
      "No themes or plugins are restricted, you can use any that you want.",
    ],
    seo: [
      "Strong SEO potential",
      "Both .com and .org versions run on the same underlying WordPress software, so their basic SEO potential is similar.",
      "Both can rank extremely well. WordPress is one of the strongest SEO platforms overall.",
      "The difference is mainly how much control you have.",
      "Both have:",
      [
        "Clean HTML markup",
        "Good use of headings (H1–H6)",
        "Fast, mobile-optimized themes (depending on what you pick)",
      ],
      "Ability to edit:",
      [
        "Page/post titles",
        "Meta descriptions",
        "Image alt text",
        "URL slugs",
        "Built-in blog functionality (amazing for SEO)",
        "Support for schema via plugins or themes (with limitations on .com)",
      ],

      "What's great for SEO:",
      [
        "Full control over everything technical:",
        [
          "Custom URL structure",
          "Robots.txt",
          "Sitemap control",
          "Canonical tags",
          "Structured data markup",
          "Server performance",
          "Security / caching setup",
        ],
      ],
      [
        "Huge SEO plugin ecosystem (Yoast, Rank Math, SEOPress)",
        "Advanced image optimization plugins",
        "Full access to performance plugins",
        "Total design freedom, you're not limited by platform rules.",
      ],
      " Where it can be weaker:",
      [
        "SEO success heavily depends on:",
        [
          "Your hosting quality (some hosts will have faster servers than others)",
          "How you configure caching/CDNs",
          "Theme quality",
          "Beginners can accidentally break SEO by configuring things incorrectly.",
        ],
      ],
    ],
    pros: [
      "Very customizable. Over 30,000 themes and 70,000 plugins to choose from to personalize your site, at various prices (some are free)",

      "No themes or plugins are restricted, you can use any that you want.",

      "Freedom to customize anything (themes, plugins, code)",

      "Full access to files, database, server",

      "You can heavily customize performance, caching, SEO",

      "You can install SEO plugins like RankMath or yoast to help drive traffic to your site.",

      'You can easily switch hosting providers, if one of them suddenly raises prices on you. Or you just want to take advantage of the "new client" plans by jumping around.',
      "Need a site that will grow with your business (scalable)",

      "Can add e-commerce capabilities with plugins",

      "Not locked into a specific platform like the other website builders, you can pick up your website and move to another platform if a hosting platform starts price gouging you.",

      "Can be relatively cheap, as long as you don't go crazy with adding plugins.",
    ],
    cons: [
      "You have to deal with finding hosting. If you don't choose a provider that offers \"Managed WordPress hosting\", then you'd have to manually do plugin updates, security updates and backups.",

      "You have to use more care when choosing themes and plugins, as not all of them are good quality. Look at reviews, avoid ones with low reviews.",

      "You'll have to deal with more technical aspects of your website, especially if you don't use \"Managed WordPress Hosting\"",

      "Bigger learning curve, takes time to get used to the setup.",
    ],
    moreInfo: [] as string[],
    examples: [
      'Official "showcase" of real sites built on WordPress',
      ["https://wordpress.org/showcase/"],
      "Big brands using WordPress",
      ["https://kinsta.com/blog/wordpress-site-examples/"],
      'Collection of "100+ real WordPress website examples"',
      ["https://reallygooddesigns.com/wordpress-website-examples"],
      'Kinsta "130+ WordPress Site Examples":',
      ["https://kinsta.com/blog/wordpress-site-examples/"],
      '10Web "26 WordPress Website Examples to Inspire You"',
      ["https://10web.io/blog/wordpress-websites/"],
    ],
    perfectIf: [
      "You want flexibility, something highly customizable, plugins, blogging, or long-term scalability.",
      "You want to be able to have total ownership of your site and do heavy customization at a relatively low price.",
      [
        "And you don't mind a higher learning curve and some more setup to get those benefits.",
      ],
    ],
    skipIf: [
      "You want something extremely simple right away.",
      "You don't have the time to research hosting providers.",
      "If you choose basic WP hosting instead of WP managed hosting, you'd have to do technical maintenance manually.",
      [
        "This means manually telling the plugins to update, and server side security updates, manual backups.",
      ],
    ],
  },
  {
    id: 13,
    name: "WordPress.com",
    tags: {
      pages: ["multi-page"],
      shop: ["no shop", "small shop"],
      "creative freedom": ["heavy customization"],
      POS: [] as string[],
      "learning curve": ["medium difficulty"],
    },
    difficulty: "⭐⭐⭐⭐",
    cost: [
      "https://wordpress.com/pricing/#lpc-pricing",
      [
        "Free",
        ["$0/mo", "Will have ads.", "Can't install plugins or themes."],

        "Personal",
        ["$9/mo", "Can access plugins and some premium themes)"],
        "Premium plans",
        ["$18/mo", "Access to plugin and all premium themes)"],
        "Business plan",
        ["$40/mo", "Access to e-commerce options with plugins)"],
        "There are discounts if you pay yearly or once every 2 years, saving up to 68%",
      ],
    ],
    trial: ["No trial, but they do have a free plan."],
    bestFor: [
      "Small to medium businesses that want wordpress without the stress",
      [
        "Local service businesses",
        "Coaches, consultants, therapists",
        "Bloggers",
        "Nonprofits",
        "Small e-commerce sites (on higher plans).",
        [
          "Digital Downloads",
          "Merch",
          "Courses",
          "Service business with appointments",
          "Content sites monetizing with products on the side",
          "Roughly < 100 products.",
          "Simple products without complex variants or bundles.",
        ],
        "Medium to larger ecommerce sites would struggle with:",
        [
          "Some WooCommerce extensions aren’t available or recommended, limiting your stores potential.",
          "Checkout & cart customization limits",
          "Having to handle complex inventory",
          "Business / Commerce plans can get expensive fast",
        ],
      ],
    ],
    support: [
      "Chat and email: for paid plans (reply within 24 hours)",
      "Phone: no phone support",
      "https://wordpress.com/support/help-support-options/#how-to-contact-us",
      "Offers support for themes made by WordPress.com:",
      "  - https://wordpress.com/support/plugins/get-help-with-plugins-and-themes/",
      "Third party Plugin and theme issues will depend on the support options listed by the creator",
    ],
    migration: [
      "You can move the website to another hosting provider.",
      ["https://wordpress.com/support/export/"],
      "However e-commerce sites are more painful to migrate.",
      [
        "Stripe, PayPal, subscriptions, saved cards, webhooks often depend on the exact site URL and environment. Migrating can break checkout or subscriptions if not reconfigured perfectly.",
        "Ecommerce sites rely heavily on plugins, and those plugins rely on other plugins. Change the hosting or WordPress flavor and suddenly one missing dependency takes down checkout.",
        "On WordPress.com (especially non-Business plans), you don’t always have full server or plugin access. That makes clean exports and deep config control harder compared to self-hosted WordPress.",
      ],
    ],
    security: [
      "Handles security, you don't have to do anything.",
      [
        "https://developer.wordpress.com/docs/platform-features/account-security/",
      ],
    ],
    accessibility: [
      "Varies by theme, these are some of the more accessible themes:",
      ["https://wordpress.com/themes/filter/accessibility-ready"],
      "Accessibility tips:",
      [
        "https://wordpress.com/blog/2020/05/21/global-accessibility-awareness-day/",
      ],
      "Though your plugins/apps might not be as accessible.",
      [
        '"While powerful, plugins are a common cause of accessibility issues. Since they add or modify your site’s code, they can easily introduce barriers, such as elements that are not keyboard-friendly, poor color contrast, or missing ARIA labels."',
        "https://www.webyes.com/blogs/wordpress-accessibility/#title-6",
      ],
      "If you use a Wordpress Plugin to try to improve accessibility, it's best to use it to only test for issues. The accessibility overlay tends to make things worse, and these plugins can't actually fix many accessibility issues. It would be better to try to manually fix the issues or hire a dev to fix the issues.",
      "https://www.boia.org/blog/wordpress-accessibility-plugins-and-ada-compliance",
      [
        "WordPress (accessibility) plugins aren’t always the best solution for compliance, especially if you’re unfamiliar with the basics of digital accessibility.",
        "Many digital accessibility issues are somewhat subjective; they require human judgment.  If you have an image of an apple with the alt text, “a yellow banana,” your plugin probably won’t flag it as an issue — but it would violate WCAG, and it could create an accessibility issue for a user with vision disabilities.",
        "Additionally, plugins often address only certain aspects of accessibility, leaving many potential issues unaddressed. They might focus on keyboard navigation or screen reader compatibility but overlook other critical factors like semantic HTML structure or proper form labeling. ",
        "However, plugins can still be helpful, particularly for finding barriers that can be identified with simple pass-or-fail rulesets.",
        [
          "Automated tools can instantly check contrast ratios against WCAG guidelines.",
          "Pointer targets (such as buttons) must meet minimum size requirements to ensure that users can activate them. Automated tools can find small pointer targets, and in some cases, fix them",
          "The World Wide Web Consortium (W3C), which publishes WCAG, recommends a hybrid approach to web accessibility testing. That means pairing automated tests (such as WordPress accessibility plugins) with manual audits.",
        ],
      ],
      "https://www.zaginteractive.com/insights/articles/january-2025/avoiding-accessibility-overlays-why-comprehensive-accessibility-matters",
      [
        '"In January 2025, the FTC proposed a $1 million fine on accessiBe, citing deceptive claims about its AI-powered product’s ability to make websites fully compliant with the Web Content Accessibility Guidelines (WCAG). The investigation revealed that accessWidget - the company’s flagship product - failed to deliver on its promise of complete accessibility."',
      ],
      "https://www.reddit.com/r/Wordpress/comments/1o84mnc/accessibility_plugins_are_so_evil_please_dont_use/",
      [
        '"Accessibility overlays are generally condemned by experts. They sometimes make it harder to use assistive technology like screen readers. Read some criticism: https://overlayfactsheet.com/en/"',
        '"True the accessibility plugins often do more harm than good. A simple overlay button isn’t real accessibility and it can mess up screen readers or keyboard navigation. Honestly, learning a bit about proper accessibility and testing your site manually is way better than relying on a plugin. ',
      ],
    ],
    collaboration: [
      "You can create an account for an employee and edit what permissions they have:",
      "https://learn.wordpress.org/lesson-plan/user-management/",
    ],
    ecommerce: [
      "You can add a plugin, two popular ones are woocommerce and bigcommerce",
      "https://wordpress.org/plugins/bigcommerce/",
      "https://wordpress.org/plugins/woocommerce/",
      "https://woocommerce.com/posts/woocommerce-pricing/",
      '" WooCommerce is unusable if you are not running any plugins on it. You need some expensive plugins that will cost you more than a year of shopify plan to really run on WooCommerce. Funnelkit for example cost $400 per year and, is just one of the best plugins out here for ecommerce.',
      "Need to pay at least 1 to 2k in plugins every single year, which is waaaay more than a basic shopify plan which costs around 400$ per year.",
      "Also have to add hosting cost. If you are running a pretty big store, you will need a strong server, which can cost some k every year too.",
      "To be short :",
      "If you are making sales on Shopify, WooCommerce will be insanely cheaper than Shopify as you will pay more in Shopify Fees for 1 month than a WooCommerce store for a year.",
      'If you are not making sales, WooCommerce will be more expensive. " https://www.reddit.com/r/woocommerce/comments/1cbqexb/comment/l10hty4/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button',
    ],
    appStore: [
      "Both wordpress.com and wordpress.org have app stores, though wordpress.com's store acceptance criteria is more strict, so you have less apps to choose from than with wordpress.org.",
    ],
    seo: [
      "Strong SEO potential",
      "Both .com and .org versions run on the same underlying WordPress software, so their basic SEO potential is similar.",
      "Both can rank extremely well. WordPress is one of the strongest SEO platforms overall.",
      "The difference is mainly how much control you have.",
      "Both have:",
      [
        "Clean HTML markup",
        "Good use of headings (H1–H6)",
        "Fast, mobile-optimized themes (depending on what you pick)",
      ],
      "Ability to edit:",
      [
        "Page/post titles",
        "Meta descriptions",
        "Image alt text",
        "URL slugs",
        "Built-in blog functionality (amazing for SEO)",
        "Support for schema via plugins or themes (with limitations on .com)",
      ],

      " What it does well",
      [
        "Built-in fast hosting & CDN",
        "Mobile-optimized themes",
        "Easy editing of:",
        ["Titles", "Descriptions", "URLs", "Categories/tags"],
        "Automatic sitemaps",
        "Solid security (no maintenance on your end)",
        "Some SEO tools included even in free plans",
        "Higher-tier plans allow plugins, including SEO plugins.",
      ],
      "Where it's limited",
      [
        "SEO depends on the plan you select. Free and lower-tier plans have restricted SEO control, such as:",
        [
          "No plugins (on Free/Starter)",
          "Limited theme customization",
          "Limited access to advanced SEO settings",
          "Can't install analytics tools in the lowest plans",
        ],
        "Some URL structure customization is limited unless on higher tiers.",
      ],
    ],
    pros: [
      "Unlimited traffic (visitors to your site) without surprise hosting bills, which makes the site very scalable (the site can handle your business growing over time)",
      "Automatic updates & security",
      "Fast performance without tuning, since it's optimized to run WordPress websites",
      "Zero server setup (no hosting configuration needed)",
      'Less risk of "breaking" your site by accident',
      "Personal and Premium plans have access to plugins now. The personal and premium plans used to have no access to premium themes or plugins so most avoided using it, but WP.com listened to the complaints and made those plans actually usable.",
    ],
    cons: [
      "Can only export your WordPress site with higher tier plans, so if you want to leave WordPress.com you'd have to go to a higher tier to be able to export your WordPress site to a different host.",
      "Slightly less customization because some plugins and themes won't be available to you, because they only allow plugins that do not seem risky",
      "Won't have full control over databases, files and code",
      "Automatic backups are only available on business and higher plans. Lower tier plans would have to use a plugin for backups.",
      "Can't do deep backend customization",
      "At high plan levels, WordPress.com almost matches WordPress.org but you pay for the convenience.",
      "As a business grows more complex (custom features, integrations, advanced ecommerce), WordPress.com can feel restrictive, and WordPress.org or a custom setup usually becomes a better fit.",
    ],
    moreInfo: [] as string[],
    examples: [
      "Official showcase of real sites built on WordPress",
      ["https://wordpress.org/showcase/"],
      "Big brands using WordPress",
      ["https://kinsta.com/blog/wordpress-site-examples/"],
      'Collection of "100+ real WordPress website examples"',
      ["https://reallygooddesigns.com/wordpress-website-examples"],
      'Kinsta "130+ WordPress Site Examples"',
      ["https://kinsta.com/blog/wordpress-site-examples/"],
      '10Web "26 WordPress Website Examples to Inspire You"',
      ["https://10web.io/blog/wordpress-websites/"],
    ],
    perfectIf: [
      "You want flexibility, something highly customizable, plugins, blogging, or long-term scalability.",
      "You want to be able to heavily customize your website visually",
      "You want the technical bits handled (plugin and security updates).",
      ["Higher tier plans get automatic backups."],
    ],
    skipIf: [
      "You want something extremely simple right away.",
      "You want total ownership of your site and heavy customization is important to you.",
      "You'd rather save some money by dealing with a bigger learning curve & doing more research.",
    ],
  },
  {
    id: 14,
    name: "Webflow",
    tags: {
      pages: ["multi-page"],
      shop: ["no shop"],
      "creative freedom": ["heavy customization"],
      POS: [] as string[],
      "learning curve": ["high difficulty"],
    },
    difficulty: "⭐⭐⭐⭐⭐",
    cost: [
      "https://webflow.com/pricing",
      [
        "Free",
        ["For 2 page websites.", "50 form submissions."],
        "Basic",
        ["$14/mo (with yearly payment)"],
        "CMS",
        ["$23/mon (with yearly payment)"],
        "Business",
        ["$39/mon (with yearly payment}"],
      ],
    ],
    trial: [
      "No free trial for the premium plans, but it has a limited free plan you can use as a trial.",
    ],
    bestFor: [
      "Marketing-first businesses that care a great deal about design but don't wan't to touch code.",
      [
        "Agencies",
        "Startups",
        "Personal brands",
        "Portfolios",
        "SaaS Marketing sites",
      ],
      "Content-heavy but low complexity",
      ["Blogs", "Case studies", "Documentation", "Editorial Sites"],
      "Small, simple ecommerce",
      [
        "Digital Products",
        "Merch",
        "One-time purchase",
        "Once you need subscriptions, Custom checkout flows, complex shipping, heavy product variations, Advanced inventory logic, or fancy tax logic Webflow starts sweating.",
        "Often businesses with use Webflow for marketing and Shopify / custom backend for e-commerce",
      ],
      "Teams without a dev-on-call",
      [
        "Marketing Teams",
        "Designers who want autonomy",
        "Founders who don't want to touch code",
      ],
    ],
    support: [
      "Chat: AI 24/7, live agent varies based on the time of day",
      "Email: through their Webflow Support Portal",
      "Phone and video call: only for Enterprise plans",
      "https://help.webflow.com/hc/en-us/articles/39672881707155-Customer-Support-Policy#h_01JQ478K6QZS3YTS9N2566E3TM",
    ],
    migration: [
      "Limited. You can only export your code on the workspace plans but a good chunk of the content won't be included in the export (CMS, user accounts, e-commerce content, form logic, etc).",
      [
        "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code",
      ],
    ],
    security: [
      "Handles security, you don't have to do anything.",
      ["https://trust.webflow.com/"],
    ],
    accessibility: [
      "Has built in tools to audit your website for accessibility issues",
      [
        "https://webflow.com/accessibility",
        "https://webflow.com/blog/ada-testing",
      ],
      "There wasn't a way to sort through the templates by accessibility but some people do create templates with accessibility in mind, such as this person:",
      ["https://www.bryntaylor.co.uk/templates/accessible-webflow"],
    ],
    collaboration: [
      "Relatively easy: Up to 25 concurrent members per site",
      'However the different "modes" affect what can be edited:',
      [
        "https://help.webflow.com/hc/en-us/articles/33961260491795-Collaborate-on-your-site-in-Webflow",
      ],
    ],
    ecommerce: [
      "E-commerce is very limited, only really an option if you have a micro shop and this feature has basically been abandoned:",
      "https://www.reddit.com/r/webflow/comments/1cdpuqe/webflow_ecommerce_whats_your_opinion/",
      "https://www.reddit.com/r/webflow/comments/1euzta1/has_webflow_forsaken_their_ecommerce/",
    ],
    appStore: [
      "Has an app store: https://webflow.com/apps",
      "Figma to webflow app would especially be useful for designers",
    ],
    seo: [
      "One of the strongest SEO-focused builders. It's more technical than Wix or Squarespace, but offers far more control and cleaner output if you know what you're doing.",
      "What it does well:",
      [
        "Full control over on-page SEO",
        [
          "Meta titles",
          "Meta descriptions",
          "Image alt text",
          "Custom URL slugs",
          "Canonical tags",
          "Open Graph tags",
        ],
        "Clean, semantic HTML. Easier for Google to crawl and index compared to most drag-and-drop builders.",
        "Performance-focused by default",
        [
          "Automatic image compression",
          "Minified code (CSS/JS)",
          "Lazy loading",
          "Global CDN hosting",
          "All of this helps improve Core Web Vitals and rankings.",
        ],

        "Structured data support (schema). You can add custom JSON-LD for advanced SEO needs.",
        "Great CMS for content. Ideal for blogs, article hubs, and other SEO-heavy content strategies.",
        "Technical controls most builders don't offer",
        [
          "Edit robots.txt",
          "Edit sitemap behavior",
          "Easily manage 301 redirects",
        ],
      ],
      "Where it's limited",
      [
        'No built-in SEO "wizard"',
        [
          "Wix and Shopify walk beginners through the process. Webflow assumes you already understand SEO basics.",
          "Though it does offer a checklist: https://webflow.com/blog/seo-and-webflow-the-essential-guide",
        ],
        "More technical learning curve",
        [
          "Poor class structure, heading misuse, or heavy interactions can harm performance and thus SEO, if you're not careful.",
        ],
        "Schema isn't automated",
        [
          "You can add structured data manually, but it doesn't auto-generate rich article/product schema like WordPress plugins do.",
        ],
        "Unlike Wordpress.org Webflow is natively hard capped since it's a hosted platform you can't mess with the backend. For most small to medium businesses this hard cap won't matter, the site will perform well and rank fine. But for larger businesses this means:",
        [
          "You can't change hosting configurations",
          "You can't install server-side code",
          "You can't optimize the database",
          "You can't modify how Webflow generates its underlying system files",
          "You can't replace or upgrade Webflow's hosting stack",
        ],
        "Businesses that this might matter for:",
        [
          "Large content sites with thousands of posts",
          "Sites needing server-side logic (WordPress can do this)",
          "Complex enterprise SEO needing full control of infrastructure",
          "Platforms that need advanced schema automation or custom fields",
        ],

        "So some developers will put a proxy over the site to allow greater control over the optimisation of the infrastructure and pages. So they can:",
        [
          "Change server caching rules",
          "Implement custom server-side rendering behavior",
          "Add middleware",
          "Change how the CDN prioritizes resources",
          "Override Webflow's generated HTML/CSS bundling",
          "Add backend schema automation",
          "Change advanced performance rules (preloading, prerendering, etc.)",
        ],
      ],
      "https://webflow.com/feature/seo",
    ],

    pros: [
      "Free for a 2 page website",
      "Can host elsewhere with a workspace plan, no attribution required",
    ],
    cons: [
      "Editor feels more like a graphic design tool like Photoshop",
      "For blog and e-commerce sites there's separate plans for those features",
    ],
    moreInfo: [] as string[],
    examples: [
      "Community showcase of sites",
      ["https://webflow.com/made-in-webflow"],
      "Blog article with top Webflow examples",
      [
        "https://www.flux-academy.com/blog/12-stunning-webflow-examples-that-show-just-how-versatile-the-website-builder-is",
      ],
      'Digidop "10 Great Company Websites Built on Webflow"',
      ["https://www.digidop.com/blog/large-enterprise-webflow-sites"],
    ],
    perfectIf: [
      "You love design and want total visual control while not dealing with coding.",
      "You want a platform that will let you maximize your SEO ranking.",
    ],
    skipIf: [
      "You're not ready for a learning curve.",
      "You want a strong e-commerce site, Webflow's e-commerce abilities are very weak.",
    ],
  },
  {
    id: 15,
    name: "GoDaddy",
    tags: {
      pages: ["1 page"],
      shop: ["no shop", "small shop"],
      "creative freedom": ["low customization"],
      POS: [] as string[],
      "learning curve": ["low difficulty"],
    },
    difficulty: "⭐",
    cost: [
      "Free",
      [
        "Though you must join the 7 day trial first, and it only has very basic service.",
        "Ads on your website.",
        "Can't use a custom domain on the free version.",
        "https://www.godaddy.com/help/whats-included-in-my-free-websites-marketing-plan-41840",
      ],
      "Basic",
      ["$10.99/mo for 1st year", "$203.99 renewal ($16.99/mo)"],
      "Premium",
      ["$15.99/mo for 1st year", "$359.88 renewal ($29.99/mo)"],
      "Commerce",
      ["$21.99/mo for 1st year", "$419.88 renewal ($34.99/mo)"],
      "Domain is only free for the first year.",
      "Special note: I had to jump through some weird hoops to find the renewal prices without making an account, they don't make it easy to find before you sign up for an account.",
      'They will try to sneak in a "Microsoft 365 Email Essentials" plan in, you have to manually click no thanks.',
      [
        "It will start off as a free trial, but the renewal price is $179.88/year.",
      ],
    ],
    trial: ["7 day trial"],
    bestFor: [
      "Businesses willing to pay for the convinence of having everything bundled together in one place.",
      ["Domain", "Email", "Hosting", "Site builder"],
      "Businesses that don't expect to grow much.",
      "Ultra-simple, local, and service-based businesses (just need a phone number, hours, contact form).",
      [
        "Plumbers",
        "Salons",
        "Electricians",
        "Consultants",
        "Real estate agents",
      ],
      "First-time website owners",
      [
        "Their builder is opinionated and guided, so you don’t get lost or creative.",
      ],
      "“Set it and forget it” sites.",
      [
        "Brochure websites",
        "Temporary campaigns",
        "Landing pages that rarely change",
      ],
      "Very small e-commerce businesses",
    ],
    support: [
      "24/7 phone, chat and text support, though they offshored so there can be a language barrier.",
      "https://www.godaddy.com/help/contact-us",
      "When you contact them for help, you'll have to deal with aggressive upselling. Example: saying the problem will probably be fixed if you upgrade to a new plan versus trying to solve the actual problem.",
      "Common complaint is that the responses were unhelpful and had long wait times, if the problem was even resolved at the end.",
    ],
    migration: [
      "You'd have to rebuild your site from scratch.",
      "If you outgrow GoDaddy's builder, migrating away is often painful (limited export options, rigid templates). Not great if you expect growth or hope to switch platforms later.",
      [
        "https://www.forbes.com/advisor/business/software/godaddy-website-builder-review/",
      ],
    ],
    security: [
      "Basic security is included (SSL, standard protections). GoDaddy has been involved in several security incidents, exposing customer and visitor information, which lead to a class action settlements.",
      [
        "https://www.ftc.gov/news-events/news/press-releases/2025/05/ftc-finalizes-order-godaddy-over-data-security-failures",
      ],
    ],
    accessibility: [
      "Minimal accessibility controls, especially compared to Squarespace, WordPress and Wix.",
      [
        "GoDaddy blog on accessibility tools encourages using external checkers (DevTools, AChecker) rather than built-in GoDaddy features.",
        "https://www.godaddy.com/resources/ca/design/what-is-web-accessibility-why-does-it-matter-and-how-do-you-get-started#h-web-accessibility-resources-nbsp",
      ],
      "They mention that their commited to improving their accessibility but they do not mention any robust in-built tooling for accessibility:",
      ["https://www.godaddy.com/en/legal/agreements/accessibility-statement"],

      "Installing an accessibility plugin or overlay on a GoDaddy site may appear to boost inclusivity or check a compliance box, but experts emphasize these tools do not replace manual auditing, design-level remediation, and proper code-based accessibility work — and can give a false sense of security about legal and practical accessibility compliance.",
      [
        "https://www.zaginteractive.com/insights/articles/january-2025/avoiding-accessibility-overlays-why-comprehensive-accessibility-matters",
      ],
    ],
    collaboration: [
      "You can add an unlimited amount of delegates (collaborators)",
      "Different levels of permission, they won't have access to billing information etc",
      "https://www.godaddy.com/help/invite-a-delegate-to-access-my-godaddy-account-12376",
    ],
    ecommerce: [
      "very limited e-commerce options",
      [
        "Few simple physical products or downloads.",
        "No subscriptions, no product variations, no advanced bundles, no complex pricing rules.",
        "Basic inventory tracking only.",
        "No multi-warehouse.",
        "no advanced fulfillment flows.",
        "Minimal checkout extensions.",
        "integrations are limited.",
      ],
    ],
    appStore: [
      "No app/plugin ecosystem to access SEO apps. Without the ability to add third-party SEO tools, image optimizers, performance plugins, or content-marketing tools, you're stuck with what's built-in.",
    ],
    seo: [
      "What it does well:",
      [
        "You can set basic on-page metadata on certain plans: page titles, descriptions, alt-text for images, and custom URLs",
        "It automatically generates a sitemap and handles some basic indexing plumbing (so your pages at least can be crawled by search engines).",
      ],
      "Where it falls short:",
      [
        "Very limited SEO customization or advanced tools. For deeper SEO the builder offers almost nothing (structured data/schema, canonical tags, robots.txt control, advanced redirects, custom performance optimizations).",
        [
          "https://dits.agency/blog/using-godaddy-website-builder-what-no-one-tells-you",
        ],
        "No app/plugin ecosystem to access SEO apps. Without the ability to add third-party SEO tools, image optimizers, performance plugins, or content-marketing tools, you're stuck with what's built-in.",
        "Design/template limitations may impact SEO. The templates and builder structure are fairly rigid and fewer layout or structural options means less control over how content is organized, which can hurt SEO if you want good content hierarchy or long-form content.",
        [
          "https://www.forbes.com/advisor/business/software/godaddy-website-builder-review/",
        ],
        "Performance and server-level optimization limits. Because you don't get access to backend/server configurations, caching, custom hosting, or advanced performance tools, you might hit speed or resource limitations as your site grows. Both of which affect search rankings.",
        ["https://mindflowmarketing.com/godaddy-seo/"],
        "SEO features may be locked behind higher plans, and still limited even then. Some critical SEO control (like editable metadata on dynamic pages or full blog support) can be restricted or problematic depending on GoDaddy's plan structure.",
        [
          "https://www.tooltester.com/en/reviews/godaddy-website-builder-review/",
        ],
        "https://www.expertmarket.com/uk/website-builders/godaddy-review :",
        [
          "\"GoDaddy doesn't provide any SEO support or advice for blog pages, unlike Wix, Squarespace, and Hostinger, so it's not the best option for creating a website with a lot of long-form content.\"",
          '"GoDaddy offers AI-powered SEO guidance, something Wix and Hostinger also offer, but Squarespace doesn\'t. That said, the advice given by GoDaddy\'s AI assistant is quite basic, and some of it might even lead to SEO errors. When testing, we noticed GoDaddy\'s SEO AI-bot tended to use "keyword stuffing", a practice of overusing key terms, which Google now penalises."',
        ],

        '"The SEO part of the site builder looks like a good idea, but in reality is an uncustomisable nightmare and is tougher to get results with than a WordPress site."https://www.youtube.com/watch?v=WjYfceBSpDo',
      ],
    ],
    pros: [
      "The website builder is very easy to use since the editor is more structured/simpler.",
      "All the basics in one place (website, domain, ssl security, marketing tools) though booking, seo, etc is limited to higher tiers.",
      "Has marketing campaign tools where you can send newsletters and basic campaigns.",
    ],
    cons: [
      "Very limited customization.",
      "very limited e-commerce options.",
      "basic analytics, you'd need to hook up to google analytics to get better data.",
      "\"If you're trying to sell anything, the site builder may or may not let you add any products! It's a crap shoot. I tried to alter & change a product for over 30 minutes and it won't do it!\"",
    ],
    moreInfo: [] as string[],
    examples: [] as string[],
    perfectIf: [
      "Perfect for very few people, I'd highly suggest avoiding this service.",
      "You already use GoDaddy for your domain and you want everything in one place.",
      "Want an easy but basic building experience and you just need a simple website, such as a business landing page or small personal projects.",
      "You just want to get online fast.",
      [
        "You don't care about having a website builder that will grow with your business needs.",
      ],
    ],
    skipIf: [
      "You don't want to deal with a company known for exceptionally aggressive introductory discounts followed by high renewal prices and heavy upselling.",
      "You need something more than a basic site.",
      "You want more than bare bones customization.",
    ],
  },
];

export const tagCategories: Record<TagCategory, string[]> = {
  pages: ["1 page", "multi-page"],
  shop: ["small shop", "big shop"],
  "creative freedom": [
    "low customization",
    "medium customization",
    "heavy customization",
  ],
  "learning curve": ["low difficulty", "medium difficulty", "high difficulty"],
  POS: ["built in POS"],
};

export const guidingQuestions: GuidingQuestion[] = [
  {
    id: 1,
    question:
      "Do you just need your website to show basic information and have a contact form?",
    options: [
      {
        label: "Yes",
        action: { category: "pages", tag: "1 page" },
      },
      {
        label: "No",
        action: { category: "pages", tag: "multi-page" },
      },
    ],
  },
  {
    id: 2,
    question: "Need an online shop?",
    options: [
      {
        label: "No",
        action: { category: "shop", tag: "none" },
      },
      {
        label: "Yes, a small shop",
        action: { category: "shop", tag: "small shop" },
      },
      {
        label: "Yes, a big shop",
        action: { category: "shop", tag: "big shop" },
      },
    ],
  },
  {
    id: 3,
    question: "How much control do you need over the design?",
    options: [
      {
        label: "Very little",
        action: {
          category: "creative freedom",
          tag: "low customization",
        },
      },
      {
        label: "Some",
        action: {
          category: "creative freedom",
          tag: "medium customization",
        },
      },
      {
        label: "A lot",
        action: {
          category: "creative freedom",
          tag: "heavy customization",
        },
      },
    ],
  },
];
