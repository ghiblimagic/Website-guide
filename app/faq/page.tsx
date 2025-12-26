import NestedList from "../components/NestedList";

import { faqs } from "../data/faqData";

export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="max-w-2xl mx-auto bg-blue-50 rounded-2xl shadow-sm border border-blue-200 overflow-hidden hover:shadow-md transition-shadow"
    >
      <h2
        id="faq-heading"
        className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6 text-xl rounded-2xl"
      >
        Frequently Asked Questions
      </h2>
      <ul className="space-y-4 py-6 mx-2 text-blue-950 rounded-2xl">
        {faqs.map((item) => {
          return (
            <li
              key={item.id}
              className="bg-gray-50"
            >
              <details className="group border border-blue-100 rounded-lg">
                <summary
                  className="
                    cursor-pointer
                    list-none
                    font-medium
                    px-4 py-3
                    flex items-center justify-between
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-violet-500
                  "
                >
                  <h3>{item.question}</h3>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>
                {/* Animated content */}
                <div
                  className="
                    grid transition-[grid-template-rows] duration-300
                    grid-rows-[0fr] group-open:grid-rows-[1fr]
                    motion-reduce:transition-none
                  "
                >
                  <div className="overflow-hidden px-4 pb-4 ">
                    <NestedList
                      items={item.answer}
                      icon={null}
                    />

                    {item.link && (
                      <div className="text-sm text-blue-950">
                        <p className="mb-2"> {item.linkText}</p>
                        <a
                          className="ml-6 pb-4 underline underline-offset-4 decoration-secondaryColor text-blue-700 hover:no-underline "
                          href={item.link}
                        >
                          {item.link}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </details>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
