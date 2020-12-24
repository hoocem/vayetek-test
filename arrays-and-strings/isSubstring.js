/**
 * Checks if s2 is a rotation of s1
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function isSubstring(s1, s2) {
  // Check first if the two strings are the same
  if (s1 === s2) {
    return true;
  }

  // check if they have the same length, if they don't they can't be a rotation
  if (s1.length !== s2.length) {
    return false;
  }

  // convert the two strings to lower case (I assume the rotation is case-insensitive)
  // then sort them alphabetically, if they result to the same string they are a rotation
  s1 = s1.toLowerCase().split('').sort().join('');
  s2 = s2.toLowerCase().split('').sort().join('');

  return s1 === s2;
}

// tests
console.log(isSubstring("waterbottle", "waterbottle"));
console.log(isSubstring("ABCD", "dbCa"));
console.log(isSubstring("foo", "bar"));
