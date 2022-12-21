function validCard(num) {
  let arr = num.toString().split("");
  const holder = [];
  // console.log(arr)
  // console.log(typeof arr[0])
  for (let i = 0; i < arr.length; i++) {
    parseInt(i, 10);
    // console.log(typeof i )
  }
  // console.log(arr)
  // console.log(typeof arr[0])
  // console.log(arr)
  // console.log(holder)
  for (let i = 0; i < arr.length-1; i += 2) {
    if(arr[i] * 2 > 9) {
        holder.push(parseInt(arr[i] * 2 - 9))
        // console.log(holder)
    } else {
      holder.push(parseInt(arr[i] * 2))
    }
  }
  for(let i = 1; i <= arr.length-1; i+=2) {
    holder.push(parseInt(arr[i]))
    // console.log(typeof i)
  }
  // console.log(holder)
  return checkValid(holder)


}


function checkValid(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  console.log(sum)
  console.log(sum % 10 === 0)
}

validCard(1234567890123456); //should be false
validCard(4408041234567893); //should be true
validCard(38520000023237); //should be true
validCard(4222222222222); //should be true
