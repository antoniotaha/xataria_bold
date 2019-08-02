import moment from "moment";

moment.locale("pt-br");

export const TIME_FORMAT = "HH:mm";

export const isValidTime = time => {
  return (
    (time && moment(time, "HH:mm", true).isValid()) ||
    moment(time, "HH:mm:ss", true).isValid()
  );
};

export const asPrettyTime = (totalTime, withSignal) => {
  if (!totalTime || totalTime.asMilliseconds() === 0) {
    return "00:00";
  }
  const numberHours = Math.abs(parseInt(totalTime.asHours().toString(), 10));
  const numberMinutes = Math.abs(totalTime.minutes());
  const formattedHours = numberHours > 9 ? numberHours : `0${numberHours}`;
  const formattedMinutes =
    numberMinutes > 9 ? numberMinutes : `0${numberMinutes}`;
  if (withSignal) {
    const isNegative = totalTime.asMinutes() < 0;
    const prefix = isNegative ? "-" : "+";
    return prefix + formattedHours + ":" + formattedMinutes;
  }
  return formattedHours + ":" + formattedMinutes;
};

export const currentTime = () => {
  return moment().format(TIME_FORMAT);
};

export const inclusiveDiff = (endDate, startDate) => {
  const end = moment(endDate);
  const start = moment(startDate);
  return start.isAfter(end) ? 0 : end.diff(start, "days") + 1;
};
