function compareTriplets(a, b) {
  // Write your code here
  let result = [0, 0]
  if(a.length != 3 && b.length != 3) return;
  for (let i = 0 ; i < 3; i++){
    if(a[i] > b[i]){
      result[0] += 1;
    } else if(a[i] < b[i]){
      result[1] += 1;
    }
  }
  return result;
}
