function RollCall(names) {
  var str =  "";
  for (i=0; i < names.length; i++) {
    str = (i === names.length - 1) ? `${str}${i+1}. ${names[i]}` : `${str}${i+1}. ${names[i]} `
  }
  return str
}

function findTheCheese(list) {
  for (i=0; i < list.length; i++) {
    (list[i] === "cheddar" || list[i] === "gouda" || list[i] === "camembert") ? list[i] : undefined
  }
  return `no cheese!`
}