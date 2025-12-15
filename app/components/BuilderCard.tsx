import { CheckCircle2, XCircle } from "lucide-react";

import ConvertStringLinkToA from "../utils/ConvertStringLinkToA";

import CollapsableList from "./CollapsableList";
import NestedList from "./NestedList";

interface BuilderCardProps {
  // WebsiteBuilder fields
  id: number;
  name: string;
  tags: {
    pages: string[];
    shop: string[];
    "creative freedom": string[];
    POS: string[];
    "learning curve": string[];
  };
  difficulty: string;
  cost: string[];
  trial: (string | string[] | (string | string[])[])[];
  bestFor: string[];
  support: (string | string[] | (string | string[])[])[];
  migration: string[];
  security: (string | string[] | (string | string[])[])[];
  accessibility: string[];
  collaboration: string[];
  ecommerce: (string | string[] | (string | string[])[])[];
  appStore: string[];
  seo: (string | string[] | (string | string[])[])[];
  pros: (string | string[] | (string | string[])[])[];
  cons: (string | string[] | (string | string[])[])[];
  moreInfo: string[];
  examples: string[];
  perfectIf: string[];
  skipIf: string[];

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
            <ul className="space-y-2">
              {props.perfectIf.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 my-3 text-sm text-green-900"
                >
                  <span className="text-green-600 mt-0.5">•</span>

                  <ConvertStringLinkToA item={item} />
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-center gap-2 mb-4">
              <XCircle
                size={20}
                className="text-red-600"
              />
              <h3 className="font-semibold text-red-900 text-lg">Skip if:</h3>
            </div>
            <ul className="space-y-2">
              {props.skipIf.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start my-3  gap-2 text-sm text-red-900"
                >
                  <span className="text-red-600 mt-0.5">•</span>

                  <ConvertStringLinkToA item={item} />
                </li>
              ))}
            </ul>
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
            <h3 className="text-xl font-semibold text-gray-700">Best For</h3>
          </div>
          <ul className="space-y-1 ">
            {props.bestFor.map((item, idx) => (
              <li
                key={idx}
                className="text-sm  text-gray-700"
              >
                <ConvertStringLinkToA item={item} />
              </li>
            ))}
          </ul>
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
              <h3 className="text-xl font-semibold text-gray-700">
                Difficulty
              </h3>
            </div>
            <p
              className="text-2xl font-bold"
              aria-hidden="true"
            >
              {props.difficulty}
            </p>
            <span className="text-sm text-gray-700">
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
              <h3 className="text-xl font-semibold text-gray-700">Trial</h3>
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
              <h3 className="text-xl font-semibold text-gray-700">Cost</h3>
            </div>
            <ul className="space-y-1 list-disc list-inside">
              {props.cost.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm my-3  text-gray-700"
                >
                  <ConvertStringLinkToA item={item} />
                </li>
              ))}
            </ul>
          </div>

          <div
            className={
              !props.seoVisible
                ? "hidden"
                : "bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3"
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-gray-700">SEO</h3>
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
              <h3 className="text-xl font-semibold text-gray-700">
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
              <h3 className="text-xl font-semibold text-gray-700">
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
              <h3 className="text-xl font-semibold text-gray-700">Migration</h3>
              <p className="text-gray-700 text-sm">
                (Can you move your site somewhere else)
              </p>
            </div>
            <CollapsableList items={props.migration} />
          </div>

          <div
            className={
              !props.securityVisible
                ? "hidden"
                : "bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3"
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-gray-700">Security</h3>
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
              <h3 className="text-xl font-semibold text-gray-700">
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
              <h3 className="text-xl font-semibold text-gray-700">
                Collaboration
              </h3>
              <p className="text-gray-700 text-sm">
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
              <h3 className="text-xl font-semibold text-gray-700">App Store</h3>
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
              <h3 className="text-xl font-semibold text-gray-700">Examples</h3>
            </div>
            <ul className="space-y-1 list-disc list-inside">
              {props.examples.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm my-3  text-gray-700 break-words overflow-hidden"
                >
                  <ConvertStringLinkToA item={item} />
                </li>
              ))}
            </ul>
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
          <h3 className="font-semibold text-gray-700 text-xl mb-3">
            More Informatiion
          </h3>
          <ul className="space-y-1 list-disc">
            {props.moreInfo.map((item, idx) => (
              <li
                key={idx}
                className="text-sm my-3  text-gray-700 break-words overflow-hidden"
              >
                • <ConvertStringLinkToA item={item} />
              </li>
            ))}
          </ul>
        </div>

        {/* Pros / Cons */}

        <div
          className={
            !props.proConsVisible ? "hidden" : "grid md:grid-cols-2 gap-6"
          }
        >
          <div className="w-full max-w-full overflow-hidden bg-gray-50 rounded-lg p-4 border border-blue-200">
            <h3 className="font-semibold text-gray-700 mb-3 text-xl">Pros</h3>
            <ul className="space-y-2 ">
              <NestedList
                items={props.pros}
                icon={CheckCircle2}
                iconStyling="text-green-600 mt-0.5 flex-shrink-0"
              />
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-blue-200">
            <h3 className="font-semibold text-gray-700 mb-3 text-xl">Cons</h3>

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
