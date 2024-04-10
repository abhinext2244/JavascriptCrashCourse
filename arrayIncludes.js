function customIncludes(arr, searchElement, fromIndex = 0) {
    if (arr == null) {
        throw new TypeError('Array is null or undefined');
    }

    var O = Object(arr);
    var len = O.length >>> 0;

    if (len === 0) {
        return false;
    }

    var n = fromIndex | 0;

    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    while (k < len) {
        if (O[k] === searchElement) {
            return true;
        }
        k++;
    }

    return false;
}

var array1 = [1, 2, 3];

console.log(customIncludes(array1, 2));  // Output: true
console.log(customIncludes(array1, 4));  // Output: false
