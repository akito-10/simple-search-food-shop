import type { FC, ReactNode } from "react";

type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "light"
  | "dark";

const COLOR_CLASSNAMES: { [key in ButtonColor]: string } = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-pink-300 text-white hover:bg-pink-400",
  success: "bg-green-600 text-white hover:bg-green-700",
  danger: "bg-red-500 text-white hover:bg-red-600",
  light: "bg-gray-300 text-black hover:bg-gray-200",
  dark: "bg-gray-700 text-white hover:bg-gray-600",
};

/**
 * @package
 */
export const Button: FC<{
  children: ReactNode;
  color?: ButtonColor;
  leftIcon?: ReactNode;
  onClick?: () => void;
  rightIcon?: ReactNode;
}> = ({ children, color = "primary", leftIcon, onClick, rightIcon }) => {
  const colorClassnames = COLOR_CLASSNAMES[color];

  return (
    <button
      className={`flex w-fit items-center justify-between gap-1 rounded-sm px-4 py-2 ${colorClassnames}`}
      onClick={onClick}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};
