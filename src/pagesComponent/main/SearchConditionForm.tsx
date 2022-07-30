import { Accordion } from "@mantine/core";
import type { FC } from "react";
import { Button } from "src/component/Button";
import { Select } from "src/component/Select";
import { useSearchConditionForm } from "src/hooks/main";
import { Search } from "tabler-icons-react";

/**
 * @package
 */
export const SearchConditionForm: FC = () => {
  const {
    handleChangeSearchConditionForm,
    handleSubmitSearchConditionForm,
    searchConditionForm,
  } = useSearchConditionForm();

  return (
    <Accordion
      className="mt-8 w-[320px]"
      classNames={{
        item: "border rounded",
        content: "flex flex-col gap-2",
      }}
    >
      <Accordion.Item value="searchConditionForm">
        <Accordion.Control>検索条件の変更</Accordion.Control>
        <Accordion.Panel>
          <Select
            label="検索範囲"
            value={`${searchConditionForm.range}`}
            data={[
              { value: "1", label: "300m" },
              { value: "2", label: "500m" },
              { value: "3", label: "1000m" },
            ]}
            onChange={(value) =>
              handleChangeSearchConditionForm("range", value)
            }
          />
          <Select
            label="カードの利用"
            value={`${searchConditionForm.card}`}
            data={[
              { value: "0", label: "指定なし" },
              { value: "1", label: "利用可" },
            ]}
            onChange={(value) => handleChangeSearchConditionForm("card", value)}
          />
          <Select
            label="深夜営業"
            value={`${searchConditionForm.midnight}`}
            data={[
              { value: "0", label: "指定なし" },
              { value: "1", label: "深夜営業あり" },
            ]}
            onChange={(value) =>
              handleChangeSearchConditionForm("midnight", value)
            }
          />
          <Button
            className="w-full font-bold"
            color="success"
            leftIcon={<Search />}
            onClick={handleSubmitSearchConditionForm}
          >
            検索する
          </Button>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};
