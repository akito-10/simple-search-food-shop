import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "src/state";
import { setSearchCondition } from "src/state/searchCondition";

/**
 * @package
 */
export const useSearchConditionForm = () => {
  const searchCondition = useSelector(
    (state: RootState) => state.searchCondition
  );
  const dispatch = useDispatch();
  const [searchConditionForm, setSearchConditionForm] =
    useState(searchCondition);

  const handleChangeSearchConditionForm = (
    key: keyof typeof searchCondition,
    value: string | null
  ) => {
    if (!value) return;

    setSearchConditionForm((prev) => ({
      ...prev,
      [key]: +value,
    }));
  };

  const handleSubmitSearchConditionForm = () => {
    dispatch(setSearchCondition(searchConditionForm));
  };

  return {
    handleChangeSearchConditionForm,
    handleSubmitSearchConditionForm,
    searchConditionForm,
  };
};
