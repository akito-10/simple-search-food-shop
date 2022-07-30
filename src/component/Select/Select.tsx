import type { SelectProps } from "@mantine/core";
import { Select as MantineSelect } from "@mantine/core";
import { cloneElement, forwardRef } from "react";

/**
 * @package
 */
export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ classNames, ...props }, ref) =>
    cloneElement(<MantineSelect {...props} />, {
      ref,
      classNames: {
        ...classNames,
        label: "text-sm text-gray-500",
        input: "rounded text-xs",
      },
    })
);

Select.displayName = "Select";
