import React, { useState, useEffect } from "react";
import { IMonthpickerOrder } from "./props";
import { Select } from "@inubekit/select";

interface IMonthpicker {
  start?: number;
  end?: number;
  locales?: string;
  order?: IMonthpickerOrder;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
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

  const [months, setMonths] = useState<string[]>([]);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat(locales, { month: "long" });
    const monthList = Array.from({ length: 12 }, (_, i) =>
      formatter.format(new Date(2000, i)),
    );
    let filteredMonths = monthList.slice(start, end + 1);
    if (order === "desc") {
      filteredMonths = filteredMonths.reverse();
    }
    setMonths(filteredMonths);
  }, [start, end, locales, order]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event, event.target.innerText);
  };

  return (
    <Select
      name="month"
      placeholder={placeholder}
      options={months.map((month, index) => ({
        id: index.toString(),
        label: month,
      }))}
      value={value}
      onChange={handleChange}
    />
  );
};

export { Monthpicker };
export type { IMonthpicker };
