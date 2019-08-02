import { ReferenceMonth } from "bold-ui";
import moment from "moment";

moment.locale("pt-br");

export const DATE_ISO = "YYYY-MM-DD";
export const DATE_PT_BR = "DD/MM/YYYY";
export const WEEKDAY_SHORT = "ddd";
export const DAY_MONTH = "DD/MM";
export const TIME_FORMAT = "HH:mm";
export const YEAR_MONTH = "YYYY:MM";

export const getTodayInFormat = format => {
  return moment().format(format);
};

export const todayISO = () => {
  return moment().format(DATE_ISO);
};

export const tomorrowISO = () => {
  return moment()
    .add(1, "days")
    .format(DATE_ISO);
};

export const CURRENT_MONTH = {
  year: new Date().getFullYear(),
  month: new Date().getMonth()
};
