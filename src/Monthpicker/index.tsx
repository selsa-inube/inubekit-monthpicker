import { useState, useEffect } from "react";
import { IMonthpickerOrder } from "./props";
import { Select } from "@inubekit/select";

interface IMonthpicker {
  start?: number;
  end?: number;
  locales?: string;
  order?: IMonthpickerOrder;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  value?: string;
}

const Monthpicker = (props: IMonthpicker) => {
  const {
    start = 0,
    end = 11,
    locales = "es-ES",
    order = "asc",
    placeholder,
    value = "",
    onChange,
  } = props;

  const [months, setMonths] = useState<
    { id: string; label: string; value: string }[]
  >([]);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat(locales, { month: "long" });
    const monthList = Array.from({ length: 12 }, (_, i) =>
      formatter.format(new Date(2000, i)),
    );
    let filteredMonths = monthList.slice(start, end + 1);
    if (order === "desc") {
      filteredMonths = filteredMonths.reverse();
    }
    setMonths(
      filteredMonths.map((month, index) => ({
        id: index.toString(),
        label: month.charAt(0).toUpperCase() + month.slice(1),
        value: month,
      })),
    );
  }, [start, end, locales, order]);

  const handleChange = (name: string, value: string) => {
    onChange(name, value);
  };

  return (
    <Select
      name="month"
      placeholder={placeholder}
      options={months}
      value={value}
      onChange={handleChange}
    />
  );
};

export { Monthpicker };
export type { IMonthpicker };
