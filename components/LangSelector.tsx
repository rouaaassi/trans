import { Select, SelectItem } from "@nextui-org/select";

import { languages } from "@/constants";

type Props = {
  onChange: any;
  defaultValue: string;
};

export const LangSelector = ({ onChange, defaultValue }: Props) => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        className="max-w-xs"
        defaultSelectedKeys={[defaultValue]}
        label="Select Language"
        size="sm"
        onChange={onChange}
      >
        {languages.map((lang) => (
          <SelectItem key={lang.key}>{lang.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
