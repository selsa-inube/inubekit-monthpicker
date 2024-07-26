import { useState } from "react";
import { IMonthpicker, Monthpicker } from "..";

interface IMonthpickerController extends IMonthpicker {
  value?: string;
}

const MonthpickerController = (props: IMonthpickerController) => {
  const {
    value = "",
    start,
    end,
    locales = "es-ES",
    order = "asc",
    onChange,
    placeholder,
  } = props;
  const [selectedMonth, setSelectedMonth] = useState<string>(value);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: string,
  ) => {
    setSelectedMonth(newValue);
    onChange && onChange(event, newValue);
  };

  return (
    <Monthpicker
      start={start}
      end={end}
      locales={locales}
      order={order}
      onChange={handleChange}
      placeholder={placeholder}
      value={selectedMonth}
    />
  );
};

export { MonthpickerController };
export type { IMonthpickerController };
