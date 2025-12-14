import { Filter, RotateCcw } from "lucide-react";

interface NoBuildersFoundProps {
  clearAllTags: () => void;
}

export default function NoBuildersFound({
  clearAllTags,
}: NoBuildersFoundProps) {
  return (
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
  );
}
