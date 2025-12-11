"use client";

import React, { useState, useMemo } from "react";
import {
  ChevronRight,
  ChevronLeft,
  X,
  Menu,
  Filter,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Star,
  DollarSign,
  TrendingUp,
  HeadphonesIcon,
  Layout,
  ShoppingCart,
} from "lucide-react";

// Type definitions
type TagCategory = "pages" | "shop" | "customization" | "pos";
type FieldType =
  | "difficulty"
  | "cost"
  | "seo"
  | "support"
  | "templates"
  | "ecommerce";

interface SelectedTags {
  pages: string[];
  shop: string[];
  customization: string[];
  pos: string[];
}

interface VisibleFields {
  difficulty: boolean;
  cost: boolean;
  seo: boolean;
  support: boolean;
  templates: boolean;
  ecommerce: boolean;
}

interface GuidingAction {
  yesAction: { category: TagCategory; tag: string };
  noAction: { category: TagCategory; tag: string };
}

interface WebsiteBuilder {
  id: number;
  name: string;
  tags: {
    pages: string[];
    shop: string[];
    customization: string[];
    pos: string[];
  };
  difficulty: string;
  cost: string;
  seo: string;
  support: string;
  templates: string;
  ecommerce: string;
  perfectIf: string[];
  skipIf: string[];
  pros: string[];
  cons: string[];
}

// Data structure for website builders
const websiteBuilders: WebsiteBuilder[] = [
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
    cost: "Free with Google account. Custom domain recommended ($10-15/year)",
    seo: "Basic SEO toolkit - can rank but limited compared to other builders",
    support:
      "Community forums only (free), better support with Google Workspace subscription",
    templates: "Free and premium templates available",
    ecommerce: "Very limited - can add simple stores via JotForm integrations",
    perfectIf: [
      "You just want a basic website with contact form, gallery, and map",
      "You want a short-term site for an event or report",
      "Your organization uses Google Drive and other Google products",
    ],
    skipIf: [
      "You need a site that will grow with your business",
      "You want to avoid a basic-looking site",
      "You need highest SEO ranking possible",
      "You need a true e-commerce store",
    ],
    pros: [
      "Free with a Google account",
      "Mobile responsive by default",
      "Native Google integration",
      "Easy collaboration",
      "Simple to hand-off to employees",
    ],
    cons: [
      "Minimal customization options",
      "Basic-looking sites",
      "Minimal blogging features",
      "Google.sites subdomain can be filtered by some platforms",
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
    cost: "Pro Lite $9/year, Pro Standard $19/year (custom domain), Pro Plus $49/year",
    seo: "Limited but solid for small businesses and low-competition niches",
    support: "Email support, usually replies within 24 hours",
    templates: "Clean, minimal templates included",
    ecommerce: "No built-in features, but can embed Ecwid or use Stripe/PayPal",
    perfectIf: [
      "You want a clean, simple, affordable one-page website",
      "You need something done in roughly an hour",
      "You're a freelancer, entrepreneur, or need a portfolio",
    ],
    skipIf: [
      "You need blogging features",
      "You need complex features",
      "You need a true multi-page site",
    ],
    pros: [
      "Very affordable ($9-49/year)",
      "Easy to use",
      "Fast and lightweight",
      "7-day trial available",
    ],
    cons: [
      "Single page only (can fake multi-page with sections)",
      "Limited SEO customization",
      "Pro Standard required for custom domain",
    ],
  },
];

// Guiding questions
const guidingQuestions: Array<{
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

const tagCategories: Record<TagCategory, string[]> = {
  pages: ["1 page", "multi-page"],
  shop: ["no shop", "small shop", "big shop"],
  customization: ["low customization", "medium to heavy customization"],
  pos: ["built in POS"],
};

const fieldIcons: Record<
  FieldType,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  difficulty: Star,
  cost: DollarSign,
  seo: TrendingUp,
  support: HeadphonesIcon,
  templates: Layout,
  ecommerce: ShoppingCart,
};

export default function WebsiteBuilderGuide() {
  const [showGuidingQuestions, setShowGuidingQuestions] = useState(true);
  const [selectedTags, setSelectedTags] = useState<SelectedTags>({
    pages: [],
    shop: [],
    customization: [],
    pos: [],
  });
  const [visibleFields, setVisibleFields] = useState<VisibleFields>({
    difficulty: true,
    cost: true,
    seo: true,
    support: true,
    templates: true,
    ecommerce: true,
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleGuidingAnswer = (answer: "yes" | "no", action: GuidingAction) => {
    if (answer === "yes" || answer === "no") {
      const actionData = answer === "yes" ? action.yesAction : action.noAction;
      setSelectedTags((prev) => ({
        ...prev,
        [actionData.category]: [actionData.tag],
      }));
    }
  };

  const toggleTag = (category: TagCategory, tag: string) => {
    setSelectedTags((prev) => {
      const currentTags = prev[category];
      const newTags = currentTags.includes(tag)
        ? currentTags.filter((t) => t !== tag)
        : [...currentTags, tag];
      return { ...prev, [category]: newTags };
    });
  };

  const clearAllTags = () => {
    setSelectedTags({
      pages: [],
      shop: [],
      customization: [],
      pos: [],
    });
  };

  const toggleField = (field: FieldType) => {
    setVisibleFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const filteredBuilders = useMemo(() => {
    const hasAnyTags = Object.values(selectedTags).some(
      (tags) => tags.length > 0,
    );

    if (!hasAnyTags) return websiteBuilders;

    return websiteBuilders.filter((builder) => {
      return Object.entries(selectedTags).every(([category, tags]) => {
        if (tags.length === 0) return true;
        return tags.some((tag: string) =>
          builder.tags[category as TagCategory].includes(tag),
        );
      });
    });
  }, [selectedTags]);

  const activeTagCount = Object.values(selectedTags).flat().length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Guiding Questions Modal */}
      {showGuidingQuestions && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Find Your Perfect Website Builder
                  </h2>
                  <p className="text-gray-600">
                    Answer a few quick questions to narrow down your options
                  </p>
                </div>
                <button
                  onClick={() => setShowGuidingQuestions(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {guidingQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="pb-8 border-b border-gray-200 last:border-0"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-700 font-semibold">
                        {idx + 1}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-gray-900 pt-1">
                      {q.question}
                    </p>
                  </div>
                  <div className="flex gap-3 ml-12">
                    <button
                      onClick={() => handleGuidingAnswer("yes", q)}
                      className="flex-1 bg-white border-2 border-green-500 hover:bg-green-50 text-green-700 py-3 px-6 rounded-xl font-medium transition-all hover:shadow-md"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleGuidingAnswer("no", q)}
                      className="flex-1 bg-white border-2 border-blue-500 hover:bg-blue-50 text-blue-700 py-3 px-6 rounded-xl font-medium transition-all hover:shadow-md"
                    >
                      No
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-6 rounded-b-2xl">
              <button
                onClick={() => setShowGuidingQuestions(false)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-6 rounded-xl font-semibold transition-all hover:shadow-lg"
              >
                View Results
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Layout */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "w-80" : "w-0"
          } transition-all duration-300 bg-white border-r border-gray-200 overflow-hidden`}
        >
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Filter
                    size={20}
                    className="text-indigo-600"
                  />
                  <h3 className="text-xl font-bold text-gray-900">Filters</h3>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-gray-400 hover:text-gray-600 lg:hidden transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>

              {activeTagCount > 0 && (
                <button
                  onClick={clearAllTags}
                  className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-700 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors"
                >
                  <RotateCcw size={16} />
                  Clear All ({activeTagCount})
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {Object.entries(tagCategories).map(([category, tags]) => (
                <div
                  key={category}
                  className="mb-8 last:mb-0"
                >
                  <h4 className="font-semibold text-gray-900 mb-3 capitalize text-sm uppercase tracking-wider">
                    {category}
                  </h4>
                  <div className="space-y-2">
                    {tags.map((tag) => {
                      const isSelected =
                        selectedTags[category as TagCategory].includes(tag);
                      return (
                        <label
                          key={tag}
                          className="flex items-center cursor-pointer group"
                        >
                          <div className="relative flex items-center">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() =>
                                toggleTag(category as TagCategory, tag)
                              }
                              className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer"
                            />
                          </div>
                          <span
                            className={`ml-3 text-sm transition-colors ${
                              isSelected
                                ? "text-indigo-700 font-medium"
                                : "text-gray-700 group-hover:text-gray-900"
                            }`}
                          >
                            {tag}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header Toolbar */}
          <div className="bg-white border-b border-gray-200 shadow-sm">
            <div className="px-6 py-4">
              <div className="flex items-center gap-4 mb-4">
                {!sidebarOpen && (
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Show filters"
                  >
                    <Menu
                      size={20}
                      className="text-gray-700"
                    />
                  </button>
                )}

                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Website Builder Guide
                  </h1>
                  <p className="text-sm text-gray-600 mt-0.5">
                    {filteredBuilders.length}{" "}
                    {filteredBuilders.length === 1 ? "result" : "results"} found
                  </p>
                </div>

                <button
                  onClick={() => setShowGuidingQuestions(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 px-5 rounded-lg font-medium transition-all hover:shadow-md text-sm"
                >
                  Restart Quiz
                </button>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-gray-700 mr-2">
                  Show fields:
                </span>
                {Object.entries(visibleFields).map(([field, visible]) => {
                  const Icon = fieldIcons[field as FieldType];
                  return (
                    <button
                      key={field}
                      onClick={() => toggleField(field as FieldType)}
                      className={`inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg font-medium transition-all text-sm ${
                        visible
                          ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {visible && <Icon size={14} />}
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto bg-gray-50">
            <div className="max-w-6xl mx-auto p-6">
              {filteredBuilders.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-16 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Filter
                      size={32}
                      className="text-gray-400"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No matches found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters to see more results
                  </p>
                  <button
                    onClick={clearAllTags}
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 px-6 rounded-lg font-medium transition-all hover:shadow-md"
                  >
                    <RotateCcw size={16} />
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredBuilders.map((builder) => (
                    <div
                      key={builder.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-6">
                        <h2 className="text-3xl font-bold text-white">
                          {builder.name}
                        </h2>
                      </div>

                      <div className="p-8">
                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                          {visibleFields.difficulty && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                              <div className="flex items-center gap-2 mb-2">
                                <Star
                                  size={16}
                                  className="text-indigo-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  Difficulty
                                </span>
                              </div>
                              <p className="text-2xl font-bold text-gray-900">
                                {builder.difficulty}
                              </p>
                            </div>
                          )}

                          {visibleFields.cost && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                              <div className="flex items-center gap-2 mb-2">
                                <DollarSign
                                  size={16}
                                  className="text-indigo-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  Cost
                                </span>
                              </div>
                              <p className="text-sm text-gray-900">
                                {builder.cost}
                              </p>
                            </div>
                          )}

                          {visibleFields.seo && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 col-span-2 md:col-span-1">
                              <div className="flex items-center gap-2 mb-2">
                                <TrendingUp
                                  size={16}
                                  className="text-indigo-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  SEO
                                </span>
                              </div>
                              <p className="text-sm text-gray-900">
                                {builder.seo}
                              </p>
                            </div>
                          )}

                          {visibleFields.support && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 col-span-2 md:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <HeadphonesIcon
                                  size={16}
                                  className="text-indigo-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  Customer Support
                                </span>
                              </div>
                              <p className="text-sm text-gray-900">
                                {builder.support}
                              </p>
                            </div>
                          )}

                          {visibleFields.templates && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                              <div className="flex items-center gap-2 mb-2">
                                <Layout
                                  size={16}
                                  className="text-indigo-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  Templates
                                </span>
                              </div>
                              <p className="text-sm text-gray-900">
                                {builder.templates}
                              </p>
                            </div>
                          )}

                          {visibleFields.ecommerce && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 col-span-2">
                              <div className="flex items-center gap-2 mb-2">
                                <ShoppingCart
                                  size={16}
                                  className="text-indigo-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  E-commerce
                                </span>
                              </div>
                              <p className="text-sm text-gray-900">
                                {builder.ecommerce}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Perfect If / Skip If */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
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
                              {builder.perfectIf.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-green-900"
                                >
                                  <span className="text-green-600 mt-0.5">
                                    •
                                  </span>
                                  <span>{item}</span>
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
                              <h3 className="font-semibold text-red-900 text-lg">
                                Skip it if:
                              </h3>
                            </div>
                            <ul className="space-y-2">
                              {builder.skipIf.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-red-900"
                                >
                                  <span className="text-red-600 mt-0.5">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Pros / Cons */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                              Pros
                            </h3>
                            <ul className="space-y-2">
                              {builder.pros.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-gray-700"
                                >
                                  <CheckCircle2
                                    size={16}
                                    className="text-green-600 mt-0.5 flex-shrink-0"
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                              Cons
                            </h3>
                            <ul className="space-y-2">
                              {builder.cons.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-gray-700"
                                >
                                  <XCircle
                                    size={16}
                                    className="text-red-600 mt-0.5 flex-shrink-0"
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
