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

/**
 * Return true if the string is empty.
 * @param {string} string The input string.
 * @returns {boolean} True if the string is empty.
 */
const isEmpty = string => length(string) === 0;

/**
 * Return true if string contains the given substring.
 * @param {string} string The input string.
 * @param {string} substring The substring to search for.
 * @returns {boolean} True if substring is found.
 */
const contains = (string, substring) => string.includes(substring);

/**
 * Return true if string starts with the given prefix.
 * @param {string} string The input string.
 * @param {string} prefix The prefix to check.
 * @returns {boolean} True if string starts with prefix.
 */
const startsWith = (string, prefix) => string.startsWith(prefix);

/**
 * Return true if string ends with the given suffix.
 * @param {string} string The input string.
 * @param {string} suffix The suffix to check.
 * @returns {boolean} True if string ends with suffix.
 */
const endsWith = (string, suffix) => string.endsWith(suffix);

/**
 * Return a new string with chars in reverse order.
 * @param {string} string The input string.
 * @returns {string} The reversed string.
 */
const reverse = string => [...string].reverse().join('');

/**
 * Return a unicode-safe string slice.
 * @param {string} string The input string.
 * @param {number} [start=0] The start index.
 * @param {number} [end] The end index.
 * @returns {string} The sliced string.
 */
const slice = (string, start = 0, end) => [...string].slice(start, end).join('');

/**
 * Return a string repeated count times.
 * @param {string} string The input string.
 * @param {number} count Number of repetitions.
 * @returns {string} The repeated string.
 */
const repeat = (string, count) => string.repeat(count);

/**
 * Join an array of strings with a separator.
 * @param {string[]} strings Strings to join.
 * @param {string} [separator=""] Separator string.
 * @returns {string} The joined string.
 */
const join = (strings, separator = '') => strings.join(separator);

/**
 * Count non-overlapping substring occurrences.
 * @param {string} string The input string.
 * @param {string} substring The substring to count.
 * @returns {number} Number of occurrences.
 */
const count = (string, substring) => {
  if (substring === '') {
    return length(string) + 1;
  }

  return string.split(substring).length - 1;
};

/**
 * Replace at most count occurrences of a substring.
 * @param {string} string The input string.
 * @param {string} oldSubstring Substring to replace.
 * @param {string} newSubstring Replacement substring.
 * @param {number} [replaceCount=-1] Max replacements, -1 for all.
 * @returns {string} The replaced string.
 */
const replace = (string, oldSubstring, newSubstring, replaceCount = -1) => {
  if (oldSubstring === '' || replaceCount === 0) {
    return string;
  }

  if (replaceCount < 0) {
    return string.split(oldSubstring).join(newSubstring);
  }

  let output = string;
  let remaining = replaceCount;

  while (remaining > 0 && output.includes(oldSubstring)) {
    output = output.replace(oldSubstring, newSubstring);
    remaining--;
  }

  return output;
};

/**
 * Partition the string at the first occurrence of separator.
 * @param {string} string The input string.
 * @param {string} separator The separator to search for.
 * @returns {string[]} [before, separator, after]
 */
const partition = (string, separator) => {
  if (separator === '') {
    throw new Error('separator must not be empty');
  }

  const splitIndex = string.indexOf(separator);

  if (splitIndex < 0) {
    return [string, '', ''];
  }

  const separatorEnd = splitIndex + separator.length;

  return [
    string.slice(0, splitIndex),
    separator,
    string.slice(separatorEnd),
  ];
};

/**
 * Partition the string at the last occurrence of separator.
 * @param {string} string The input string.
 * @param {string} separator The separator to search for.
 * @returns {string[]} [before, separator, after]
 */
const rpartition = (string, separator) => {
  if (separator === '') {
    throw new Error('separator must not be empty');
  }

  const splitIndex = string.lastIndexOf(separator);

  if (splitIndex < 0) {
    return ['', '', string];
  }

  const separatorEnd = splitIndex + separator.length;

  return [
    string.slice(0, splitIndex),
    separator,
    string.slice(separatorEnd),
  ];
};

/**
 * Cut the string around the first occurrence of separator.
 * @param {string} string The input string.
 * @param {string} separator The separator to search for.
 * @returns {Array.<(string|boolean)>} [before, after, found]
 */
const cut = (string, separator) => {
  const splitIndex = string.indexOf(separator);

  if (splitIndex < 0) {
    return [string, '', false];
  }

  const separatorEnd = splitIndex + separator.length;

  return [
    string.slice(0, splitIndex),
    string.slice(separatorEnd),
    true,
  ];
};

/**
 * Remove a leading prefix from the string if present.
 * @param {string} string The input string.
 * @param {string} prefix The prefix to remove.
 * @returns {string} The string without prefix.
 */
const removePrefix = (string, prefix) => startsWith(string, prefix) ? string.slice(prefix.length) : string;

/**
 * Remove a trailing suffix from the string if present.
 * @param {string} string The input string.
 * @param {string} suffix The suffix to remove.
 * @returns {string} The string without suffix.
 */
const removeSuffix = (string, suffix) => endsWith(string, suffix) ? string.slice(0, string.length - suffix.length) : string;

/**
 * Return the first count unicode characters.
 * @param {string} string The input string.
 * @param {number} count Number of chars to keep.
 * @returns {string} The resulting string.
 */
const take = (string, count) => {
  if (count <= 0) {
    return '';
  }

  return [...string].slice(0, count).join('');
};

/**
 * Drop the first count unicode characters.
 * @param {string} string The input string.
 * @param {number} count Number of chars to skip.
 * @returns {string} The resulting string.
 */
const drop = (string, count) => {
  if (count <= 0) {
    return string;
  }

  return [...string].slice(count).join('');
};

// Cross-language aliases (Go/Python/Rust-style names).
const len = length;
const trim = strip;
const trimStart = lstrip;
const trimEnd = rstrip;
const hasPrefix = startsWith;
const hasSuffix = endsWith;
const title = capwords;
const capitalize = ucfirst;
const stripPrefix = removePrefix;
const stripSuffix = removeSuffix;
const trimPrefix = removePrefix;
const trimSuffix = removeSuffix;

module.exports = {
  length,
  len,
  split,
  ljust,
  rjust,
  center,
  strip,
  trim,
  rstrip,
  lstrip,
  trimStart,
  trimEnd,
  swapcase,
  capwords,
  title,
  ucfirst,
  capitalize,
  lcfirst,
  nl2br,
  expandtabs,
  isEmpty,
  contains,
  startsWith,
  endsWith,
  hasPrefix,
  hasSuffix,
  reverse,
  slice,
  repeat,
  join,
  count,
  replace,
  partition,
  rpartition,
  cut,
  removePrefix,
  removeSuffix,
  stripPrefix,
  stripSuffix,
  trimPrefix,
  trimSuffix,
  take,
  drop,
};
