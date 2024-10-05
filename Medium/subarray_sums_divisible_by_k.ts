function subarraysDivByK(nums: number[], k: number): number {
  const hashMap: {[key: number]: number} = {0:1};
  let subarrays = 0;
  let cummulativeSum = 0;
  for(let i = 0; i < nums.length; i++){
      cummulativeSum += nums[i];
      let mod = (((cummulativeSum) % k) + k) % k;

      if(hashMap[mod] !== undefined){
          subarrays += hashMap[mod];
      }

      hashMap[mod] = (hashMap[mod] || 0) + 1;
  }
  
  return subarrays;
  
};