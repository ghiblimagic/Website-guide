import { FAQ } from "../types/types";

export const faqs: FAQ[] = [
  {
    id: "need-website",
    question: "Do you need a website?",
    answer: [
      "If you’re a locally-focused business that gets most business through world of mouth rather than google searches, you can potentially thrive just with social media.",
      "Benefits of a website:",
      [
        " Better SEO: (You show up higher in google search results).",
        "Business is not hidden behind “sign in to view” banners by social media.",
        "   Finding menu, store hours or addresses is easier for clients.",
        "    Not worrying about social media suspending your main business page.",
        "   Looks more professional and signals your business is still open.",
      ],
    ],
    linkText: "For a more detailed answer I have a longer article here:",
    link: "https://janetspellman.com/blog/need-a-website",
  },
  {
    id: "developer",
    question: "When should you hire a developer?",
    answer: [
      "1. You don’t have the time or energy to build a website yourself.",
      [
        "You’ll work with a developer to figure out what your site should look like to achieve your goals. They’ll take care of the technical aspects to turn your vision into a layout, design, and fully working site.",
        "They can build it on a website builder (so you can easily update it later) or code something custom if you need more flexibility.",
      ],

      "2. You want to improve your chances of ranking higher on Google and other search engines.",
      [
        "Website builders work great for most small businesses, but they do come with extra code. That usually isn’t a problem unless the site gets very complex or overloaded with plugins, heavy images, or fancy animations.",
        "A website builder will usually be fine if:",
        [
          "Your business is small or medium-sized.",
          "You keep things lean. This means only using a small amount of apps/plugins, or limiting heavy visual effects. (Or you bring in a developer later to help optimize things.)",
        ],
        "The webpage mainly just needs to:",
        [
          "To load within 2 seconds so the website can rank higher on search results and potential customers won't get frusterated and click off the webpage.",
          "Have clean enough code that google can easily read it to rank for SEO.",
          "Allow you to customize to the level that you need.",
        ],
        "A quick way to think about it:",
        [
          "A website builder = a reliable sedan. (Gets you where you need to go, works for most people, and is low-maintenance.)",
        ],
        [
          "Custom-coded site (or advanced platforms) = a high-performance vehicle. (Built for heavier loads, more speed, more customization, and tougher competition.)",
          "Most people can happily drive a sedan for years. But if your business grows or competition becomes tougher, the “performance car” starts to matter.",
        ],
      ],
      "3. You need help switching platforms or hosts.",
      [
        "Moving from Wix → WordPress?",
        "Squarespace → Shopify?",
        "Self-hosted WordPress → a faster host?",
        [
          "A developer can rebuild or migrate the site, and make sure nothing breaks in the process.",
        ],
      ],
      "4. You’re a larger business and need more advanced features or customization",
    ],
  },
  {
    id: "price",
    question: "Why is there no filter for price?",
    answer: [
      "Although the base version of a web page builder can be cheaper than others, most of the cost of a website comes from plugins/apps that you use to extend the functionality. Or extra add-ons that you buy from the website builder itself.",
      "At some point, sometimes the more expensive web page builder with more built in features can become cheaper than a chea web page builder that needs more adds ons.",
      "So it would of been misleading to add a price filter.",
    ],
  },
  {
    id: "what-is-plugin",
    question: "What is a plugin, extension or app?",
    answer: [
      "These are “apps” you can install to give extra features to your website.",
      "It acts the same way as a mobile phone, where you would access an app store to extend its “features”. Some apps are free, others have monthly costs.",
    ],
  },
  {
    id: "what-is-domain",
    question: "What is a domain name?",
    answer: [
      "Every website has an IP address ex: 192..168.1.1 In human terms, this would be someone’s full legal name like: Albus Percival Wulfric Brian Dumbledore.",

      "A domain name is a human readable name, so it would be a nickname like: Professor Dumbledore. Buying a domain name means you’re buying a unique nickname that people can use to find your website.",

      "Domain names can be inexpensive $10-20 a year. But if its a high demand domain name, it can be significantly more expensive.",
    ],
  },
  {
    id: "what-is-seo",
    question: "What is SEO?",
    answer: [
      "High SEO (Search Engine Optimization) means getting Google to rank your website higher so more customers can find you through Google Search results.",

      "Site owners (you) will control most of SEO. However website builders do have a part in:",
      [
        "Directly affecting SEO through code quality or the the quality of its server OR",
        "They can limit your ability to adjust your SEO ranking.",
      ],
    ],
    linkText: "Longer explaination here:",
    link: "https://janetspellman.com/blog/seo",
  },
  {
    id: "built-in-pos",
    question: "Should built-in POS integration be a top priority?",
    answer: [
      "Native POS means your in-store system and your online store speak the same language automatically.",

      "But not every business needs this.",

      "If you run a bakery with a few items, or a service business with limited in-person sales then two seperate systems would likely work fine for your business.",

      "You only need native POS if you handle a lot of in-person sales AND online sales.",
    ],
    linkText:
      "Need more information to decide if you need built-in POS integration? I have a blog article about it here:",
    link: "https://janetspellman.com/blog/poso",
  },
];
