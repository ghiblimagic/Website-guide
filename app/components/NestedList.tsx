import { type LucideIcon } from "lucide-react";
import ConvertStringLinkToA from "../utils/ConvertStringLinkToA";

interface CollapsibleListProps {
  items: (string | string[] | (string | string[])[])[];
  singleItemClassName?: string;
  summaryClassName?: string;
  listItemClassName?: string;
  level?: number;
  icon?: LucideIcon | null;
  iconStyling?: string;
}

const CollapsibleList = ({
  items,
  singleItemClassName = "text-sm text-blue-950",
  summaryClassName = "cursor-pointer text-sm text-blue-950",
  listItemClassName = "text-sm my-2 text-blue-950  mb-2 break-words",
  icon,
  iconStyling,
  level = 0,
}: CollapsibleListProps) => {
  const itemsArray = Array.isArray(items) ? items : [items];

  if (!itemsArray || itemsArray.length === 0) return null;

  const renderItem = (
    item: string | string[] | (string | string[])[],
    idx: number,
  ) => {
    // Level 1: Direct string
    if (typeof item === "string") {
      const IconComponent = icon;
      return (
        <li
          key={idx}
          className={`${listItemClassName} flex items-start  gap-2 mb-3`}
        >
          {IconComponent === undefined ? (
            <span className={`${iconStyling}`}>●</span>
          ) : IconComponent ? (
            <IconComponent
              size={16}
              className={iconStyling}
            />
          ) : null}

          <ConvertStringLinkToA item={item} />
        </li>
      );
    }

    // Level 2 & 3: Arrays
    if (Array.isArray(item)) {
      return (
        <li
          key={idx}
          className="list-none ml-0 my-2"
        >
          <ul className="space-y-1 ml-6">
            {item.map((subItem, subIdx) => {
              // Level 2: String in first array - use ◦
              if (typeof subItem === "string") {
                return (
                  <li
                    key={subIdx}
                    className={listItemClassName}
                  >
                    ◦ <ConvertStringLinkToA item={subItem} />
                  </li>
                );
              }

              // Level 3: Array within array - use ⁃
              if (Array.isArray(subItem)) {
                return (
                  <li
                    key={subIdx}
                    className="list-none ml-0 "
                  >
                    <ul className="space-y-1 ml-6 mb-6  mt-2">
                      {subItem.map((deepItem, deepIdx) => (
                        <li
                          key={`${subIdx}-${deepIdx}`}
                          className={listItemClassName}
                        >
                          ⁃ <ConvertStringLinkToA item={deepItem} />
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return null;
            })}
          </ul>
        </li>
      );
    }

    return null;
  };

  return <ul className=" mt-2  mb-2">{items.map(renderItem)}</ul>;
};

export default CollapsibleList;
