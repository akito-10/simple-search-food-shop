import type { FC, ReactNode } from "react";
import { Check, Minus, Paperclip, Plus, X } from "tabler-icons-react";

type IconVariation = "check" | "minus" | "plus" | "x" | "paperclip";

const SpanClassName = "cursor-pointer rounded p-2";

const ICON_VARIATIONS: {
  [key in IconVariation]: {
    className: string;
    icon: ReactNode;
  };
} = {
  check: {
    className: "bg-green-400 text-white hover:bg-green-500",
    icon: <Check />,
  },
  minus: {
    className: "bg-red-600 text-white hover:bg-red-700",
    icon: <Minus />,
  },
  plus: {
    className: "bg-blue-500 text-white hover:bg-blue-600",
    icon: <Plus />,
  },
  x: {
    className: "bg-red-600 text-white hover:bg-red-700",
    icon: <X />,
  },
  paperclip: {
    className: "bg-gray-300 hover:bg-gray-400",
    icon: <Paperclip />,
  },
};

/**
 * @package
 */
export const IconButton: FC<{ icon: IconVariation; onClick: () => void }> = ({
  icon,
  onClick,
}) => {
  const { className, icon: Icon } = ICON_VARIATIONS[icon];

  return (
    <span className={`${className} ${SpanClassName}`} onClick={onClick}>
      {Icon}
    </span>
  );
};
