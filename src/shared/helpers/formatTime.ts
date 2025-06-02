export const formatTime = (date: Date) => {
  let hours = date.getHours();
  let interval = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours || 12;
  const formattedHours = hours.toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  return `${formattedHours}:${minutes} ${interval}`;
};
