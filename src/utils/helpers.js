export const formatDate = str => {
  const date = new Date(str).toLocaleString();
  return date.substring(0, date.indexOf(','));
};

export const convertUrlPathToString = location => {
  const str = location.slice(1).replace(/-/g, ' ');
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const capFirstLetter = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
