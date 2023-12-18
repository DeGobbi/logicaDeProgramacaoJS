function validBraces(braces) {
    while(braces.includes('()') || braces.includes('[]') || braces.includes('{}')) {
        braces = braces.replace('()', '').replace('[]', '').replace('{}', '')
    }
    return braces.length === 0
}

console.log(validBraces("{}({})[]")); // true
console.log(validBraces("[(])")); // false
console.log(validBraces(")(}{][")) // false
console.log(validBraces("({})[({})]")) //true