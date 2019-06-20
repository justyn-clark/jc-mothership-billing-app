/* eslint no-param-reassign: 0 */
/* eslint no-bitwise: 0 */

export const formatDate = str => {
  const date = new Date(str).toLocaleString();
  return date.substring(0, date.indexOf(','));
};

export const convertUrlPathToString = location => {
  const str = location.slice(1).replace(/-/g, ' ');
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const capFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

export const hashCode = str =>
  str.split('').reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
