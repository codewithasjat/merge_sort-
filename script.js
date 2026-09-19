let N = 6
for(let i=1 ; i<=N ; i++){
  let str = ""
  for(let j=1 ; j<=N-i ; j++){
    str +=" "
  }
  for(let k=1 ; k<=i ;k++){
    str += k +" "
  }
  console.log(str)

}
for(let i=N-1 ; i>=1 ; i--){
  let str = ""
  for(let j=1 ; j<=N-i ; j++){
    str +=" "
  }
  for(let k=1 ; k<=i ;k++){
    str += k +" "
  }
  console.log(str)

}
