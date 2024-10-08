// O(n) + O(n * Log(n)) === O(n * Log(n))
function twoSum_II(numbers: number[], target: number): number[] {
  let hashMap: {[key: number]: number} = {};
  let res = [];

  // O(n)
  for(let i = 0; i < numbers.length; i++){
      let compliment = target - numbers[i];

      if(compliment in hashMap){
          res.push(hashMap[compliment]+1, i+1);
      }

      hashMap[numbers[i]] = i;
  }

  return res; 
};