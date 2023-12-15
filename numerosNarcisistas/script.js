function narcissistic(value) {
    if (typeof value === 'string' || 
        typeof value === 'boolean'|| 
        value <= 0) return false

    return value.toString()
      .split('')
      .map((element, index, array) => element ** array.length)
      .reduce((ac, value) => ac + value) === value
  }

  console.log(narcissistic(371)) //narcisista
  console.log(narcissistic(153)) //narcisista
  console.log(narcissistic(64)) // não é narcisista

// coded by: De Gobbi (andre10degobi)