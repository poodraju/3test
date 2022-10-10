/*function numberSum() {
    var n = 10;
      for(var i = 1; i <= 10; i++){
        n += i;
      }
      console.log("total of n numbers",n)
  }


  numberSum()
*/



//array


/*function smallestElemat(arr){
 let n=arr.length
 let s = arr[0]
  for(let i = 1; i < n; i++){
if( arr[i]<=s){
  s=arr[i];
}
  }
for( i = 1; i < n; i++ ){
  if(s ==Array[i] ){
  console.log(i)
}
}
}
smallestElemat([1,5,5,24,2,4,0,1,541,54,0.1,-4,-3.9,5])*/


//sum of even number in a array

let raju = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22];

const sumEvens = (raju) => {
  let sum = 0;
  for (let i = 0; i < raju.length; i++) {
    if (i % 2 === 0){ 
    sum = sum + raju[i];
    }
  }
  return sum;
}
 
console.log(sumEvens(raju));