import { ComponentProps } from "react";
import "./componentTreeItem.css";

interface Props extends ComponentProps<"div"> {
  title: string;
  isActive: boolean;
}

export default function ComponentTreeItem({
  title,
  isActive,
  ...props
}: Props) {
  return (
    <div {...props}>
      <button
        className={`text-start bg-gray-100 w-full border-2 p-2 pl-6 ${props.className}`}
      >
        {title}
      </button>
      {isActive && <div className="tree-item-body">{props.children}</div>}
    </div>
  );
}
