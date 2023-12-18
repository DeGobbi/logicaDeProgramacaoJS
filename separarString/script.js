function solution(str) {
    let string = []
    str = str.split('')
    for (let x = 0; x < str.length; x += 2) {
        string.push(`${str[x]}${(str[x+1] || '')}`)
    }
    if(str.length % 2 !== 0) string[string.length - 1] += '_'
    return string
}

console.log(solution("abc")) // [ 'ab', 'c_' ]
console.log(solution("abcd")) // [ 'ab', 'cd' ]
console.log(solution("abcde")) // [ 'ab', 'cd', 'e_' ]
console.log(solution("abcdef")) // [ 'ab', 'cd', 'ef' ]
console.log(solution("abcdefg")) // [ 'ab', 'cd', 'ef', 'g_' ]