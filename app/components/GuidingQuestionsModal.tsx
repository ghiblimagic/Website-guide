import { X } from "lucide-react";
import type { SelectedTags, GuidingQuestion } from "../types/types";

interface GuidingQuestionsModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  guidingQuestions: GuidingQuestion[];
  selectedTags: SelectedTags;
  handleGuidingAnswer: (action: {
    category: keyof SelectedTags;
    tag: string;
  }) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GuidingQuestionsModal({
  show,
  setShow,
  guidingQuestions,
  selectedTags,
  handleGuidingAnswer,
  onChange,
}: GuidingQuestionsModalProps) {
  return (
    <div
      className={`
        fixed inset-0 z-50 p-4 flex items-center justify-center
        transition-opacity duration-300 backdrop-blur-sm
        ${
          show
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="rounded-2xl bg-white shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="border-b border-blue-200 px-8 py-6 rounded-t-2xl">
          <div className="flex justify-between">
            <div className="w-full text-center">
              <h2 className="text-3xl font-bold text-blue-950 mb-4">
                Which Website Builder Fits You?
              </h2>
              <p className="text-gray-700">
                Answer a few quick questions to narrow down your options.
              </p>
            </div>
            <button
              onClick={() => setShow(false)}
              className="text-gray-400 hover:text-gray-700 transition-colors p-1"
              aria-label="exit quiz"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Questions */}
        <div className="p-8 space-y-8 text-gray-700">
          {guidingQuestions.map((q) => (
            <div
              key={q.id}
              className="pb-8 border-b border-blue-200 last:border-0"
            >
              <p className="text-lg font-medium text-gray-700 pt-1 mb-2">
                {q.question} (Optional)
              </p>

              <div className="flex gap-2 flex-wrap">
                {q.options.map((opt, idx) => {
                  const { category, tag } = opt.action;
                  const isActive = tag && selectedTags[category]?.includes(tag);

                  return (
                    <button
                      key={idx}
                      onClick={() => handleGuidingAnswer({ category, tag })}
                      className={`
                        flex-1 py-3 px-6 rounded-xl font-medium transition-all
                        ${
                          isActive
                            ? "bg-blue-500 text-white shadow-lg"
                            : "bg-white border-2 border-blue-500 text-blue-700 hover:bg-blue-50 hover:shadow-md"
                        }
                      `}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-blue-200 px-8 py-6 rounded-b-2xl">
          <label className="flex items-center text-center gap-2 text-gray-700 mb-4">
            <input
              type="checkbox"
              onChange={onChange}
              className="accent-blue-700"
            />
            Do not show this again
          </label>

          <button
            onClick={() => setShow(false)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all hover:shadow-lg"
          >
            View Results
          </button>
        </div>
      </div>
    </div>
  );
}
