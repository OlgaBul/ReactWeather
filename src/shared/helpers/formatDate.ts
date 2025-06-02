export const formatDate = (date: Date) => {
  const fullDate = date.toString().split(' ');
  return `${fullDate[1]} ${fullDate[2]}, ${fullDate[0]}`;
};
