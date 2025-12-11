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
  Calendar,
  Target,
  Shield,
  Lock,
  Users,
  Package,
  Code,
  ExternalLink,
} from "lucide-react";

import {
  websiteBuilders,
  guidingQuestions,
  tagCategories,
} from "../data/websiteBuilderData";

// Type definitions
type TagCategory = "pages" | "shop" | "customization" | "pos";
type FieldType =
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
  | "examples";

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
  ecommerce: boolean;
  trial: boolean;
  bestFor: boolean;
  migration: boolean;
  security: boolean;
  accessibility: boolean;
  handoff: boolean;
  appStore: boolean;
  examples: boolean;
}

interface GuidingAction {
  yesAction: { category: TagCategory; tag: string };
  noAction: { category: TagCategory; tag: string };
}

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
        <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center z-50 p-4">
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
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 font-semibold">
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
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all hover:shadow-lg"
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
          style={{
            backgroundImage: `url('/images/dotsBackground.png')`,
          }}
          className={`${
            sidebarOpen ? "w-80" : "w-0"
          } transition-all duration-300 bg-blue-900 border-r border-gray-200 overflow-hidden`}
        >
          <div className="h-full flex flex-col text-white">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 bg-blue-900 p-2 border-blue-600 border-2 rounded-2xl">
                  <Filter
                    size={20}
                    className="text-white"
                  />
                  <h3 className="text-xl font-bold ">Filters</h3>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className=" hover:text-gray-600 lg:hidden transition-colors"
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

            <div className="flex-1 overflow-y-auto m-5  bg-blue-900">
              {Object.entries(tagCategories).map(([category, tags]) => (
                <div
                  key={category}
                  className="mb-8 last:mb-0 "
                >
                  <h4 className="font-semibold 0 mb-3 capitalize text-sm  tracking-wider">
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
                              className="w-5 h-5  border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                            />
                          </div>
                          <span
                            className={`ml-3 text-sm transition-colors ${
                              isSelected
                                ? "text-white font-medium"
                                : "text-white group-hover:text-gray-900"
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
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-lg font-medium transition-all hover:shadow-md text-sm"
                >
                  Restart Quiz
                </button>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-gray-700 mr-2">
                  Show fields:
                </span>
                {Object.entries(visibleFields).map(([field, visible]) => {
                  const fieldLabels: Record<FieldType, string> = {
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
                  };
                  return (
                    <button
                      key={field}
                      onClick={() => toggleField(field as FieldType)}
                      className={`inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg font-medium transition-all text-sm ${
                        visible
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {fieldLabels[field as FieldType]}
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
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-6 rounded-lg font-medium transition-all hover:shadow-md"
                  >
                    <RotateCcw size={16} />
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredBuilders.slice(0, 3).map((builder) => (
                    <div
                      key={builder.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-6">
                        <h2 className="text-3xl font-bold text-white">
                          {builder.name}
                        </h2>
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
                                className="flex items-start gap-2 my-1 text-sm text-green-900"
                              >
                                <span className="text-green-600 mt-0.5">•</span>
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
                                className="flex items-start my-1 gap-2 text-sm text-red-900"
                              >
                                <span className="text-red-600 mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {visibleFields.bestFor && (
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 col-span-1 md:col-span-2">
                          <div className="flex items-center gap-2 mb-2">
                            <Target
                              size={16}
                              className="text-blue-600"
                            />
                            <span className="text-sm font-semibold text-gray-700">
                              Best For
                            </span>
                          </div>
                          <ul className="space-y-1 ">
                            {builder.bestFor.map((item, idx) => (
                              <li
                                key={idx}
                                className="text-sm  text-gray-900"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="p-8">
                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                          {visibleFields.difficulty && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                              <div className="flex items-center gap-2 mb-2">
                                <Star
                                  size={16}
                                  className="text-blue-600"
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

                          {visibleFields.trial && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                              <div className="flex items-center gap-2 mb-2">
                                <Calendar
                                  size={16}
                                  className="text-blue-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  Trial
                                </span>
                              </div>
                              <p className="text-sm text-gray-900">
                                {builder.trial}
                              </p>
                            </div>
                          )}

                          {visibleFields.cost && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <DollarSign
                                  size={16}
                                  className="text-blue-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  Cost
                                </span>
                              </div>
                              <ul className="space-y-1 list-disc">
                                {builder.cost.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm my-1 text-gray-900"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {visibleFields.seo && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <TrendingUp
                                  size={16}
                                  className="text-blue-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  SEO
                                </span>
                              </div>
                              <details>
                                <summary className="cursor-pointer text-sm text-gray-900">
                                  {builder.seo[0]}
                                </summary>

                                <ul className="space-y-1 list-disc mt-2 ml-4">
                                  {builder.seo.slice(1).map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm my-1 text-gray-900 break-all"
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </details>
                            </div>
                          )}

                          {visibleFields.support && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <HeadphonesIcon
                                  size={16}
                                  className="text-blue-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  Customer Support
                                </span>
                              </div>
                              <details>
                                <summary className="cursor-pointer text-sm text-gray-900">
                                  {builder.support[0]}
                                </summary>

                                <ul className="space-y-1 list-disc mt-2 ml-4">
                                  {builder.support.slice(1).map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm my-1 text-gray-900 break-all"
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </details>
                            </div>
                          )}

                          {visibleFields.ecommerce && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <ShoppingCart
                                  size={16}
                                  className="text-blue-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  E-commerce
                                </span>
                              </div>
                              <details>
                                <summary className="cursor-pointer text-sm text-gray-900">
                                  {builder.ecommerce[0]}
                                </summary>

                                <ul className="space-y-1 list-disc mt-2 ml-4">
                                  {builder.ecommerce
                                    .slice(1)
                                    .map((item, idx) => (
                                      <li
                                        key={idx}
                                        className="text-sm my-1 text-gray-900 break-all"
                                      >
                                        {item}
                                      </li>
                                    ))}
                                </ul>
                              </details>
                            </div>
                          )}

                          {visibleFields.migration && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <Package
                                  size={16}
                                  className="text-blue-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  Migration
                                </span>
                              </div>
                              <p className="text-sm text-gray-900">
                                {builder.migration}
                              </p>
                            </div>
                          )}

                          {visibleFields.security && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <Shield
                                  size={16}
                                  className="text-blue-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  Security
                                </span>
                              </div>
                              <p className="text-sm text-gray-900">
                                {builder.security}
                              </p>
                            </div>
                          )}

                          {visibleFields.accessibility && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <Users
                                  size={16}
                                  className="text-blue-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  Accessibility
                                </span>
                              </div>
                              <details>
                                <summary className="cursor-pointer text-sm text-gray-900">
                                  {builder.accessibility[0]}
                                </summary>

                                <ul className="space-y-1 list-disc mt-2 ml-4">
                                  {builder.accessibility
                                    .slice(1)
                                    .map((item, idx) => (
                                      <li
                                        key={idx}
                                        className="text-sm my-1 text-gray-900 break-all"
                                      >
                                        {item}
                                      </li>
                                    ))}
                                </ul>
                              </details>
                            </div>
                          )}

                          {visibleFields.handoff && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <Users
                                  size={16}
                                  className="text-blue-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  How Easy to Hand-off
                                </span>
                              </div>
                              <details>
                                <summary className="cursor-pointer text-sm text-gray-900">
                                  {builder.handoff[0]}
                                </summary>

                                <ul className="space-y-1 list-disc mt-2 ml-4">
                                  {builder.handoff.slice(1).map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm my-1 text-gray-900 break-all"
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </details>
                            </div>
                          )}

                          {visibleFields.appStore && (
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="flex items-center gap-2 mb-2">
                                <Code
                                  size={16}
                                  className="text-blue-600"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                  App Store
                                </span>
                              </div>
                              <details>
                                <summary className="cursor-pointer text-sm text-gray-900">
                                  {builder.appStore[0]}
                                </summary>

                                <ul className="space-y-1 list-disc mt-2 ml-4">
                                  {builder.appStore
                                    .slice(1)
                                    .map((item, idx) => (
                                      <li
                                        key={idx}
                                        className="text-sm my-1 text-gray-900 break-all"
                                      >
                                        {item}
                                      </li>
                                    ))}
                                </ul>
                              </details>
                            </div>
                          )}

                          {visibleFields.examples &&
                            builder.examples.length > 0 && (
                              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 col-span-1 md:col-span-2 lg:col-span-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <ExternalLink
                                    size={16}
                                    className="text-blue-600"
                                  />
                                  <span className="text-sm font-semibold text-gray-700">
                                    Examples
                                  </span>
                                </div>
                                <ul className="space-y-1 list-disc">
                                  {builder.examples.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm my-1 text-gray-900 break-all"
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
                          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-8">
                            <h3 className="font-semibold text-blue-900 text-lg mb-3">
                              More Information & Tutorials
                            </h3>
                            <ul className="space-y-1 list-disc">
                              {builder.moreInfo.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm my-1 text-blue-900 break-all"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Pros / Cons */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                              Pros
                            </h3>
                            <ul className="space-y-2 ">
                              {builder.pros.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 my-1 text-sm text-gray-700"
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
                                  className="flex items-start gap-2 my-1 text-sm text-gray-700"
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
