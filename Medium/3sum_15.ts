function threeSum(nums: number[]): number[][] {
  // Step 1: Sort the array 
  nums.sort((a,b) => a - b)

  let result: number[][] = [];

  for(let i = 0; i < nums.length - 2; i++){
      if(i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the first element 

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
          let sum = nums[i] + nums[left] + nums[right];

          if(sum === 0){
              result.push([nums[i], nums[left], nums[right]]);

              // Skip duplicates for second and third elements
              while(left < right && nums[left] === nums[left + 1]) left++;
              while(left < right && nums[right] === nums[right - 1]) right--;

              left++;
              right--;
          } else if(sum < 0){
              left++;     // Move the left pointer to the right to increase the sum
          } else {
              right--;    // Move the right pointer to the left to decrease the sum
          }
      }

  }

  return result;
};