// app/components/BuildersList.tsx
import BuilderCard from "./BuilderCard";
import type { WebsiteBuilder, VisibleFields } from "../types/types";

interface BuildersListProps {
  builders: WebsiteBuilder[];
  visibleFields: VisibleFields;
  itemCount?: number;
}

export default function BuildersList({
  builders,
  visibleFields,
  itemCount,
}: BuildersListProps) {
  const count = itemCount ?? builders.length;

  return (
    <div className="space-y-6">
      {builders.slice(0, count).map((builder) => (
        <BuilderCard
          key={builder.id}
          {...builder} // spread all WebsiteBuilder fields directly
          summaryVisible={visibleFields.summary}
          difficultyVisible={visibleFields.difficulty}
          costVisible={visibleFields.cost}
          seoVisible={visibleFields.seo}
          supportVisible={visibleFields.support}
          ecommerceVisible={visibleFields.ecommerce}
          trialVisible={visibleFields.trial}
          bestForVisible={visibleFields.bestFor}
          migrationVisible={visibleFields.migration}
          securityVisible={visibleFields.security}
          accessibilityVisible={visibleFields.accessibility}
          collaborationVisible={visibleFields.collaboration}
          appStoreVisible={visibleFields.appStore}
          examplesVisible={visibleFields.examples}
          moreInfoVisible={visibleFields.moreInfo}
          proConsVisible={visibleFields.proCons}
        />
      ))}
    </div>
  );
}
