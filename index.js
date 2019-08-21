/**
 * Get string length with unicode support
 * @param string The input string.
 * @returns {number} The length of the string.
 */
const length = string => [...string].length;

/**
 * Return an array of strings split by the separator.
 * @param {string} string The input string.
 * @param {string} [separator=""] The separator char.
 * @returns {string[]} An array of split strings.
 */
const split = (string, separator = '') => {
  if (separator === '') {
    return [...string];
  }

  let splitIndex = 0;
  return [...string]
    .reduce(
      (accumulator, char) => {
        if (String(char) === separator) {
          splitIndex++;
          accumulator[splitIndex] = [];
        } else {
          accumulator[splitIndex].push(char);
        }

        return accumulator;
      }, [[]])
    .map(chars => chars.join(''))
};

/**
 * Left-justify a string in a field of given width.
 * @param {string} string The input string.
 * @param {number} width The length of the resulting string once.
 * @param {string} [fillChar=" "] The character used to pad the string.
 * @returns {string} The padded string.
 */
const ljust = (string, width, fillChar = ' ') => {
  const padLength = width - length(string);
  if (padLength <= 0) {
    return string;
  }

  return string + fillChar.repeat(padLength);
};

/**
 * Right-justify a string in a field of given width.
 * @param {string} string The input string.
 * @param {number} width The length of the resulting string once.
 * @param {string} [fillChar=" "] The character used to pad the string.
 * @returns {string} The padded string.
 */
const rjust = (string, width, fillChar = ' ') => {
  const padLength = width - length(string);
  if (padLength <= 0) {
    return string;
  }

  return fillChar.repeat(padLength) + string;
};

/**
 * Center a string in a field of given width.
 * @param {string} string The input string.
 * @param {number} width The length of the resulting string once.
 * @param {string} [fillChar=" "] The character used to pad the string.
 * @returns {string} The padded string.
 */
const center = (string, width, fillChar = ' ') => {
  cleanString = string.trim(fillChar);

  const stringLength = length(string);

  if (stringLength >= width) {
    return string;
  }

  const delta = width - stringLength;
  const padWidth = Math.floor(delta / 2);

  return fillChar.repeat(padWidth + delta % 2) + string + fillChar.repeat(padWidth);
};

/**
 * Return a copy of the string with leading and trailing characters removed.
 * @param {string} string The input string.
 * @param {string} [trimChar=" "] The character to be removed.
 * @returns {string} The string with characters removed.
 */
const strip = (string, trimChar = ' ') => rstrip(lstrip(string, trimChar), trimChar);

/**
 * Return a copy of the string with leading characters removed.
 * @param {string} string The input string.
 * @param {string} [trimChar=" "] The character to be removed.
 * @returns {string} The string with characters removed.
 */
const lstrip = (string, trimChar = ' ') => {
  let isStripComplete = false;

  return [...string].map(char => {
    if (!isStripComplete && String(char) === trimChar) {
      return '';
    }

    isStripComplete = true;

    return char;
  }).join('');
};

/**
 * Return a copy of the string with trailing characters removed.
 * @param {string} string The input string.
 * @param {string} [trimChar=" "] The character to be removed.
 * @returns {string} The string with characters removed.
 */
const rstrip = (string, trimChar = ' ') => {
  let isStripComplete = false;

  return [...string].reverse().map(char => {
    if (!isStripComplete && String(char) === trimChar) {
      return '';
    }

    isStripComplete = true;

    return char;
  }).reverse().join('');
};

/**
 * Return a copy of the string with lower case letters converted to upper case and vice versa.
 * @param {string} string The input string.
 * @returns {string} The swapped string
 */
const swapcase = string => {
  const chars = [];
  for (let i = 0, l = string.length; i < l; i++) {
    const charCode = string.charCodeAt(i);
    let char = string[i];
    if (charCode >= 97 && charCode <= 122) {
      char = String.fromCharCode(charCode - 32);
    } else if (charCode >= 65 && charCode <= 90) {
      char = String.fromCharCode(charCode + 32);
    }

    chars.push(char);
  }

  return chars.join('');
};

/**
 * Return a copy of the string with the first char of each separated word converted to upper case.
 * @param {string} string The input string.
 * @param {string} [separator=" "] The separator char.
 * @returns {string} The converted string
 */
const capwords = (string, separator = ' ') => {
  if (!length(string)) {
    return string;
  }

  return string
    .split(separator)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(separator);
};

/**
 * Return a copy of the string with the first char converted to upper case.
 * @param {string} string The input string.
 * @returns {string} The converted string
 */
const ucfirst = (string) => {
  if (!length(string)) {
    return string;
  }

  return string[0].toUpperCase() + string.slice(1);
};

/**
 * Return a copy of the string with the first char converted to lower case.
 * @param {string} string The input string.
 * @returns {string} The converted string
 */
const lcfirst = (string) => {
  if (!length(string)) {
    return string;
  }

  return string[0].toLowerCase() + string.slice(1);
};

/**
 * Return a copy of the string with HTML line breaks (<br>) inserted before all newlines.
 * @param {string} string The input string.
 * @param {string} [breakElement="<br>"] The HTML line break string.
 * @returns {string} The converted string
 */
const nl2br = (string, breakElement = '<br>') => string.replace(/((\r\n)|(\n\r)|(\n)|(\r))/g, `${breakElement}$1`);

/**
 * Return a copy of the string with tab chars (\t) replaced by spaces.
 * @param {string} string The input string.
 * @param {number} [tabsize=8] The input string.
 * @returns {string} The swapped string
 */
const expandtabs = (string, tabsize = 8) => string.replace(/\t/g, ' '.repeat(tabsize));

module.exports = {
  length,
  split,
  ljust,
  rjust,
  center,
  strip,
  rstrip,
  lstrip,
  swapcase,
  capwords,
  ucfirst,
  lcfirst,
  nl2br,
  expandtabs,
};
