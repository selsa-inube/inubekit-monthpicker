import { parameters, props } from "../props";
import {
  IMonthpickerController,
  MonthpickerController,
} from "./MonthpickerController";

const story = {
  title: "Inputs/Monthpicker",
  component: MonthpickerController,
  parameters,
  argTypes: {
    ...props,
  },
};

const Default = (args: IMonthpickerController) => (
  <MonthpickerController {...args} />
);

Default.args = {
  start: 0,
  end: 11,
  locales: "es-ES",
  order: "asc",
  placeholder: "Meses",
  value: "",
};

export default story;
export { Default };
