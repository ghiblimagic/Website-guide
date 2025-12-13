"use client";

import { useState, useMemo, useEffect } from "react";
import {
  ChevronLeft,
  X,
  Filter,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Check,
} from "lucide-react";

import {
  websiteBuilders,
  guidingQuestions,
  tagCategories,
} from "../data/websiteBuilderData";

import StyledButton from "../components/StyledButton";
// Type definitions
import CollapsableList from "../components/CollapsableList";
type TagCategory =
  | "pages"
  | "shop"
  | "creative freedom"
  | "learning curve"
  | "POS";
type FieldType =
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
  | "handoff"
  | "appStore"
  | "examples"
  | "proCons";

interface SelectedTags {
  pages: string[];
  shop: string[];
  "creative freedom": string[];
  "learning curve": string[];
  POS: string[];
}

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
  handoff: boolean;
  appStore: boolean;
  examples: boolean;
  proCons: boolean;
}

interface GuidingAction {
  yesAction: { category: TagCategory; tag: string };
  noAction: { category: TagCategory; tag: string };
}

export default function WebsiteBuilderGuide() {
  const [showGuidingQuestions, setShowGuidingQuestions] = useState(false);
  const [selectedTags, setSelectedTags] = useState<SelectedTags>({
    pages: [],
    shop: [],
    "creative freedom": [],
    "learning curve": [],
    POS: [],
  });
  const [visibleFields, setVisibleFields] = useState<VisibleFields>({
    summary: true,
    difficulty: true,
    cost: true,
    trial: true,
    bestFor: true,
    seo: true,
    support: true,
    migration: true,
    security: true,
    accessibility: true,
    handoff: true,
    ecommerce: true,
    appStore: true,
    examples: true,
    proCons: true,
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [itemCount, setItemCount] = useState(3);

  const [totalResults, setTotalResults] = useState(15);

  useEffect(() => {
    const hidden = localStorage.getItem("hideGuidingQuestions");
    setShowGuidingQuestions(hidden !== "true");
  }, []);

  // Sync checkbox → localStorage
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    if (checked) {
      localStorage.setItem("hideGuidingQuestions", "true");
    } else {
      localStorage.removeItem("hideGuidingQuestions");
      // or: localStorage.setItem('hideGuidingQuestions', 'false')
    }
  };

  const handleGuidingAnswer = (action: {
    category: TagCategory;
    tag: string;
  }) => {
    setSelectedTags((prev) => ({
      ...prev,
      [action.category]: [action.tag],
    }));
  };

  const toggleTag = (category: TagCategory, tag: string) => {
    setSelectedTags((prev) => {
      const currentTags = prev[category];
      const newTags = currentTags.includes(tag)
        ? currentTags.filter((t) => t !== tag)
        : [...currentTags, tag];
      setItemCount(3);
      return { ...prev, [category]: newTags };
    });
  };

  const clearAllTags = () => {
    setSelectedTags({
      pages: [],
      shop: [],
      "creative freedom": [],
      "learning curve": [],
      POS: [],
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

  useEffect(() => {
    setTotalResults(filteredBuilders.length);
  }, [filteredBuilders]);

  const activeTagCount = Object.values(selectedTags).flat().length;

  return (
    <div className="min-h-screen ">
      {/* Guiding Questions Modal */}
      {showGuidingQuestions && (
        <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="rounded-2xl bg-white shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0  border-b border-blue-200 px-8 py-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold text-blue-950 mb-4">
                    Which Website Builder Fits You?
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

            <div className="p-8 space-y-8 text-gray-700">
              {guidingQuestions.map((q) => (
                <div
                  key={q.id}
                  className="pb-8 border-b border-blue-200 last:border-0"
                >
                  <p className="text-lg font-medium text-gray-900 pt-1 mb-2">
                    {q.question}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {q.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleGuidingAnswer(opt.action)}
                        className="flex-1 bg-white border-2 border-blue-500 hover:bg-blue-50 text-blue-700 py-3 px-6 rounded-xl font-medium transition-all hover:shadow-md"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-blue-200 px-8 py-6 rounded-b-2xl">
              <label className="flex items-center text-center gap-2  text-gray-700 mb-4">
                <input
                  type="checkbox"
                  onChange={onChange}
                  className="accent-blue-700"
                />
                Do not show this again
              </label>

              <button
                onClick={() => setShowGuidingQuestions(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all hover:shadow-lg"
              >
                View Results
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Layout */}
      <div className="flex ">
        {/* Sidebar */}
        <div
          style={{
            backgroundImage: `url('/images/dotsBackground.png')`,
          }}
          className={`${
            sidebarOpen ? "w-80" : "w-0"
          } transition-all duration-300 bg-blue-900 border-r border-blue-200 overflow-hidden`}
        >
          <div className="flex flex-col text-white ">
            <div className="px-5 pt-6 ">
              <div className="flex justify-between items-center   bg-blue-900 pb-4  border border-white rounded-t-2xl">
                <div className="flex items-center gap-2  0 py-4 px-8 mx-auto rounded-2xl">
                  <Filter
                    size={20}
                    className="text-white"
                  />
                  <h3 className="text-2xl font-bold ">Filters</h3>
                </div>
                <StyledButton
                  onClick={() => setSidebarOpen(false)}
                  title="hide filters"
                  primary
                >
                  <ChevronLeft size={20} />
                </StyledButton>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto mx-5 pt-5 bg-blue-900 pb-4 border-x border-b rounded-b-2xl border-white pl-3">
              {activeTagCount > 0 && (
                <div className="text-center mb-2">
                  <StyledButton
                    onClick={clearAllTags}
                    text={`Clear Filters (${activeTagCount})`}
                    primary
                  >
                    <RotateCcw size={16} />
                  </StyledButton>
                </div>
              )}

              {Object.entries(tagCategories).map(([category, tags]) => (
                <div
                  key={category}
                  className="mb-8 last:mb-0 "
                >
                  <h3 className="font-semibold 0 mb-3 capitalize text-xl  tracking-wider">
                    {category}
                  </h3>
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
                              className="w-5 h-5  border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                            />
                          </div>
                          <span
                            className={`ml-3 text-sm transition-colors ${
                              isSelected
                                ? "text-white font-medium"
                                : "text-white group-hover:text-blue-100 group-hover:underline"
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
          <div className="border-b border-blue-200 shadow-sm bg-blue-50">
            <div className="px-6 py-4 ">
              <div className="flex items-center gap-4 mb-4  ">
                {!sidebarOpen && (
                  <StyledButton
                    onClick={() => setSidebarOpen(true)}
                    // className="p-2.5 bg-blue-600 rounded-xl border-b-2 border-white  hover:bg-blue-700 shadow-md shadow-blue-950 transition-colors"
                    title="Show filters"
                    primary
                  >
                    <Filter
                      size={20}
                      className="text-white"
                    />
                  </StyledButton>
                )}

                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-blue-950 mb-6 text-center">
                    Website Builder Finder
                  </h1>
                  <p className="text-sm text-blue-950 mt-0.5">
                    {totalResults} {totalResults === 1 ? "result" : "results"}{" "}
                    found
                  </p>
                </div>

                <StyledButton
                  onClick={() => setShowGuidingQuestions(true)}
                  text="Restart Quiz"
                  secondary
                />
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-blue-950 mr-2">
                  Show fields:
                </span>
                {Object.entries(visibleFields).map(([field, visible]) => {
                  const fieldLabels: Record<FieldType, string> = {
                    summary: "Summary",
                    difficulty: "Difficulty",
                    cost: "Cost",
                    trial: "Trial",
                    bestFor: "Best For",
                    seo: "SEO",
                    support: "Support",
                    migration: "Migration",
                    security: "Security",
                    accessibility: "Accessibility",
                    handoff: "Hand-off",
                    ecommerce: "E-commerce",
                    appStore: "App store",
                    examples: "Examples",
                    proCons: "Pro Cons",
                  };
                  return (
                    <button
                      key={field}
                      onClick={() => toggleField(field as FieldType)}
                      aria-pressed={visible}
                      className={`inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg font-semibold transition-all text-sm ${
                        visible
                          ? "bg-blue-100 text-blue-900  hover:bg-blue-200 ring-2 ring-blue-500"
                          : "bg-slate-900 text-gray-200 hover:bg-gray-200 hover:text-gray-800 "
                      }`}
                    >
                      <span className="sr-only">
                        {visible ? "Hide" : "Show"}
                      </span>
                      {visible && (
                        <Check
                          size={16}
                          className="text-blue-900"
                          aria-hidden="true"
                        />
                      )}

                      {fieldLabels[field as FieldType]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-6xl mx-auto p-6">
              {totalResults === 0 ? (
                <div className="rounded-xl shadow-sm border bg-blue-50 border-blue-200 p-16 text-center">
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
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-6 rounded-lg font-medium transition-all hover:shadow-md"
                  >
                    <RotateCcw size={16} />
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredBuilders.slice(0, itemCount).map((builder) => (
                    <div
                      key={builder.id}
                      className="bg-blue-50 rounded-xl shadow-sm border border-blue-200 overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6">
                        <h2 className="text-3xl font-bold text-white">
                          {builder.name}
                        </h2>
                      </div>

                      <div className="p-8">
                        {/* Perfect If / Skip If */}
                        {visibleFields.summary && (
                          <div className="grid md:grid-cols-2 gap-6 mb-4">
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
                                    className="flex items-start gap-2 my-3 text-sm text-green-900"
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
                                  Skip if:
                                </h3>
                              </div>
                              <ul className="space-y-2">
                                {builder.skipIf.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start my-3  gap-2 text-sm text-red-900"
                                  >
                                    <span className="text-red-600 mt-0.5">
                                      •
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {visibleFields.bestFor && (
                          <div className="bg-gray-50 rounded-lg p-4  border border-blue-200 col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-700">
                                Best For
                              </h3>
                            </div>
                            <ul className="space-y-1 ">
                              {builder.bestFor.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm  text-gray-700"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 mt-4">
                          {visibleFields.difficulty && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-blue-200">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-700">
                                  Difficulty
                                </h3>
                              </div>
                              <p
                                className="text-2xl font-bold"
                                aria-hidden="true"
                              >
                                {builder.difficulty}
                              </p>
                              <span className="text-sm text-gray-700">
                                ({builder.difficulty.length}/5)
                              </span>
                              <span className="sr-only">
                                Difficulty level: {builder.difficulty.length}
                                out of 5 stars
                              </span>
                            </div>
                          )}

                          {visibleFields.trial && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-blue-200">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-700">
                                  Trial
                                </h3>
                              </div>
                              <CollapsableList items={builder.trial} />
                            </div>
                          )}

                          {visibleFields.cost && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-700">
                                  Cost
                                </h3>
                              </div>
                              <ul className="space-y-1 list-disc list-inside">
                                {builder.cost.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm my-3  text-gray-700"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {visibleFields.seo && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-700">
                                  SEO
                                </h3>
                              </div>
                              <CollapsableList items={builder.seo} />
                            </div>
                          )}

                          {visibleFields.support && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-700">
                                  Customer Support
                                </h3>
                              </div>
                              <CollapsableList items={builder.support} />
                            </div>
                          )}

                          {visibleFields.ecommerce && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-700">
                                  E-commerce
                                </h3>
                              </div>
                              <CollapsableList items={builder.ecommerce} />
                            </div>
                          )}

                          {visibleFields.migration && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-700">
                                  Migration
                                </h3>
                                <p className="text-gray-700 text-sm">
                                  (Can you move your site somewhere else)
                                </p>
                              </div>
                              <CollapsableList items={builder.migration} />
                            </div>
                          )}

                          {visibleFields.security && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-700">
                                  Security
                                </h3>
                              </div>
                              <CollapsableList items={builder.security} />
                            </div>
                          )}

                          {visibleFields.accessibility && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-700">
                                  Accessibility
                                </h3>
                              </div>
                              <CollapsableList items={builder.accessibility} />
                            </div>
                          )}

                          {visibleFields.handoff && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-700">
                                  Collaboration
                                </h3>
                                <p className="text-gray-700 text-sm">
                                  (How Easy is it to Collaborate or Hand-off to
                                  an Employee)
                                </p>
                              </div>
                              <CollapsableList items={builder.handoff} />
                            </div>
                          )}

                          {visibleFields.appStore && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-700">
                                  App Store
                                </h3>
                              </div>
                              <CollapsableList items={builder.appStore} />
                            </div>
                          )}

                          {visibleFields.examples &&
                            builder.examples.length > 0 && (
                              <div className="bg-gray-50 rounded-lg p-4 border border-blue-200 col-span-1 md:col-span-2 lg:col-span-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="text-xl font-semibold text-gray-700">
                                    Examples
                                  </h3>
                                </div>
                                <ul className="space-y-1 list-disc list-inside">
                                  {builder.examples.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm my-3  text-gray-700 break-all"
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </div>

                        {/* More Info Section */}
                        {builder.moreInfo && builder.moreInfo.length > 0 && (
                          <div className="bg-gray-50 rounded-lg p-6 border border-blue-200 mb-8">
                            <h3 className="font-semibold text-gray-700 text-xl mb-3">
                              More Informatiion
                            </h3>
                            <ul className="space-y-1 list-disc">
                              {builder.moreInfo.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm my-3  text-gray-700 break-all"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Pros / Cons */}
                        {visibleFields.proCons && (
                          <div className="grid md:grid-cols-2 gap-6 ">
                            <div className="bg-gray-50 rounded-lg p-4 border border-blue-200">
                              <h3 className="font-semibold text-gray-700 mb-3 text-xl">
                                Pros
                              </h3>
                              <ul className="space-y-2 ">
                                {builder.pros.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 my-3 text-sm text-gray-700"
                                  >
                                    <CheckCircle2
                                      size={16}
                                      className="text-green-600 mt-0.5 flex-shrink-0"
                                    />
                                    <p className="break-words overflow-hidden">
                                      {item}
                                    </p>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4 border border-blue-200">
                              <h3 className="font-semibold text-gray-700 mb-3 text-xl">
                                Cons
                              </h3>
                              <ul className="space-y-2">
                                {builder.cons.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 my-3  text-sm text-gray-700"
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
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <p className=" text-center text-sm font-semibold text-blue-950 my-4">
                {" "}
                Showing {itemCount <= totalResults
                  ? itemCount
                  : totalResults}{" "}
                of {totalResults} results{" "}
              </p>
              {totalResults >= itemCount && (
                <div className="w-full text-center mt-2">
                  <StyledButton
                    onClick={() =>
                      setItemCount((prevCount) =>
                        Math.min((prevCount += 3), totalResults),
                      )
                    }
                    text={`${
                      itemCount === totalResults ? "Reached End" : "Load 3 More"
                    }`}
                    disabled={itemCount === totalResults}
                    primary
                  />
                  <StyledButton
                    onClick={() =>
                      setItemCount((prevCount) => (prevCount += 20))
                    }
                    text="Load All"
                    disabled={itemCount === totalResults}
                    primary
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
