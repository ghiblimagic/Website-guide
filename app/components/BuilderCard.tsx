import { CheckCircle2, XCircle } from "lucide-react";

import CollapsableList from "./CollapsableList";
import NestedList from "./NestedList";

interface BuilderCardProps {
  // WebsiteBuilder fields
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
  seo: (string | string[] | (string | string[])[])[];
  pros: (string | string[] | (string | string[])[])[];
  cons: (string | string[] | (string | string[])[])[];
  moreInfo: (string | string[] | (string | string[])[])[];
  examples: (string | string[] | (string | string[])[])[];
  perfectIf: (string | string[] | (string | string[])[])[];
  skipIf: (string | string[] | (string | string[])[])[];

  // VisibleFields
  summaryVisible: boolean;
  difficultyVisible: boolean;
  costVisible: boolean;
  seoVisible: boolean;
  supportVisible: boolean;
  ecommerceVisible: boolean;
  trialVisible: boolean;
  bestForVisible: boolean;
  migrationVisible: boolean;
  securityVisible: boolean;
  accessibilityVisible: boolean;
  collaborationVisible: boolean;
  appStoreVisible: boolean;
  examplesVisible: boolean;
  moreInfoVisible: boolean;
  proConsVisible: boolean;
}

export default function BuilderCard(props: BuilderCardProps) {
  return (
    <div
      key={props.id}
      className="bg-blue-50 rounded-xl shadow-sm border border-blue-200 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6">
        <h2 className="text-3xl font-bold text-white">{props.name}</h2>
      </div>

      <div className="p-2 sm:p-8 ">
        {/* Perfect If / Skip If */}

        <div
          className={
            !props.summaryVisible ? "hidden" : "grid md:grid-cols-2 gap-6 mb-4"
          }
        >
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2
                size={20}
                className="text-green-600"
              />
              <h3 className="font-semibold text-green-900 text-lg">
                Perfect if:
              </h3>
            </div>
            <NestedList
              items={props.perfectIf}
              iconStyling="text-green-900 "
            />
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-center gap-2 mb-4">
              <XCircle
                size={20}
                className="text-red-600"
              />
              <h3 className="font-semibold text-red-900 text-lg">Skip if:</h3>
            </div>
            <NestedList
              items={props.skipIf}
              iconStyling="text-red-900 "
            />
          </div>
        </div>

        <div
          className={
            !props.bestForVisible
              ? "hidden"
              : "bg-gray-50 rounded-lg p-4  border border-blue-200 col-span-1 md:col-span-2"
          }
        >
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-blue-950">Best For</h3>
          </div>
          <NestedList items={props.bestFor} />
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 mt-4">
          <div
            className={
              !props.difficultyVisible
                ? "hidden"
                : "bg-gray-50 rounded-lg p-4 border border-blue-200"
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-blue-950">
                Difficulty
              </h3>
            </div>
            <p
              className="text-2xl font-bold"
              aria-hidden="true"
            >
              {props.difficulty}
            </p>
            <span className="text-sm text-blue-950">
              ({props.difficulty.length}/5)
            </span>
            <span className="sr-only">
              Difficulty level: {props.difficulty.length}
              out of 5 stars
            </span>
          </div>

          <div
            className={
              !props.trialVisible
                ? "hidden"
                : "bg-gray-50 rounded-lg p-4 border border-blue-200"
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-blue-950">Trial</h3>
            </div>
            <CollapsableList items={props.trial} />
          </div>

          <div
            className={
              !props.costVisible
                ? "hidden"
                : "bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3"
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-blue-950">Cost</h3>
            </div>

            <NestedList items={props.cost} />
          </div>

          <div
            className={
              !props.seoVisible
                ? "hidden"
                : "bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3"
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-blue-950">SEO</h3>

              <p className="text-blue-950 text-sm">
                (Improve your ranking on search engines like Google.)
              </p>
            </div>
            <CollapsableList items={props.seo} />
          </div>

          <div
            className={
              !props.supportVisible
                ? "hidden"
                : "bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3"
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-blue-950">
                Customer Support
              </h3>
            </div>
            <CollapsableList items={props.support} />
          </div>

          <div
            className={
              !props.ecommerceVisible
                ? "hidden"
                : "bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3"
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-blue-950">
                E-commerce
              </h3>
            </div>
            <CollapsableList items={props.ecommerce} />
          </div>

          <div
            className={
              !props.migrationVisible
                ? "hidden"
                : "bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3"
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-blue-950">Migration</h3>
              <p className="text-blue-950 text-sm">
                (Can you move your site somewhere else)
              </p>
            </div>
            <NestedList items={props.migration} />
          </div>

          <div
            className={
              !props.securityVisible
                ? "hidden"
                : "bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3"
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-blue-950">Security</h3>
            </div>
            <CollapsableList items={props.security} />
          </div>

          <div
            className={
              !props.accessibilityVisible
                ? "hidden"
                : "bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3"
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-blue-950">
                Accessibility
              </h3>
            </div>
            <CollapsableList items={props.accessibility} />
          </div>

          <div
            className={
              !props.collaborationVisible
                ? "hidden"
                : "bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3"
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-blue-950">
                Collaboration
              </h3>
              <p className="text-blue-950 text-sm">
                (How Easy is it to Collaborate or Hand-off to an Employee)
              </p>
            </div>
            <CollapsableList items={props.collaboration} />
          </div>

          <div
            className={
              !props.appStoreVisible
                ? "hidden"
                : "bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3"
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-blue-950">App Store</h3>
              <p className="text-blue-950 text-sm">
                (Allows you to add extra features to your website.)
              </p>
            </div>
            <CollapsableList items={props.appStore} />
          </div>

          <div
            className={
              !props.examplesVisible
                ? "hidden"
                : "bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3"
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-blue-950">Examples</h3>
            </div>
            <NestedList items={props.examples} />
          </div>
        </div>

        {/* More Info Section */}

        <div
          className={
            !props.moreInfoVisible
              ? "hidden"
              : "bg-gray-50 rounded-lg p-6 border border-blue-200 mb-8"
          }
        >
          <h3 className="font-semibold text-blue-950 text-xl mb-3">
            More Informatiion
          </h3>
          <NestedList items={props.moreInfo} />
        </div>

        {/* Pros / Cons */}

        <div
          className={
            !props.proConsVisible ? "hidden" : "grid md:grid-cols-2 gap-6"
          }
        >
          <div className="w-full max-w-full overflow-hidden bg-gray-50 rounded-lg p-4 border border-blue-200">
            <h3 className="font-semibold text-blue-950 mb-3 text-xl">Pros</h3>

            <NestedList
              items={props.pros}
              icon={CheckCircle2}
              iconStyling="text-green-600 mt-0.5 flex-shrink-0"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-blue-200">
            <h3 className="font-semibold text-blue-950 mb-3 text-xl">Cons</h3>

            <NestedList
              items={props.cons}
              icon={XCircle}
              iconStyling="text-red-600 mt-0.5 flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
