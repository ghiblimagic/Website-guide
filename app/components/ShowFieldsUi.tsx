import { Check } from "lucide-react";

import { FieldType } from "../types/types";

interface FieldToggleProps {
  visibleFields: Record<FieldType, boolean>;
  toggleField: (field: FieldType) => void;
}

export default function FieldToggles({
  visibleFields,
  toggleField,
}: FieldToggleProps) {
  const fieldLabels: Record<FieldType, string> = {
    summary: "Summary",
    bestFor: "Best For",
    difficulty: "Difficulty",
    trial: "Trial",
    cost: "Cost",
    seo: "SEO",
    support: "Support",
    ecommerce: "E-commerce",
    migration: "Migration",
    security: "Security",
    accessibility: "Accessibility",
    collaboration: "Collaboration",
    appStore: "App store",
    examples: "Examples",
    moreInfo: "More Info",
    proCons: "Pro Cons",
  };

  return (
    <div className="flex items-center gap-2 flex-wrap mb-6">
      <a
        href="#content"
        className="fixed left-1/2 -translate-x-1/2 -translate-y-full focus:translate-y-48 top-0 p-3 bg-mainColor text-white z-50 focus:outline-none focus:ring-2 focus:ring-white transition-transform bg-blue-900"
      >
        Skip fields
      </a>
      <span className="text-sm font-semibold text-blue-950 mr-2">
        Show fields:
      </span>
      {Object.entries(visibleFields).map(([field, visible]) => (
        <button
          key={field}
          onClick={() => toggleField(field as FieldType)}
          aria-pressed={visible}
          className={`inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg font-semibold transition-all text-sm   border-2 border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900${
            visible
              ? "bg-blue-100 text-blue-900 hover:bg-blue-200 "
              : "bg-slate-700 text-gray-200 hover:bg-gray-200 hover:text-gray-800"
          }`}
        >
          <span className="sr-only">{visible ? "Hide" : "Show"}</span>
          {visible && (
            <Check
              size={16}
              className="text-blue-900"
              aria-hidden="true"
            />
          )}
          {fieldLabels[field as FieldType]}
        </button>
      ))}
    </div>
  );
}
