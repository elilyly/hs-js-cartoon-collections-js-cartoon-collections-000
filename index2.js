function RollCall(names) {
  var str =  "";
  for (i=0; i < names.length; i++) {
    str = `${str}${i+1}. ${names[i]} `
  }
  return str
}