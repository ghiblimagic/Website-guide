import WebsiteBuilderGuide from "../components/WebsiteBuilderGuide";
import {
  websiteBuilders,
  guidingQuestions,
  tagCategories,
} from "../data/websiteBuilderData";

export default function Home() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/images/dotsBackground.png"
        fetchPriority="high"
      />
      <div className="min-h-screen">
        <main className="">
          <WebsiteBuilderGuide
            builders={websiteBuilders}
            questions={guidingQuestions}
            categories={tagCategories}
          />
        </main>
      </div>
    </>
  );
}
