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
