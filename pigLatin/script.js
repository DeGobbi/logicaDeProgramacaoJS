function pigIt(str){
    str = str.split(' ')
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(/\W|_/)) str[i]
        else str[i] = `${str[i].substring(1)}${str[i].substring(0, 1)}ay`
    }
    return str.join(' ')
  }

  console.log(pigIt('Pig Latin is cool . ! @')) // igPay atinLay siay oolcay