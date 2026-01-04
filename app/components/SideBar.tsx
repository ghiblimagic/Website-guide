import StyledButton from "./StyledButton";

import { ChevronLeft, RotateCcw } from "lucide-react";
import type { SelectedTags, TagCategory, VisibleFields } from "../types/types";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  selectedTags: SelectedTags;
  toggleTag: (category: TagCategory, tag: string) => void;
  clearAllTags: () => void;
  activeTagCount: number;
  tagCategories: Record<TagCategory, string[]>;
}

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  selectedTags,
  toggleTag,
  clearAllTags,
  activeTagCount,
  tagCategories,
}: SidebarProps) {
  return (
    <div
      className={`${
        sidebarOpen ? "w-80" : "w-0"
      } transition-all duration-300 bg-blue-900  overflow-hidden`}
    >
      <div className="flex flex-col text-white">
        {/* Header */}
        <div className="px-5 pt-6">
          <div className="flex justify-between items-center bg-blue-900 rounded-t-2xl border-b border-white pb-4">
            <div className="flex items-center gap-2 py-4 px-8 mx-auto">
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

        {/* Body */}

        <a
          href="#content"
          className="fixed  -translate-y-full focus:translate-y-28 left-15 top-0 p-3 bg-blue-900 text-white z-50 focus:outline-none focus:ring-2 focus:ring-white transition-transform"
        >
          Skip to content
        </a>

        <div className="flex-1 mx-5 pt-8 bg-blue-900 pb-4   pl-3">
          {activeTagCount > 0 && (
            <div className="text-center mb-4">
              <StyledButton
                onClick={clearAllTags}
                text={`Clear Filters (${activeTagCount})`}
                primary
              >
                <RotateCcw
                  size={16}
                  className="mr-2"
                />
              </StyledButton>
            </div>
          )}

          {Object.entries(tagCategories).map(([category, tags]) => (
            <div
              key={category}
              className="mb-8 pb-8 last:mb-0 border-white border-b"
            >
              <h3 className="font-semibold mb-3 capitalize text-xl tracking-wider ">
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
                          className="w-5 h-5 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
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
  );
}
