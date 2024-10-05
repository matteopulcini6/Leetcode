function twoSum(nums: number[], target: number): number[] {
  let hashMap: {[key:number]: number} = {};
  let res: number[] = [];

  for(let i = 0; i < nums.length; i++){
      let compliment = target - nums[i];

      if(compliment in hashMap){
          res.push(i, hashMap[compliment])
      }

      hashMap[nums[i]] = i;

  }

  return res;

};