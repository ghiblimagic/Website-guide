import { X } from "lucide-react";
import type { SelectedTags, GuidingQuestion } from "../types/types";
import { useEffect, useRef } from "react";
import { createFocusTrap } from "focus-trap";

interface GuidingQuestionsModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  guidingQuestions: GuidingQuestion[];
  selectedTags: SelectedTags;
  handleGuidingAnswer: (action: {
    category: keyof SelectedTags;
    tag?: string;
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
  const modalRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const trapRef = useRef<ReturnType<typeof createFocusTrap> | null>(null);

  useEffect(() => {
    if (!show || !modalRef.current) return;

    // setTimeout with a small 0ms delay - This defers the focus trap creation to the next tick, ensuring the DOM is fully read
    //  this is a common issue with DOM manipulation libraries in React 19 - they need that tiny delay to work reliably with React's concurrent features.
    const timeoutId = setTimeout(() => {
      trapRef.current = createFocusTrap(modalRef.current!, {
        escapeDeactivates: true,
        returnFocusOnDeactivate: true,
        initialFocus: false,
        // initialFocus: false - Prevents the trap from auto-focusing, which can cause issues in React 19
        onDeactivate: () => {
          // Only close if still mounted/  if the modal ref still exists
          if (modalRef.current) {
            setShow(false);
          }
        },
      });

      trapRef.current.activate();
    }, 0);

    return () => {
      //  Clears the timeout and nullifies the trap reference
      clearTimeout(timeoutId);
      if (trapRef.current) {
        trapRef.current.deactivate();
        trapRef.current = null;
      }
    };
  }, [show, setShow]);

  if (!show) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50 p-4 flex items-center justify-center
        duration-300 backdrop-blur-sm
       
      `}
    >
      <div
        ref={modalRef}
        className="rounded-2xl bg-white shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="guiding-questions-title"
        // This makes SR users hear: “Dialog: Which Website Builder Fits You?”
        // instead of “Dialog. Blank"
      >
        {/* Header */}
        <div className="border-b border-blue-200 px-8 py-6 rounded-t-2xl">
          <div className="flex justify-between">
            <div className="w-full text-center">
              <h2
                className="text-3xl font-bold text-blue-950 mb-4"
                id="guiding-questions-title"
              >
                Which Website Builder Fits You?
              </h2>
              <p className="text-blue-950">
                Answer a few quick questions to narrow down your options.
              </p>
            </div>
            <button
              onClick={() => setShow(false)}
              className="text-blue-950 hover:text-blue-950 transition-colors p-1 self-start"
              aria-label="exit quiz"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Questions */}
        <div className="p-8 space-y-8 text-blue-950">
          {guidingQuestions.map((q) => (
            <div
              key={q.id}
              className="pb-8 border-b border-blue-200 last:border-0"
            >
              <p className="text-lg font-medium text-blue-950 pt-1 mb-4">
                {q.question} (Optional)
              </p>

              <div className="flex gap-2 flex-wrap">
                {q.options.map((opt, idx) => {
                  const { category, tag } = opt.action;
                  const isActive =
                    tag !== undefined && selectedTags[category]?.includes(tag);
                  return (
                    <button
                      key={idx}
                      onClick={() => handleGuidingAnswer({ category, tag })}
                      className={`
                        flex-1 py-3 px-6 rounded-xl font-medium transition-all
                        ${
                          isActive
                            ? "bg-blue-500 text-white shadow-lg"
                            : "bg-white border-2 border-blue-300 text-blue-750 hover:bg-blue-50 hover:shadow-md"
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

        <div className="bg-gray-50 border-t border-blue-200 px-8 py-6 rounded-b-2xl">
          <label className="flex items-center text-center gap-2 text-blue-950 mb-4">
            <input
              type="checkbox"
              onChange={onChange}
              className="accent-blue-700"
            />
            Do not show this again
          </label>

          <button
            onClick={() => setShow(false)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 "
          >
            View Results
          </button>
        </div>
      </div>
    </div>
  );
}
