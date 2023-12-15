function order(words) {
    if(words === '') return ''
      let ol = []
      words.split(' ').map((value) => {
          ol[value.match(/\d+/)[0] - 1] = value
      })
      return ol.join(' ')
}

console.log(order('be2m git6Hub a4o me5u Sej1a vindo3'))

// coded by: De Gobbi (andre10degobi)