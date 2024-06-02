import { Select, SelectItem } from "@nextui-org/select";

import { languages } from "@/constants";

type Props = {
  onChange: any;
  defaultValue: string;
};

export const LangSelector = ({ onChange, defaultValue }: Props) => {
  return (
    <Select
      defaultSelectedKeys={[defaultValue]}
      label="Select Language"
      onChange={onChange}
      fullWidth
    >
      {languages.map((lang) => (
        <SelectItem key={lang.key}>{lang.label}</SelectItem>
      ))}
    </Select>
  );
};
