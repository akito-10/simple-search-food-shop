import { Skeleton } from "@mantine/core";
import type { FC } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { HotpepperIcon } from "src/pagesComponent/main/HotpepperIcon";
import { SearchConditionForm } from "src/pagesComponent/main/SearchConditionForm";

const ShopCardArea = lazy(() => import("src/pagesComponent/main/ShopCardArea"));

export const Main: FC = () => (
  <div className="flex h-screen w-full flex-col items-center justify-center">
    <Suspense fallback={<Skeleton width={320} height={500} radius="md" />}>
      <ShopCardArea />
    </Suspense>
    <SearchConditionForm />
    <HotpepperIcon />
  </div>
);
