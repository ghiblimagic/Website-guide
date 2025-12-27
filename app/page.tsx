import Link from "next/link";
import DownloadImage from "@/app/components/DownloadImage";
import FlowchartOverviewButton from "./components/FlowchartOverviewButton";
export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white pt-6 sm:pt-20 pb-12 sm:pb-32">
        <div className="max-w-5xl mx-auto px-4 flex flex-col-reverse sm:flex-row items-center sm:gap-8">
          <div className="max-w-3xl sm:mx-auto text-center  rounded-2xl">
            <h1 className="mt-8 sm:mt-0 text-4xl md:text-5xl lg:text-7xl font-bold text-gray-950 mb-6 animate-fade-in">
              Overwhelmed
            </h1>
            <p className="text-2xl md:text-3xl text-blue-950 mb-4 font-light">
              With choosing a website builder?
            </p>
            <p className="text-lg md:text-xl text-blue-950 mb-12 max-w-2xl mx-auto">
              Quickly find builders that match your business so you can spend
              time on what matters.
            </p>

            <div className="flex flex-row gap-4 justify-center  items-center">
              <Link
                className="inline-block px-6 sm:px-10 py-4 bg-blue-600 text-white rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg border-b-4 border-blue-400"
                href="/guide"
              >
                Guide
              </Link>

              <Link
                className="inline-block px-6 sm:px-10 py-4 border-2 text-blue-900 font-semibold border-blue-700 bg-blue-100 hover:bg-blue-200 rounded-2xl"
                href="#flowchart"
              >
                Flowchart
              </Link>
            </div>
          </div>

          <div className="text-center">
            {" "}
            <img
              src="/images/stressed.jpg"
              alt="Someone sitting in front of a laptop, looking stressed."
              className="w-40 sm:w-56 md:w-80 h-auto shrink-0"
            />
            <small className="text-blue-950 inline-block mt-2 w-full text-center ">
              <a
                href="https://www.freepik.com/free-vector/hand-drawn-flat-design-overwhelmed-people-illustration_23669513.htm"
                aria-label="Link to the freepik image source"
                target="_blank"
                rel="noopener noreferrer"
              >
                Image by FreePik
              </a>
            </small>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="w-45 h-45  rounded-lg flex items-center justify-center mb-4 mx-auto">
              <img src="/images/comparison.png" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Quick Comparison
            </h3>
            <p className="text-gray-600">
              Compare top website builders based on features that you care
              about.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="w-45 h-45 bg-blue-100 rounded-lg  mb-4 mx-auto ">
              <img src="/images/filters.png" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Save Time & Money
            </h3>
            <p className="text-gray-600">
              Avoid wasting time researching web builders that will not match
              your needs! Narrow down your options to a few potential builders.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="w-45 h-45 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <img src="/images/quiz.png" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Personalized Recommendations
            </h3>
            <p className="text-gray-600">
              Answer a few optional questions to get quickly matched with
              builder(s) for your business. No email or other personal
              information needed.
            </p>
          </div>
        </div>
      </section>

      <section className=" mx-auto px-4 pt-20 pb-32 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold  mb-6">
            Why is this free?
          </h2>

          <p className="text-lg md:text-xl 0 mb-6 max-w-2xl mx-auto">
            Whether you&apos;re a business looking to DIY your site or
            evaluating whether to hire a developer, you deserve clear, unbiased
            guidance.
          </p>
          <p className="text-lg md:text-xl  mb-6 max-w-2xl mx-auto">
            My goal is simple: help you make an informed decision about choosing
            a website builder with confidence. Whether that means building the
            website yourself, working with me, or choosing another developer
            entirely.
          </p>
          <p className="text-lg md:text-xl  sm:mb-6 max-w-2xl mx-auto">
            Also, I want to give fellow developers a tool to help choose the
            best website builders for clients.
          </p>
        </div>
      </section>

      {/* ***** Flowchart Section *********** */}
      <section className="mx-auto px-4 py-20 border-t-4 bg-white">
        <h2
          className="text-3xl font-bold text-blue-950 mb-8 text-center"
          id="flowchart"
        >
          Would you prefer a flowchart?
        </h2>

        <DownloadImage
          src="/images/website-flowchart.png"
          alt="Flowchart diagram"
          label="Download flowchart"
        />

        <details className="mt-6 p-4  text-blue-950 rounded text-center">
          <summary className="cursor-pointer font-semibold text-lg">
            View text version of flowchart
          </summary>
          <div
            className="mt-4"
            id="flowchart-description"
          >
            <h3 className="text-xl font-semibold mb-3">
              Flowchart Description
            </h3>
            <p className="mb-4">
              This flowchart helps you choose the right website builder based on
              your needs. Follow the decision points.
            </p>

            {/* Table of contents for flowchart */}

            <div className="my-8 p-4 rounded-lg">
              <h3
                className="text-xl font-semibold mb-3"
                id="flowchart-heading"
              >
                Quick Navigation
              </h3>
              <nav aria-label="Flowchart questions navigation">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl mx-auto text-center">
                  <li>
                    <a
                      href="#start"
                      className="text-blue-600 hover:underline"
                    >
                      1. Multi-page website?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#suffering"
                      className="text-blue-600 hover:underline"
                    >
                      2. Enjoy suffering?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sell-online"
                      className="text-blue-600 hover:underline"
                    >
                      3. Sell things online?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#selling-few"
                      className="text-blue-600 hover:underline"
                    >
                      4. Few products only?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#total-design"
                      className="text-blue-600 hover:underline"
                    >
                      5. Total design control?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#customize"
                      className="text-blue-600 hover:underline"
                    >
                      6. Customize templates heavily?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#many-templates"
                      className="text-blue-600 hover:underline"
                    >
                      7. Many template options?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pos"
                      className="text-blue-600 hover:underline"
                    >
                      8. POS integration priority?
                    </a>
                  </li>

                  <li>
                    <a
                      href="#wordpress"
                      className="text-blue-600 hover:underline"
                    >
                      9. Wordpress.org or wordpress.com
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Flowchart paths */}
            <ol
              className="space-y-8 list-decimal list-inside ml-6"
              role="list"
              id="flowchart-path"
            >
              {/* question 1 */}
              <li id="start">
                <strong>Do you want a multi-page website?</strong>
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>
                    <strong>No:</strong> Consider Google Business Page (free),
                    Carrd, Google Sites, or Siimple (cheap, fast, simple)
                  </li>
                  <li className="mt-4">
                    <a
                      href="#suffering"
                      className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded  "
                    >
                      <strong>Yes:</strong> Continue to question 2
                    </a>
                    <FlowchartOverviewButton />
                  </li>
                </ul>
              </li>

              {/* question 2 */}

              <li id="suffering">
                <strong>Do you enjoy suffering?</strong>
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>
                    <strong>Yes:</strong> GoDaddy (not recommended due to
                    aggressive upselling and poor service)
                  </li>
                  <li>
                    <a
                      href="#sell-online"
                      className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                      <strong>No:</strong> Continue to question 3
                    </a>
                    <FlowchartOverviewButton />
                  </li>
                </ul>
              </li>

              {/* question 3 */}

              <li id="sell-online">
                <strong>Need to sell things online?</strong>
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>
                    <a
                      href="#total-design"
                      className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                      <strong>No:</strong> Skip to question 5
                    </a>
                  </li>
                  <li>
                    <a
                      href="#selling-few"
                      className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                      <strong>Yes:</strong> Continue to question 4
                    </a>
                    <FlowchartOverviewButton />
                  </li>
                </ul>
              </li>

              {/* question 4 */}
              <li id="selling-few">
                <strong>
                  Selling only a few products or need delivery integration?
                </strong>
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>
                    <strong>Yes:</strong> Squarespace, WordPress, or Wix with
                    e-commerce plugins; Carrd/Google Sites with Ecwid; or Pixpa
                    for creatives.{" "}
                    <a
                      href="#pos"
                      className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                      Continue to question 8.
                    </a>
                  </li>
                  <li>
                    <strong>No:</strong> Shopify (best for full stores) or
                    WordPress with BigCommerce/WooCommerce
                  </li>
                  <FlowchartOverviewButton />
                </ul>
              </li>

              {/* question 5 */}
              <li id="total-design">
                <strong>Want total design control?</strong>
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>
                    <strong>Yes:</strong> Webflow
                  </li>
                  <li>
                    <a
                      href="#customize"
                      className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                      <strong>No:</strong> Continue to question 6
                    </a>
                  </li>
                  <FlowchartOverviewButton />
                </ul>
              </li>

              {/* question 6 */}
              <li id="customize">
                <strong>Want to customize templates heavily?</strong>
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>
                    <strong>Yes:</strong>
                    {
                      " WordPress (more customizable, grows    with business but takes time to learn). "
                    }

                    <a
                      href="#wordpress"
                      className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                      Continue to question 8.
                    </a>
                  </li>
                  <li>
                    <a
                      href="#many-templates"
                      className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                      <strong>No:</strong> Continue to question 7
                    </a>
                  </li>
                  <FlowchartOverviewButton />
                </ul>
              </li>

              {/* question 7 */}

              <li id="many-templates">
                <strong>
                  Would you prefer many template options even if adjustment
                  takes more time?
                </strong>
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>
                    <strong>Yes:</strong> Wix (more extensions and themes than
                    Squarespace)
                  </li>
                  <li>
                    <strong>No:</strong> Squarespace, Hostinger, Pixpa or Google
                    Sites.
                  </li>
                  <FlowchartOverviewButton />
                </ul>
              </li>

              {/* question 8 */}
              <li id="pos">
                <strong>
                  Is built-in POS integration the top priority? Read the FAQs if
                  you&apos;re not sure if this applies to you.
                </strong>
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>
                    <strong>Yes:</strong> Square or Wix (for any type of
                    business) Toast (specifically for restaurants)
                  </li>
                  <li>
                    <a
                      href="#total-design"
                      className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                      <strong>No:</strong> Go to question 5
                    </a>
                  </li>
                </ul>
                <FlowchartOverviewButton />
              </li>

              {/* question 9 */}
              <li id="wordpress">
                <strong>
                  Do you want a simplier experience in exchange for a: higher
                  base price, less control, and being restricted from some
                  themes and plugins?
                </strong>
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>
                    <strong>Yes:</strong> Wordpress.com
                  </li>
                  <li>
                    <strong>No:</strong> wordpress.org
                  </li>
                </ul>
                <FlowchartOverviewButton />
              </li>
            </ol>
          </div>
        </details>
      </section>

      {/* CTA Section */}
      <section className="mx-auto px-4 py-20 border-t-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to find your match?
          </h2>

          <Link
            className="inline-block px-10 py-4 bg-white text-blue-800 rounded-lg font-semibold text-lg hover:bg-blue-100 border-b-4 border-blue-400 transition-all hover:scale-105 shadow-lg "
            href="/guide"
          >
            Start Your Search Now
          </Link>
        </div>
      </section>
    </>
  );
}
