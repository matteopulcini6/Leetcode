function subarraySum(nums: number[], k: number): number {
  const hashMap: {[key: number]: number} = {0:1}
  let prefixSum = 0;
  let result = 0;
  
  for(let i = 0; i < nums.length; i++){
      prefixSum += nums[i];

      if(hashMap[prefixSum - k] !== undefined){
          result += hashMap[prefixSum - k];
      }

      hashMap[prefixSum] = (hashMap[prefixSum] || 0) + 1;
  }

  return result;
};