# safe-strings

A collection of unicode-safe string functions inspired by other programming languages.

## Installation

Install using NPM:

```shell
$ npm i string-util
```

## Usage

Import specific functions:

```js
const { center, capwords } = require('string-util');

center('my string', 20);
capwords('this is a test');
```

Import the entire library:

```js
const stringUtil = require('string-util');

stringUtil.center('my string', 20);
stringUtil.capwords('this is a test');
```

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

