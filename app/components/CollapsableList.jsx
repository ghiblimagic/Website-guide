const CollapsibleList = ({
  items,
  singleItemClassName = "text-sm text-gray-700",
  summaryClassName = "cursor-pointer text-sm text-gray-700",
  listItemClassName = "text-sm my-1 text-gray-700 break-all",
}) => {
  const itemsArray = Array.isArray(items) ? items : [items];

  if (!itemsArray || itemsArray.length === 0) return null;

  if (itemsArray.length === 1) {
    return <p className={singleItemClassName}>{itemsArray[0]}</p>;
  }
  return (
    <details>
      <summary className={summaryClassName}>{items[0]}</summary>
      <ul className="space-y-1 list-disc mt-2 ml-4">
        {items.length > 1 &&
          items.slice(1).map((item, idx) => (
            <li
              key={idx}
              className={listItemClassName}
            >
              {item}
            </li>
          ))}
      </ul>
    </details>
  );
};

export default CollapsibleList;
