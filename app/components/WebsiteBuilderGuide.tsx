"use client";

import dynamic from "next/dynamic";
import { useState, useMemo, useEffect } from "react";
import { Filter } from "lucide-react";

import type {
  WebsiteBuilder,
  SelectedTags,
  TagCategory,
  FieldType,
  VisibleFields,
  GuidingQuestion,
} from "../types/types";
import Sidebar from "./SideBar";

interface Props {
  builders: WebsiteBuilder[];
  questions: GuidingQuestion[];
  categories: Record<TagCategory, string[]>;
}

const GuidingQuestionsModal = dynamic(() => import("./GuidingQuestionsModal"), {
  ssr: false, // Don't render on server
});

import BuildersList from "./BuildersList";
import ShowFieldsUi from "./ShowFieldsUi";

import StyledButton from "../components/StyledButton";

import NoBuildersFound from "./NoBuildersFound";

export default function WebsiteBuilderGuide({
  builders,
  questions,
  categories,
}: Props) {
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
    collaboration: true,
    ecommerce: true,
    appStore: true,
    examples: true,
    moreInfo: true,
    proCons: true,
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [itemCount, setItemCount] = useState(3);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    // Needed due to SSR, we need to update based on the client
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSidebarOpen(media.matches);
  }, []);

  useEffect(() => {
    const hidden = localStorage.getItem("hideGuidingQuestions");
    // Needed due to SSR, we need to update based on the client
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowGuidingQuestions(hidden !== "true");
  }, []);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    if (checked) {
      localStorage.setItem("hideGuidingQuestions", "true");
    } else {
      localStorage.removeItem("hideGuidingQuestions");
    }
  };

  const handleGuidingAnswer = ({
    category,
    tag,
  }: {
    category: keyof SelectedTags;
    tag: string;
  }) => {
    setSelectedTags((prev) => {
      const current = prev[category];

      if (!tag) {
        return {
          ...prev,
          [category]: [],
        };
      }

      const isSelected = current.includes(tag);

      return {
        ...prev,
        [category]: isSelected
          ? current.filter((t) => t !== tag) // deselect
          : [tag],
      };
    });
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

    if (!hasAnyTags) return builders;

    return builders.filter((builder) => {
      return Object.entries(selectedTags).every(([category, tags]) => {
        if (tags.length === 0) return true;
        return tags.some((tag: string) =>
          builder.tags[category as TagCategory].includes(tag),
        );
      });
    });
  }, [selectedTags, builders]);

  const activeTagCount = Object.values(selectedTags).flat().length;

  return (
    <div className="min-h-screen ">
      <GuidingQuestionsModal
        show={showGuidingQuestions}
        setShow={setShowGuidingQuestions}
        guidingQuestions={questions}
        selectedTags={selectedTags}
        handleGuidingAnswer={handleGuidingAnswer}
        onChange={handleCheckbox}
      />

      {/* Main Layout */}
      <div className="flex min-h-screen">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          selectedTags={selectedTags}
          toggleTag={toggleTag}
          clearAllTags={clearAllTags}
          activeTagCount={activeTagCount}
          tagCategories={categories}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header Toolbar */}
          <div className="border-b border-blue-200 shadow-sm bg-blue-50">
            <div className="px-6 py-4 ">
              <h1 className="text-4xl font-bold text-blue-950 mb-6 text-center">
                Website Builder Finder
              </h1>
              <div className="flex items-center gap-4 mb-10  ">
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
                  <p className="text-sm text-blue-950 mt-0.5 font-semibold">
                    {filteredBuilders.length}{" "}
                    {filteredBuilders.length === 1 ? "result" : "results"} found
                  </p>
                </div>

                <StyledButton
                  onClick={() => setShowGuidingQuestions(true)}
                  text="Restart Quiz"
                  secondary
                />
              </div>

              <ShowFieldsUi
                visibleFields={visibleFields}
                toggleField={toggleField}
              />
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 ">
            <div className="max-w-6xl mx-auto p-2 sm:p-6 ">
              {filteredBuilders.length === 0 ? (
                <NoBuildersFound clearAllTags={clearAllTags} />
              ) : (
                <BuildersList
                  builders={filteredBuilders} // client-side filter still works
                  visibleFields={visibleFields}
                  itemCount={itemCount}
                />
              )}
              <p className=" text-center text-sm font-semibold text-blue-950 my-4">
                {" "}
                Showing{" "}
                {itemCount <= filteredBuilders.length
                  ? itemCount
                  : filteredBuilders.length}{" "}
                of {filteredBuilders.length} results{" "}
              </p>
              {filteredBuilders.length >= itemCount && (
                <div className="w-full text-center mt-2">
                  <StyledButton
                    onClick={() =>
                      setItemCount((prevCount) =>
                        Math.min((prevCount += 3), filteredBuilders.length),
                      )
                    }
                    text={`${
                      itemCount === filteredBuilders.length
                        ? "Reached End"
                        : "Load 3 More"
                    }`}
                    disabled={itemCount === filteredBuilders.length}
                    primary
                  />
                  <StyledButton
                    onClick={() =>
                      setItemCount((prevCount) => (prevCount += 20))
                    }
                    text="Load All"
                    disabled={itemCount === filteredBuilders.length}
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
