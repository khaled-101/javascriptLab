var x = [-3,8,7,6,5,-4,3,2,1]
x.sort(function(a,b){
    return a-b;
})
console.log(x)
function longestword(s){
  var arr = s.split(" ")
  var longeststring=""
  for (var i in arr) {
    if (arr[i].length > longeststring.length){
        longeststring= arr[i]
    }
    
  }
  return console.log(longeststring)
}
longestword("Web Development Tutorial")
function primecheck (num){
        if (num <=1){
            return false
        }
        for (var i = 2 ; i <= num/2 ; i++ ){
            if (num % i == 0){
                return false
            }
        }
        return true
}
console.log(primecheck(2))
consolck(4))
console.log(primecheck(13))
function amounttocoins (pound , coins){
    var output= [];
    coins.sort(function(a,b){
        return b-a;
    })
    for (var i of coins){
        while(pound >= i){
            output.push(i)
            pound-=i
        }
            
    }
    return output
}
console.log(amounttocoins(46 ,[25,10,5,2,1])) 

