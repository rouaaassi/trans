import { languages } from "@/constants";
import { Select, SelectItem } from "@nextui-org/select";

type Props = {
  onChange: any;
  defaultValue: string;
};

export const LangSelector = ({ onChange, defaultValue }: Props) => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        size="sm"
        label="Select Language"
        className="max-w-xs"
        onChange={onChange}
        defaultSelectedKeys={[defaultValue]}
      >
        {languages.map((lang) => (
          <SelectItem key={lang.key}>{lang.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
