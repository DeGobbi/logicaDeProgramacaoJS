function findOdd(A) {
    let oddNumber = 0
    A = A.map((value, index) => {
        let accumulator = 0
        for(let x = 0; x < A.length; x++) {
            if(value === A[x]) accumulator++
        }
        return accumulator % 2 === 1 || accumulator === 1 
            ? oddNumber = A[index] 
            : A[index]
    })
    return oddNumber
}

console.log(findOdd([2, 2, 3, 3, 5, 5, 5, 7, 7, 7, 7])) // 5 se repete um número de vezes ímpar

// coded by: De Gobbi (andre10degobi)