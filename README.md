# safe-strings

A collection of unicode-safe string functions inspired by other programming languages.

## Installation

Install using NPM:

```shell
$ npm i safe-strings
```

## Usage

Import specific functions:

```js
const { center, capwords } = require('safe-strings');

center('my string', 20);
capwords('this is a test');
```

Import the entire library:

```js
const stringUtil = require('safe-strings');

stringUtil.center('my string', 20);
stringUtil.capwords('this is a test');
```

## Cross-language helpers

Includes aliases and helpers inspired by Go/Python/Rust naming:
`len`, `trim`, `trimStart`, `trimEnd`, `hasPrefix`, `hasSuffix`, `title`,
`capitalize`, `contains`, `startsWith`, `endsWith`, `reverse`, `slice`,
`repeat`, `join`, `count`, `replace`, `partition`, `rpartition`, `cut`,
`removePrefix`, `removeSuffix`, `stripPrefix`, `stripSuffix`, `trimPrefix`,
`trimSuffix`, `take`, `drop`, and `isEmpty`.

## Functions

<dl>
<dt><a href="#length">length(string)</a> ⇒ <code>number</code></dt>
<dd><p>Get string length with unicode support</p>
</dd>
<dt><a href="#split">split(string, [separator])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Return an array of strings split by the separator.</p>
</dd>
<dt><a href="#ljust">ljust(string, width, [fillChar])</a> ⇒ <code>string</code></dt>
<dd><p>Left-justify a string in a field of given width.</p>
</dd>
<dt><a href="#rjust">rjust(string, width, [fillChar])</a> ⇒ <code>string</code></dt>
<dd><p>Right-justify a string in a field of given width.</p>
</dd>
<dt><a href="#center">center(string, width, [fillChar])</a> ⇒ <code>string</code></dt>
<dd><p>Center a string in a field of given width.</p>
</dd>
<dt><a href="#strip">strip(string, [trimChar])</a> ⇒ <code>string</code></dt>
<dd><p>Return a copy of the string with leading and trailing characters removed.</p>
</dd>
<dt><a href="#lstrip">lstrip(string, [trimChar])</a> ⇒ <code>string</code></dt>
<dd><p>Return a copy of the string with leading characters removed.</p>
</dd>
<dt><a href="#rstrip">rstrip(string, [trimChar])</a> ⇒ <code>string</code></dt>
<dd><p>Return a copy of the string with trailing characters removed.</p>
</dd>
<dt><a href="#swapcase">swapcase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Return a copy of the string with lower case letters converted to upper case and vice versa.</p>
</dd>
<dt><a href="#capwords">capwords(string, [separator])</a> ⇒ <code>string</code></dt>
<dd><p>Return a copy of the string with the first char of each separated word converted to upper case.</p>
</dd>
<dt><a href="#ucfirst">ucfirst(string)</a> ⇒ <code>string</code></dt>
<dd><p>Return a copy of the string with the first char converted to upper case.</p>
</dd>
<dt><a href="#lcfirst">lcfirst(string)</a> ⇒ <code>string</code></dt>
<dd><p>Return a copy of the string with the first char converted to lower case.</p>
</dd>
<dt><a href="#nl2br">nl2br(string, [breakElement])</a> ⇒ <code>string</code></dt>
<dd><p>Return a copy of the string with HTML line breaks (<br>) inserted before all newlines.</p>
</dd>
<dt><a href="#expandtabs">expandtabs(string, [tabsize])</a> ⇒ <code>string</code></dt>
<dd><p>Return a copy of the string with tab chars (\t) replaced by spaces.</p>
</dd>
<dt><a href="#isEmpty">isEmpty(string)</a> ⇒ <code>boolean</code></dt>
<dd><p>Return true if the string is empty.</p>
</dd>
<dt><a href="#contains">contains(string, substring)</a> ⇒ <code>boolean</code></dt>
<dd><p>Return true if string contains the given substring.</p>
</dd>
<dt><a href="#startsWith">startsWith(string, prefix)</a> ⇒ <code>boolean</code></dt>
<dd><p>Return true if string starts with the given prefix.</p>
</dd>
<dt><a href="#endsWith">endsWith(string, suffix)</a> ⇒ <code>boolean</code></dt>
<dd><p>Return true if string ends with the given suffix.</p>
</dd>
<dt><a href="#reverse">reverse(string)</a> ⇒ <code>string</code></dt>
<dd><p>Return a new string with chars in reverse order.</p>
</dd>
<dt><a href="#slice">slice(string, [start], [end])</a> ⇒ <code>string</code></dt>
<dd><p>Return a unicode-safe string slice.</p>
</dd>
<dt><a href="#repeat">repeat(string, count)</a> ⇒ <code>string</code></dt>
<dd><p>Return a string repeated count times.</p>
</dd>
<dt><a href="#join">join(strings, [separator])</a> ⇒ <code>string</code></dt>
<dd><p>Join an array of strings with a separator.</p>
</dd>
<dt><a href="#count">count(string, substring)</a> ⇒ <code>number</code></dt>
<dd><p>Count non-overlapping substring occurrences.</p>
</dd>
<dt><a href="#replace">replace(string, oldSubstring, newSubstring, [replaceCount])</a> ⇒ <code>string</code></dt>
<dd><p>Replace at most count occurrences of a substring.</p>
</dd>
<dt><a href="#partition">partition(string, separator)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Partition the string at the first occurrence of separator.</p>
</dd>
<dt><a href="#rpartition">rpartition(string, separator)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Partition the string at the last occurrence of separator.</p>
</dd>
<dt><a href="#cut">cut(string, separator)</a> ⇒ <code>Array.&lt;(string|boolean)&gt;</code></dt>
<dd><p>Cut the string around the first occurrence of separator.</p>
</dd>
<dt><a href="#removePrefix">removePrefix(string, prefix)</a> ⇒ <code>string</code></dt>
<dd><p>Remove a leading prefix from the string if present.</p>
</dd>
<dt><a href="#removeSuffix">removeSuffix(string, suffix)</a> ⇒ <code>string</code></dt>
<dd><p>Remove a trailing suffix from the string if present.</p>
</dd>
<dt><a href="#take">take(string, count)</a> ⇒ <code>string</code></dt>
<dd><p>Return the first count unicode characters.</p>
</dd>
<dt><a href="#drop">drop(string, count)</a> ⇒ <code>string</code></dt>
<dd><p>Drop the first count unicode characters.</p>
</dd>
</dl>

<a name="length"></a>

## length(string) ⇒ <code>number</code>
Get string length with unicode support

**Kind**: global function  
**Returns**: <code>number</code> - The length of the string.  

| Param | Description |
| --- | --- |
| string | The input string. |

<a name="split"></a>

## split(string, [separator]) ⇒ <code>Array.&lt;string&gt;</code>
Return an array of strings split by the separator.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - An array of split strings.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| [separator] | <code>string</code> | <code>&quot;&quot;</code> | The separator char. |

<a name="ljust"></a>

## ljust(string, width, [fillChar]) ⇒ <code>string</code>
Left-justify a string in a field of given width.

**Kind**: global function  
**Returns**: <code>string</code> - The padded string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| width | <code>number</code> |  | The length of the resulting string once. |
| [fillChar] | <code>string</code> | <code>&quot; &quot;</code> | The character used to pad the string. |

<a name="rjust"></a>

## rjust(string, width, [fillChar]) ⇒ <code>string</code>
Right-justify a string in a field of given width.

**Kind**: global function  
**Returns**: <code>string</code> - The padded string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| width | <code>number</code> |  | The length of the resulting string once. |
| [fillChar] | <code>string</code> | <code>&quot; &quot;</code> | The character used to pad the string. |

<a name="center"></a>

## center(string, width, [fillChar]) ⇒ <code>string</code>
Center a string in a field of given width.

**Kind**: global function  
**Returns**: <code>string</code> - The padded string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| width | <code>number</code> |  | The length of the resulting string once. |
| [fillChar] | <code>string</code> | <code>&quot; &quot;</code> | The character used to pad the string. |

<a name="strip"></a>

## strip(string, [trimChar]) ⇒ <code>string</code>
Return a copy of the string with leading and trailing characters removed.

**Kind**: global function  
**Returns**: <code>string</code> - The string with characters removed.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| [trimChar] | <code>string</code> | <code>&quot; &quot;</code> | The character to be removed. |

<a name="lstrip"></a>

## lstrip(string, [trimChar]) ⇒ <code>string</code>
Return a copy of the string with leading characters removed.

**Kind**: global function  
**Returns**: <code>string</code> - The string with characters removed.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| [trimChar] | <code>string</code> | <code>&quot; &quot;</code> | The character to be removed. |

<a name="rstrip"></a>

## rstrip(string, [trimChar]) ⇒ <code>string</code>
Return a copy of the string with trailing characters removed.

**Kind**: global function  
**Returns**: <code>string</code> - The string with characters removed.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| [trimChar] | <code>string</code> | <code>&quot; &quot;</code> | The character to be removed. |

<a name="swapcase"></a>

## swapcase(string) ⇒ <code>string</code>
Return a copy of the string with lower case letters converted to upper case and vice versa.

**Kind**: global function  
**Returns**: <code>string</code> - The swapped string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |

<a name="capwords"></a>

## capwords(string, [separator]) ⇒ <code>string</code>
Return a copy of the string with the first char of each separated word converted to upper case.

**Kind**: global function  
**Returns**: <code>string</code> - The converted string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| [separator] | <code>string</code> | <code>&quot; &quot;</code> | The separator char. |

<a name="ucfirst"></a>

## ucfirst(string) ⇒ <code>string</code>
Return a copy of the string with the first char converted to upper case.

**Kind**: global function  
**Returns**: <code>string</code> - The converted string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |

<a name="lcfirst"></a>

## lcfirst(string) ⇒ <code>string</code>
Return a copy of the string with the first char converted to lower case.

**Kind**: global function  
**Returns**: <code>string</code> - The converted string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |

<a name="nl2br"></a>

## nl2br(string, [breakElement]) ⇒ <code>string</code>
Return a copy of the string with HTML line breaks (<br>) inserted before all newlines.

**Kind**: global function  
**Returns**: <code>string</code> - The converted string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| [breakElement] | <code>string</code> | <code>&quot;&lt;br&gt;&quot;</code> | The HTML line break string. |

<a name="expandtabs"></a>

## expandtabs(string, [tabsize]) ⇒ <code>string</code>
Return a copy of the string with tab chars (\t) replaced by spaces.

**Kind**: global function  
**Returns**: <code>string</code> - The swapped string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| [tabsize] | <code>number</code> | <code>8</code> | The input string. |

<a name="isEmpty"></a>

## isEmpty(string) ⇒ <code>boolean</code>
Return true if the string is empty.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string is empty.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |

<a name="contains"></a>

## contains(string, substring) ⇒ <code>boolean</code>
Return true if string contains the given substring.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if substring is found.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |
| substring | <code>string</code> | The substring to search for. |

<a name="startsWith"></a>

## startsWith(string, prefix) ⇒ <code>boolean</code>
Return true if string starts with the given prefix.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if string starts with prefix.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |
| prefix | <code>string</code> | The prefix to check. |

<a name="endsWith"></a>

## endsWith(string, suffix) ⇒ <code>boolean</code>
Return true if string ends with the given suffix.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if string ends with suffix.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |
| suffix | <code>string</code> | The suffix to check. |

<a name="reverse"></a>

## reverse(string) ⇒ <code>string</code>
Return a new string with chars in reverse order.

**Kind**: global function  
**Returns**: <code>string</code> - The reversed string.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |

<a name="slice"></a>

## slice(string, [start], [end]) ⇒ <code>string</code>
Return a unicode-safe string slice.

**Kind**: global function  
**Returns**: <code>string</code> - The sliced string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| [start] | <code>number</code> | <code>0</code> | The start index. |
| [end] | <code>number</code> |  | The end index. |

<a name="repeat"></a>

## repeat(string, count) ⇒ <code>string</code>
Return a string repeated count times.

**Kind**: global function  
**Returns**: <code>string</code> - The repeated string.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |
| count | <code>number</code> | Number of repetitions. |

<a name="join"></a>

## join(strings, [separator]) ⇒ <code>string</code>
Join an array of strings with a separator.

**Kind**: global function  
**Returns**: <code>string</code> - The joined string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| strings | <code>Array.&lt;string&gt;</code> |  | Strings to join. |
| [separator] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | Separator string. |

<a name="count"></a>

## count(string, substring) ⇒ <code>number</code>
Count non-overlapping substring occurrences.

**Kind**: global function  
**Returns**: <code>number</code> - Number of occurrences.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |
| substring | <code>string</code> | The substring to count. |

<a name="replace"></a>

## replace(string, oldSubstring, newSubstring, [replaceCount]) ⇒ <code>string</code>
Replace at most count occurrences of a substring.

**Kind**: global function  
**Returns**: <code>string</code> - The replaced string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | The input string. |
| oldSubstring | <code>string</code> |  | Substring to replace. |
| newSubstring | <code>string</code> |  | Replacement substring. |
| [replaceCount] | <code>number</code> | <code>-1</code> | Max replacements, -1 for all. |

<a name="partition"></a>

## partition(string, separator) ⇒ <code>Array.&lt;string&gt;</code>
Partition the string at the first occurrence of separator.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - [before, separator, after]  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |
| separator | <code>string</code> | The separator to search for. |

<a name="rpartition"></a>

## rpartition(string, separator) ⇒ <code>Array.&lt;string&gt;</code>
Partition the string at the last occurrence of separator.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - [before, separator, after]  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |
| separator | <code>string</code> | The separator to search for. |

<a name="cut"></a>

## cut(string, separator) ⇒ <code>Array.&lt;(string\|boolean)&gt;</code>
Cut the string around the first occurrence of separator.

**Kind**: global function  
**Returns**: <code>Array.&lt;(string\|boolean)&gt;</code> - [before, after, found]  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |
| separator | <code>string</code> | The separator to search for. |

<a name="removePrefix"></a>

## removePrefix(string, prefix) ⇒ <code>string</code>
Remove a leading prefix from the string if present.

**Kind**: global function  
**Returns**: <code>string</code> - The string without prefix.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |
| prefix | <code>string</code> | The prefix to remove. |

<a name="removeSuffix"></a>

## removeSuffix(string, suffix) ⇒ <code>string</code>
Remove a trailing suffix from the string if present.

**Kind**: global function  
**Returns**: <code>string</code> - The string without suffix.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |
| suffix | <code>string</code> | The suffix to remove. |

<a name="take"></a>

## take(string, count) ⇒ <code>string</code>
Return the first count unicode characters.

**Kind**: global function  
**Returns**: <code>string</code> - The resulting string.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |
| count | <code>number</code> | Number of chars to keep. |

<a name="drop"></a>

## drop(string, count) ⇒ <code>string</code>
Drop the first count unicode characters.

**Kind**: global function  
**Returns**: <code>string</code> - The resulting string.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string. |
| count | <code>number</code> | Number of chars to skip. |
