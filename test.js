const assert = require('assert');
const util = require('./index');

describe('length', () => {
  it('should handle empty strings', () => {
    assert.strictEqual(util.length(''), 0);
  });
  it('should handle standard characters', () => {
    assert.strictEqual(util.length('test!'), 5);
  });
  it('should support unicode chars', () => {
    assert.strictEqual(util.length('🌮🍕'), 2);
  });
});

describe('split', () => {
  it('should handle empty strings', () => {
    assert.strictEqual(util.split('').length, 0);
  });
  it('should handle standard characters', () => {
    const strings = util.split('test');
    assert.strictEqual(strings.length, 4);
    assert.strictEqual(strings[0], 't');
  });
  it('should handle standard characters', () => {
    const strings = util.split('test this', ' ');
    assert.strictEqual(strings.length, 2);
    assert.strictEqual(strings[0], 'test');
  });
  it('should support unicode chars', () => {
    const strings = util.split('🌮🍕');
    assert.strictEqual(strings.length, 2);
    assert.strictEqual(strings[0], '🌮');
  });
  it('should support unicode separator char', () => {
    const strings = util.split('test🍕this', '🍕');
    assert.strictEqual(strings.length, 2);
    assert.strictEqual(strings[0], 'test');
  });
});

describe('ljust', () => {
  it('should handle empty strings', () => {
    assert.strictEqual(util.ljust('', 3), '   ');
  });
  it('should pad the right side of the string with spaces', () => {
    assert.strictEqual(util.ljust('test', 10), 'test      ');
  });
  it('should support unicode chars', () => {
    assert.strictEqual(util.ljust('🌮', 10), '🌮         ');
  });
  it('should pad the right side of the string with a custom char', () => {
    assert.strictEqual(util.ljust('test', 8, '_'), 'test____');
  });
});

describe('rjust', () => {
  it('should handle empty strings', () => {
    assert.strictEqual(util.rjust('', 3), '   ');
  });
  it('should pad the left side of the string with spaces', () => {
    assert.strictEqual(util.rjust('test', 10), '      test');
  });
  it('should support unicode chars', () => {
    assert.strictEqual(util.rjust('🌮', 10), '         🌮');
  });
  it('should pad the left side of the string with a custom char', () => {
    assert.strictEqual(util.rjust('test', 8, '_'), '____test');
  });
});

describe('center', () => {
  it('should handle empty strings', () => {
    assert.strictEqual(util.center('', 3), '   ');
  });
  it('should pad both sides of the string with spaces', () => {
    assert.strictEqual(util.center('test', 10), '   test   ');
  });
  it('should pad the left side with an additional space for uneven padding', () => {
    assert.strictEqual(util.center('test', 9), '   test  ');
  });
  it('should support unicode chars', () => {
    assert.strictEqual(util.center('🌮', 10), '     🌮    ');
  });
  it('should pad both sides of the string with custom chars', () => {
    assert.strictEqual(util.center('test', 10, '_'), '___test___');
  });
  it('should pad the left side with an additional custom char for uneven padding', () => {
    assert.strictEqual(util.center('test', 9, '_'), '___test__');
  });
});

describe('strip', () => {
  it('should handle empty strings', () => {
    assert.strictEqual(util.strip(''), '');
  });
  it('should strip spaces from both sides of the string', () => {
    assert.strictEqual(util.strip(' a b  '), 'a b');
  });
  it('should strip custom char from both sides of the string', () => {
    assert.strictEqual(util.strip('--app-dev-', '-'), 'app-dev');
  });
  it('should not strip chars if char is not found on sides', () => {
    assert.strictEqual(util.strip('  test   ', '-'), '  test   ');
  });
  it('should support preservation of unicode chars', () => {
    assert.strictEqual(util.strip('   🌮  '), '🌮');
  });
  it('should support removal of unicode chars', () => {
    assert.strictEqual(util.strip('🌮test🌮🌮', '🌮'), 'test');
  });
});

describe('lstrip', () => {
  it('should handle empty strings', () => {
    assert.strictEqual(util.lstrip(''), '');
  });
  it('should strip spaces from the left side of the string', () => {
    assert.strictEqual(util.lstrip(' a b  '), 'a b  ');
  });
  it('should strip custom char the left side sides of the string', () => {
    assert.strictEqual(util.lstrip('--app-dev-', '-'), 'app-dev-');
  });
  it('should not strip chars if char is not found on the left side', () => {
    assert.strictEqual(util.lstrip('  test   ', '-'), '  test   ');
  });
  it('should support preservation of unicode chars', () => {
    assert.strictEqual(util.lstrip('   🌮  '), '🌮  ');
  });
  it('should support removal of unicode chars', () => {
    assert.strictEqual(util.lstrip('🌮test🌮🌮', '🌮'), 'test🌮🌮');
  });
});

describe('rstrip', () => {
  it('should handle empty strings', () => {
    assert.strictEqual(util.rstrip(''), '');
  });
  it('should strip spaces from the left side of the string', () => {
    assert.strictEqual(util.rstrip(' a b  '), ' a b');
  });
  it('should strip custom char the left side sides of the string', () => {
    assert.strictEqual(util.rstrip('--app-dev-', '-'), '--app-dev');
  });
  it('should not strip chars if char is not found on the left side', () => {
    assert.strictEqual(util.rstrip('  test   ', '-'), '  test   ');
  });
  it('should support preservation of unicode chars', () => {
    assert.strictEqual(util.rstrip('   🌮  '), '   🌮');
  });
  it('should support removal of unicode chars', () => {
    assert.strictEqual(util.rstrip('🌮test🌮🌮', '🌮'), '🌮test');
  });
});

describe('swapcase', () => {
  it('should handle empty strings', () => {
    assert.strictEqual(util.swapcase(''), '');
  });
  it('should swap lower case letters with upper case', () => {
    assert.strictEqual(util.swapcase('abcABC123!@#'), 'ABCabc123!@#');
  });
  it('should support unicode chars', () => {
    assert.strictEqual(util.swapcase('abc🌮ABC'), 'ABC🌮abc');
  });
});

describe('capwords', () => {
  it('should handle empty strings', () => {
    assert.strictEqual(util.capwords(''), '');
  });
  it('should capitalize the first char in each string separated by spaces', () => {
    assert.strictEqual(util.capwords('this is a TEST'), 'This Is A TEST');
  });
  it('should capitalize the first char in each string separated by spaces', () => {
    assert.strictEqual(util.capwords('this-is-a-TEST', '-'), 'This-Is-A-TEST');
  });
  it('should support unicode char within word', () => {
    assert.strictEqual(util.capwords('test th🌮is taco'), 'Test Th🌮is Taco');
  });
  it('should support unicode char prefixed word', () => {
    assert.strictEqual(util.capwords('test 🌮this taco'), 'Test 🌮this Taco');
  });
  it('should support unicode separator', () => {
    assert.strictEqual(util.capwords('test🌮taco', '🌮'), 'Test🌮Taco');
  });
});

describe('ucfirst', () => {
  it('should handle empty strings', () => {
    assert.strictEqual(util.ucfirst(''), '');
  });
  it('should capitalize the first char in each string separated by spaces', () => {
    assert.strictEqual(util.ucfirst('testing'), 'Testing');
  });
  it('should support unicode char', () => {
    assert.strictEqual(util.ucfirst('🌮taco'), '🌮taco');
  });
});

describe('lcfirst', () => {
  it('should handle empty strings', () => {
    assert.strictEqual(util.lcfirst(''), '');
  });
  it('should capitalize the first char in each string separated by spaces', () => {
    assert.strictEqual(util.lcfirst('TEST'), 'tEST');
  });
  it('should support unicode char', () => {
    assert.strictEqual(util.lcfirst('🌮taco'), '🌮taco');
  });
});

describe('nl2br', () => {
  it('should handle empty strings', () => {
    assert.strictEqual(util.nl2br(''), '');
  });
  it('should capitalize the first char in each string separated by spaces', () => {
    assert.strictEqual(util.nl2br('one\r\nwo\n\rthree\nfour\rfive'), 'one<br>\r\nwo<br>\n\rthree<br>\nfour<br>\rfive');
  });
  it('should capitalize the first char in each string separated by spaces', () => {
    assert.strictEqual(util.nl2br('one\r\nwo\n\rthree', '<br />'), 'one<br />\r\nwo<br />\n\rthree');
  });
  it('should support unicode char', () => {
    assert.strictEqual(util.nl2br('abc\n🌮\r\ntaco'), 'abc<br>\n🌮<br>\r\ntaco');
  });
});

describe('expandtabs', () => {
  it('should handle empty strings', () => {
    assert.strictEqual(util.expandtabs(''), '');
  });
  it('should swap tab chars with 8 spaces', () => {
    assert.strictEqual(util.expandtabs('this\ttest'), 'this        test');
  });
  it('should swap tab chars with 2 spaces', () => {
    assert.strictEqual(util.expandtabs('this\ttest', 2), 'this  test');
  });
  it('should support unicode char', () => {
    assert.strictEqual(util.expandtabs('\t🌮\t'), '        🌮        ');
  });
});

describe('isEmpty', () => {
  it('should return true for empty strings', () => {
    assert.strictEqual(util.isEmpty(''), true);
  });
  it('should return false for non-empty strings', () => {
    assert.strictEqual(util.isEmpty('🌮'), false);
  });
});

describe('contains', () => {
  it('should detect contained substrings', () => {
    assert.strictEqual(util.contains('safe-strings', 'safe'), true);
  });
  it('should support unicode substrings', () => {
    assert.strictEqual(util.contains('🌮🍕', '🍕'), true);
  });
});

describe('startsWith', () => {
  it('should match prefixes', () => {
    assert.strictEqual(util.startsWith('testing', 'tes'), true);
  });
  it('should support unicode prefixes', () => {
    assert.strictEqual(util.startsWith('🌮taco', '🌮'), true);
  });
});

describe('endsWith', () => {
  it('should match suffixes', () => {
    assert.strictEqual(util.endsWith('testing', 'ing'), true);
  });
  it('should support unicode suffixes', () => {
    assert.strictEqual(util.endsWith('taco🌮', '🌮'), true);
  });
});

describe('reverse', () => {
  it('should reverse ascii text', () => {
    assert.strictEqual(util.reverse('abc'), 'cba');
  });
  it('should reverse unicode text', () => {
    assert.strictEqual(util.reverse('a🌮b'), 'b🌮a');
  });
});

describe('slice', () => {
  it('should slice unicode-safe indexes', () => {
    assert.strictEqual(util.slice('a🌮bc', 1, 3), '🌮b');
  });
  it('should support negative indexes', () => {
    assert.strictEqual(util.slice('a🌮bc', -2), 'bc');
  });
});

describe('repeat', () => {
  it('should repeat strings', () => {
    assert.strictEqual(util.repeat('ab', 3), 'ababab');
  });
});

describe('join', () => {
  it('should join strings with separators', () => {
    assert.strictEqual(util.join(['a', 'b', 'c'], '-'), 'a-b-c');
  });
  it('should support unicode strings', () => {
    assert.strictEqual(util.join(['🌮', '🍕'], ''), '🌮🍕');
  });
});

describe('count', () => {
  it('should count substring occurrences', () => {
    assert.strictEqual(util.count('banana', 'an'), 2);
  });
  it('should support unicode substring occurrences', () => {
    assert.strictEqual(util.count('🌮a🌮b🌮', '🌮'), 3);
  });
  it('should match python empty substring behavior', () => {
    assert.strictEqual(util.count('abc', ''), 4);
  });
});

describe('replace', () => {
  it('should replace all occurrences by default', () => {
    assert.strictEqual(util.replace('a-b-c', '-', '_'), 'a_b_c');
  });
  it('should replace only requested occurrences', () => {
    assert.strictEqual(util.replace('a-b-c', '-', '_', 1), 'a_b-c');
  });
  it('should support unicode replacement', () => {
    assert.strictEqual(util.replace('🌮a🌮', '🌮', '🍕'), '🍕a🍕');
  });
});

describe('partition', () => {
  it('should split around first separator occurrence', () => {
    assert.deepStrictEqual(util.partition('path/to/file', '/'), ['path', '/', 'to/file']);
  });
  it('should return python-style result when separator is not present', () => {
    assert.deepStrictEqual(util.partition('taco', '/'), ['taco', '', '']);
  });
  it('should support unicode separators', () => {
    assert.deepStrictEqual(util.partition('🌮-🍕-🥗', '-'), ['🌮', '-', '🍕-🥗']);
  });
  it('should throw for empty separators', () => {
    assert.throws(() => util.partition('test', ''), /separator must not be empty/);
  });
});

describe('rpartition', () => {
  it('should split around last separator occurrence', () => {
    assert.deepStrictEqual(util.rpartition('path/to/file', '/'), ['path/to', '/', 'file']);
  });
  it('should return python-style result when separator is not present', () => {
    assert.deepStrictEqual(util.rpartition('taco', '/'), ['', '', 'taco']);
  });
  it('should support unicode separators', () => {
    assert.deepStrictEqual(util.rpartition('🌮-🍕-🥗', '-'), ['🌮-🍕', '-', '🥗']);
  });
  it('should throw for empty separators', () => {
    assert.throws(() => util.rpartition('test', ''), /separator must not be empty/);
  });
});

describe('cut', () => {
  it('should split into before and after when separator exists', () => {
    assert.deepStrictEqual(util.cut('a=b=c', '='), ['a', 'b=c', true]);
  });
  it('should return found false when separator is missing', () => {
    assert.deepStrictEqual(util.cut('abc', '='), ['abc', '', false]);
  });
  it('should support unicode separators', () => {
    assert.deepStrictEqual(util.cut('🌮🍕🥗', '🍕'), ['🌮', '🥗', true]);
  });
});

describe('removePrefix', () => {
  it('should remove prefix when present', () => {
    assert.strictEqual(util.removePrefix('prefix-value', 'prefix-'), 'value');
  });
  it('should return unchanged string when prefix is missing', () => {
    assert.strictEqual(util.removePrefix('value', 'prefix-'), 'value');
  });
  it('should support unicode prefixes', () => {
    assert.strictEqual(util.removePrefix('🌮taco', '🌮'), 'taco');
  });
});

describe('removeSuffix', () => {
  it('should remove suffix when present', () => {
    assert.strictEqual(util.removeSuffix('value-suffix', '-suffix'), 'value');
  });
  it('should return unchanged string when suffix is missing', () => {
    assert.strictEqual(util.removeSuffix('value', '-suffix'), 'value');
  });
  it('should support unicode suffixes', () => {
    assert.strictEqual(util.removeSuffix('taco🌮', '🌮'), 'taco');
  });
});

describe('take', () => {
  it('should take unicode-safe character counts', () => {
    assert.strictEqual(util.take('a🌮bc', 2), 'a🌮');
  });
  it('should return empty string for non-positive counts', () => {
    assert.strictEqual(util.take('abc', 0), '');
  });
});

describe('drop', () => {
  it('should drop unicode-safe character counts', () => {
    assert.strictEqual(util.drop('a🌮bc', 2), 'bc');
  });
  it('should return unchanged string for non-positive counts', () => {
    assert.strictEqual(util.drop('abc', 0), 'abc');
  });
});

describe('aliases', () => {
  it('len should alias length', () => {
    assert.strictEqual(util.len('🌮🍕'), util.length('🌮🍕'));
  });
  it('trim should alias strip', () => {
    assert.strictEqual(util.trim('  test  '), util.strip('  test  '));
  });
  it('trimStart should alias lstrip', () => {
    assert.strictEqual(util.trimStart('  test'), util.lstrip('  test'));
  });
  it('trimEnd should alias rstrip', () => {
    assert.strictEqual(util.trimEnd('test  '), util.rstrip('test  '));
  });
  it('hasPrefix should alias startsWith', () => {
    assert.strictEqual(util.hasPrefix('testing', 'tes'), util.startsWith('testing', 'tes'));
  });
  it('hasSuffix should alias endsWith', () => {
    assert.strictEqual(util.hasSuffix('testing', 'ing'), util.endsWith('testing', 'ing'));
  });
  it('title should alias capwords', () => {
    assert.strictEqual(util.title('this is test'), util.capwords('this is test'));
  });
  it('capitalize should alias ucfirst', () => {
    assert.strictEqual(util.capitalize('test'), util.ucfirst('test'));
  });
  it('stripPrefix should alias removePrefix', () => {
    assert.strictEqual(util.stripPrefix('prefix-value', 'prefix-'), util.removePrefix('prefix-value', 'prefix-'));
  });
  it('stripSuffix should alias removeSuffix', () => {
    assert.strictEqual(util.stripSuffix('value-suffix', '-suffix'), util.removeSuffix('value-suffix', '-suffix'));
  });
  it('trimPrefix should alias removePrefix', () => {
    assert.strictEqual(util.trimPrefix('prefix-value', 'prefix-'), util.removePrefix('prefix-value', 'prefix-'));
  });
  it('trimSuffix should alias removeSuffix', () => {
    assert.strictEqual(util.trimSuffix('value-suffix', '-suffix'), util.removeSuffix('value-suffix', '-suffix'));
  });
});
